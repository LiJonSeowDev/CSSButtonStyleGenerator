
type ButtonProperties = {
    buttonClassName : string,
    
    // Shape
    boxWidth : string,
    boxHeight : string,
    boxBorderRadius: string,
    boxBorderSize : string,
    boxShadowInset : boolean,
    boxShadowVertPos : string,
    boxShadowHorPos : string,
    boxShadowBlurR : string,
    boxShadowSpreadR : string,

    // Text
    textFont : string,
    textValue : string,
    textFontSize : string,
    textBold : number,
    textItalic : number,
    textShadowVertPos : string,
    textShadowHorPos : string,
    textShadowBlurR : string,


    // Colours
    previewBGColor : string,
    fontColor : string,
    textShadowColor : string,
    gradientTopColor : string,
    gradientBtmColor : string,
    boxShadowColor : string,
    borderColor : string,
    isTransparent : boolean,
    hasGradient : boolean
    previewCheckered : boolean,
}

export default ButtonProperties;