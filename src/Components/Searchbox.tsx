// import React from 'react'
import { memo, useState } from "react"
import { useSearchParams } from "react-router-dom"

const Searchbox = () => {

   const [keyword, setKeyword] = useState<string>('')
   const [ searchParams, setSearchParams ] = useSearchParams()
   const keywordParams = searchParams.get('keyword') ?? ''

   const onChangeHandler = (e : any) => {
      const { value } = e.target
      // console.log(value)
      setKeyword(value)
   }

   const submitHandler = (e : any) => {
      e.preventDefault()
      setSearchParams({keyword: keyword})
   }

  return (
   <form className="flex w-full lg:max-w-[400px]" onSubmit={submitHandler}>
      <input 
         onChange={onChangeHandler}
         type="search" 
         defaultValue={keywordParams}
         placeholder="Search movie..." 
         className="input input-bordered input-info w-full" />
   </form>
  )
}

export default memo(Searchbox)
