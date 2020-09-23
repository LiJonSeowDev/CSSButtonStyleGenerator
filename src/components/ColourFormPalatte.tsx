import React from 'react';
import ColorPanel from './ColorPanel';
import './BaseStyle.css';
import ButtonProperties from '../Types/All';

class ColourFormPalatte extends React.Component<{onInputChanged : Function, buttonProperties : ButtonProperties}> {
    render(){
        const properties = this.props;
        return (
            <React.Fragment>
                <div className="ColorPalatte FlexRow">
                    <React.Fragment>
                            <ColorPanel
                                isDisabled={this.props.buttonProperties.previewCheckered}
                                tooltipText={" Preview Canvas Background Color "}
                                stateKey={"previewBGColor"}
                                onInputChanged={this.props.onInputChanged}
                                currentValue={this.props.buttonProperties.previewBGColor}>
                            </ColorPanel>
                            <ColorPanel
                                isDisabled={false}
                                tooltipText={" Font Color "}
                                stateKey={"fontColor"}
                                onInputChanged={this.props.onInputChanged}
                                currentValue={this.props.buttonProperties.fontColor}>
                            </ColorPanel>
                            <ColorPanel
                                isDisabled={false}
                                tooltipText={" Text's Shadow Color "}
                                stateKey={"textShadowColor"}
                                onInputChanged={this.props.onInputChanged}
                                currentValue={this.props.buttonProperties.textShadowColor}>
                            </ColorPanel>
                            <ColorPanel
                                isDisabled={this.props.buttonProperties.isTransparent || (!this.props.buttonProperties.hasGradient)}
                                tooltipText={" Box's Gradient Top Color "}
                                stateKey={"gradientTopColor"}
                                onInputChanged={this.props.onInputChanged}
                                currentValue={this.props.buttonProperties.gradientTopColor}>
                            </ColorPanel>
                            <ColorPanel
                                isDisabled={this.props.buttonProperties.isTransparent}
                                tooltipText={`${this.props.buttonProperties.hasGradient ? "Box's Gradient Bottom Color" : "Box's Background Color"}`}
                                stateKey={"gradientBtmColor"}
                                onInputChanged={this.props.onInputChanged}
                                currentValue={this.props.buttonProperties.gradientBtmColor}>
                            </ColorPanel>
                            <ColorPanel
                                isDisabled={false}
                                tooltipText={" Box's Shadow Color "}
                                stateKey={"boxShadowColor"}
                                onInputChanged={this.props.onInputChanged}
                                currentValue={this.props.buttonProperties.boxShadowColor}>
                            </ColorPanel>
                            <ColorPanel
                                isDisabled={false}
                                tooltipText={" Box's Border Color "}
                                stateKey={"borderColor"}
                                onInputChanged={this.props.onInputChanged}
                                currentValue={this.props.buttonProperties.borderColor}>
                            </ColorPanel>
                    </React.Fragment>  
                </div>
                <div className="ui ColorProperties FlexRow" >
                    <div className="ColorPropertyTray FlexColumn" style={{ margin : "0 0 0 0"}}>
                        <div>
                            <input type="checkbox" onChange={(e) => {this.props.onInputChanged( {isTransparent : e.target.checked} )}} checked={this.props.buttonProperties.isTransparent}></input>
                            <label > Use Transparent Button </label>
                        </div>
                        <div>
                            <input type="checkbox" onChange={(e) => {this.props.onInputChanged( {hasGradient : e.target.checked} )}} checked={this.props.buttonProperties.hasGradient}></input>
                            <label > Use Gradient </label>
                        </div>
                        <div>
                            <input type="checkbox" onChange={(e) => {this.props.onInputChanged( {previewCheckered : e.target.checked} )}} checked={this.props.buttonProperties.previewCheckered}></input>
                            <label > Preview Checkered </label>
                        </div>
                    </div>
                    <div className="ColorMetaPropertyTray FlexColumn" style={{ margin : "0 0 0 0"}}>
                        <div className="ui toggle checkbox tooltip disabled">
                            <input type="checkbox" onChange={(e) => {console.log(e)}} checked={false} name="public" />
                            <label> <i>Use Descriptive Palatte </i></label>
                            <span className="tooltiptext"> Descriptive Palatte is Under Construction </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ColourFormPalatte;