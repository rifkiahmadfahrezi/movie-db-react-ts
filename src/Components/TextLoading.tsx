// import React from 'react'

interface Props{
   num?: number,
   width?: string,
   height?: string
}


export default function TextLoading({num = 1, width = 'w-full', height = 'h-4'} : Props) {
  return (
    <>
      <span className="flex flex-col gap-2">
         {Array(num).fill(0).map((_, i) => (
            <span className={`skeleton ${width} ${height}`} key={i}></span>
         ))}
      </span>
    </>
  )
}
