import React from "react"

export default function TopSection(props) {
    return (
          <div className="col text-center">
            <input id="inputValue" className="form-control" value={props.randomName}/>
            <label>{props.label}</label>
          </div>
    )
}


