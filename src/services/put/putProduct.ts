import { IProductData } from 'types'
import { api } from '../api'

export function postProduct({
  id,
  title,
  price,
  description,
  image,
  category
}: IProductData) {
  return new Promise((resolve, reject) => {
    const productObject = { title, price, description, image, category }
    ;(async () => {
      await api
        .put(`products/${id}`, productObject)
        .then((res: any) => {
          const data = res.data
          if (res.status === 200 || res.status === 201) {
            resolve(data)
          } else {
            reject(data.message)
          }
        })
        .catch((error: any) => reject(error))
    })()
  })
}
