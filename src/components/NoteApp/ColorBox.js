import React, { Component } from 'react'

export default class ColorBox extends Component {

    inputColor(color){
        this.props.inputColor(color)
    }

    render() {
        let {color} = this.props
        
        
        return (
            <div className='color-box' onClick={()=>{this.inputColor(color)}} style={{backgroundColor: color}}>
                
            </div>
        )
    }
}
