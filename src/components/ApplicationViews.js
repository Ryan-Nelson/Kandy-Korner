import { Route } from 'react-router-dom'
import React, { Component } from "react"
import CandyList from './candy/CandyList'
import StoresList from './stores/StoresList'
import EmployeeList from './employee/EmployeeList'
import CandysManager from "../Modules/CandysManager"
import EmployeesManager from "../Modules/EmployeesManager"
import StoresManager from "../Modules/StoresManager"
import TypesManager from "../Modules/TypesManager"



class ApplicationViews extends Component {
    state = {
        candys: [],
        types: [],
        employees: [],
        stores: [],
        typeOfCandys: []
    }

    removeBadCandy = (id) =>
    CandysManager.delete(id)
        .then(CandysManager.getAll)
        .then(candys => this.setState({ candys: candys }))

    
    fireEmployee = (id) =>
    EmployeesManager.delete(id)
            .then(EmployeesManager.getAll)
            .then(employees => this.setState({ employees: employees }))

    getAllCandysAgain = () =>
        CandysManager.getAll().then(candys => this.setState({ candys: candys }))


    componentDidUpdate() {
        console.log("componentDidUpdate -- ApplicationViews")
    }

    componentDidMount() {
        console.log("componentDidMount -- ApplicationViews")
        const newState = {}

        CandysManager.getAll()
            .then(candys => newState.candys = candys)
            .then(() => TypesManager.getAll())
            .then(types => newState.types = types)
            .then(() => StoresManager.getAll())
            .then(stores => newState.stores = stores)
            .then(() => EmployeesManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5000/typeOfCandys")
                .then(r => r.json()))
            .then(typeOfCandys => newState.typeOfCandys = typeOfCandys)
            .then(() => this.setState(newState))
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
                        removeBadCandy={this.state.removeBadCandy}
                    />
                }} />
                {/* <Route exact path="/candyss/:candysId(\d+)" render={(props) => {
                    console.log(props)
                    return <CandysDetails
                        {...props}
                        removeBadCandy={this.removeBadCandy}
                        candys={this.state.candys} />
                }} /> */}
                <Route path="/employees" render={(props) => {
                    return <EmployeeList
                        fireEmployee={this.fireEmployee}
                        employees={this.state.employees}
                    />
                }} />
                {/* <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail
                        {...props}
                        fireEmployee={this.fireEmployee}
                        employees={this.state.employees} />
                }} /> */}
            </React.Fragment>
        )
    }
}

export default ApplicationViews