import React, { Component } from 'react'

class Candy extends Component {
    componentDidMount() {
        console.log(`componentDidMount -- Animal ${this.props.animal.id}`)
    }
    render() {

        return (
            <section className="candy">
                <div>
                    { this.props.candys.name }
                </div>
                <div>
                    { this.props.types.join(", ") }
                </div>
            </section>
        )
    }
}

export default Candy