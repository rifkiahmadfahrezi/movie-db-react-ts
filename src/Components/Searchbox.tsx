// import React from 'react'
import { memo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Searchbox = () => {

   const navigate = useNavigate()
   const [keyword, setKeyword] = useState<string>('')
   const [ searchParams, setSearchParams ] = useSearchParams()
   const keywordParams = searchParams.get('keyword') ?? ''

   const onChangeHandler = (e : any) => {
      const { value } = e.target
      // console.log(value)
      
      if(!value) {
         console.log('value')
         searchParams.delete('keyword')
         setSearchParams({keyword: ''})
         setKeyword('')
      }else{
         setKeyword(value)
      }

   }

   const submitHandler = (e : any) => {
      e.preventDefault()
      const url = new URL(window.location.href)
      if( url.pathname !== '/'){
         navigate(`${window.location.origin}`)
      }
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
