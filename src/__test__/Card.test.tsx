import {render, screen} from '@testing-library/react'
import Card from '../Components/Card'
import '@testing-library/jest-dom'

describe('Card component', () => { 
   
   it('should display card on a document propperly', () => {

      render(<Card 
         title='a cool movie'
         description='movie description'
         image='movie.jpg'
         rating={7}/> )

      const card = screen.getByTestId('card')
      
      expect(card).toBeInTheDocument()
      
   })

   it('should display title,description and rating propperly', () => {

      render(<Card 
         title='a cool movie'
         description='movie description'
         image='movie.jpg'
         rating={7}/> )

      const title = screen.getByTestId('card-title')
     
      const description = screen.getByTestId('card-description')
      const rating = screen.getByTestId('card-rating')

      expect(title).toHaveTextContent('a cool movie')
     
      expect(description).toHaveTextContent('movie description')
      expect(rating).toHaveTextContent('7')
   })

   it('should have a given image src', () => {

      render(<Card 
         title='a cool movie'
         description='movie description'
         image='movie.jpg'
         rating={7}/> )

      const image = screen.getByTestId('card-image')
      expect(image).toHaveAttribute('src', 'movie.jpg')
   })
 })