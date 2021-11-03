import dataJSON from '../../DATA.json';

const main = () => {
    const restaurants = JSON.parse(JSON.stringify(dataJSON)).restaurants;

    const restaurantElement = document.querySelector('.restaurant-list');

    restaurants.forEach((restaurant) => {

        restaurantElement.innerHTML += `
        <div class="restaurant-item card" data-id="${restaurant.id}" tabindex="0">
            <img class="card-image" src="${restaurant.pictureId}" alt="${restaurant.name} Restaurant Image"/>
            <div class="card-body">
                <span>Rating <i class="stars fas fa-star fa-fw"></i> ${restaurant.rating}</span>
                <h2 class="card-title">${restaurant.name}</h2>
                <p class="card-description">${restaurant.description}</p>
            </div>
        </div>
        `;
    });

    const menuToggleElement = document.querySelector('#menu-toggle');

    menuToggleElement.addEventListener('click', () => {
        const menuToggleIconElement = document.querySelector('#menu-toggle .icon');
        document.querySelector('.nav-menu').classList.toggle('menu-open');

        const replaced = menuToggleIconElement.classList.replace('fa-bars', 'fa-times');

        if(!replaced) {
            menuToggleIconElement.classList.replace('fa-times', 'fa-bars');
        }

        
    });
}

export default main;