import { Outlet } from "react-router"
import Navbar from "../Components/Navbar"

export default function Root() {
  return (
    <>
      <Navbar />

      <main className="container mx-auto px-4">
         <Outlet />
      </main>
    </>
  )
}
