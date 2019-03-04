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
                <div>
                {
                this.props.candys.map(candy =>
                    <div key={candy.id}>
                        {candy.name}
                        <button onClick={() => {
                                this.props.removeBadCandy(candy.id)
                                .then(() => this.props.history.push("/candys"))
                            }}
                            className="card-link">Delete</button>
                    </div>
                )
            }
                </div>
            </section>
            
        )
    }
}

export default Candy