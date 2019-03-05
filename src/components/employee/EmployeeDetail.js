import React, { Component } from "react"
import "../candy/Candy.css"
import Chocolate from "../candy/Chocolate.jpg"


export default class EmployeeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const employee = this.props.employees.find(a =>
            a.id === parseInt(this.props.match.params.employeeId))
             || {id:404, name:"404", type: "Employee not found"}

        return (
            <section className="candy">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={Chocolate} className="icon--Chocolate" />
                            {employee.name}
                        </h4>
                        <button
                            onClick={() =>
                                this.props.fireEmployee(employee.id)
                                    .then(() => this.props.history.push("/employees"))
                            }
                            className="card-link">Terminate Employment</button>
                    </div>
                </div>
            </section>
        )
    }
}