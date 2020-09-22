import React , {} from 'react';
import ColourFormPalatte from './ColourFormPalatte';
import ShapeForm from './ShapeForm';
import TextForm from './TextForm';
import ButtonProperties from '../Types/All';

class ButtonForm extends React.Component<{onInputChanged : Function , buttonProperties : ButtonProperties}>{
    render(){
        return(
            <div className="ui segment"> 
                <div className="ui form">
                    <ColourFormPalatte buttonProperties={this.props.buttonProperties} onInputChanged={this.props.onInputChanged}/>
                    <TextForm buttonProperties={this.props.buttonProperties} onInputChanged={this.props.onInputChanged}/>
                    <ShapeForm buttonProperties={this.props.buttonProperties} onInputChanged={this.props.onInputChanged}/>
                </div>
            </div>
        )

    }
}

export default ButtonForm;