// import React from 'react'

interface Props {
   num?: number
}

export default function CardSkeleton(props: Props) {

   const { num = 1 } = props

   
   
  return (
      <>
         {Array(num).fill(0).map((_, i) => (
            <div className="card min-h-[350px] bg-base-100 min-w-56 drop-shadow-[0_0_5px_rgba(255,255,255,0.25)]" data-testid="card-skeleton" key={i}>
               <div className="skeleton h-32 w-full"></div>
               <div className="flex flex-col gap-4 min-w-52 mt-10 p-4">
                  <div className="skeleton h-5 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  
                  <div className="">
                     <div className="ml-auto skeleton h-4 w-[50px]"></div>
                  </div>
               </div>
            </div>
         ))}
      </>
   )
}
   
