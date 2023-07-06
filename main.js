"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h2 id="name">' + coffee.name + '</h2>';
    html += '<p id="roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}


function renderCoffees(coffees) {
    let html = '';
    for (let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let tbody = document.querySelector('#coffees');

function coffeeDisplay() {
    for (let i = 0; i < coffees.length; i++) {
        let coffee = coffees[i];
        renderCoffee(coffee)
    }
}

tbody.innerHTML = renderCoffees(coffees);

coffeeDisplay();


let roastSelection = document.querySelector('#roast-selection');
let coffeeName = document.getElementById('coffee-name')

function updateCoffees() {
    let selectedRoast = roastSelection.value.toLowerCase();

    let searchInput = coffeeName.value;

    let filteredCoffees = coffees;

    if (selectedRoast !== 'all') {
        filteredCoffees = filteredCoffees.filter(function (coffee) {
            return coffee.roast.toLowerCase() === selectedRoast;
        })
    }
    if (searchInput !== '') {
        filteredCoffees = filteredCoffees.filter(function (coffee) {
            return coffee.name.toLowerCase().includes(searchInput);
        })
    }
    if (filteredCoffees.length === 0) {
        tbody.innerHTML = `
            <h3>No coffees were found</h3>
        `
    } else {
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

updateCoffees();



let addRoast = document.querySelector('#roast-selection-add');
let addName = document.getElementById('coffee-name-add');
let addCoffee = document.getElementById('BTN')
let CoffeeAdder = coffees;

function addUserCoffee() {
    let RoastCoffee = addRoast.value.toLowerCase();
    let NameCoffee = addName.value.toLowerCase();
    let CoffeeID;
    for (let i = 0; i <= CoffeeAdder.length; i++) {
        if (i === CoffeeAdder.length) {
            CoffeeID = CoffeeAdder.length + 1;
        }
    }
    return CoffeeAdder = {id: CoffeeID, name: NameCoffee, roast: RoastCoffee};
}

addRoast.addEventListener('change', addUserCoffee);
addName.addEventListener('input', addUserCoffee);
addCoffee.addEventListener('click', () => {
    coffees.push(CoffeeAdder)
    console.log(coffees)
    renderCoffees(coffees);
    updateCoffees(coffees);
    coffeeDisplay(coffees);
});

roastSelection.addEventListener('change', updateCoffees)
coffeeName.addEventListener('input', updateCoffees)


// var submitButton = document.querySelector('#submit');


// submitButton.addEventListener('click', updateCoffees);
