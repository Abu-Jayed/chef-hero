import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import { Toaster } from 'react-hot-toast';
import Slider from '../Slider/Slider';
import Chef from '../Chef/Chef';
import CustomersReview from '../CustomersReview/CustomersReview';
import Header from '../Header/Header';
import Services from '../Shared/Services';
import OurServices from '../Services/OurServices';
import FoodSection from '../FoodSection/FoodSection';
import Menu from '../Menu/Menu';
import Article from '../Article/Article';
import Follow from '../Follow/Follow';
import FooterCta from '../Footer_cta/FooterCta';
import Subscription from '../Subcription/Subscription';

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Slider></Slider>
      <OurServices></OurServices>
      <FoodSection></FoodSection>
      <Menu></Menu>
      <Chef></Chef>
      <Services></Services>
      <Outlet></Outlet>
      <CustomersReview></CustomersReview>
      <Article></Article>
      <Follow></Follow>
      <FooterCta></FooterCta>
      {/* <Subscription></Subscription> */}
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default Layout;