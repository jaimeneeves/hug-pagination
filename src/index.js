function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = `Hug Pagination`;

  return element;
}

document.body.appendChild(component());
