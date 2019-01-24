import clear from "./index";


const displayContacts = (() => {
  const render = () => {
    clear.section();
    const section = document.querySelector("section");

    const contacts_tab = document.querySelector(".contacts-tab");
    contacts_tab.classList.add("selected-tab");

    const home_tab = document.querySelector(".home-tab");
    home_tab.classList.remove("selected-tab");

    const menu_tab = document.querySelector(".menu-tab");
    menu_tab.classList.remove("selected-tab");

    const phone = document.createElement("h1");
    phone.innerHTML = "Phone:";
    const phoneNumber = document.createElement("p");
    phoneNumber.innerHTML = "248-789-6009";

    const email = document.createElement("h1");
    email.innerHTML = "Email:";
    const emailAddress = document.createElement("p");
    emailAddress.innerHTML = "pickleBoy@gmail.com";

    const location = document.createElement("h1");
    location.innerHTML = "Location:";
    const streetAddress = document.createElement("p");
    streetAddress.innerHTML = "4444 Pickled Ave, Pickledale NY 67895";

    const phoneDiv = document.createElement("div");
    const emailDiv = document.createElement("div");
    const locationDiv = document.createElement("div");

    phoneDiv.appendChild(phone);
    phoneDiv.appendChild(phoneNumber);
    emailDiv.appendChild(email);
    emailDiv.appendChild(emailAddress);
    locationDiv.appendChild(location);
    locationDiv.appendChild(streetAddress);

    section.appendChild(phoneDiv);
    section.appendChild(emailDiv);
    section.appendChild(locationDiv);
    
  }
  return {
    render
  };
})();

export default displayContacts