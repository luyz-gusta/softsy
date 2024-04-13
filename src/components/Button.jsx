const Button = (props) => {
    return (
        <button type="button" className="action-btn" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button