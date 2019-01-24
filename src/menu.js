import clear from "./index";

const displayMenu = (() => {
  const render = () => {
    clear.section();

    const section = document.querySelector("section");

    const home_tab = document.querySelector(".home-tab");
    home_tab.classList.remove("selected-tab");

    const contacts_tab = document.querySelector(".contacts-tab");
    contacts_tab.classList.remove("selected-tab");

    const menu_tab = document.querySelector(".menu-tab");
    menu_tab.classList.add("selected-tab");

    function createMenu() {
      const menu = document.createElement("div");
      menu.classList.add(".menu")

      const imageOne = document.createElement("img");
      imageOne.setAttribute("src", "../images/food-one.jpg");
      const captionOne =document.createElement('p');
      captionOne.innerHTML = 
        "Veggie Delight - Every vegatable imaginable, on one small plate.";

      const imageTwo = document.createElement("img");
      imageTwo.setAttribute("src", "../images/food-two.jpg");
      const captionTwo =document.createElement('p');
      captionTwo.innerHTML =
        "Fruits, Nuts and halfacado."

      const imageThree = document.createElement("img");
      imageThree.setAttribute("src", "../images/food-three.jpg");
      const captionThree =document.createElement('p');
      captionThree.innerHTML =
        "Very similiar to the previous menu item, but just different enough to matter.";
      
      const itemOne = document.createElement('div');
      const itemTwo = document.createElement('div');
      const itemThree = document.createElement('div');

      itemOne.appendChild(imageOne);
      itemOne.appendChild(captionOne);
      itemTwo.appendChild(imageTwo);
      itemTwo.appendChild(captionTwo);
      itemThree.appendChild(imageThree);
      itemThree.appendChild(captionThree);

      menu.appendChild(itemOne);
      menu.appendChild(itemTwo);
      menu.appendChild(itemThree);

      return menu
    }
    
    section.appendChild(createMenu());
  }
  return {
    render
  };
})();

export default displayMenu