import React from 'react';
import './Palatte.css';
import './Test.css'
import ButtonProperties from '../Types/All';



class ColourFormPalatte extends React.Component<{onInputChanged : Function, buttonProperties : ButtonProperties}> {
    /*calcActivePalattes(){
        let base = 7;
        if ( this.props.buttonProperties.isTransparent ) { base - 2}
        else if ( this.props.buttonProperties.hasGradient ) { base - 1}

        return base;
    }*/
    renderPreviewBGInput(){
        if(false){return;}
        return (
        <React.Fragment>
            <div className="PalatteTray tooltip">
                <span className="tooltiptext"> Preview's Background Colour </span>
                <input className="PalatteColor" type="color" onChange={(e) => {this.props.onInputChanged( {previewBGColor : e.target.value} )}} value={this.props.buttonProperties.previewBGColor}></input>
            </div>
        </React.Fragment>
        )

        
    }

    renderBGInputs(){
        let topGradientColor = (
        <React.Fragment>
            <div className="PalatteTray tooltip">
                <span className="tooltiptext"> Box's Gradient Top Color </span>
                <input className="PalatteColor" disabled={this.props.buttonProperties.isTransparent} type="color" onChange={(e) => {this.props.onInputChanged( {gradientTopColor : e.target.value} )}} value={this.props.buttonProperties.gradientTopColor}></input>
                <div></div>
            </div>
        </React.Fragment>
        )

        let btmGradientColor = (
        <React.Fragment>
            <div className="PalatteTray tooltip">
                <span className="tooltiptext"> Box's Gradient Bottom Color </span>
                <input className="PalatteColor" disabled={this.props.buttonProperties.isTransparent} type="color" onChange={(e) => {this.props.onInputChanged( {gradientBtmColor : e.target.value} )}} value={this.props.buttonProperties.gradientBtmColor}></input>
            </div>
        </React.Fragment>
        )
        

        if (this.props.buttonProperties.isTransparent){
            return null
        }
        else if  (this.props.buttonProperties.hasGradient){
            return (
                <React.Fragment>
                    {topGradientColor}
                    {btmGradientColor}
                </React.Fragment>
            )
        }
        else{
            return(
                <React.Fragment>
                    {btmGradientColor}
                </React.Fragment>
            )
        } 
    }

    render(){
        return (
            <React.Fragment>
                <div className="ColorPalatte FlexRow">
                    <React.Fragment>
                            {this.renderPreviewBGInput()}
                            <div className="PalatteTray tooltip">
                                <span className="tooltiptext"> Font Color </span>
                                <input className="PalatteColor" type="color" onChange={(e) => {this.props.onInputChanged( {fontColor : e.target.value} )}} value={this.props.buttonProperties.fontColor}></input>
                            </div>
                            <div className="PalatteTray tooltip">
                                <span className="tooltiptext"> Text's Shadow Color </span>
                                <input className="PalatteColor" type="color" onChange={(e) => {this.props.onInputChanged( {textShadowColor : e.target.value} )}} value={this.props.buttonProperties.textShadowColor}></input>
                            </div>
                            {this.renderBGInputs()}               
                            <div className="PalatteTray tooltip">
                                <span className="tooltiptext"> Box's Shadow Color </span>
                                <input className="PalatteColor" type="color" onChange={(e) => {this.props.onInputChanged( {boxShadowColor : e.target.value} )}} value={this.props.buttonProperties.boxShadowColor}></input>
                            </div>

                            <div className="PalatteTray tooltip">
                                <span className="tooltiptext"> Box's Border Color </span>
                                <input className="PalatteColor" type="color" onChange={(e) => {this.props.onInputChanged( {borderColor : e.target.value} )}} value={this.props.buttonProperties.borderColor}></input>
                            </div>
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