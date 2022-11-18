import React from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';

export default function StatBox(props) {
  const[count, setCount] = React.useState(8)

  const incrementCount = () => {
    setCount(count+1);

}

let modifier = "15"
if (count && !isNaN){
  const modifierNum = Math.floor(Number(count)-10/2)
  if(modifierNum > 0){
    modifier = "+" + modifierNum
  }
  else{
    modifier = modifierNum.toString()
  }
}


const decrementCount = () => {
  setCount(count-1);  
}

    return (
      <div className="col text-center border border-danger rounded mt-2 mb-2">
        <label>{props.stats}</label>
        <div className="d-and-d-statbox-modifier">{modifier}</div>
        <div className="row justify-content-center mb-2">
          <Button
            onClick={decrementCount}
            onChange={(e) => count.onChange(count, e.target.value)}
            size="sm"
            variant="contained"
            color="error"
          >
            <ArrowBackIosIcon fontSize="small" />
          </Button>
          <div>
            <span className="mx-1 border-danger text-center dndstatrow">
              {count}
            </span>
          </div>
          <Button
            onClick={incrementCount}
            onChange={(e) => count.onChange(count, e.target.value)}
            size="sm"
            variant="contained"
            color="error"
          >
            <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </div>
      </div>
    );
}

