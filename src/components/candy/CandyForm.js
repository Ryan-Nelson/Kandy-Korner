import React, { Component } from "react";
import "./Candy.css";

export default class AnimalForm extends Component {
  // Set initial state
  state = {
    candyNamd: "",
    type: "",
    employeeId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewCandy = evt => {
    evt.preventDefault()
    if (this.state.employee === "") {
      window.alert("Please select a maker");
    } else {
      const candy = {
        name: this.state.candyName,
        type: this.state.type,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        employeeId: parseInt(this.state.employeeId)
      }

      // Create the animal and redirect user to animal list
      this.props
        .addCandy(candy)
        .then(() => this.props.history.push("/candys"));
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className="candyForm">
          <div className="form-group">
            <label htmlFor="candyName">Candy name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="candyName"
              placeholder="Candy name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="type"
              placeholder="type"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employee">Assign Maker</label>
            <select
              defaultValue=""
              name="employee"
              id="employeeId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select an employee</option>
              {this.props.employees.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={this.constructNewCandy}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}