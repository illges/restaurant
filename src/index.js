import displayFrame from "./frame";
import displayHome from "./home.js";
import displayMenu from "./menu";
import displayContacts from "./contact";

displayFrame.render();
displayHome.render();
// displayMenu.render();
// displayContacts.render();

const listener = (() => {
  const home = document.querySelector(".home-tab");
  home.addEventListener("click", displayHome.render);

  const menu = document.querySelector(".menu-tab");
  menu.addEventListener("click", displayMenu.render);

  const contacts = document.querySelector(".contacts-tab");
  contacts.addEventListener("click", displayContacts.render);
})();

const clear = (() => {
  const clear = () => {
    var section = document.querySelector("section");
    while (section.firstChild()) {
      section.removeChild(section.firstChild);
    }
  }

  const tabs = () => {

  }
  return {
    clear
  };
})();

export default clear


