import { margin } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom";

import Select from "react-select";

 export default function Main(){
  let options = [
    { value: "Spring", label: "Spring", color: "#498205" },
    { value: "Summer", label: "Summer", color: "#c19c00" },
    { value: "Autumn", label: "Autumn", color: "#da3b01" },
    { value: "Winter", label: "Winter", color: "#004e8c" }
  ];


 let styles = {
    control: (provided, state) =>({
      ...provided,
      border: state.isFocused ? "1px solid #5bd4d0" : "1px solid #cccccc",
      boxShadow: state.isFocused ? "0px 0px 6px #5bd4d0" : "none",
      "&:hover": {
        border: "1px solid #5bd4d0",
        boxShadow: "0px 0px 6px #5bd4d0"
        
      }

    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "white",
      backgroundColor: state.isSelected? "red" : "black",
      "&:hover": {
        
        backgroundColor:"white"
      },

      fontSize: state.selectProps.myFontSize
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize
    })
  };

    return (

      <Select  myFontSize="20px" options={options} styles={styles} />

    );

}


