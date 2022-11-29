import { BiStoreAlt, BiCart, BiPlus } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

export function PageTemplate({ children }: { children: JSX.Element }) {
  const navigate = useNavigate()

  return (
    <section className="sectionTemplate">
      <div className="header">
        <BiStoreAlt onClick={() => navigate('/')} className="logo" />
        <ul>
          <li onClick={() => navigate('/')}>
            <div>
              <BiCart />
              All Products
            </div>
          </li>
          <li onClick={() => navigate('/create')}>
            <div>
              <BiPlus />
              New Product
            </div>
          </li>
        </ul>
      </div>
      <div className="content">{children}</div>
    </section>
  )
}
