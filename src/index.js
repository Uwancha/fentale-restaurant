import './style.css'

function mainComponent() {
    const app = document.createElement("div");
    const nav = document.createElement("nav");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    
    
   let items = ['Home', 'Menu', 'Book Table', 'Contact'];

    // Loop through the array and create an li element for each item
    items.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        li.classList.add("li")
        nav.appendChild(li);
    });

    const section = document.createElement("section")
    const restName = document.createElement("h4");
    const description = document.createElement("div");
    const h4 = document.createElement("h3")
    restName.textContent = "Fentale Restaurant";
    description.textContent = "Welcome to Fentale Restaurant, where we serve delicious Ethiopian and international cuisine made with fresh, locally-sourced ingredients. Our warm and inviting atmosphere is perfect for any occasion, and our carefully curated selection of wines and cocktails will enhance your dining experience.";
    h4.textContent = "Come join us and discover the true essence of Ethiopian cuisine.";
    description.classList.add("description")
    section.appendChild(restName);
    section.appendChild(description);
    section.appendChild(h4)
    main.appendChild(section)


    const copyRight = document.createElement("div");
    const gitHubLink = document.createElement("div");
    copyRight.textContent = "copyRight@ 2023";
    gitHubLink.textContent = "GitHub Profile";

    footer.appendChild(copyRight);
    footer.appendChild(gitHubLink)


    app.appendChild(nav);
    app.appendChild(main)
    app.appendChild(footer)
    app.classList.add("app")
    document.body.appendChild(app);




}

mainComponent()