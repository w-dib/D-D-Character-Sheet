import React from "react"

export default function StatBox(props) {
  const[count, setCount] = React.useState(8)

  const incrementCount = () => {
    setCount(count+1);

}

let modifierNum = Math.floor(((count)-10)/2)

let modifier = ""
if(modifierNum > 0){
  modifier = "+" + modifierNum
}
else{
  modifier = modifierNum.toString()
}

const decrementCount = () => {
  setCount(count-1);  
}

    return (
      <div className="col bg-light text-center border rounded-top mt-2 mb-4">
        <label>{props.stats}</label>
        <div className="display-4 text-muted d-and-d-statbox-modifier">{modifier}</div>
        <div className="row justify-content-center mb-2">
          <button type="button" class="btn btn-danger align-self-center" onClick={decrementCount}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
          <div>
            <span className="mx-1 border-danger text-center dndstatrow">
              {count}
            </span>
          </div>

          <button type="button" class="btn btn-danger align-self-center" onClick={incrementCount}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
}

