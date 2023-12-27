interface IFormCheckbox {
    isChecked: boolean
    onChange: () => void
}

export const FormCheckbox = ({ isChecked, onChange }: IFormCheckbox) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" className="checkbox checkbox-primary" checked={isChecked} onChange={onChange} />
                <span className="label-text">I agree</span>
            </label>
        </div>
    )
}
