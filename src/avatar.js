import { AVATAR_URL, NAME } from './metadata'

const Avatar = () => {
  return (
    <div>
      <img
        src={AVATAR_URL}
        className='circle mb-3'
        style={{ maxWidth: '150px', cursor: 'pointer' }}
      />
      <h1 className='mb-4 lh-condensed'>{NAME}</h1>
    </div>
  )
}

export default Avatar
