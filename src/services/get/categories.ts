import { api } from '../api'

export function getCategories() {
  return new Promise((resolve, reject) => {
    ;(async () => {
      await api
        .get(`products/categories`)
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
