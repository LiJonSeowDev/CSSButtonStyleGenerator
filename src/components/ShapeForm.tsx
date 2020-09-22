import React from 'react';
import ButtonProperties from '../Types/All';
import './Flex.css';



class ShapeForm extends React.Component<{onInputChanged : Function, buttonProperties : ButtonProperties}>{
    render(){
        return(
        <React.Fragment>
                        <div className="InputRangedProperty FlexRow">
                            <div className="InputRangedPropertyTitle"><label> Box Width </label></div>
                            <div className="InputRangedPropertySliders">
                                <div className="inline field">
                                    <div className="ui label sliderLabel_General"> 48 </div>
                                    <input type="range" min="48" max="162" onChange={ (e) => { this.props.onInputChanged( {boxWidth : e.target.value} )}} value={this.props.buttonProperties.boxWidth} ></input>
                                    <div className="ui label sliderLabel_General"> 162 </div>
                                    <div className="ui left pointing blue basic label">{this.props.buttonProperties.boxWidth}</div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="InputRangedProperty FlexRow">
                            <div className="InputRangedPropertyTitle"><label> Box Height </label></div>
                            <div className="InputRangedPropertySliders">
                                <div className="inline field">
                                    <div className="ui label sliderLabel_General"> 48 </div>
                                    <input type="range" min="48" max="162" onChange={ (e) => { this.props.onInputChanged( {boxHeight : e.target.value} )}} value={this.props.buttonProperties.boxHeight}></input>
                                    <div className="ui label sliderLabel_General"> 162 </div>
                                    <div className="ui left pointing blue basic label">{this.props.buttonProperties.boxHeight}</div>
                                </div>
                            </div>
                        </div>
                        <div className="InputRangedProperty FlexRow">
                            <div className="InputRangedPropertyTitle"><label> Box Border Radius </label></div>
                            <div className="InputRangedPropertySliders">
                                <div className="inline field">
                                    <div className="ui label sliderLabel_General"> 0 </div>
                                    <input type="range" min="0" max="42" onChange={ (e) => { this.props.onInputChanged( {boxBorderRadius : e.target.value} )}} value={this.props.buttonProperties.boxBorderRadius}></input>
                                    <div className="ui label sliderLabel_General"> 42 </div>
                                    <div className="ui left pointing blue basic label">{this.props.buttonProperties.boxBorderRadius}</div>
                                </div>
                            </div>
                        </div>
                        <div className="InputRangedProperty FlexRow">
                            <div className="InputRangedPropertyTitle"><label> Box Border Thickness </label></div>
                            <div className="InputRangedPropertySliders">
                                <div className="inline field">
                                    <div className="ui label sliderLabel_General"> 0 </div>
                                    <input type="range" min="0" max="12" onChange={ (e) => { this.props.onInputChanged( {boxBorderSize : e.target.value} )}} value={this.props.buttonProperties.boxBorderSize}></input>
                                    <div className="ui label sliderLabel_General"> 12 </div>
                                    <div className="ui left pointing blue basic label">{this.props.buttonProperties.boxBorderSize}</div>
                                </div>
                            </div>
                        </div>
                        <div className="InputRangedProperty FlexRow">
                            <div className="InputRangedPropertyTitle"><label> Box Shadow V-Pos </label></div>
                            <div className="InputRangedPropertySliders">
                                <div className="inline field">
                                    <div className="ui label sliderLabel_General"> -50 </div>
                                    <input type="range" min="-50" max="50"  onChange={ (e) => { this.props.onInputChanged( {boxShadowVertPos : e.target.value} )}} value={this.props.buttonProperties.boxShadowVertPos}></input>
                                    <div className="ui label sliderLabel_General"> 50 </div>
                                    <div className="ui left pointing blue basic label">{this.props.buttonProperties.boxShadowVertPos}</div>
                                </div>
                            </div>
                        </div>
                        <div className="InputRangedProperty FlexRow">
                            <div className="InputRangedPropertyTitle"><label> Box Shadow H-Pos </label></div>
                            <div className="InputRangedPropertySliders">
                                <div className="inline field">
                                    <div className="ui label sliderLabel_General"> -50 </div>
                                    <input type="range" min="-50" max="50" onChange={ (e) => { this.props.onInputChanged( {boxShadowHorPos : e.target.value} )}} value={this.props.buttonProperties.boxShadowHorPos}></input>
                                    <div className="ui label sliderLabel_General"> 50 </div>
                                    <div className="ui left pointing blue basic label">{this.props.buttonProperties.boxShadowHorPos}</div>
                                </div>
                            </div>
                        </div>
                        <div className="InputRangedProperty FlexRow">
                            <div className="InputRangedPropertyTitle"><label> Box Shadow Blur </label></div>
                            <div className="InputRangedPropertySliders">
                                <div className="inline field">
                                    <div className="ui label sliderLabel_General"> 0 </div>
                                    <input type="range" min="0" max="50" onChange={ (e) => { this.props.onInputChanged( {boxShadowBlurR : e.target.value} )}} value={this.props.buttonProperties.boxShadowBlurR}></input>
                                    <div className="ui label sliderLabel_General"> 50 </div>
                                    <div className="ui left pointing blue basic label">{this.props.buttonProperties.boxShadowBlurR}</div>
                                </div>
                            </div>
                        </div>
                        <div className="InputRangedProperty FlexRow">
                            <div className="InputRangedPropertyTitle"><label> Box Shadow Spread </label></div>
                            <div className="InputRangedPropertySliders">
                                <div className="inline field">
                                    <div className="ui label sliderLabel_General"> -50 </div>
                                    <input type="range" min="-50" max="50" onChange={ (e) => { this.props.onInputChanged( {boxShadowSpreadR : e.target.value} )}} value={this.props.buttonProperties.boxShadowSpreadR}></input>
                                    <div className="ui label sliderLabel_General"> 50 </div>
                                    <div className="ui left pointing blue basic label">{this.props.buttonProperties.boxShadowSpreadR}</div>
                                </div>
                            </div>
                        </div>
                        <div className="InputRangedProperty FlexRow">
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