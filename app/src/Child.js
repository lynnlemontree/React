import React from 'react';
export class Child extends React.Component{
    constructor(props){
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(e){
        let name = e.target.value;
        this.props.onChange(name);
    }
    render(){
        return(
            <div>
                <form onChange={this.handleEvent}>
                    <input type='radio' name='name' value='lynn' /> lynn
                    <input type='radio' name='name' value='test' />test
                    <input type='radio' name='name' value='aaa' />aaa
                    <input type='radio' name='name' value='lynnbbb' />lynnbbb
                </form>
            </div>
        )
    }
}