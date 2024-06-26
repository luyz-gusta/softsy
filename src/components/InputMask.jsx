import ReactInputMask from "react-input-mask"

const InputMask = (props) => {
    return (
        <div className="input-label">
            <label htmlFor={props.forLabel}>{props.label}</label>
            <ReactInputMask
                mask={props.mask}
                maskChar={null}
                type="text"
                id={props.forLabel}
                name={props.forLabel}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeHolder}
                disabled={props.disable}
                onBlur={props.onBlur}
                required={props.required}
                onBlurCapture={props.onBlur}
            />
        </div>
    )
}


export default InputMask