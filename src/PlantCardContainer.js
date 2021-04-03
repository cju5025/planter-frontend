import { Component } from 'react';
import './PlantCardContainer.css';
import PlantCard from './PlantCard';

export default class PlantcardContainer extends Component {

    getPlants = () => {
        fetch("http://localhost:3000/plants")
            .then(response => response.json())
            .then(results => results.data)
            .then(plants => this.createPlantCard(plants))
    }

    createPlantCard = (plants) => {
        return plants.map(plant => {
            return <PlantCard imageURL={plant.image_url} alt={plant.slug} key={plant.id} />
        })
    }

    render () {
        return (
            <div id="plant-card-container">
                { this.getPlants() }
            </div>
        )
    }
}