
<template>
  <v-app>
    <NuxtPage />
  </v-app>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';

useSeoMeta({
  title: "EDDAS",
  ogTitle: "EDDAS",
  // ogImage: "https://mvcpnld.com.br/public/favicon.ico",
  viewport: "width=device-width, initial-scale=1.0",
});
</script>
