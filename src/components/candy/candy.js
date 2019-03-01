import React, { Component } from 'react'

class Candy extends Component {
    componentDidMount() {
    }
    render() {

        return (
            <section className="candy">
                <div>
                    { this.props.candys.join(", ") }
                    { this.props.types.join(", ") }
                </div>
            </section>
        )
    }
}

export default Candy