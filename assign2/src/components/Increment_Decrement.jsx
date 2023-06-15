import React, {Component, ReactPropTypes} from "react";

class Increment_Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputnumber: this.props.number,
        };

    }

    increment=()=>{
        this.setState((laststate)=>({
            inputnumber:laststate.inputnumber+1,
        }));
    };

    decrement = ()=>{
        if(this.state.inputnumber===0){
            alert('Cannot be less than zero!');
        }else{
            this.setState((laststate)=>({
                inputnumber:laststate.inputnumber-1,
            }));
        }
    }

    render(){
        return(
            <div>
                <p>{this.state.inputnumber}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }




}

export default Increment_Decrement;

