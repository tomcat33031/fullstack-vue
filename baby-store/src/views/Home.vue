<template>
  <div class="main-wrapper box-layout">
    <!-- Header Section Start -->
    <div class="header-section section">
      <!-- Header Top Start -->
      <Header></Header>
      <!-- Header Top End -->
      <!-- Header Bottom Start -->
      <Navigation></Navigation>
      <!-- Header Bottom End -->
    </div>
    <!-- Header Section End -->

    <!-- Hero Section Start -->
    <HeroSlide></HeroSlide>
    <!-- Hero Section End -->

    <!-- Banner Section Start -->
    <BannerTop></BannerTop>
    <!-- Banner Section End -->

    <!-- Product Section Start -->
    <PopularProducts></PopularProducts>
    <!-- Product Section End -->

    <!-- Banner Section Start -->
    <BannerBottom></BannerBottom>
    <!-- Banner Section End -->

    <!-- Product Section Start -->
    <Deal></Deal>
    <!-- Product Section End -->

    <!-- Feature Section Start -->
    <Feature></Feature>
    <!-- Feature Section End -->

    <!-- Blog Section Start -->
    <Testimonial></Testimonial>
    <!-- Blog Section End -->

    <!-- Brand Section Start -->
    <Brand></Brand>
    <!-- Brand Section End -->

    <!-- Footer Top Section Start -->
    <FooterTop></FooterTop>
    <!-- Footer Top Section End -->

    <!-- Footer Bottom Section Start -->
    <FooterBottom></FooterBottom>
    <!-- Footer Bottom Section End -->
  </div>
</template>

<script>
import BannerTop from "../components/BannerTop";
import BannerBottom from "../components/BannerBottom";
import Brand from "../components/Brand";
import Deal from "../components/Deal";
import Feature from "../components/Feature";
import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";
import Header from "../components/Header";
import HeroSlide from "../components/HeroSlide";
import Navigation from "../components/Navigation";
import PopularProducts from "../components/PopularProducts";
import Testimonial from "../components/Testimonial";

export default {
  name: "Home",
  components: {
    BannerTop,
    BannerBottom,
    Brand,
    Deal,
    Feature,
    FooterTop,
    FooterBottom,
    Header,
    HeroSlide,
    Navigation,
    PopularProducts,
    Testimonial,
  },
};
</script>

<style scoped></style>
