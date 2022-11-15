import React from "react"

export default function TopSection(props) {
    return (
          <div className="col text-center">
            <input className="form-control"/>
            <label>{props.label}</label>
          </div>
    )
}


