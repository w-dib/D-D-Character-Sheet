import React from 'react'

export default function Skills(props) {
  return (
    <div className="col">
      <div className="form-check ">
        <input
          className="form-check-input dndinputcheck"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          {props.skills}
        </label>
      </div>
    </div>
  );
}
