import React from 'react';
import ButtonProperties from '../Types/All';
import './BaseStyle.css'


class ButtonPreview extends React.Component< {buttonProperties : ButtonProperties} >{
    state = { mouseHovered : 0};
    componentDidMount(){
        console.log(this.state);
        //console.log("from the Button Preview ", this.props.buttonProperties)

    }

    renderButtonStyle(){
        const properties = this.props.buttonProperties;


        let baseStyle: {[prop: string]: any} = {
            verticalAlign : "middle" ,
            textDecoration : "none"
        };

        const computeBGStyle = () => {

            const computeGradientStyle = () => {
                return `linear-gradient(to bottom, 
                        ${this.state.mouseHovered === 0 ? properties.gradientTopColor :  properties.gradientBtmColor}
                        5%, 
                        ${this.state.mouseHovered === 0 ? properties.gradientBtmColor :  properties.gradientTopColor}
                        100%)`
            }

            if(properties.isTransparent){ return 'transparent'}
            else {
                return `${properties.hasGradient ? computeGradientStyle() : properties.gradientBtmColor }`

            }
        }

        //Colour
        baseStyle.color = `${properties.fontColor}`;
        baseStyle.background = computeBGStyle();
        //baseStyle.backgroundColor = `${properties.gradientTopColor}`

        //Text
        if( properties.textBold ){ baseStyle.fontWeight = "bold" }
        if( properties.textItalic ){ baseStyle.fontStyle = "italic" }
        baseStyle.fontFamily = `${properties.textFont}`
        baseStyle.fontSize = `${properties.textFontSize}px`
        baseStyle.textShadow = `${properties.textShadowHorPos}px ${properties.textShadowVertPos}px ${properties.textShadowBlurR}px ${properties.textShadowColor}`

        //Shape
        baseStyle.width= `${properties.boxWidth}px`;
        baseStyle.height = `${properties.boxHeight}px`;
        baseStyle.borderRadius = `${properties.boxBorderRadius}px`;
        baseStyle.border = `${properties.boxBorderSize}px solid ${properties.borderColor}`;

        baseStyle.boxShadow = `${properties.boxShadowInset ? 'inset' : '' } ${properties.boxShadowHorPos}px ${properties.boxShadowVertPos}px ${properties.boxShadowBlurR}px ${properties.boxShadowSpreadR}px ${properties.boxShadowColor}`

        return baseStyle;
    }

    renderPreviewBGStyle(){
        return 
    }

    render(){
        return(
                <div className="FlexRow PreviewCanvas" 
                     style={{ background: `${this.props.buttonProperties.previewCheckered ? 'url("./transparent_bg.jpg") no-repeat center center / cover' : this.props.buttonProperties.previewBGColor}` }}>
                    
                    <div className="ButtonContainer" style={{width : `${this.props.buttonProperties.boxWidth}px`, height: `${this.props.buttonProperties.boxWidth}px`}}>
                        <button className="PreviewButton"
                            onMouseEnter={(e) => { this.setState( { mouseHovered : 1} ) } }
                            onMouseLeave={(e) => { this.setState( { mouseHovered : 0} ) } }
                            value = {this.state.mouseHovered }
                            style={this.renderButtonStyle()}>

                            {this.props.buttonProperties.textValue}
                        </button>
                    </div>
                </div>
        )
    }
}

export default ButtonPreview;