import React from 'react';

class RangeSlider extends React.Component<{ 
    sliderTitle : string, 
    sliderMin : number, 
    sliderMax : number, 
    currentValue : any,
    stateKey : any,
    onInputChanged : Function
    }>{
    
    state = { sliderInput : '' , isValid : true }
    textBoxRef = React.createRef<HTMLInputElement>(); // like this

    componentDidMount(){
        if( this.textBoxRef.current !== null){
            this.textBoxRef.current.value = this.props.currentValue;
        }
    }

    handleSliderUpdate( val : string){
        const properties = this.props;
        if( this.textBoxRef.current !== null){
            this.textBoxRef.current.value = val;
        }
        
        (() => this.props.onInputChanged( { [properties.stateKey] : val} ))();
    }

    updateIfValid( val : string){
        const properties = this.props;
        if (this.verifyInput(val)) {
            this.props.onInputChanged(  { [properties.stateKey] : val} )
        }else{
            console.log("Invalid Value");
        }
        
    }

    verifyInput(val : string){
        const properties = this.props;
        let validity = (parseInt(val) >= properties.sliderMin) && (parseInt(val) <= properties.sliderMax) && (val !== '');
        this.setState({ isValid :validity })
        return validity;
    }

    render(){
        const properties = this.props;
        return(
        <React.Fragment>
            <div className="InputRangedProperty FlexRow">
                <div className="InputRangedPropertyTitle"><label> {properties.sliderTitle} </label></div>
                <div className="InputRangedPropertySliders">
                    <div className="inline field FlexRow">
                        
                        <div className="ui label InputRangedPropertySlidersLabel"> {properties.sliderMin} </div>
                        <input type="range" min={properties.sliderMin} max={properties.sliderMax} onChange={ (e) => {this.handleSliderUpdate(e.target.value)}} value={properties.currentValue}></input>
                        <div className="ui label InputRangedPropertySlidersLabel"> {properties.sliderMax} </div>
                        <div className={`ui left pointing ${this.state.isValid ? 'blue' : 'red'} basic label`} style={{padding : "0 0 0 1em" , margin :" 0 0 0 0"}} >
                            <input 
                                ref={this.textBoxRef}
                                onChange={ (e) => { this.updateIfValid(e.target.value); }} 
                                style={{
                                        height : "1.5em",
                                        width : "3.5em",
                                        padding : "0 0 0 0",
                                        margin : "0 0 0 0",
                                        border: "0"
                                }}
                                placeholder={properties.currentValue}
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
        
    
}


export default RangeSlider;