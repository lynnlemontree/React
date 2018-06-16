import React from 'react';
export class Sibling extends React.Component{


    render(){
        let name = this.props.name;

        return(
            <div>
                <h1 >You choice {name} </h1>
            </div>
        )
    }
}