import React, { Component } from 'react'

class Candy extends Component {
    render() {

        return (
            <section className="candy">
                <div>
                    { this.props.candy.name }
                </div>
                <div>
                    { this.props.type.join(", ") }
                </div>
            </section>
        )
    }
}

export default Candy