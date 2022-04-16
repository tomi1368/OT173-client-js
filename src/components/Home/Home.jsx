import React from "react"
import Footer from "./presentational/Footer/Footer"
import HelloUser from "./presentational/HelloUser/HelloUser"
import HomeSlider from "../../components/Slider"
import News from "./presentational/News/News"
import NavBar from "./presentational/NavBar/NavBar"
import Testimonials from "./presentational/Testimonials/Testimonials"



const Home = () => {
  return (
    <>
      <NavBar/>
      <HomeSlider/>
      <HelloUser/>
      <News/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home