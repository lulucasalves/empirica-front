import { AxiosError, AxiosResponse } from 'axios'

import { IProductPost } from 'types'

import { api } from '../api'

export function putProduct({
  id,
  title,
  price,
  description,
  image,
  category
}: IProductPost) {
  return new Promise((resolve, reject) => {
    const productObject = { title, price, description, image, category }
    ;(async () => {
      await api
        .put(`products/${id}`, productObject)
        .then((res: AxiosResponse) => {
          const data = res.data
          if (res.status === 200 || res.status === 201) {
            resolve(data)
          } else {
            reject(data.message)
          }
        })
        .catch((error: AxiosError) => reject(error))
    })()
  })
}
