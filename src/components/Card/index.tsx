import { AiFillStar } from 'react-icons/ai'
import { IProductData } from 'types'

export function Card({
  image,
  title,
  price,
  rating,
  description
}: IProductData) {
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
        <div>
          <p>Edit</p>
        </div>
        <div>
          <p>Delete</p>
        </div>
      </div>
    </div>
  )
}
