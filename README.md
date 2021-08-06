# Hug Pagination

Uma library desenvolvida para ser usada em qualquer Framework FrontEnd.
Não retorna nenhum HTML, mas um objeto que pode ser usado para gerenciar o layout da sua paginação.

## Instalação

```sh
$ npm i hug-pagination
```

## Uso

A função aceita os seguintes parametros:

* `totalItems` (obrigatório) número total de itens para ser paginado
* `currentPage` (opcional) página ativa, o padrão é primeira paǵina, igual a `1`
* `pageSize` (opcional) número de itens por página, o padrão é `10`
* `maxPages` (opcional) número máximo de links para nevagação das páginas a serem exibidos, o padrão é `10`

A saída é um objeto contendo todas as informações necessárias para exibir a página atual de itens e os links para a navegação da página.

### Exemplos

**totalItems: 150**

```js
new HugPaginationJS(150).init();
```

```js
{
	"totalItems": 150,
	"currentPage": 1,
	"pageSize": 10,
	"totalPages": 15,
	"startPage": 1,
	"endPage": 10,
	"startIndex": 0,
	"endIndex": 9,
	"pages": [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10
	]
}
```

**totalItems: 150, currentPage: 7**

```js
new HugPaginationJS(150,{ currentPage: 7 }).init();
```

```js
{
	"totalItems": 150,
	"currentPage": 7,
	"pageSize": 10,
	"totalPages": 15,
	"startPage": 2,
	"endPage": 11,
	"startIndex": 60,
	"endIndex": 69,
	"pages": [
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11
	]
}
```

## Exemplo em ReactJS

Abaixo um exemplo de como você pode usar em um componente ReactJS

```js
// App.js

import './App.css';
import React from 'react';
import Pagination from './components/Pagination';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ data: pageOfItems });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="card mb-5">
          <div className="card-body p-4">
            <h2 className="mb-5">ReactJS Paginate</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nome</th>
                  <th>Sobrenome</th>
                  <th>Email</th>
                  <th>Idade</th>
                  <th>Cidade</th>
                </tr>
              </thead>
              <tbody>
              { this.state.data.map((item, index) =>
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                </tr>
              )} 
              </tbody>
            </table>
            <Pagination items={this.state.data} onChangePage={this.onChangePage} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

```

```js

// ./components/Pagination.js

import React from 'react';
import PropTypes from 'prop-types';
import HugPaginationJS from 'hug-pagination'
import { data } from '../data'

const propTypes = {
  pageSize: PropTypes.number,
  maxPages: PropTypes.number,
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
}

const defaultProps = {
  pageSize: 10,
  maxPages: 10
}

class Pagination extends React.Component {

  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }
  
  componentWillMount() {
    this.setPage(1);
  }
  
  setPage(page) {
    var params = { currentPage: page, pageSize: 7, maxPages: 10 };
    var pager = this.state.pager;
  
    // data.length: total items
    // params: options
    pager = new HugPaginationJS(data.length, params).init();

    // get new page of items from items array
    var pageOfItems = data.slice(pager.startIndex, pager.endIndex + 1);
  
    // update state
    this.setState({ pager: pager });

    this.props.onChangePage(pageOfItems);
  }
  
  render() {
    var paginate = this.state.pager;

    return (
      <div className="mt-5">
        <ul className="pagination">
          <li className={`page-item first ${paginate.currentPage === 1 ? 'disabled' : ''}`}>
            <a href="javascript:void(0);" className="page-link" onClick={() => this.setPage(1)}>Primeira</a>
          </li>
          <li className={`page-item previous ${paginate.currentPage === 1 ? 'disabled' : ''}`}>
            <a href="javascript:void(0);" className="page-link" onClick={() => this.setPage(paginate.currentPage - 1)}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {paginate.pages.map((page, index) =>
            <li key={index} className={`page-item page-number ${paginate.currentPage === page ? 'active' : ''}`}>
              <a href="javascript:void(0);" className="page-link" onClick={() => this.setPage(page)}>{page}</a>
            </li>
          )}
          <li className={`page-item next ${paginate.currentPage === paginate.totalPages ? 'disabled' : ''}`}>
            <a href="javascript:void(0);" className="page-link" onClick={() => this.setPage(paginate.currentPage + 1)}>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
          <li className={`page-item last ${paginate.currentPage === paginate.totalPages ? 'disabled' : ''}`}>
            <a href="javascript:void(0);" className="page-link" onClick={() => this.setPage(paginate.totalPages)}>Última</a>
          </li>
        </ul>
      </div>
    )
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;

```