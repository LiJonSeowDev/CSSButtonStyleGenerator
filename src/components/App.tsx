import React from 'react';
import ButtonPreview from './ButtonPreview';
import ButtonProperties from '../Types/All';
import CSSCodeClip from './CSSCodeClip';
import ColourFormPalatte from './ColourFormPalatte';
import TextForm from './TextForm';
import ShapeForm from './ShapeForm';

import './BaseStyle.css';

class App extends React.Component {
  state : ButtonProperties = {
    // Class
    buttonClassName : "Your_Button_Class",
    
    // Shape
    boxWidth : "108",
    boxHeight : "48",
    boxBorderRadius: "28",
    boxBorderSize : "2",
    boxShadowInset : false,
    boxShadowVertPos : "0",
    boxShadowHorPos : "0",
    boxShadowBlurR : "20",
    boxShadowSpreadR : "6",

    // Text
    textFont : "Arial",
    textValue : "Click Me !",
    textFontSize : "17",
    textBold : 0,
    textItalic : 0,
    textShadowVertPos : "0",
    textShadowHorPos : "0",
    textShadowBlurR : "2",


    // Colours
    previewBGColor : "#303E46",
    fontColor : "#5E4974",
    textShadowColor : "#5D4B57",
    gradientTopColor : "#A3DCFF",
    gradientBtmColor : "#DF7796",
    boxShadowColor : "#726779",
    borderColor : "#9B6CC1",
    isTransparent : false,
    hasGradient : true,
    previewCheckered : false
    
  };

  render(){
    return (
    <div className="RootDiv FlexColumn">
      <div className="PageTitle"><h1> CSS Button Styler</h1></div>
        <div className="PageBody FlexRow">
          <div className="ui segment inverted LeftUi FlexColumn">
            <div className="ui segment FlexColumn ButtonPreview AutoOverflow">
              <div className="BlockTitle"><h2> Button Preview </h2></div>
              <div className="BtnPreviewCanvasWrapper AutoOverflow">
                <ButtonPreview buttonProperties={this.state}/>
              </div>
            </div>
            <div className="ui segment FlexColumn CSSCodeBlock AutoOverflow">
              <div className="BlockTitle"><h2> CSS </h2></div>
                <div className="ui FlexColumn FormWrapper" style={{overflow:"hidden"}}>
                  <CSSCodeClip buttonProperties={this.state} onInputChanged={(object : Object)=> {this.setState(object)}}/>
                </div>
            </div>
          </div>
          <div className="ui segment inverted RightUi FlexColumn" style={{ margin : "0 0 0 0"}}>
            <div className="ui segment FlexColumn ColorMenu AutoOverflow">
              <div className="BlockTitle"><h2> Color Palatte </h2></div>
              <div className="ui FlexColumn FormWrapper" >
                <ColourFormPalatte buttonProperties={this.state} onInputChanged={(object : Object)=> {this.setState(object)}}/>
              </div>
            </div>
            <div className="ui segment FlexColumn TextMenu AutoOverflow"  style={{ margin : "0 0 0 0"}}>
              <div className="BlockTitle"><h2> Text Properties </h2></div>
              <div className="ui form FlexColumn FormWrapper">
                <TextForm buttonProperties={this.state} onInputChanged={(object : Object)=> {this.setState(object)}}/>
              </div>
            </div>
            <div className="ui segment FlexColumn ShapeMenu AutoOverflow">
              <div className="BlockTitle"><h2> Shape Properties </h2></div>
              <div className="ui form FlexColumn FormWrapper">
                <ShapeForm buttonProperties={this.state} onInputChanged={(object : Object)=> {this.setState(object)}}/>
              </div>
            </div>
          </div>
        </div> 
    </div>
    );
  }
}

export default App;
