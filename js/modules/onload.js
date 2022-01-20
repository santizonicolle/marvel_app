import STORAGE from "./store.js";
import DOM from "./dom.js";

const cart = STORAGE.getArray("cart");

DOM.find("#cart_items").textContent = cart.length;
