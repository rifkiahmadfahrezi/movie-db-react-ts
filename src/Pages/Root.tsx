import { Outlet } from "react-router"
import Navbar from "../Components/Navbar"

export default function Root() {
  return (
    <>
      <Navbar />

      <main className="mb-[50px] container mx-auto px-4">
         <Outlet />
      </main>
    </>
  )
}
