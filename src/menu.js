

export default function renderMenu() {
    const container = document.createElement("div");
    const menu = document.createElement("div");
    const headline = document.createElement("h2");
    headline.textContent = "Our Menu";

    const drinksContainer = document.createElement("div");
    const drinks = document.createElement("h5");
    drinks.textContent = "DRINKS";
    const water = document.createElement("p");
    water.textContent = "Mineral Water";
    const waterPrice = document.createElement("p")
    waterPrice.textContent = "$ 2.00";
    const artWater = document.createElement("article");
    const juice = document.createElement("p");
    juice.textContent= "Fresh Fruit Juice";
    const juicePrice = document.createElement("p");
    juicePrice.textContent = "$ 2.00";
    const artJuice = document.createElement("article");
    const wine = document.createElement("p");
    wine.textContent = "Wines";
    const winePrice = document.createElement("p");
    winePrice.textContent = "$ 2.00";
    const artWine = document.createElement("article");
    
    artWater.appendChild(water);
    artWater.appendChild(waterPrice);
    artJuice.appendChild(juice);
    artJuice.appendChild(juicePrice);
    artWine.appendChild(wine);
    artWine.appendChild(winePrice);
    drinksContainer.appendChild(drinks);
    drinksContainer.appendChild(artWater);
    drinksContainer.appendChild(artJuice);
    drinksContainer.appendChild(artWine);

    

    const saladContainer = document.createElement("div")
    const salads = document.createElement("h5");
    salads.textContent = "SALADS";
    const guacamole = document.createElement("p");
    guacamole.textContent = "Guacamole Salad";
    const guacamolePrice = document.createElement("p");
    guacamolePrice.textContent = "$ 10.00";
    const artGuacamole = document.createElement("article");
    const chicken = document.createElement("p");
    chicken.textContent = "Chicken Salad";
    const chickenPrice = document.createElement("p");
    chickenPrice.textContent = "$ 10.00";
    const artChicken  = document.createElement("article");

    const cobb = document.createElement("p");
    cobb.textContent = "Cobb Salad";
    const cobbPrice = document.createElement("p");
    cobbPrice.textContent = "$ 10.00";
    const artCobb  = document.createElement("article");
    
    artGuacamole.appendChild(guacamole);
    artGuacamole.appendChild(guacamolePrice);
    artChicken.appendChild(chicken);
    artChicken.appendChild(chickenPrice);
    artCobb.appendChild(cobb);
    artCobb.appendChild(cobbPrice);
    saladContainer.appendChild(salads);
    saladContainer.appendChild(artGuacamole);
    saladContainer.appendChild(artChicken);
    saladContainer.appendChild(artCobb);


    const mainCourseContainer = document.createElement("div")
    const mainCourse = document.createElement("h5");
    mainCourse.textContent = "Main Courses";
    const grilled = document.createElement("p");
    grilled.textContent = "Grilled Fish And Potatoes";
    const grilledPrice = document.createElement("p");
    grilledPrice.textContent = "$ 20.00";
    const artGrilled = document.createElement("article");
    const rice = document.createElement("p");
    rice.textContent = "Chicken And Rice";
    const ricePrice = document.createElement("p");
    ricePrice.textContent = "$ 20.00";
    const artRice = document.createElement("article");
    const turky = document.createElement("p");
    turky.textContent = "Turky And Ham Pie";
    const turkyPrice = document.createElement("p");
    const artTurky = document.createElement("article");
    turkyPrice.textContent = "$ 20.00";
    
    artGrilled.appendChild(grilled);
    artGrilled.appendChild(grilledPrice);
    artRice.appendChild(rice);
    artRice.appendChild(ricePrice);
    artTurky.appendChild(turky);
    artTurky.appendChild(turkyPrice);
    mainCourseContainer.appendChild(mainCourse);
    mainCourseContainer.appendChild(artGrilled);
    mainCourseContainer.appendChild(artGrilled);
    mainCourseContainer.appendChild(artRice);
    mainCourseContainer.appendChild(artTurky);



    const dessertContainer = document.createElement("div")
    const dessert = document.createElement("h5");
    dessert.textContent = "Dessert";
    const fruit = document.createElement("p");
    fruit.textContent = "Fruit And Cream";
    const fruitPrice = document.createElement("p");
    fruitPrice.textContent = "$ 5.00";
    const artFruit = document.createElement("article");
    const apple = document.createElement("p");
    apple.textContent = "Apple Pie";
    const applePrice = document.createElement("p");
    applePrice.textContent = "$ 5.00";
    const artApple = document.createElement("article");
    const cream = document.createElement("p");
    cream.textContent = "Ice Cream";
    const creamPrice = document.createElement("p");
    creamPrice.textContent = "$ 5.00";
    const artCream = document.createElement("article");
    
    artFruit.appendChild(fruit);
    artFruit.appendChild(fruitPrice);
    artCream.appendChild(cream);
    artCream.appendChild(creamPrice);
    artApple.appendChild(apple);
    artApple.appendChild(applePrice);
    dessertContainer.appendChild(dessert);
    dessertContainer.appendChild(artFruit);
    dessertContainer.appendChild(artApple);
    dessertContainer.appendChild(artCream);


    
    container.appendChild(mainCourseContainer);
    container.appendChild(saladContainer);
    container.appendChild(dessertContainer);
    container.appendChild(drinksContainer);
    container.classList.add("container")

    menu.appendChild(headline);
    menu.appendChild(container)
    menu.classList.add("menu")

    return { menu };

}