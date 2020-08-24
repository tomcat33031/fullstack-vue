<template>
  <div id="products" class="box">
    <div class="products--header has-text-centered">
      <i class="fa fa-2x fa-user-circle"></i>
    </div>
    <div class="product-list">
      <div
        v-for="productItem in productItems"
        v-bind:key="productItem.id"
        class="product-list--item"
      >
        <ProductListItem v-bind:productItem="productItem" />
        <!-- <div>
          <h2 class="has-text-weight-bold">
            The Fullstack Hoodie
            <span class="tag is-primary is-pulled-right has-text-white">
              Add to Cart
            </span>
          </h2>
          <p>
            Lightweight, breathable hoodie with the Fullstack Crest. Guaranteed
            to keep you looking fresh while warm.
          </p>
          <span class="has-text-primary has-text-weight-bold">
            <i class="fa fa-usd"></i> 19.99
          </span>
        </div> -->
      </div>
    </div>
    <div class="product-count has-text-right">
      <span class="has-text-weight-bold"
        ># of products: {{ productItems.length }}</span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductListItem from "./ProductListItem";

export default {
  name: "ProductList",
  created() {
    this.$store.dispatch("getProductItems");
  },
  computed: {
    // productItems() {
    //   return this.$store.getters.productItems;
    // },
    ...mapGetters(["productItems"]),
  },
  components: {
    ProductListItem,
  },
};
</script>

<style scoped>
.products--header {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}

.product-list {
  padding-top: 10px;
}

.product-list--item {
  padding: 10px 0;
}
</style>
