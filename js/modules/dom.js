const DOM = {
  // permite buscar un elemento dentro de otro (por defecto document)
  find: (query, from = document) => {
    return from.querySelector(query);
  },
  // crea un elemento
  create: (tag) => {
    return document.createElement(tag);
  },
};
export default DOM;
