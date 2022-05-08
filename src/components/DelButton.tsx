import { delRequest } from '../global/types'

const DelButton = ({
  deletePerson,
  personID,
}: {
  deletePerson: delRequest
  personID: string
}) => {
  return (
    <>
      <button onClick={() => deletePerson(personID)}>delete</button>
    </>
  )
}

export default DelButton
