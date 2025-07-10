<template>
  <v-container class="tw-mt-16" fluid>
    <v-row>
      <v-col cols="12">
        <v-carousel
          height="430"
          :show-arrows="false"
          cycle
          hide-delimiters
          v-model="activeSlide"
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet height="100%">
              <v-img :src="slide"></v-img>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" class="tw-flex tw-items-center tw-justify-center tw-gap-1">
        <button
          v-for="(control, index) in slides"
          :key="control"
          class="tw-border-[3px] tw-border-solid tw-w-8 tw-h-8 tw-rounded-full tw-gap-2 tw-flex tw-items-center tw-justify-center"
          :class="index === activeSlide ? 'tw-border-primary-pink' : 'tw-border-transparent'"
          @click="activeSlide = index"
        >
          <div class="tw-bg-primary-pink tw-w-2 tw-h-2 tw-rounded-full"></div>
        </button>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import banner1 from "~/assets/images/banners/1.png"
import banner2 from "~/assets/images/banners/2.png"
import banner3 from "~/assets/images/banners/3.png"
import banner4 from "~/assets/images/banners/4.png"
import banner5 from "~/assets/images/banners/5.png"
import banner6 from "~/assets/images/banners/6.png"
import banner7 from "~/assets/images/banners/7.png"
import banner8 from "~/assets/images/banners/8.png"
import banner9 from "~/assets/images/banners/9.png"

const slides = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9];
const activeSlide = ref(0);
</script>