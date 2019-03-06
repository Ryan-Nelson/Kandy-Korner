import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Chocolate from "./Chocolate.jpg"
import './Candy.css'

class CandyCard extends Component {

    render() {

        const typeStringArray = this.props.typeOfCandys
        .filter(ao => ao.candyId === this.props.candy.id)
        .map(ao =>
            this.props.types.find(
                o => o.id === ao.typeId
            ).name
        )
        

        return (
            <React.Fragment>
                <div key={this.props.candy.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={Chocolate} className="icon--Chocolate" />
                            <div>{this.props.candy.name}</div>
                            <div className="typeList">({typeStringArray.join(", ")})</div>
                    <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/candys/${this.props.candy.id}/edit`);
                                }}
                                >
                                Edit
                            </button>
                            {
                                (this.props.hasOwnProperty("removeCandy"))
                                    ? <button
                                        onClick={() => this.props.removeCandy(this.props.candy.id)}
                                        className="card-link">Delete</button>
                                    : null
                            }
                        </h5>
                    </div>
                    <Link className="nav-link" to={`/candys/${this.props.candy.id}`}>Details</Link>
                </div>

            </React.Fragment>
        )
    }
}

export default CandyCard