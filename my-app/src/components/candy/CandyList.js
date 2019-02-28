import React, { Component } from 'react'
import "./CandyList.css"
import Candy from './candy';


class CandyList extends Component {
    componentDidMount() {
        console.log("componentDidMount -- CandyList")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate -- CandyList")
    }


    render() {
        console.log("render -- CandyList")
        return (
            <article className="candys">
                {/* {
                    this.props.candys.map(candy =>
                        <Candy key={`candy-${candy.id}`}
                            candy={candy}
                            types={
                                this.props.typeOfCandys
                                    .filter(candyType => candyType.candyId === candy.id)
                                    .map(candyType =>
                                        this.props.types.find(
                                            t => t.id === candyType.typeId
                                        ).name
                                    )
                            } />
                    )
                } */}
            </article>
        )
    }
}

export default CandyList