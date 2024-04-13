const DropdownBank = (props) => {
    return (
        <div className="input-label">
            <label htmlFor={props.forLabel}>{props.label}</label>
            <select name={props.forLabel} id={props.forLabel} dir="lft" required={true}>
                <option value="">Escolha um banco</option>
                {props.banks.map(bank => (
                    <option key={bank.ispb} value={bank.name}>{bank.name}</option>
                ))}
            </select >
        </div >
    )
}

export default DropdownBank