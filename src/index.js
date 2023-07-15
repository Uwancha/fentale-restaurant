import renderHome from "./home";
import renderMenu from "./menu";

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

const home = document.querySelector("#Menu");

home.addEventListener("click", () => {
    const app = document.querySelector(".app");
    app.innerHTML = "";
    mainComponent(renderMenu().menu);
})