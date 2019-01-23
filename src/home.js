

//Module Pattern
const displayHome = (() => {
  const render = () => {
    const section = document.querySelector("section");
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    }

    const home_tab = document.querySelector(".home-tab");
    home_tab.classList.add("selected-tab");

    const menu_tab = document.querySelector(".menu-tab");
    menu_tab.classList.remove("selected-tab");

    const contacts_tab = document.querySelector(".contacts-tab");
    contacts_tab.classList.remove("selected-tab");
    
    const image = document.createElement("img");
    image.setAttribute("src", "../images/pickle.jpg");

    const article = document.createElement("p");
    article.innerHTML =
      "Here you'll find the best pickle in town. On my honors as a pickleman.";

    section.appendChild(image);
    section.appendChild(article);
  };

  return {
    render
  };
})();

export default displayHome;