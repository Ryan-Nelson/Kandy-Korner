import { Route } from 'react-router-dom'
import React, { Component } from "react"

import CandyList from './candy/CandyList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'

import CandyDetail from './candy/CandyDetail';
import EmployeeDetail from './employee/EmployeeDetail';

import CandyManager from '../modules/CandyManager'
import TypeManager from '../modules/TypeManager'
import LocationManager from '../modules/LocationManager'
import EmployeeManager from '../modules/EmployeeManager'
import CandyForm from './candy/CandyForm';


class ApplicationViews extends Component {
    state = {
        types: [],
        typeOfCandys: [],
        employees: [],
        candys: [],
        locations: []
    }

    removeCandy = (id) =>
        CandyManager.delete(id)
            .then(CandyManager.getAll)
            .then(candys => this.setState({ candys: candys }))

    addCandy = candy => {
        return CandyManager.addCandy(candy)
            .then(() => CandyManager.getAll())
            .then(candys =>
                this.setState({
                    candys: candys
                })
            )
    }

    fireEmployee = (id) =>
        EmployeeManager.delete(id)
            .then(EmployeeManager.getAll)
            .then(employees => this.setState({ employees: employees }))

    getAllCandysAgain = () =>
        CandyManager.getAll().then(candys => this.setState({ candys: candys }))


    componentDidUpdate () {
        console.log("componentDidUpdate -- ApplicationViews")
    }

    componentDidMount() {
        console.log("componentDidMount -- ApplicationViews")
        const newState = {}

        CandyManager.getAll()
            .then(candys => newState.candys = candys)
            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => LocationManager.getAll())
            .then(locations => newState.locations = locations)
            .then(() => TypeManager.getAll())
            .then(types => newState.types = types)
            .then(() => fetch("http://localhost:5000/typeOfCandys")
            .then(r => r.json()))
            .then(typeOfCandys => newState.typeOfCandys = typeOfCandys)
            .then(() => this.setState(newState))
    }

    render() {
        console.clear()
        console.log("render -- ApplicationViews")
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/candys" render={(routePropertyObject) => {
                    return <CandyList candys={this.state.candys}
                                types={this.state.types}
                                typeOfCandys={this.state.typeOfCandys}
                                removeCandy={this.removeCandy}
                                loadCandys={this.getAllCandysAgain}
                                {...routePropertyObject}
                                />
                }} />
                <Route exact path="/candys/:candyId(\d+)" render={(props) => {
                    console.log(props)
                    return <CandyDetail
                        {...props}
                        removeCandy={this.removeCandy}
                        animals={this.state.animals} />
                }} />
                <Route path="/candys/new" render={(props) => {
                    return <CandyForm {...props}
                                    addCandy={this.addCandy}
                                    employees={this.state.employees} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList
                    fireEmployee={this.fireEmployee}
                    employees={this.state.employees}
                    />
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail
                        {...props}
                        fireEmployee={this.fireEmployee}
                        employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews