import React, { Component } from 'react'
import "./CandyList.css"
import CandyCard from './CandyCard';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class CandyList extends Component {

    componentDidMount() {
        console.log("componentDidMount -- CandyList")
    }

    shouldComponentUpdate (nextProps, nextState) {
        if (this.props.candys.length === nextProps.candys.length) {
            toast.warning("No change in state. Not updating", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 1500
            })
            return false
        }
        return true
    }

    componentDidUpdate (prevProps, prevState) {
        console.log("componentDidUpdate -- CandyList")

        toast.success("Candys Reloaded", {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 1000
        })
    }

    render() {
        console.log("render -- CandyList")
        return (
            <React.Fragment>
            <ToastContainer className="toastContainer" />
            <div className="centerChildren">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/candys/new")}
                        }>
                    Make Candy
                </button>
            </div>
            <article className="candys">
                {
                    this.props.candys.map(candy =>
                        <CandyCard key={`candy-${candy.id}`}
                            candy={candy}
                            removeCandy={this.props.removeCandy}
                            types={
                                this.props.typeOfCandys
                                    .filter(ao => ao.candyId === candy.id)
                                    .map(ao =>
                                        this.props.types.find(
                                            o => o.id === ao.typeId
                                        ).name
                                    )
                            } />
                    )
                }
            </article>
            <div className="centerChildren">
                <button onClick={ () => this.props.loadCandys() }>
                    Reload Candys
                </button>
            </div>
            </React.Fragment>
        )
    }
}

export default CandyList