import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'

interface IInputSelect extends InputHTMLAttributes<HTMLSelectElement> {
  label: string
  message?: string
  options: string[]
}

type Props = HTMLSelectElement

const InputSelectComponent: ForwardRefRenderFunction<Props, IInputSelect> = (
  { label, options, message, ...props },
  ref
) => {
  return (
    <div className="selectComponent">
      <label>{label}</label>
      <select ref={ref} {...props} id="asdf">
        <option value="" hidden>
          {label}
        </option>
        {options.map((e) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          )
        })}
      </select>
      <div className="error">
        <span>{message}</span>
      </div>
    </div>
  )
}

export const InputSelect = forwardRef(InputSelectComponent)
