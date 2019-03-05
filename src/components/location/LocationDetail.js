import React, { Component } from "react"




export default class LocationDetail extends Component {
    render() {
        const location = this.props.candys.find(a =>
            a.id === parseInt(this.props.match.params.locationId))
             || {id:404, name:"404", type: "Location not found"}

        return (
        )
    }
}