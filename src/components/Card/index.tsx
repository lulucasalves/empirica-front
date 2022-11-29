import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import { IProductData } from 'types'

export function Card({
  id,
  image,
  title,
  price,
  rating,
  description
}: IProductData) {
  const navigate = useNavigate()

  return (
    <div className="card">
      <div className="rating">
        <p>{rating.rate}</p>
        <AiFillStar />
      </div>
      <div
        className="image"
        title={title}
        style={{ backgroundImage: `url('${image}')` }}
      />
      <p className="cardTitle" title={description}>
        {title}
      </p>
      <p className="cardPrice">$ {price}</p>
      <div className="cardOptions">
        <div onClick={() => navigate(`/update/${id}`)}>
          <p>Edit</p>
        </div>
        <div onClick={() => navigate(`/delete/${id}`)}>
          <p>Delete</p>
        </div>
      </div>
    </div>
  )
}
