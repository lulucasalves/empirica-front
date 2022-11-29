import * as yup from 'yup'

export const createSchema = yup.object().shape({
  title: yup.string().required('Inform the name of the product!'),
  image: yup.string().required('Enter the url of the product image!'),
  price: yup.string().required('Inform the price of the product!'),
  category: yup.string().required('Enter the product category!'),
  description: yup.string().required('Enter the product description!')
})
