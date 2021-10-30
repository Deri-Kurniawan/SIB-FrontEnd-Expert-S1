import '../components/app-bar';
import '../components/hero-image';
import '../components/restaurant-list';
import '../components/restaurant-item';
import dataJSON from '../../DATA.json';
import $ from 'jquery';

const main = () => {
    const restaurants = JSON.parse(JSON.stringify(dataJSON)).restaurants;
}

export default main;