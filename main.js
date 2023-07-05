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
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}







function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if(selectedRoast === 'All'){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
let roastSelection = document.querySelector('#roast-selection');

roastSelection.addEventListener('input', updateCoffees)






// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

var tbody = document.querySelector('#coffees');
function coffeeDisplay() {
    for (let i = 0; i < coffees.length; i++){
        let coffee = coffees[i];
        renderCoffee(coffee)
    }
}

coffeeDisplay();

let coffeeName = document.getElementById('coffee-name')
coffeeName.addEventListener("input",() => {
    let searchName = coffeeName.value.toLowerCase();
    let filterData = coffees.filter(function (item){
        return item.name.toLowerCase().includes(searchName);
    });
    filterData.forEach(function (item){
        let div = document.createElement("div")
        div.textContent = item.name
    })
})

var submitButton = document.querySelector('#submit');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
