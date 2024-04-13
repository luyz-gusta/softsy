const Button = (props) => {
    return (
        <button className="action-btn" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button