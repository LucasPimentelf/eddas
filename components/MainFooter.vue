<template>
  <footer>
    <v-container class="tw-shadow-md container-footer" fluid>
      <v-row>
        <v-col cols="12">
          <v-img src="~/assets/images/logo-eddas-brasil.png" width="70" height="50" class="tw-mt-16 lg:tw-mt-24 tw-mb-4"></v-img>
          <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-4">
            <div class="tw-flex tw-items-center tw-gap-1">
              <img src="~/assets/images/BuildingOffice.svg" width="24" height="24"/>
              <span class="tw-text-white tw-font-medium tw-text-[14px]">05.641.321/0001-99</span>
            </div>
            <div class="tw-flex tw-items-center tw-gap-1">
              <img src="~/assets/images/Phone.svg" width="24" height="24"/>
              <span class="tw-text-white tw-font-medium tw-text-[14px]">(84) 9 9999-9999</span>
            </div>
            <div class="tw-flex tw-items-center tw-gap-1">
              <img src="~/assets/images/EnvelopeSimple.svg" width="24" height="24"/>
              <span class="tw-text-white tw-font-medium tw-text-[14px]">comercial@eddasbrasil.com.br</span>
            </div>
            <div class="tw-flex tw-items-center tw-gap-1">
              <img src="~/assets/images/MapPin.svg" width="24" height="24"/>
              <span class="tw-text-white tw-font-medium tw-text-[14px]">Av. Dão Silveira, 3860, Sala 03 – Candelária - Natal/RN</span>
            </div>
          </div>
          <div class="tw-w-full tw-h-[2px] tw-bg-white tw-my-4"></div>
          <div class="tw-flex tw-items-center tw-justify-between">
            <p class="tw-text-center tw-text-white tw-font-medium">Copyright ® EDDAS Brasil</p>
            <div class="tw-flex tw-items-center tw-gap-4">
              <a v-for="(item, index) in socialMediaLinks" :key="index" :href="item.link" target="_blank">
                <img :src="item.icon" width="24" height="24" alt="Social Media Icon"/>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>
<script setup lang="ts">
import Facebook from '~/assets/images/FacebookLogo.svg';
import Instagram from '~/assets/images/InstagramLogo.svg';
import Youtube from '~/assets/images/YoutubeLogo.svg';

const socialMediaLinks = [
  {
    link: '22',
    icon: Instagram
  },
  {
    link: '44',
    icon: Facebook
  },
  {
    link: '333',
    icon: Youtube
  },
]
</script>
<style scoped>
.container-footer {
  background: url('~/assets/images/fundo-footer.png') no-repeat center top;
  background-size: cover;
}
</style>