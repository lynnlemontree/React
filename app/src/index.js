import React from 'react';
import ReactDOM from 'react-dom';
import {Child} from './Child';
import {Sibling} from './sibling';
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:''}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(newName){
        this.setState({name:newName});
    }
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <Child onChange={this.handleClick} />
                <Sibling name={this.state.name} />

            </div>
                

        ) 
    }

}
ReactDOM.render(<Parent />,document.getElementById('test'));