import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Chocolate from "./Chocolate.jpg"
import './Candy.css'

class CandyCard extends Component {

    componentDidMount() {
        console.log(`componentDidMount -- Candy ${this.props.candy.id}`)
    }

    render() {
        console.log(`render -- Candy ${this.props.candy.id}`)

        return (
            <React.Fragment>
                <div key={this.props.candy.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={Chocolate} className="icon--Chocolate" />
                            <div>{this.props.candy.name}</div>
                            <div className="typeList">({this.props.types.join(", ")})</div>
                            <button
                                onClick={() => this.props.removoCandy(this.props.candy.id)}
                                className="card-link">Delete</button>
                        </h5>
                    </div>
                    <Link className="nav-link" to={`/candys/${this.props.candy.id}`}>Details</Link>
                </div>

            </React.Fragment>
        )
    }
}

export default CandyCard