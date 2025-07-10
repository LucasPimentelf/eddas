<template>
  <footer>
    <v-container class="tw-shadow-md" fluid>
      <v-row>
        <v-col cols="12" class="tw-flex tw-items-center !tw-px-5 !tw-py-4 tw-justify-between">
          <v-img src="~/assets/images//logo-evoluir.png" max-width="60" />
        </v-col>
        <v-col cols="12">
          <p class="tw-text-sm tw-text-[#73737C]">O Evoluir conecta escolas, famílias e estudantes organizando, acompanhando e potencializando o desenvolvimento escolar.</p>
        </v-col>
        <v-col cols="12" class="tw-mt-6">
          <h4 class="tw-font-bold">Módulos</h4>
        </v-col>
        <v-col
          cols="4"
          v-for="{name, link} in links"
          :key="name"
        >
          <nuxt-link :to="link" class="tw-underline tw-text-[#73737C]">
            <b>Evo</b>{{ name }}
          </nuxt-link>
        </v-col>
        <v-col cols="12" class="tw-mt-6">
          <h4 class="tw-font-bold">Contato</h4>
        </v-col>
        <v-col cols="12">
          <p class="tw-text-[#73737C] tw-pb-3">(83) 4141-9850 | (83) 9 9628-0666</p>
          <p class="tw-text-[#73737C] tw-pb-3">comercial@mvceditora.com.br</p>
          <p class="tw-text-[#73737C] tw-pb-3">Av. Esperança, 535 - Manaíra. João Pessoa - PB</p>
        </v-col>
        <v-col cols="12">
          <div class="tw-w-full tw-h-[1px] tw-bg-[#DADADA]"></div>
        </v-col>
        <v-col cols="6">
          <p class="tw-text-[#73737C]">Copyright ® evoluir</p>
        </v-col>
        <v-col cols="6" class="tw-flex tw-items-center tw-justify-end tw-gap-2">
          <a
            class="tw-rounded-full tw-w-10 tw-h-10 tw-border-solid tw-border-[#DADADA] tw-border-[1px] tw-flex tw-items-center tw-justify-center"
            v-for="{ link, icon } in socialMediaLinks"
            :key="link"
            :href="link"
            target="_blank"
          >
            <v-img :src="icon" width="16" height="16"/>
          </a>
        </v-col>
        <v-col cols="12" class="!tw-py-0">
          <v-img src="~/assets/images/evoluir-footer.png"/>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>
<script setup lang="ts">
import Facebook from '~/assets/images/facebook.svg';
import Instagram from '~/assets/images/instagram.svg';
import Linkedin from '~/assets/images/linkedin.svg';
const links = [
  {
    link: '#',
    name: 'reds'
  },
  {
    link: '#',
    name: 'avalia'
  },
  {
    link: '#',
    name: 'assistant'
  },
  {
    link: '#',
    name: 'família'
  },
  {
    link: '#',
    name: 'forma+'
  },
  {
    link: '#',
    name: 'ler+'
  },
  {
    link: '#',
    name: 'escrita'
  },
  {
    link: '#',
    name: 'game'
  },
  {
    link: '#',
    name: 'evoluir+'
  },
]
const socialMediaLinks = [
  {
    link: 'https://www.instagram.com/editoramvc',
    icon: Instagram
  },
  {
    link: 'https://www.facebook.com/MvcEditora',
    icon: Facebook
  },
  {
    link: 'https://www.linkedin.com/company/gruponeiva',
    icon: Linkedin
  },
]
</script>