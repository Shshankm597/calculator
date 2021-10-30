import { useState } from "react";
import "../styles.css";


export function Calulator() {
    const [displayValue, setDisplayValue] = useState("");


    const keypad = [7, 8, 9, '/', 4, 5, 6, '*', 7, 8, 9, '-', 1, 2, 3, '+', 'C', 0, '.', '='];


    const handleClear = () => {
        setDisplayValue("");
    }

    const calculate = () => {
        setDisplayValue(parseFloat(eval(displayValue)).toPrecision(5).toString())
    }

    const handleClick = (value) => {
        switch(value) {
            case 'C':
                handleClear();
                break;
            case '=':
                calculate();
                break;
            default:
                setDisplayValue(displayValue.concat(value))
        }
    }
  
    return (
      <div>
          <input type="text" value={displayValue} readOnly className="displayArea"/>
          <div className="grid">
            {keypad.map((item, index) => {
                let temp = (typeof item === 'string');
              return (
                <button key={index} className={`calcButton${temp ? ' calcIcon' : ''}`} onClick={() => handleClick(item)}>
                  {" "}
                  {item}{" "}
                </button>
              );
            })}
          </div>
      </div>
    );
  }
  