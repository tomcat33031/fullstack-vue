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
    <!-- Page Section Start -->
    <div class="page-section section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-8 col-12 mx-auto">
            <div class="error-404">
              <h1>404</h1>
              <h2>OPPS! PAGE NOT BE FOUND</h2>
              <p>
                Sorry but the page you are looking for does not exist, have been
                removed, name changed or is temporarity unavailable.
              </p>
              <form action="#" class="searchform mb-30">
                <input
                  type="text"
                  name="search"
                  id="error_search"
                  placeholder="Search..."
                />
                <button type="submit" class="submit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
              <a href="index.html" class="back-btn">Back to home page</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Section End -->

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
import Brand from "../components/Brand";
import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default {
  name: "NotFound",
  components: {
    Brand,
    FooterTop,
    FooterBottom,
    Header,
    Navigation,
  },
};
</script>

<style scoped></style>
