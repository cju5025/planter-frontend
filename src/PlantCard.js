import { Component } from 'react';

export default class PlantCard extends Component {
    render () {
        return (
            <div id="plant-card">
                <img src={this.props.imageURL} />
            </div>
        )
    }
}