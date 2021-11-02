import dataJSON from '../../DATA.json';

const main = () => {
    const restaurants = JSON.parse(JSON.stringify(dataJSON)).restaurants;

    const restaurantElement = document.querySelector('.restaurant-list');

    restaurants.forEach((restaurant) => {

        restaurantElement.innerHTML += `
        <div class="restaurant-item card">
            <img class="card-image" src="${restaurant.pictureId}"/>
            <div class="card-body">
                <span>Rating <i class="stars fas fa-star fa-fw"></i> ${restaurant.rating}</span>
                <h2 class="card-title">${restaurant.name}</h2>
                <p class="card-description">${restaurant.description}</p>
            </div>
        </div>
        `;

    });
}

export default main;