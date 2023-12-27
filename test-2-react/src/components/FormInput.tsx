interface IFormInput {
    value: string
    onChange: (string: string) => void
}

export const FormInput = ({ value, onChange }: IFormInput) => {
    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">Email</span>
            </div>
            <input
                type="text"
                placeholder="Type here"
                className="input"
                value={value}
                onChange={(e: any) => onChange(e.target.value)}
            />
            {/* <div className="label">
              <span className="label-text-alt">Helper text</span>
          </div> */}
        </label>
    )
}
