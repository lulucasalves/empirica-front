import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { IRootState } from 'store'
import { getAllProducts } from 'services/get/allProducts'
import { setAllProducts } from 'store/products'
import { IProductData } from 'types'
import { PageTemplate, Card, Cards } from 'components'

export default function Read() {
  const { products } = useSelector((auth: IRootState) => auth.products)
  const dispatch = useDispatch()

  useMemo(() => {
    if (products.length < 10) {
      ;(async () => {
        await getAllProducts()
          .then((res: unknown) => dispatch(setAllProducts(res)))
          .catch((err) => console.log(err))
      })()
    }
  }, [dispatch])

  return (
    <PageTemplate>
      <Cards>
        <>
          {products.length &&
            products.map(
              ({
                description,
                rating,
                price,
                title,
                image,
                id,
                category
              }: IProductData) => (
                <Card
                  category={category}
                  id={id}
                  description={description}
                  rating={rating}
                  key={id}
                  price={price}
                  title={title}
                  image={image}
                />
              )
            )}
        </>
      </Cards>
    </PageTemplate>
  )
}
