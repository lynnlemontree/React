import React from 'react';
import ReactDOM from 'react-dom';
//Style1 using regular to display props
class MyComponent extends React.Component{
    render(){
        return <h1>I Love {this.props.name}</h1>;
    }
}


//Style 2 using stateless functional component style.
/*const Content = (props) => <h1>I Love {props.name}</h1>;*/

ReactDOM.render(<MyComponent name='Javascript'/>,document.getElementById('test'));