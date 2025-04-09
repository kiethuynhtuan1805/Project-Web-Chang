import { Icon } from '@iconify/react'

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const halfStar = hasHalfStar ? 1 : 0
  const emptyStars = 5 - fullStars - halfStar
  const stars = []
  let id = 0
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Icon
        icon="material-symbols:star-rounded"
        width="24"
        height="24"
        color="#FEBA17"
        key={id++}
      />
    )
  }

  if (halfStar) {
    stars.push(
      <Icon
        icon="material-symbols:star-half-rounded"
        width="24"
        height="24"
        color="#FEBA17"
        key={id++}
      />
    )
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Icon icon="material-symbols:star-outline-rounded" width="24" height="24" key={id++} />
    )
  }

  return stars
}

export default StarRating
