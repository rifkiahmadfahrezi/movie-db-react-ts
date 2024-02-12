import React, { useEffect, useMemo, useState } from 'react'
import Card from '../Card'
import CardGridContainer from '../CardGridContainer'
import { movies } from '../../API/movies'
import CardSkeleton from '../CardSkeleton'
import { useSearchParams } from 'react-router-dom'

const Main : React.FC = () => {

   const [searchParams] = useSearchParams()

   const [movieData, setMovieData] = useState<any[]>([])
   const [loading, setLoading] = useState<boolean>(true)
   
   const keywordParams = searchParams.get('keyword')

   const movieDataMemo = useMemo(() => {
      if(movieData){
         return movieData
      }else{
         return null
      }
   }, [movieData])


   useEffect(() => {
      const fetchMovies = async () => {
         try {
            setMovieData([])
            setLoading(true)

            const movie = {
               all: 'discover/movie',
               search: 'search/movie'
            }

            let response

            if(!keywordParams){
               response = await movies.get(movie.all)
            }else{
               // setLoading(true)
               response = await movies.get(`${movie.search}?query=${keywordParams}`)
            }


            const {data, status} = response
            // console.log(data)
            
            if(status === 200) {
               // console.log(data)
               setMovieData(data.results)
            }
            setLoading(false)
         } catch (error) {
            setLoading(false)
            console.error(error)
         }
      }

      fetchMovies()
   }, [keywordParams])

  return (
   <> 
      <CardGridContainer>
         {movieDataMemo?.map((item) => (
            <Card key={item.id} 
               id={item.id}
               title={item.title}
               description={item.overview}
               image={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
               rating={item.vote_average}
               />
         ))}
         {loading && <CardSkeleton num={4}/>}
      </CardGridContainer>

      {!loading && <div className="relative flex py-5 items-center my-[50px]">
                     <div className="flex-grow border-t border-base"></div>
                     <span className="flex-shrink mx-4 text-base capitalize">end of content</span>
                     <div className="flex-grow border-t border-base"></div>
                  </div>
            }

   </>
  )
}


export default Main