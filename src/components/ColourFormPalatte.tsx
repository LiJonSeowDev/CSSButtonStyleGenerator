import React from 'react';
import ColorPanel from './ColorPanel';
import './BaseStyle.css';
import ButtonProperties from '../Types/All';

class ColourFormPalatte extends React.Component<{onInputChanged : Function, buttonProperties : ButtonProperties}> {
    state = {freezeTooltip : false}

    render(){
        const properties = this.props;
        return (
            <React.Fragment>
                <div className="ColorPalatte FlexRow">
                    <React.Fragment>
                            <ColorPanel
                                isDisabled={properties.buttonProperties.previewCheckered}
                                tooltipText={" Preview Canvas Background Color "}
                                freezeTooltip={this.state.freezeTooltip}
                                stateKey={"previewBGColor"}
                                onInputChanged={properties.onInputChanged}
                                currentValue={properties.buttonProperties.previewBGColor}>
                            </ColorPanel>
                            <ColorPanel
                                isDisabled={false}
                                tooltipText={" Font Color "}
                                freezeTooltip={this.state.freezeTooltip}
                                stateKey={"fontColor"}
                                onInputChanged={properties.onInputChanged}
                                currentValue={properties.buttonProperties.fontColor}>
                            </ColorPanel>
                            <ColorPanel
                                isDisabled={false}
                                tooltipText={" Text's Shadow Color "}
                                freezeTooltip={this.state.freezeTooltip}
                                stateKey={"textShadowColor"}
                                onInputChanged={properties.onInputChanged}
                                currentValue={properties.buttonProperties.textShadowColor}>
                            </ColorPanel>
                            <ColorPanel
                                isDisabled={properties.buttonProperties.isTransparent || (!properties.buttonProperties.hasGradient)}
                                tooltipText={" Box's Gradient Top Color "}
                                freezeTooltip={this.state.freezeTooltip}
                                stateKey={"gradientTopColor"}
                                onInputChanged={properties.onInputChanged}
                                currentValue={properties.buttonProperties.gradientTopColor}>
                            </ColorPanel>
                            <ColorPanel
                                isDisabled={properties.buttonProperties.isTransparent}
                                tooltipText={`${properties.buttonProperties.hasGradient ? "Box's Gradient Bottom Color" : "Box's Background Color"}`}
                                stateKey={"gradientBtmColor"}
                                freezeTooltip={this.state.freezeTooltip}
                                onInputChanged={properties.onInputChanged}
                                currentValue={properties.buttonProperties.gradientBtmColor}>
                            </ColorPanel>
                            <ColorPanel
                                isDisabled={false}
                                tooltipText={" Box's Shadow Color "}
                                stateKey={"boxShadowColor"}
                                freezeTooltip={this.state.freezeTooltip}
                                onInputChanged={properties.onInputChanged}
                                currentValue={properties.buttonProperties.boxShadowColor}>
                            </ColorPanel>
                            <ColorPanel
                                isDisabled={false}
                                tooltipText={" Box's Border Color "}
                                stateKey={"borderColor"}
                                freezeTooltip={this.state.freezeTooltip}
                                onInputChanged={properties.onInputChanged}
                                currentValue={properties.buttonProperties.borderColor}>
                            </ColorPanel>
                    </React.Fragment>  
                </div>
                <div className="ui ColorProperties FlexRow" >
                    <div className="ColorPropertyTray FlexColumn" style={{ margin : "0 0 0 0"}}>
                        <div>
                            <input type="checkbox" onChange={(e) => {properties.onInputChanged( {isTransparent : e.target.checked} )}} checked={properties.buttonProperties.isTransparent}></input>
                            <label > Use Transparent Button </label>
                        </div>
                        <div>
                            <input type="checkbox" onChange={(e) => {properties.onInputChanged( {hasGradient : e.target.checked} )}} checked={properties.buttonProperties.hasGradient}></input>
                            <label > Use Gradient </label>
                        </div>
                        <div>
                            <input type="checkbox" onChange={(e) => {properties.onInputChanged( {previewCheckered : e.target.checked} )}} checked={properties.buttonProperties.previewCheckered}></input>
                            <label > Preview Checkered </label>
                        </div>
                    </div>
                    <div className="ColorMetaPropertyTray FlexColumn" style={{ margin : "0 0 0 0"}}>
                        <div className="ui toggle checkbox tooltip">
                            <input type="checkbox" onChange={(e) => {this.setState( {freezeTooltip : e.target.checked})}} checked={this.state.freezeTooltip} />
                            <label> <i>Use Descriptive Palatte </i></label>
                            <span className="tooltiptext"> Use Descriptive Palatte </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ColourFormPalatte;