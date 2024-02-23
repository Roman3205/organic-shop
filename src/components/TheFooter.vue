<template>
  <div class="flex justify-center w-full bg-gray-9">
    <div class="max-w-screen-lg pt-12 w-full">
      <div class="flex border-b-2 border-gray-8 pb-12 justify-between items-center">
        <div class="flex flex-col gap-5">
          <div class="flex items-center gap-3 cursor-pointer">
            <TheLogoIcon />
            <h1 class="text-3xl text-gray-0">Ecobazar</h1>
          </div>
          <p class="text-gray-5 text-sm">
            Morbi cursus porttitor enim lobortis molestie.<br />
            Duis gravida turpis dui, eget bibendum magna <br />
            congue nec.
          </p>
          <div class="flex items-center gap-5">
            <p class="text-gray-1 header-footer-hover border-b-2 border-primary w-fit text-base">
              (219) 555-0114
            </p>
            <p class="text-gray-5 text-base">or</p>
            <p class="text-gray-1 header-footer-hover border-b-2 border-primary w-fit text-base">
              ecobazar@gmail.com
            </p>
          </div>
        </div>
        <FooterNavItem
          v-for="item in navItems"
          :key="item.id"
          :header="item.header"
          :text1="item.text1"
          :text2="item.text2"
          :text3="item.text3"
          :text4="item.text4"
        />
      </div>
      <div class="flex justify-between py-5 items-center">
        <p class="text-gray-5 text-sm">Ecobazar eCommerce © 2024. All Rights Reserved</p>
        <div class="flex gap-2">
          <img src="@/assets/apple-pay.svg" width="40" alt="" />
          <img src="@/assets/visa.svg" width="40" alt="" />
          <img src="@/assets/discover.svg" width="40" alt="" />
          <img src="@/assets/master-card.svg" width="40" alt="" />
          <img src="@/assets/secure-pay.svg" width="60" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheLogoIcon from './icons/TheLogoIcon.vue'
import FooterNavItem from './FooterNavItem.vue'
const navItems = [
  {
    id: 1,
    header: 'My Account',
    text1: 'My Account',
    text2: 'Order History',
    text3: 'Shoping Cart',
    text4: 'Wishlist'
  },
  {
    id: 2,
    header: 'Helps',
    text1: 'Contact',
    text2: 'Faqs',
    text3: 'Terms & Condition',
    text4: 'Privacy Policy'
  },
  {
    id: 3,
    header: 'Proxy',
    text1: 'About',
    text2: 'Shop',
    text3: 'Product',
    text4: 'Track Order'
  },
  {
    id: 4,
    header: 'Categories',
    text1: 'Fruit & Vegetables',
    text2: 'Meat & Fish',
    text3: 'Bread & Bakery',
    text4: 'Beauty & Health'
  }
]
</script>

<style lang="scss" scoped></style>
