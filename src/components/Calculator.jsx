import "../styles.css";

export function Calulator() {
    const keypad = [7, 8, 9, '/', 4, 5, 6, '*', 7, 8, 9, '-', 1, 2, 3, '+', 'C', 0, '.', '='];
  
    return (
      <div className="grid">
        {keypad.map((item, index) => {
            let temp = (typeof item === 'string');
          return (
            <button key={index} className={`calcButton${temp ? ' calcIcon' : ''}`}>
              {" "}
              {item}{" "}
            </button>
          );
        })}
      </div>
    );
  }
  