import React from 'react';
import RangeSlider from './RangeSlider';
import ButtonProperties from '../Types/All';

class ShapeForm extends React.Component<{onInputChanged : Function, buttonProperties : ButtonProperties}>{
    render(){
        return(
        <React.Fragment>
                        <RangeSlider
                            sliderTitle={" Box Width "} 
                            sliderMin={48} 
                            sliderMax={162} 
                            onInputChanged={this.props.onInputChanged} 
                            currentValue={this.props.buttonProperties.boxWidth}  
                            stateKey={'boxWidth'}>
                        </RangeSlider>
                        <RangeSlider
                            sliderTitle={" Box Height "} 
                            sliderMin={48} 
                            sliderMax={162} 
                            onInputChanged={this.props.onInputChanged} 
                            currentValue={this.props.buttonProperties.boxHeight}
                            stateKey={'boxHeight'}>
                        </RangeSlider>
                        <RangeSlider
                            sliderTitle={" Box Border Radius "} 
                            sliderMin={0} 
                            sliderMax={42} 
                            onInputChanged={this.props.onInputChanged} 
                            currentValue={this.props.buttonProperties.boxBorderRadius}    
                            stateKey={'boxBorderRadius'} >
                        </RangeSlider>
                        <RangeSlider
                            sliderTitle={" Box Border Thickness "} 
                            sliderMin={0} 
                            sliderMax={12} 
                            onInputChanged={this.props.onInputChanged} 
                            currentValue={this.props.buttonProperties.boxBorderSize} 
                            stateKey={'boxBorderSize'}>
                        </RangeSlider>
                        <RangeSlider
                            sliderTitle={" Box Shadow V-Pos "} 
                            sliderMin={-50} 
                            sliderMax={50} 
                            onInputChanged={this.props.onInputChanged} 
                            currentValue={this.props.buttonProperties.boxShadowVertPos}    
                            stateKey={'boxShadowVertPos'}>
                        </RangeSlider>
                        <RangeSlider
                            sliderTitle={" Box Shadow H-Pos "} 
                            sliderMin={-50} 
                            sliderMax={50} 
                            onInputChanged={this.props.onInputChanged} 
                            currentValue={this.props.buttonProperties.boxShadowHorPos}     
                            stateKey={'boxShadowHorPos'}>
                        </RangeSlider>
                        <RangeSlider
                            sliderTitle={" Box Shadow Blur "} 
                            sliderMin={0} 
                            sliderMax={50} 
                            onInputChanged={this.props.onInputChanged} 
                            currentValue={this.props.buttonProperties.boxShadowBlurR} 
                            stateKey={'boxShadowBlurR'}>
                        </RangeSlider>
                        <RangeSlider
                            sliderTitle={" Box Shadow Spread "} 
                            sliderMin={-50} 
                            sliderMax={50} 
                            onInputChanged={this.props.onInputChanged} 
                            currentValue={this.props.buttonProperties.boxShadowSpreadR}   
                            stateKey={'boxShadowSpreadR'} >
                        </RangeSlider>
                        <div className="InputRangedProperty FlexRow" style={{margin : "0.25em"}}>
                            <div className="InputRangedPropertyTitle"><label> Inset Shadow </label></div>
                            <div className="InputRangedPropertySliders">
                                <div className="inline field">
                                    <input type="checkbox" onChange={ (e) => { this.props.onInputChanged( {boxShadowInset : e.target.checked} )}} checked={this.props.buttonProperties.boxShadowInset}></input>
                                </div>
                            </div>
                        </div>
        </React.Fragment>
        )
    }
}

export default ShapeForm;