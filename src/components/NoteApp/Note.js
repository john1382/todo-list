import React, { Component } from 'react'

export default class Note extends Component {

    remove(id){
        this.props.onRemove(id)
    }
    render() {
        let {id , color, title} = this.props
        return (
            <div className="card shadow-sm rounded" onClick={()=>{this.remove(id)}} style={{ backgroundColor: color }}><p className="card-text p-3">{title}</p></div>
        )
    }
}
