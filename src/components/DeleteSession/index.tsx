import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useMemo, useState } from 'react'

import { getProductById, deleteProductById } from 'services'
import { IProductData } from 'types'
import { excludeProduct } from 'store/products'

export function DeleteSession({ id }: { id: number }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [product, setProduct] = useState<IProductData>({
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: { rate: 0, count: 0 }
  })

  async function deleteProductData() {
    await deleteProductById(id)
      .then(() => {
        dispatch(excludeProduct(id))
        navigate('/')
      })
      .catch((err) => console.log(err))
  }

  useMemo(() => {
    ;(async () => {
      await getProductById(id)
        .then((res: unknown) => {
          if (res) {
            setProduct(res as IProductData)
          } else {
            navigate('/')
          }
        })
        .catch(() => navigate('/'))
    })()
  }, [id, navigate])

  return (
    <div className="deleteSection">
      <p className="formTitle">Delete product</p>
      <p>Do you want to delete product {product.title}?</p>
      <div
        className="image"
        title={product.title}
        style={{ backgroundImage: `url('${product.image}')` }}
      />
      <div className="deleteButtons">
        <button onClick={() => navigate('/')}>Cancel</button>
        <button onClick={deleteProductData}>Delete</button>
      </div>
    </div>
  )
}
