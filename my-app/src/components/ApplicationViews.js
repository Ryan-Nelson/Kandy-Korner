import { Route } from 'react-router-dom'
import React, { Component } from "react"
import CandyList from './candy/CandyList'
import StoresList from './stores/StoresList'
import EmployeeList from './employee/EmployeeList'


class ApplicationViews extends Component {
    state = {
        candy: [],
        type: [],
        employees: [],
        stores: [],
        candytype: []
    }

    componentDidUpdate () {
        console.log("componentDidUpdate -- ApplicationViews")
    }

    componentDidMount() {
        console.log("componentDidMount -- ApplicationViews")
        const newState = {}

        fetch("http://localhost:5000/candy")
            .then(r => r.json())
            .then(candy => newState.candy = candy)
            .then(() => fetch("http://localhost:5000/type")
            .then(r => r.json()))
            .then(type => newState.type = type)
            .then(() => fetch("http://localhost:5000/candytype")
            .then(r => r.json()))
            .then(candytype => newState.candytype = candytype)
            .then(() => fetch("http://localhost:5000/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5000/stores")
            .then(r => r.json()))
            .then(stores => newState.stores = stores)
            .then(() => this.setState(newState))
    }

    render() {
        console.log("render -- ApplicationViews")
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoresList stores={this.state.stores} />
                }} />
                <Route path="/candy" render={(props) => {
                    return <CandyList candy={this.state.candy}
                                type={this.state.type}
                                candyType={this.state.candyType}
                                />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews