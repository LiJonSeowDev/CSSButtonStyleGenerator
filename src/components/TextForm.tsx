import React from 'react';
import ButtonProperties from '../Types/All';
import './Flex.css';

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
                    <div className="ui action labeled input">
                            <div className="ui label"> Button Text </div>
                            <input placeholder="button's label" type="text" onChange={ (e) => { this.props.onInputChanged( {textValue : e.target.value})}} value={this.props.buttonProperties.textValue}></input>
                            <button className={`ui ${this.props.buttonProperties.textBold ? 'black' : ''} icon button`}  onClick={(e) => { this.props.onInputChanged( {textBold : this.toggleFlag( this.props.buttonProperties.textBold )})}} value={  this.props.buttonProperties.textBold  }>
                                <i className={`${this.props.buttonProperties.textBold ? 'inverted white' : ''} bold icon`}></i>
                            </button>

                            <button className={`ui ${this.props.buttonProperties.textItalic ? 'black' : ''} icon button`}  onClick={(e) => { this.props.onInputChanged( {textItalic : this.toggleFlag( this.props.buttonProperties.textItalic )})}} value={  this.props.buttonProperties.textItalic  }>
                                <i className={`${this.props.buttonProperties.textItalic ? 'inverted white' : ''} italic icon `}></i>
                            </button>
                    </div>
                    <div className="ui labeled input">
                            <div className="ui label">Font</div>
                            <input onChange={ (e) => { this.props.onInputChanged( {textFont : e.target.value})}} value={this.props.buttonProperties.textFont}></input>
                    </div>
            </div>
            <div className="FlexColumn TextRangeMenu AutoOverflow" style={{margin : "0 0 0 0"}}>
                <div className="InputRangedProperty FlexRow">
                    <div className="InputRangedPropertyTitle"><label> Text Font Size </label></div>
                    <div className="InputRangedPropertySliders">
                        <div className="inline field">
                            <div className="ui label sliderLabel_General"> 8 </div>
                            <input type="range" min="8" max="48" onChange={ (e) => { this.props.onInputChanged( {textFontSize : e.target.value})}} value={this.props.buttonProperties.textFontSize}></input>
                            <div className="ui label sliderLabel_General"> 48 </div>
                            <div className="ui left pointing blue basic label">{this.props.buttonProperties.textFontSize}</div>
                            
                        </div>
                    </div>
                </div>
                <div className="InputRangedProperty FlexRow">
                <div className="InputRangedPropertyTitle"><label> Text Shadow V-Pos </label></div>
                    <div className="InputRangedPropertySliders">  
                        <div className="inline field">
                            <div className="ui label sliderLabel_General"> -50 </div>
                            <input type="range" min="-50" max="50"  onChange={ (e) => { this.props.onInputChanged( {textShadowVertPos : e.target.value})}}  value={this.props.buttonProperties.textShadowVertPos}></input>
                            <div className="ui label sliderLabel_General"> 50 </div>
                            <div className="ui left pointing blue basic label">{this.props.buttonProperties.textShadowVertPos}</div>
                        </div>
                    </div>
                </div>
                <div className="InputRangedProperty FlexRow">
                    <div className="InputRangedPropertyTitle"><label> Text Shadow H-Pos </label></div>
                    <div className="InputRangedPropertySliders">
                        <div className="inline field">
                            <div className="ui label sliderLabel_General"> -50 </div>
                            <input type="range" min="-50" max="50"  onChange={ (e) => { this.props.onInputChanged( {textShadowHorPos : e.target.value})}}  value={this.props.buttonProperties.textShadowHorPos}></input>
                            <div className="ui label sliderLabel_General"> 50 </div>
                            <div className="ui left pointing blue basic label">{this.props.buttonProperties.textShadowHorPos}</div>
                        </div>
                    </div>
                </div>
                <div className="InputRangedProperty FlexRow">
                    <div className="InputRangedPropertyTitle"><label> Text Shadow Blur </label><br /></div>
                    <div className="InputRangedPropertySliders">
                        <div className="inline field">
                            <div className="ui label sliderLabel_General"> 0 </div>
                            <input type="range" min="0" max="50"  onChange={ (e) => { this.props.onInputChanged( {textShadowBlurR : e.target.value})}}  value={this.props.buttonProperties.textShadowBlurR}></input>
                            <div className="ui label sliderLabel_General"> 50 </div>
                            <div className="ui left pointing blue basic label">{this.props.buttonProperties.textShadowBlurR}</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default TextForm;