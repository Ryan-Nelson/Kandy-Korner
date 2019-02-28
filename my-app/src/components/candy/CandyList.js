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
            <article className="candys">
                {
                    this.props.candys.map(candy =>
                        <Candy key={`candy-${candy.id}`}
                            candy={candy}
                            type={
                                this.props.typeOfCandy
                                    .filter(toc => toc.candyId === candy.id)
                                    .map(toc =>
                                        this.props.typeOfCandy.find(
                                            c => c.id === toc.typeOfCandyId
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