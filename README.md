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

**totalItems: 150, currentPage: 7, pageSize: 15**

```js
new HugPaginationJS(150,{ currentPage: 7, pageSize: 15 }).init();
```

```js
{
	"totalItems": 150,
	"currentPage": 7,
	"pageSize": 15,
	"totalPages": 10,
	"startPage": 1,
	"endPage": 10,
	"startIndex": 90,
	"endIndex": 104,
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

**totalItems: 150, currentPage: 7, pageSize: 15, maxPages: 5**

```js
new HugPaginationJS(150,{ currentPage: 7, pageSize: 15, maxPages: 5 }).init();
```

```js
{
	"totalItems": 150,
	"currentPage": 7,
	"pageSize": 15,
	"totalPages": 10,
	"startPage": 5,
	"endPage": 9,
	"startIndex": 90,
	"endIndex": 104,
	"pages": [
		5,
		6,
		7,
		8,
		9
	]
}
```