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







// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     let selectedRoast = roastSelection.value;
//     let selectedName = coffeeName.value;
//     let filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast && selectedName.includes(coffee.name)) {
//             filteredCoffees.push(coffee);
//         } else if (coffee.roast === selectedRoast || selectedName.includes(coffee.name)){
//             filteredCoffees.push(coffee);
//         }
//         else if(selectedRoast === 'All'){
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }






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
    for (let i = 0; i < coffees.length; i++){
        let coffee = coffees[i];
        renderCoffee(coffee)
    }
}
tbody.innerHTML = renderCoffees(coffees);

coffeeDisplay();

// function updateCoffeesNames(e) {
//     e.preventDefault();
//     let selectedName = coffeeName.value;
//     let filteredCoffees = [];
//     for(let i =0; i < coffees.length; i++) {
//         if (selectedName.includes(coffees[i].name)){
//             filteredCoffees.push(selectedName);
//         } else {
//             filteredCoffees.push(selectedName);
//         }
//     }
// }






// coffeeName.addEventListener("input",() => {
//
//     let searchName = coffeeName.value.toLowerCase();
//     let filterData = coffees.filter(function (item){
//         return item.name.toLowerCase().includes(searchName);
//     });
//     filterData.forEach(function (item){
//         let div = document.createElement("div")
//         div.textContent = item.name
//     })
// })


// function updateCoffees(){
// let filterCoffee = coffees;
// let selectedRoast = roastSelection.value;
// let selectedName = coffeeName.value.toLowerCase();
//     if (selectedRoast !== 'All'){
//         filterCoffee = coffees.filter(function (sele) {
//             return filterCoffee;
//         });
//     }
// }


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






roastSelection.addEventListener('change', updateCoffees)
coffeeName.addEventListener('input', updateCoffees)








// var submitButton = document.querySelector('#submit');


// submitButton.addEventListener('click', updateCoffees);
