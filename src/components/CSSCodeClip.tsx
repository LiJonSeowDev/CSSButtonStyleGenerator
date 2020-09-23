import React from 'react';
import ButtonProperties from '../Types/All';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './BaseStyle.css';


class CSSCodeClip extends React.Component< {buttonProperties : ButtonProperties , onInputChanged : Function} >{
    state = { clipBoardIcon : 'copy blue' , timerID : -1};

    componentDidMount(){


        
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

    copyCSS(){
        navigator.clipboard.writeText(this.renderCSS());


        // Sort of Debouncing the icon class
        if (this.state.clipBoardIcon === 'check green IconFader'){
            clearTimeout( this.state.timerID );
        }
        this.setState({clipBoardIcon: 'check green IconFader'})
        var timeoutID = setTimeout( ()=>{
            this.setState({clipBoardIcon : 'copy blue IconFader'})
        }, 500);
        this.setState({timerID : timeoutID});
    }
    render(){
        return(
        <React.Fragment>
            <div className="ui FlexColumn form CSSPropertyBlock" style={{margin : "0 0 0 0"}}>
                <div className="ui action mini labeled input" style={{maxWidth : "50%"}}>
                        <div className="ui label"> Button Text </div>
                        <input placeholder="Button's CSS Class" type="text" onChange={ (e) => { this.props.onInputChanged( {buttonClassName : e.target.value})}} value={this.props.buttonProperties.buttonClassName}></input>
                        <button onClick={(e) => { this.copyCSS()}}>
                            <i className= {`${this.state.clipBoardIcon} big icon`}></i>
                        </button>
                </div>
            </div>
            <div className="CSSCodeBlock" id='codeBlock'>
                <SyntaxHighlighter language="css" PreTag='pre' style={railscasts} customStyle={{ borderRadius : "8px" , overflow : "visible" ,fontSize : "16px" , minWidth : "100%"}}>
                    {this.renderCSS()}
                </SyntaxHighlighter>
            </div>
        </React.Fragment>
        )
    }
}

export default CSSCodeClip;
