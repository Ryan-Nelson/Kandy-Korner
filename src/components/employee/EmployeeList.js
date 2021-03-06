import React, { Component } from 'react'
import { Link } from "react-router-dom"
import person from "./person.png"
import "./EmployeeList.css"
import "./Employee.css"
import CandyCard from '../candy/CandyCard'


class EmployeeList extends Component {

    componentDidMount() {
        console.log("componentDidMount -- EmployeeList")
    }

    render() {
        console.log("render -- EmployeeList")
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={person} className="icon--person" />
                                <button onClick={() => { this.props.fireEmployee(employee.id) }}
                                >Fire</button>
                            </h5>
                            <Link className="nav-link" to={`/employees/${employee.id}`}>
                                {employee.name}
                            </Link>
                        </div>

                        <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                        <div className="candys--maker">
                        {
                            this.props.candys
                                .filter(c => c.employeeId === employee.id)
                                .map(c => <CandyCard
                                        key={c.id}
                                        candy={c}
                                        {...this.props} />)
                        }
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList