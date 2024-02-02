import React, { useEffect, useState } from 'react'
import Card from '../Card'
import CardGridContainer from '../CardGridContainer'
import { movies } from '../../API/movies'
import CardSkeleton from '../CardSkeleton'
import { useSearchParams } from 'react-router-dom'

const Main : React.FC = () => {
   const [searchParams, setSearchParams] = useSearchParams()

   const [movieData, setMovieData] = useState<any[]>([])
   const [loading, setLoading] = useState<boolean>(true)
   
   const keywordParams = searchParams.get('keyword')


   useEffect(() => {
      const fetchMovies = async () => {
         try {
            // movieData([])
            setLoading(true)

            const movie = {
               all: 'discover/movie',
               search: 'search/movie'
            }

            let response

            if(!keywordParams){
               response = await movies.get(movie.all)
            }else{
               response = await movies.get(`${movie.search}?query=${keywordParams}`)
            }


            const {data, status} = response
            
            if(status === 200) {
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
         {movieData?.map((item) => (
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


   </>
  )
}


export default Main