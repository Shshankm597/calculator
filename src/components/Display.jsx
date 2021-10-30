

export function Display(props) {
    console.log(props)
    return (
            <input value={props.displayValue} className="displayArea"/>
    )
}