import { useParams } from 'react-router-dom'

import { DeleteSession, PageTemplate } from 'components'

export default function Delete() {
  const { id } = useParams()

  return (
    <PageTemplate>
      <DeleteSession id={parseInt(id as string)} />
    </PageTemplate>
  )
}
