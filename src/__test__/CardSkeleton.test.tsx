import CardSkeleton from "../Components/CardSkeleton";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Card skeleton', () => { 
   it('should render on a document', () => {
      render(<CardSkeleton/> )

      const cardSkeleton = screen.getByTestId('card-skeleton')

      expect(cardSkeleton).toBeInTheDocument()
   })
 })