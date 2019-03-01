import { Route } from 'react-router-dom'
import React, { Component } from "react"
import CandyList from './candy/CandyList'
import StoresList from './stores/StoresList'
import EmployeeList from './employee/EmployeeList'


class ApplicationViews extends Component {
    state = {
        candys: [],
        types: [],
        employees: [],
        stores: [],
        typeOfCandys: []
    }

    componentDidUpdate () {
        console.log("componentDidUpdate -- ApplicationViews")
    }

    componentDidMount() {
        console.log("componentDidMount -- ApplicationViews")
        const newState = {}

        fetch("http://localhost:5000/candys")
            .then(r => r.json())
            .then(candys => newState.candys = candys)
            .then(() => fetch("http://localhost:5000/types")
            .then(r => r.json()))
            .then(types => newState.types = types)
            .then(() => fetch("http://localhost:5000/typeOfCandys")
            .then(r => r.json()))
            .then(typeOfCandys => newState.typeOfCandys = typeOfCandys)
            .then(() => fetch("http://localhost:5000/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5000/stores")
            .then(r => r.json()))
            .then(stores => newState.stores = stores)
            .then(() =>{this.setState(newState)})
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoresList stores={this.state.stores} />
                }} />
                <Route path="/candy" render={(props) => {
                    return <CandyList candys={this.state.candys}
                                types={this.state.types}
                                typeOfCandys={this.state.typeOfCandys}
                                />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList
                        employees={this.state.employees}
                        />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews