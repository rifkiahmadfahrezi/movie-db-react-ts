import { useNavigate, useParams } from "react-router"
import { movies } from "../API/movies"
import { useState, useEffect } from "react"
import TextLoading from "../Components/TextLoading"


export default function Detail() {
   const {movieID} = useParams()

   const navigate = useNavigate()

   const [ movieData, setMovieData ] = useState<any>([])

   useEffect(() => {
         const fetchMovie = async(id : string | number) => {
            try{
               const response = await movies.get(`movie/${id}`)

               const { data, status } = response
               // console.log(data)
               // console.log(data)

               if(status === 200) setMovieData(data)

            }catch(error){
               console.error(error)
            }
         }

         if(movieID) fetchMovie(movieID)
      
   }, [movieID])

   function endPulsing(e : any){
      const target = e.target as Element
      target.classList.remove('animate-pulse')
      // console.log('image loaded!')
   }


  return (
   <> <img 
         src={`https://image.tmdb.org/t/p/original${movieData?.backdrop_path}`} 
         className="fixed inset-0 z-[-1] top-0 w-full min-h-screen object-cover opacity-10" 
         alt="" />

      <button className="btn btn-neutral capitalize flex items-center max-w-fit mt-5" onClick={() => navigate(-1)}>
         <span className="text-xl">&laquo;</span> <span>back to home</span>
      </button>

      <div className="flex flex-col lg:flex-row mt-10 gap-4">
         <figure className="w-full mx-auto lg:w-2/4 md:max-w-fit h-[550px] overflow-hidden shadow-lg">
            <img 
               src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`} 
               className="object-contain w-full h-full animate-pulse lg:bg-stone-500 lg:min-w-[350px]"
               onLoad={endPulsing}
               alt={`poster of ${movieData?.title}`} />
         </figure>

         <figcaption className="w-full lg:w-2/4 mb-10 flex flex-col justify-center">
            <article>
               <h1 className="text-3xl font-bold mb-3">{movieData?.title || <TextLoading height="h-10"/>  }</h1>
               {movieData?.tagline && 
               <h2 className="text-xl ">{movieData?.tagline ||  <TextLoading width="w-2/4"/> }</h2>
               }

               <p className="text-md lg:text-lg mt-10">{movieData?.overview || <TextLoading num={3}/> }</p>
            </article>

            <div className="flex flex-wrap gap-2 mt-10">
            {movieData?.genres?.map((item : any) => (
               <div className="badge badge-success text-lg py-4" key={item.id}>{item.name}</div>
               ))}
            </div>
         </figcaption>
      </div>
   </>
  )
}
