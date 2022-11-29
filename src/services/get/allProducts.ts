import { api } from '../api'

export function getAllProducts() {
  return new Promise((resolve, reject) => {
    ;(async () => {
      await api
        .get(`products`)
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
