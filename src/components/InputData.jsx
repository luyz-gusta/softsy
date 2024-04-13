import '../assets/styles/createUser.css'

const InputData = (props) => {
    return (
        <div className="input-label">
            <label htmlFor={props.forLabel}>{props.label}</label>
            <input type="text"
                id={props.forLabel}
                name={props.forLabel}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeHolder}
                disabled={props.disabled}
                required={props.required}
                maxLength={props.length}
            />
        </div>
    )
}

export default InputData