import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { PageTemplate, EditForm } from 'components'
import { getProductById } from 'services'
import { IProductData } from 'types'

export default function Create() {
  const navigate = useNavigate()
  const [product, setProduct] = useState<IProductData>({
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: { rate: 0, count: 0 }
  })
  const { id } = useParams()

  useMemo(() => {
    ;(async () => {
      await getProductById(parseInt(id as string))
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
    <PageTemplate>
      <EditForm
        id={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        image={product.image}
        category={product.category}
        rating={product.rating}
      />
    </PageTemplate>
  )
}
