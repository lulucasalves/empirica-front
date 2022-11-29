import { forwardRef, InputHTMLAttributes } from 'react'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const InputElement = (
  { label, error, ...rest }: IInput,
  ref: React.Ref<HTMLInputElement>
) => {
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <br />
      <input ref={ref} id={label} {...rest} />
      <p className="error">{error}</p>
    </div>
  )
}

export const Input = forwardRef(InputElement)
