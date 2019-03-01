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
                {
                    this.props.candys.map(candy =>
                        <Candy key={`candy-${candy.id}`}
                            candys={
                                this.props.typeOfCandys
                                    .filter(candyName => candyName.candyId === candy.id)
                                    .map(candyName =>
                                        this.props.candys.find(
                                            c => c.id === candyName.candyId
                                        ).name
                                    )
                            }
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
                }
            </article>
        )
    }
}

export default CandyList