import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//PropTypes/
/*
const H1 = (props) => <h1>Hello World This is {props.name}</h1>;


H1.propTypes = {
    name: PropTypes.string.isRequired
}
ReactDOM.render(<H1 name='Lynn'/>,test);
*/
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {user_input: ''};
        this.setOutput = this.setOutput.bind(this);
    }
    
    setOutput(e){
        this.setState({user_input:e.target.value})
    }
    render(){
        return (
            <div>
                <form>
                    <input type='text' value={this.state.user_input} 
                    onChange={this.setOutput}
                    />
                
            
                <h1>{this.state.user_input}</h1>
                </form>
            </div>

        )
    }
}
ReactDOM.render(<Form />,test)

