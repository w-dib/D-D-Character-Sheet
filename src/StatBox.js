import React from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';

export default function StatBox(props) {
  
    return (
      <div className="col text-center border border-danger rounded mt-2 mb-2">
        <label>{props.stats}</label>
        <div className="d-and-d-statbox-modifier">0</div>
        <div className="row justify-content-center mb-2">
          <Button size="sm" variant="contained" color="error">
            <ArrowBackIosIcon fontSize="small"/>
          </Button>
          <input className="form-control w-25 my-0 mx-1 h-50" />
          <Button size="sm" variant="contained" color="error">
            <ArrowForwardIosIcon fontSize="small"/>
          </Button>
        </div>
      </div>
    );
}

