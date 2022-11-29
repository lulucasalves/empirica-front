import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useMemo, useState } from 'react'

import { createSchema } from 'schemas/createSchema'
import { Input, DoubleInputs, InputSelect } from 'components'
import { getCategories, postProduct } from 'services'
import { createProduct } from 'store/products'
import { IProductPost } from 'types'

interface ICreateForm {
  title: string
  price: number
  description: string
  category: string
  image: string
}

export function CreateForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ICreateForm>({
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

  async function onSubmit({
    title,
    price,
    description,
    category,
    image
  }: ICreateForm) {
    await postProduct({ title, price, description, category, image })
      .then((res: unknown) =>
        dispatch(
          createProduct({
            ...(res as IProductPost),
            rating: { rate: 0, count: 0 }
          })
        )
      )
      .catch((err) => console.log(err))
    navigate('/')
  }

  return (
    <div className="sectionForm">
      <p className="formTitle">Create new product</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DoubleInputs>
          <>
            <Input
              placeholder="Digite o título do produto"
              type="text"
              label="Title"
              error={errors.title?.message}
              {...register('title')}
            />
            <Input
              placeholder="Digite o preço do produto"
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
              placeholder="Digite uma url de imagem"
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
          placeholder="Digite a descrição"
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
