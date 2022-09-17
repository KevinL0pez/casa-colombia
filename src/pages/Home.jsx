import React from 'react'
import { HomeDescription } from '../components/HomeDescription/HomeDescription'
import { HomeSpecification } from '../components/HomeSpecification/HomeSpecification'
import { HomeDetails } from '../components/HomeDetails/HomeDetails'
import { CarouselHome } from '../ui/Carousel/CarouselHome'
import { Footer } from '../ui/Footer/Footer'
import { Header } from '../ui/Header/Header'

export const Home = () => {


  return (
    <>
      <Header/>
      <CarouselHome/>
      <HomeDescription/>
      <HomeDetails/>
      <HomeSpecification/>
      <Footer/>
    </>
  )
}
