import * as yup from 'yup'

export const createSchema = yup.object().shape({
  title: yup.string().required('Informe o nome do produto!'),
  image: yup.string().required('Informe a url da imagem do produto!'),
  price: yup.string().required('Informe o preço do produto!'),
  category: yup.string().required('Informe a categoria do produto!'),
  description: yup.string().required('Informe a descrição do produto!')
})
