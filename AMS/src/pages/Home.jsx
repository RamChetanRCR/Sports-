import React from 'react'
import Slider from "../components/Slider";
import Features from "../sections/Features";
const Home = () => {
  return (
    <>
      <section>
        <Slider />
      </section>
      
      <section>
        <Features />
      </section>
    </>
  )
}

export default Home