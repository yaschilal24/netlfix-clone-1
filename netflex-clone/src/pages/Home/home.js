import React from 'react'
import Header from './../../component/Header/Header';
import Footer from './../../component/Footer/Footer';
import '../../App.css'
import Banner from './../../component/Banner/Banner';
import RowList from './../../component/RowList/RowList';
//import Row from './../../component/Row/Row';

const home = () => {
  return (
    <>
    <Header/>
    <Banner/>
     <RowList />
    <Footer />
    </>
  )
}

export default home
