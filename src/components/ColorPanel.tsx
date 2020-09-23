import React from 'react';
import ButtonProperties from '../Types/All';

class ColorPanel extends React.Component<{ 
    isDisabled : boolean
    currentValue : any,
    tooltipText : string,
    stateKey : any,
    onInputChanged : Function
    }>{
    render(){
        const properties = this.props;
        if (properties.isDisabled) {return null}

        
        return(
        <React.Fragment>
            <div className="PalatteTray tooltip">
                <span className="tooltiptext"> {properties.tooltipText} </span>
                <input className="PalatteColor" disabled={properties.isDisabled} type="color" onChange={(e) => {this.props.onInputChanged( {[properties.stateKey] : e.target.value} )}} value={properties.currentValue}></input>
                <div></div>
            </div>
        </React.Fragment>
        )
    }
}

export default ColorPanel;