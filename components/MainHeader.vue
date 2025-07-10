<template>
  <header class="tw-fixed tw-w-full tw-bg-white tw-z-20">
    <v-container class="tw-shadow-md" fluid>
      <v-row>
        <v-col cols="12"
          class="tw-flex tw-items-center !tw-px-5 !tw-py-4 tw-justify-between">
          <v-img src="~/assets/images//logo-evoluir.png"
            max-width="60" />

          <v-btn
            v-if="!lgAndUp"
            icon="mdi-menu"
            flat
            @click="openNavbar"
          ></v-btn>

          <nav v-else class="tw-absolute tw-top-6 tw-right-8 tw-text-xl tw-flex tw-gap-12">
            <nuxt-link
              class="tw-font-bold"
              href="/"
              :class="{'after:tw-w-6 after:tw-h-[2px] after:tw-absolute after:tw-bottom-0 after:tw-left-0 after:tw-bg-primary-pink': route.path === '/'}"
            >
              Início
            </nuxt-link>
             <v-menu>
              <template v-slot:activator="{ props }">
                <button
                  variant="text"
                  v-bind="props"
                  class="!tw-normal-case tw-text-xl tw-font-bold tw-flex tw-items-center tw-gap-2"
                >
                  Soluções <v-img src="~/assets/images/caret-down.png" width="24"/>
              </button>
              </template>

              <v-list>
                <v-list-item
                  v-for="{ name, link } in solutions"
                  :key="name"
                >
                  <nuxt-link :to="link">
                    <b>Evo</b>{{ name }}
                  </nuxt-link>
                </v-list-item>
              </v-list>
            </v-menu>
            <nuxt-link class="tw-font-bold" href="#contato">
              Contato
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