import { IProductCreate } from 'types'
import { api } from '../api'

export function postProduct({
  title,
  price,
  description,
  image,
  category
}: IProductCreate) {
  return new Promise((resolve, reject) => {
    const productObject = { title, price, description, image, category }
    ;(async () => {
      await api
        .post(`products`, productObject)
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
