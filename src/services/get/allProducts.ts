import { AxiosError, AxiosResponse } from 'axios'

import { api } from '../api'

export function getAllProducts() {
  return new Promise((resolve, reject) => {
    ;(async () => {
      await api
        .get(`products`)
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
