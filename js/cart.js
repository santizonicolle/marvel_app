import "./modules/onload.js";
import STORAGE from "./modules/store.js";
import DOM from "./modules/dom.js";

// Crear la funcion main para consumir el recurso...
async function main() {
  const cart = STORAGE.getArray("cart");
  let total = 0.0;
  DOM.find("#amount").textContent = cart.length;
  //PROCESAR INFORMACION

  const container = DOM.find("#cart");
  cart.forEach((item) => {
    const template = DOM.find(".card_template");
    const clone = template.cloneNode(true);
    clone.removeAttribute("style"); // removiendo el diplay:none

    // CARGAR IMAGEN
    DOM.find(".image", clone).setAttribute("src", item.image);
    DOM.find(".title", clone).textContent = item.title;
    // SETEAR TITULO
    DOM.find(".price", clone).textContent = "$" + item.sale;
    total += item.sale;
    container.appendChild(clone);
  });

  DOM.find("#subtotal").textContent = "$" + total;
  DOM.find("#btn_total").textContent = "$" + total;
}

main();
