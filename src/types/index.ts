export interface IProductData {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: { rate: number; count: number }
}

export interface IProductStore {
  products: IProductData[]
}

export interface IOrderBy {
  sortBy: string
}

export interface IProductCreate {
  title: string
  price: number
  description: string
  category: string
  image: string
}

export interface IProductPost {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}