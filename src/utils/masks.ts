import { ChangeEvent } from 'react'

export const moneyMask = (event: ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value
    .replace('.', '')
    .replace(',', '')
    .replace(/\D/g, '')

  const options = { minimumFractionDigits: 2 }
  const result = new Intl.NumberFormat('en-US', options).format(
    parseFloat(value) / 100
  )

  return isNaN(parseInt(result)) ? '$ 0.00' : '$' + ' ' + result
}

export const convertToInt = (event: ChangeEvent<HTMLInputElement>) => {
  const sanitizedValue = parseInt(event.target.value.replace(/\D/g, ''))

  return sanitizedValue
}
