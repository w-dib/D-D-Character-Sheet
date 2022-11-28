import React from 'react'

export default function Skills(props) {
  return (
    <div className="col text-left px-1">
      <div className="form-check">
      <input
        className="underlinediput"></input>
        <input
          className="form-check-input dndinputcheck"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label " for="flexCheckDefault">
          {props.skills}
        </label>
      </div>
    </div>
  );
}
