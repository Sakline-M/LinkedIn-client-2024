import React from 'react'
import Header from '../../components/Header/Header'
import Welcome from '../../components/Welcome/index'
import Explore from '../../components/Explore/index'
import RightJob from '../../components/RigthJob/index'
import Discover from '../../components/Discover/Discover'
import PostJob from '../../components/PostJob/PostJob'
import People from '../../components/People/People'
import Connect from '../../components/Connect/Connect'
import Anyone from '../../components/Anyone/Anyone'
import Colleagues from '../../components/Colleagues/Colleagues'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <>
    <Header/>
    <Welcome/>
    <Explore/>
    <RightJob/>
    <PostJob/>
    <Discover/>
    <People/>
    <Connect/>
    <Anyone/>
    <Colleagues/>
    <Footer/>
    </>
  )
}

export default Home