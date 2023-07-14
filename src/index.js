import renderHome from "./home";

const app = document.createElement("div");
app.classList.add("app");

function rendernavBar() {
    //const app = document.createElement("div");
    
    app.appendChild(renderHome().nav);
    document.body.appendChild(app);

}

function mainComponent(component) {
    app.appendChild(component)
    document.body.appendChild(app);
}

rendernavBar();
mainComponent(renderHome().main)