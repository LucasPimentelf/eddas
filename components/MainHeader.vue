<template>
  <header class="tw-fixed tw-w-full tw-bg-[#3A60AB] tw-z-20">
    <v-container class="tw-shadow-md" fluid>
      <v-row class="!tw-m-0 !tw-p-0">
        <v-col
          cols="12"
          class="tw-flex tw-items-center !tw-px-5 !tw-py-4 tw-justify-between !tw-m-0"
        >
          <v-img src="~/assets/images//logo-eddas.svg"
            max-width="60" />


          <nav class="tw-flex tw-gap-4 md:tw-gap-12 tw-text-white">
            <nuxt-link
              class="tw-font-bold tw-relative after:tw-w-6 after:tw-h-[2px] after:tw-absolute after:tw-bottom-0 after:tw-left-0 after:tw-bg-[#2EB370]"
              href="/"
            >
              Início
            </nuxt-link>
            <nuxt-link
              href="#contato"
            >
              Contato
            </nuxt-link>
            
            <nuxt-link href="#blog">
              Blog
            </nuxt-link>            
          </nav>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>
<script setup lang="ts">
  import { useDisplay } from 'vuetify/lib/framework.mjs';
  const { lgAndUp } = useDisplay();
  const route = useRoute();
  const openNavbar = inject('openNavbar');
  const solutions = [
    { name: 'Avalia', link: '#' },
    { name: 'Escrita', link: '#' },
    { name: 'Reds', link: '#' },
    { name: 'Foma+', link: '#' },
    { name: 'Ler', link: '#' },
    { name: 'Game', link: '#' },
    { name: 'Família', link: '#' },
    { name: 'Assistant', link: '#' },
    { name: 'Evoluir+', link: '#' },
  ];
</script>
<style scoped>
@media (min-width: 1026px) {
  .hamburger-menu { display: none; }
}
</style>