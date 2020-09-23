import React from 'react';
import RangeSlider from './RangeSlider';
import ButtonProperties from '../Types/All';
import './BaseStyle.css';

class TextForm extends React.Component<{onInputChanged : Function, buttonProperties : ButtonProperties }>{
    componentDidMount(){
        console.log("from the text form", this.props.buttonProperties);
    }

    toggleFlag(  flag : number ){
        if(flag === 0){return 1}
        else return 0;
    }


    render(){

        return(
        <React.Fragment>
            <div className="FlexColumn TextFreeValueMenu" style={{margin : "0 0 0 0"}}>
                    <div className="ui action mini labeled input">
                            <div className="ui label"> Button Text </div>
                            <input placeholder="button's label" type="text" onChange={ (e) => { this.props.onInputChanged( {textValue : e.target.value})}} value={this.props.buttonProperties.textValue}></input>
                            <button className={`ui ${this.props.buttonProperties.textBold ? 'black' : ''} icon button`}  onClick={(e) => { this.props.onInputChanged( {textBold : this.toggleFlag( this.props.buttonProperties.textBold )})}} value={  this.props.buttonProperties.textBold  }>
                                <i className={`${this.props.buttonProperties.textBold ? 'inverted white' : ''} bold icon`}></i>
                            </button>

                            <button className={`ui ${this.props.buttonProperties.textItalic ? 'black' : ''} icon button`}  onClick={(e) => { this.props.onInputChanged( {textItalic : this.toggleFlag( this.props.buttonProperties.textItalic )})}} value={  this.props.buttonProperties.textItalic  }>
                                <i className={`${this.props.buttonProperties.textItalic ? 'inverted white' : ''} italic icon `}></i>
                            </button>
                    </div>
                    <div className="ui mini labeled input">
                            <div className="ui label">Font</div>
                            <input onChange={ (e) => { this.props.onInputChanged( {textFont : e.target.value})}} value={this.props.buttonProperties.textFont}></input>
                    </div>
            </div>
            <div className="FlexColumn TextRangeMenu AutoOverflow" style={{margin : "0 0 0 0"}}>
                <RangeSlider
                    sliderTitle={" Text Font Size "} 
                    sliderMin={8} 
                    sliderMax={48} 
                    onInputChanged={this.props.onInputChanged} 
                    currentValue={this.props.buttonProperties.textFontSize}
                    stateKey={'testFontSize'}>
                </RangeSlider>
                <RangeSlider
                    sliderTitle={" Text Shadow V-Pos "} 
                    sliderMin={-50} 
                    sliderMax={50} 
                    onInputChanged={this.props.onInputChanged} 
                    currentValue={this.props.buttonProperties.textShadowVertPos}
                    stateKey={'textShadowVertPos'}>
                </RangeSlider>
                <RangeSlider
                    sliderTitle={" Text Shadow H-Pos "} 
                    sliderMin={-50} 
                    sliderMax={50} 
                    onInputChanged={this.props.onInputChanged} 
                    currentValue={this.props.buttonProperties.textShadowHorPos}
                    stateKey={'textShadowHorPos'}>
                </RangeSlider>
                <RangeSlider
                    sliderTitle={" Text Shadow Blur Width "} 
                    sliderMin={0} 
                    sliderMax={50} 
                    onInputChanged={this.props.onInputChanged} 
                    currentValue={this.props.buttonProperties.textShadowBlurR}
                    stateKey={'textShadowBlurR'}
                    >
                </RangeSlider>
            </div>
        </React.Fragment>
        )
    }
}

export default TextForm;