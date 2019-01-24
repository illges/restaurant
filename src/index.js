import displayFrame from "./frame";
import displayHome from "./home.js";
import displayMenu from "./menu";
import displayContacts from "./contact";

displayFrame.render();
displayHome.render();

const clear = (() => {
  const section = () => {
    var section = document.querySelector("section");
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    }
  }
  
  return {
    section
  };
})();

const listener = (() => {
  const home = document.querySelector(".home-tab");
  home.addEventListener("click", clear.section);
  home.addEventListener("click", displayHome.render);

  const menu = document.querySelector(".menu-tab");
  menu.addEventListener("click", clear.section);
  menu.addEventListener("click", displayMenu.render);

  const contacts = document.querySelector(".contacts-tab");
  contacts.addEventListener("click", clear.section);
  contacts.addEventListener("click", displayContacts.render);
})();



export default clear


