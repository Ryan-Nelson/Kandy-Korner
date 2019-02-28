import React, { Component } from 'react'
import "./CandyList.css"
import Candy from './candy';


class CandyList extends Component {
    componentDidMount() {
        console.log("componentDidMount -- CandyList")
    }

    componentDidUpdate () {
        console.log("componentDidUpdate -- CandyList")
    }


    render() {
        console.log("render -- CandyList")
        return (
            <article className="candy">
                {
                    this.props.candys.map(candy =>
                        <Candy key={`candy-${candy.id}`}
                            candy={candy}
                            typeOfCandy={
                                this.props.candytype
                                    .filter(ao => ao.candyId === candy.id)
                                    .map(ao =>
                                        this.props.typeOfCandy.find(
                                            o => o.id === ao.typeOfCandyId
                                        ).name
                                    )
                            } />
                    )
                }
            </article>
        )
    }
}

export default CandyList