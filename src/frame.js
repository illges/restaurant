const displayFrame = (() => {
  const render = () => {
    const content = document.getElementById("content");

    function createHeader() {
      const header = document.createElement("header");
      const h1 = document.createElement("h1");
      const tabs = document.createElement("div");
      const home = document.createElement("div");
      const menu = document.createElement("div");
      const contacts = document.createElement("div");

      h1.innerHTML = "The Silly Pickle";
      tabs.classList.add("tabs");
      home.innerHTML = "Home";
      home.classList.add("home-tab");
      menu.innerHTML = "Menu";
      menu.classList.add("menu-tab");
      contacts.innerHTML = "Contacts";
      contacts.classList.add("contacts-tab");

      tabs.appendChild(home);
      tabs.appendChild(menu);
      tabs.appendChild(contacts);
      header.appendChild(h1);
      header.appendChild(tabs);

      return header;
    }

    function createFooter() {
      const footer = document.createElement("footer");
      footer.innerHTML = "packlers";
      return footer
    }

    function createSection() {
      const section = document.createElement("section");
      return section
    }

    content.appendChild(createHeader());
    content.appendChild(createSection());
    content.appendChild(createFooter());
  }
  return {
    render
  };
})();

export default displayFrame;