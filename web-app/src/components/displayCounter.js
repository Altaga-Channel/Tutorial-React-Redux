import {Component} from "react"
import {connect} from "react-redux"

class DisCounter extends Component {

    render() {
        return (
            <div>
                Counter state {this.props.counter.counter}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter:state.counter
    }
}

export default connect(mapStateToProps,null)(DisCounter) // connect(state, props)(mycomponent)
