import React, { Component } from 'react'


class EmployeeList extends Component {
    componentDidMount() {
        console.log("componentDidMount -- EmployeeList")
    }
    render() {
        console.log(this.props.employees, "employees")
        return (
            <section className="employees">
            {
                this.props.employees.map(employee => 
                    <div key={employee.id}>
                        {employee.name}
                    </div>
                  )
            }
            </section>
        )
    }
}

export default EmployeeList