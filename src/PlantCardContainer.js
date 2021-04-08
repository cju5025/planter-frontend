import { Component } from 'react';
import './PlantCardContainer.css';
import PlantCard from './PlantCard';

export default class PlantCardContainer extends Component {

    state = {
        plants: []
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/plants")
            .then(response => response.json())
            .then(results => results.data)
            .then(plants => this.setState({ plants: plants }))
    }

    createPlantCard = () => {
        return this.state.plants.map(plant => {
            return <PlantCard imageURL={plant.image_url} alt={plant.slug} key={plant.id} />
        })
    }

    render () {
        return (
            <div id="plant-card-container">
                <h1>Planter</h1>
                { this.createPlantCard() }
            </div>
        )
    }
}