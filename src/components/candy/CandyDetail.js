import React, { Component } from "react"
import "./Candy.css"
import Chocolate from "./Chocolate.jpg"


export default class Candy extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const candy = this.props.candys.find(a =>
            a.id === parseInt(this.props.match.params.candyId))
             || {id:404, name:"404", type: "no candy found"}

        return (
            <section className="candy">
                <div key={candy.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={Chocolate} className="icon--Chocolate" />
                            {candy.name}
                        </h4>
                        <h6 className="card-title">{candy.type}</h6>
                        <button
                            onClick={() =>
                                this.props.removeCandy(candy.id)
                                    .then(() => this.props.history.push("/candys"))
                            }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}