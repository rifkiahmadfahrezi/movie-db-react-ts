import axios from "axios";

export const movies = axios.create({
   baseURL: "https://api.themoviedb.org/3/",
   headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGUxNjM1YzMzZTQwZWNmOTI2MTU2NDkxNGRlMzM1OCIsInN1YiI6IjY1YmI4OGRjMmI4YTQzMDE3YjFiZDc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ggh7sJO7ziNitOJbgi_hY1nNDgBSde56wZS952Nc1eQ`
   }
})