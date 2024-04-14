const DropdownBank = ({ forLabel, label, disable, onSelect, banks, bankValue }) => {
    return (
        <div className="input-label">
            <label htmlFor={forLabel}>{label}</label>
            <select
                name={forLabel}
                id={forLabel}
                dir="lft"
                required={true}
                disabled={disable}
                onChange={(e) => onSelect(e.target.value)}
            >
                <option value="">{bankValue}</option>
                {banks.map(bank => (
                    <option key={bank.ispb} value={bank.name}>{bank.name}</option>
                ))}
            </select >
        </div >
    )
}

export default DropdownBank