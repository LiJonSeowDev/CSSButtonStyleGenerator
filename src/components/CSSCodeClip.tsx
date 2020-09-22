import React from 'react';
import ButtonProperties from '../Types/All';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './CSSCodeClip.css';


class CSSCodeClip extends React.Component< {buttonProperties : ButtonProperties , onInputChanged : Function} >{
    private codeBlockRef = React.createRef<HTMLPreElement>(); // like this
    state = {cssCode : this.renderCSS()}

    componentDidMount(){
    }

    componentDidUpdate(){

        // Seems computationally expensive, we may have to flip it to some transition or smth or just go with no colour


    }


    renderCSS(){
        const properties = this.props.buttonProperties;
        const computeBGStyle = ( isHover : boolean) => {

            const computeGradientStyle = ( isHover : boolean) => {
                if(isHover){ return `linear-gradient(to bottom, ${this.props.buttonProperties.gradientBtmColor} 5%, ${this.props.buttonProperties.gradientTopColor} 100%)`}
                else return `linear-gradient(to bottom, ${this.props.buttonProperties.gradientTopColor} 5%, ${this.props.buttonProperties.gradientBtmColor} 100%)`
            }

            if(properties.isTransparent){ return 'transparent'}
            else {
                return `${properties.hasGradient ? computeGradientStyle(isHover) : properties.gradientBtmColor }`

            }
        }

        let CSSCode = 
` 
/*  HTML  */
<button href="#" class="${properties.buttonClassName}">${properties.textValue}</button>

/* CSS */
.${properties.buttonClassName}{
    /* text */
    vertical-align : middle;
    text-decoration : none;${properties.textBold ? "\n    font-weight : bold;" : ""}${properties.textItalic ? "\n    font-style : italic;" : ""}
    font-family : ${properties.textFont};
    font-size : ${properties.textFontSize}px;
    text-shadow : ${properties.textShadowHorPos}px ${properties.textShadowVertPos}px ${properties.textShadowBlurR}px ${properties.textShadowColor};
    color : ${properties.fontColor};

    /* shape */
    width : ${properties.boxWidth}px;
    height : ${properties.boxHeight}px;
    background : ${computeBGStyle(properties.hasGradient)};
    border-radius : ${properties.boxBorderRadius}px;
    border : ${properties.boxBorderSize}px solid ${properties.borderColor};
    box-shadow : ${properties.boxShadowInset ? 'inset' : '' } ${properties.boxShadowHorPos}px ${properties.boxShadowVertPos}px ${properties.boxShadowBlurR}px ${properties.boxShadowSpreadR}px ${properties.boxShadowColor};
}

.${properties.buttonClassName}:hover{
    background: ${computeBGStyle(!properties.hasGradient)};
}

.${properties.buttonClassName}:active{
    position:relative;
    top:1px;
}
`
        //console.log(CSSCode);
        return CSSCode;
    }

    dispatchCopyClipboardEvent(){
        var event = new CustomEvent('copy', { "detail": "Example of an event" });
        console.log("dispatching event");
        // Dispatch/Trigger/Fire the event
        document.dispatchEvent(event);
    }



    /*
    
<pre id="CSS_CodeBlock" ref={this.codeBlockRef} className="CSSCodeClip_pre">
                            <span className="CSSCodeClip_pre">
                                <code className="css CSSCodeClip_codeBlock">
                                {this.renderCSS()}
                                </code>
                            </span>
                    </pre>

    */
    render(){
        return(
        <React.Fragment>
            <div className="ui segment FlexColumn form CSSPropertyBlock" style={{margin : "0 0 0 0"}}>
                <div className="ui action labeled input" style={{maxWidth : "50%"}}>
                        <div className="ui label"> Button Text </div>
                        <input placeholder="Button's CSS Class" type="text" onChange={ (e) => { this.props.onInputChanged( {buttonClassName : e.target.value})}} value={this.props.buttonProperties.buttonClassName}></input>
                        <button onClick={(e) => { console.log("copy clicked")}}>
                            <i className={`${this.props.buttonProperties.textBold ? 'inverted white' : ''} copy icon`}></i>
                        </button>
                </div>
            </div>
            <div className="CSSCodeBlock">
                <SyntaxHighlighter language="css" PreTag='pre' style={railscasts} customStyle={{ borderRadius : "8px" , overflow : "visible" ,fontSize : "16px" , minWidth : "100%"}}>
                    {this.renderCSS()}
                </SyntaxHighlighter>
            </div>
        </React.Fragment>
        )
    }
}

export default CSSCodeClip;
/*
*
*
            <div className="ui segment VertFlexContainer_General" style ={{overflow : "hidden"}}>
                <div className="CSSCodeTitle">
                    <h2>CSS Code</h2>
                </div>
                <div className="CSSCodeTitle">
                    <button className="ui button" onClick={(e) => {this.dispatchCopyClipboardEvent(); }}>
                        <label className="ui label"> COPY </label>
                        <i style={{ margin : '2px'}} className="copy icon"></i>
                    </button>
                </div>
                <div className="CSSCodeSegment" style={{backgroundColor : "#232323"}}>
                        <SyntaxHighlighter language="css" PreTag='pre' style={railscasts} customStyle={{ borderRadius : "8px" , overflow : "visible" ,fontSize : "12px" , minWidth : "100%"}}>
                            {this.renderCSS()}
                        </SyntaxHighlighter>
                </div>
            </div>
*/
