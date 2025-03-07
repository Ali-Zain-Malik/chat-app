import React from 'react'
import Body from '../Components/Body/Body';
import SideBar from '../Components/SideBar/SideBar';
import SearchModal from '../Components/Modals/Search';
import Header from '../Components/Body/Header';
const Home = () => {
  return (
    <>
        <div className="d-flex">
            <SideBar />
            <Header />
            <Body />
        </div>
        <SearchModal />
    </>
  )
}

export default Home
