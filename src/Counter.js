import React  from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'


const Counter = ({count, increment, decrement}) => {
    return(
        <p>
            Contador: {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </p>
    )
}

/*
class Counter extends Component{
    render(){
        return (
            <p>
                Contador: {this.props.count}
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </p>
        )
    }
}
*/


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment),
        decrement: () => dispatch(decrement)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)