import React from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';

export default function StatBox(props) {
  const[count, setCount] = React.useState(8)

  const incrementCount = () => {
    setCount(count+1);

}

const decrementCount = () => {
  setCount(count-1);  
}

// const [modifier, setModifier] = React.useState(1)

// const updateModifier = () => {
//   if (count===1) {
//     modifier = -1;
//   }
//   else if () {
//     modifier = ??;
//   }
//   else if () {
//     modifier = ??;
//   }
//   else if () {
//     modifier = ??;
//   }
//   else if () {
//     modifier = ??;
//   }
// }
    return (
      <div className="col text-center border border-danger rounded mt-2 mb-2">
        <label>{props.stats}</label>
        <div className="d-and-d-statbox-modifier">0</div>
        <div className="row justify-content-center mb-2">
          <Button 
          onClick={decrementCount} 
          size="sm" 
          variant="contained" 
          color="error">
            <ArrowBackIosIcon fontSize="small"/>
          </Button>
          <input className="form-control text-center w-25 my-0 mx-1 h-50 text" 
          value={count}
          />
          <Button onClick={incrementCount} size="sm" variant="contained" color="error">
            <ArrowForwardIosIcon fontSize="small"/>
          </Button>
        </div>
      </div>
    );
}

