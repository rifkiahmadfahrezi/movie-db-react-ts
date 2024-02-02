import { memo } from 'react'
import { Link } from 'react-router-dom'

interface Props {
   id: string,
   image: string,
   title: string,
   description: string,
   rating: number
}

const Card = (props: Props) => {

   const {id, image, title, description, rating} = props

  return (
   <div className="card min-w-56 drop-shadow-[0_0_5px_rgba(255,255,255,0.25)] bg-base-100" data-testid="card">
      <figure>
         <img 
            data-testid="card-image"
            loading='lazy'
            src={image} 
            className='min-h-[200px] object-cover'
            alt={`image of ${title}`} />
      </figure>
      <div className="card-body group">
         <div className="card-actions justify-end">
            {(rating > 7.5) && <div data-testid="card-rating" className="badge badge-success">{rating}</div> }
            {(rating <= 7.5 && rating >= 4) && <div data-testid="card-rating" className="badge badge-warning">{rating}</div> }
            {(rating < 4) && <div data-testid="card-rating" className="badge badge-error">{rating}</div> }
         </div>
         <article className='my-7'>
            <h1 className="card-title" data-testid="card-title">
               {title}
            </h1>
            <p className='line-clamp-3' data-testid="card-description">{description}</p>
         </article>
         <div className="">
            <Link to={`/detail/${id}`} className="btn btn-success capitalize">view details</Link>
         </div>
      </div>
   </div>
  )
}

export default memo(Card)