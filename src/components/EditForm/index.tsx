import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { createSchema } from 'schemas/createSchema'
import { Input, DoubleInputs, InputSelect } from 'components'
import { editProduct } from 'store/products'
import { IProductData } from 'types'
import { putProduct, getCategories } from 'services'

interface IEditForm {
  title: string
  price: number
  description: string
  category: string
  image: string
}

export function EditForm({
  id,
  title,
  price,
  description,
  category,
  image
}: IProductData) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IEditForm>({
    resolver: yupResolver(createSchema)
  })
  const [categories, setCategories] = useState<string[]>([])

  useMemo(() => {
    ;(async () => {
      await getCategories()
        .then((res: unknown) => setCategories(res as string[]))
        .catch((err) => console.log(err))
    })()
  }, [])

  useEffect(() => {
    setValue('title', title)
    setValue('price', price)
    setValue('description', description)
    setValue('category', category)
    setValue('image', image)
  }, [title, price, description, category, image, setValue])

  async function onSubmit({
    title,
    price,
    description,
    category,
    image
  }: IEditForm) {
    await putProduct({ id, title, price, description, category, image })
      .then(() =>
        dispatch(
          editProduct({
            id,
            title,
            price,
            description,
            category,
            image
          })
        )
      )
      .catch((err) => console.log(err))
    navigate('/')
  }

  return (
    <div className="sectionForm">
      <p className="formTitle">Edit product</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DoubleInputs>
          <>
            <Input
              defaultValue={title}
              placeholder="Enter the product title"
              type="text"
              label="Title"
              error={errors.title?.message}
              {...register('title')}
            />
            <Input
              placeholder="Enter product price"
              type="number"
              label="Price"
              maxLength={17}
              error={errors.price?.message}
              {...register('price')}
            />
          </>
        </DoubleInputs>
        <DoubleInputs>
          <>
            <Input
              placeholder="Enter an image url"
              type="text"
              label="Image"
              error={errors.image?.message}
              {...register('image')}
            />
            <InputSelect
              {...register('category')}
              options={categories}
              label="Category"
              message={errors && errors.category?.message}
            />
          </>
        </DoubleInputs>
        <Input
          placeholder="Enter the description"
          type="text"
          label="Description"
          error={errors.image?.message}
          {...register('description')}
        />
        <div className="buttonsSubmit">
          <button type="button" onClick={() => navigate('/')}>
            Cancelar
          </button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}
