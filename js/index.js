import "./modules/onload.js";
import CLIENT from "./modules/client.js";
import STORAGE from "./modules/store.js";
import DOM from "./modules/dom.js";

import { comicRender } from "./modules/renders.js";

// Crear la funcion main para consumir el recurso...
async function main() {
  const comics = await CLIENT.sendRequest("comics");
  //PROCESAR INFORMACION

  const container = DOM.find("#card_container");
  comics.forEach((comic) => {
    comic = comicRender([comic]); // sintetizar la informacion del comic

    const template = DOM.find("#card_template");
    const clone = template.cloneNode(true);
    clone.removeAttribute("style"); // removiendo el diplay:none

    // VALIDACION DE COMICS SIN IMAGEN
    if (comic.image.includes("image_not_available")) {
      return;
    }
    // CARGAR IMAGEN
    DOM.find(".comic_img", clone).setAttribute("src", comic.image);
    // SETEAR TITULO
    DOM.find(".comic_name", clone).textContent = comic.title;
    // SETEAR PRECIO ORIGINAL
    DOM.find(".comic_ori_price", clone).textContent =
      comic.price.original;
    // SETEAR PRECIO VENTA
    DOM.find(".comic_price", clone).textContent = comic.price.sale;
    // Acción al botón
    DOM.find(".comic_button", clone).addEventListener("click", () => {
      STORAGE.set("product_id", comic.id);
      window.location.href = "product.html";
    });

    container.appendChild(clone);
  });
}

main();
