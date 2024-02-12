// import React from 'react'

// import { useEffect } from "react"
import { useTheme } from "../store/theme"



export default function ThemeToggler() {

   const { theme, updateTheme } = useTheme()


   function setTheme(currentheme = 'dracula') {
      switch(currentheme){
         case 'dracula': 
            localStorage.setItem("theme", "night")
            document.documentElement.setAttribute("data-theme", "night")
         break;
         default:
            localStorage.setItem("theme", "dracula")
            document.documentElement.setAttribute("data-theme", "dracula")
         break;
      }
   }

   function updateClickHandler() {
      updateTheme()
      setTheme(theme)
   }

  return (
   <label className="flex cursor-pointer gap-2" onClick={updateClickHandler}>
      <input type="checkbox" className="toggle theme-controller"/>
   </label>
  )
}
