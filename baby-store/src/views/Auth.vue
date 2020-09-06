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

    <!-- Page Banner Section Start -->
    <BannerCommon></BannerCommon>
    <!-- Page Banner Section End -->

    <!-- ########################################################### -->
    <!-- Page Section Start -->
    <div class="page-section section section-padding">
      <div class="container">
        <div class="row mbn-40">
          <div class="col-lg-4 col-12 mb-40">
            <div class="login-register-form-wrap">
              <h3>Login</h3>
              <form action="#" class="mb-30">
                <div class="row">
                  <div class="col-12 mb-15">
                    <input type="text" placeholder="Username or Email" />
                  </div>
                  <div class="col-12 mb-15">
                    <input type="password" placeholder="Password" />
                  </div>
                  <div class="col-12">
                    <input type="submit" value="Login" />
                  </div>
                </div>
              </form>
              <h4>You can also login with...</h4>
              <div class="social-login">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <a href="#"><i class="fa fa-pinterest"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-12 mb-40 text-center">
            <span class="login-register-separator"></span>
          </div>

          <div class="col-lg-6 col-12 mb-40 ml-auto">
            <div class="login-register-form-wrap">
              <h3>Register</h3>
              <form action="#">
                <div class="row">
                  <div class="col-md-6 col-12 mb-15">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div class="col-md-6 col-12 mb-15">
                    <input type="text" placeholder="User Name" />
                  </div>
                  <div class="col-md-6 col-12 mb-15">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div class="col-md-6 col-12 mb-15">
                    <input type="password" placeholder="Password" />
                  </div>
                  <div class="col-md-6 col-12 mb-15">
                    <input type="password" placeholder="Confirm Password" />
                  </div>
                  <div class="col-md-6 col-12">
                    <input type="submit" value="Register" />
                  </div>
                </div>
              </form>
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
import BannerCommon from "../components/BannerCommon";
import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default {
  name: "Auth",
  components: {
    Brand,
    BannerCommon,
    FooterTop,
    FooterBottom,
    Header,
    Navigation,
  },
};
</script>

<style scoped></style>
