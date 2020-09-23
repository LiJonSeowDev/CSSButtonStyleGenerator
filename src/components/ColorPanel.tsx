import React from 'react';

class ColorPanel extends React.Component<{ 
    isDisabled : boolean
    currentValue : any,
    tooltipText : string,
    freezeTooltip : boolean,
    stateKey : any,
    onInputChanged : Function
    }>{


    renderHoverTooltip(){
        if(this.props.freezeTooltip){ return null}
        else{ return (<span className="tooltiptext"> {this.props.tooltipText} </span>)}
    }

    renderFrozenTooltip(){
        if(this.props.freezeTooltip){
            return(
                <div className="FrozenLabel">
                    <div className="ui pointing red basic label" style={{width : "100%" , minHeight : "80%"}}>
                        {this.props.tooltipText}
                    </div>
                </div>
            )
        }
    }        

    render(){
        const properties = this.props;
        if (properties.isDisabled) {return null}

        
        return(
        <React.Fragment>
                <div className="PalatteTray tooltip">
                    <div className="FlexColumn PalattePanel">
                        <div className="PalatteColorPanel">
                            {this.renderHoverTooltip()}
                            <input className="PalatteColor" disabled={properties.isDisabled} type="color" onChange={(e) => {this.props.onInputChanged( {[properties.stateKey] : e.target.value} )}} value={properties.currentValue}></input>
                        </div>
                        {this.renderFrozenTooltip()}
                    </div>
                </div>
        </React.Fragment>
        )
    }
}

export default ColorPanel;