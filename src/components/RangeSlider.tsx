import React from 'react';
import ButtonProperties from '../Types/All';

class RangeSlider extends React.Component<{ 
    sliderTitle : string, 
    sliderMin : number, 
    sliderMax : number, 
    currentValue : any,
    stateKey : any,
    onInputChanged : Function
    }>{

    render(){
        const properties = this.props;
        return(
        <React.Fragment>
            <div className="InputRangedProperty FlexRow">
                <div className="InputRangedPropertyTitle"><label> {properties.sliderTitle} </label></div>
                <div className="InputRangedPropertySliders">
                    <div className="inline field">
                        <div className="ui label InputRangedPropertySlidersLabel"> {properties.sliderMin} </div>
                        <input type="range" min={properties.sliderMin} max={properties.sliderMax} onChange={ (e) => { this.props.onInputChanged( { [properties.stateKey] : e.target.value} )}} value={properties.currentValue}></input>
                        <div className="ui label InputRangedPropertySlidersLabel"> {properties.sliderMax} </div>
                        <div className="ui left pointing blue basic label">{properties.currentValue}</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
        
    
}


export default RangeSlider;