import renderHome from "./home";
import renderMenu from "./menu";
import { form } from "./reservation";

const app = document.createElement("div");
app.classList.add("app");

function rendernavBar() {
    //const app = document.createElement("div");
    
    //app.appendChild();
    document.body.appendChild(renderHome().nav);

}

function mainComponent(component) {
    app.appendChild(component);
    document.body.appendChild(app);
}

rendernavBar();
mainComponent(renderHome().main);

const menu = document.querySelector("#Menu");

menu.addEventListener("click", () => {
    const app = document.querySelector(".app");
    app.innerHTML = "";
    mainComponent(renderMenu().menu);
})

const book = document.querySelector("#Reservation");

book.addEventListener("click", () => {
    const app = document.querySelector(".app");
    app.innerHTML = "";
    app.insertAdjacentHTML('afterbegin', form);
})
