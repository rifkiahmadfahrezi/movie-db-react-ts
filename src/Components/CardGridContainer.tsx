// import React, {JSX} from 'react'

import { ReactNode } from "react"

interface Props {
   children: ReactNode
}

const CardGridContainer = (props: Props) => {

   const { children } = props

  return (
   <main className="mx-auto container px-4 mt-10">
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
         {children}
      </div>
   </main>
  )
}

export default CardGridContainer
