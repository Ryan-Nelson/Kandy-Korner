import React, { Component } from "react"
import CandyManager from "../../modules/CandyManager"

export default class CandyEditForm extends Component {
    // Set initial state
    state = {
      candyName: "",
      type: "",
      employeeId: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingCandy = evt => {
      evt.preventDefault()

      if (this.state.employee === "") {
        window.alert("Please select a caretaker");
      } else {
        const editedCandy = {
          id: this.props.match.params.candyId,
          name: this.state.candyName,
          type: this.state.type,
          employeeId: parseInt(this.state.employeeId)
        };

        this.props.updateCandy(editedCandy)
            .then(() => this.props.history.push("/candys"))
    }
  }

    componentDidMount() {
      CandyManager.get(this.props.match.params.candyId)
      .then(candy => {
        this.setState({
          candyName: candy.name,
          type: candy.type,
          employeeId: candy.employeeId
        });
      });
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
                value = {this.state.animalName}
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
                value = {this.state.type}
              />
            </div>
            <div className="form-group">
              <label htmlFor="employee">Assign to make</label>
              <select
                name="employee"
                id="employeeId"
                onChange={this.handleFieldChange}
                value = {this.state.employeeId}
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
              onClick={this.updateExistingCandy}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}