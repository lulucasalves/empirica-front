import { createSlice } from '@reduxjs/toolkit'
import { IOrderBy, IProductData, IProductStore } from 'types'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 }
      }
    ],
    sortBy: 'popular'
  },
  reducers: {
    createProduct: (state: IProductStore, action) => {
      state.products.push(action.payload)
    },
    setAllProducts: (state: IProductStore, action) => {
      state.products = action.payload
    },
    changeOrder: (state: IOrderBy, action) => {
      state.sortBy = action.payload
    },
    editProduct: (state: IProductStore, action) => {
      let nullArray = [] as Array<IProductData>
      const payl = action.payload

      state.products.map((val: IProductData) => {
        if (val.id === payl.id) {
          val = payl
        }
        nullArray.push(val)
        return null
      })

      state.products = nullArray
    },
    excludeProduct: (state: IProductStore, action) => {
      let nullArray = [] as Array<IProductData>
      const payl = action.payload

      state.products.map((val: IProductData) => {
        if (val.id !== payl) {
          nullArray.push(val)
        }

        return null
      })

      state.products = nullArray
    }
  }
})

export const {
  createProduct,
  excludeProduct,
  editProduct,
  changeOrder,
  setAllProducts
} = productSlice.actions
export const productReducer = productSlice.reducer
