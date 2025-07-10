<template>
  <v-container class="about-us" fluid>
    <v-row>
      <v-col cols="12">
        <v-img
        src="~/assets/images/mola.png"
        width="70"
        class="tw-mt-2 tw-ml-2"
      />
        <h3 class="tw-pb-1 tw--mt-4 tw-text-blue-bottom font-courgette tw-text-center sublinhado-evoluir">O que é o evoluir?</h3>
      </v-col>
      <v-col cols="12">
        <h4 class="tw-text-center tw-text-2xl lg:tw-text-[40px] tw-font-medium">Ecossistema educacional</h4>
      </v-col>
      <v-col cols="12" class="!tw-pt-0">
        <p class="tw-text-sm tw-text-center lg:tw-max-w-[800px] lg:tw-mx-auto lg:tw-text-xl">Somos uma plataforma educacional de última geração, desenvolvida para atender às demandas da educação contemporânea com inteligência, personalização e alta performance operacional.</p>
      </v-col>
    </v-row>
    <v-row class="!tw-mt-8">
      <v-col cols="12" class="tw-flex tw-gap-4 !tw-pb-16 tw-items-center lg:tw-justify-center tw-overflow-x-scroll">
        <div
          v-for="card in cards"
          :key="card.title"
          class="tw-p-5 tw-min-w-[320px] lg:tw-min-w-[290px] lg:tw-w-[290px] tw-rounded-2xl tw-bg-white tw-border-purple-200 tw-border-solid tw-border-[1px]"
        >
          <div class="tw-p-2 tw-rounded-md tw-bg-blue-100 tw-border-blue-300 tw-border-solid tw-border-[1px] tw-w-10 tw-h-10">
            <v-img :src="card.icon" max-width="24"/>
          </div>
          <p class="tw-mt-5 tw-text-xl tw-font-bold lg:tw-w-[200px]">{{ card.title }}</p>
          <p class="tw-mt-3 tw-text-base tw-text-subtitle">{{ card.description }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import MaosDadas from "~/assets/images/maos-dadas.png";
import TrendSubindo from "~/assets/images/trend-subindo.png";
import AlunoChapeu from "~/assets/images/aluno-chapeu.png";
const cards = [
  {
    icon: AlunoChapeu,
    title: "Ensino Personalizado",
    description: "Idealizada com base em princípios de inovação, acessibilidade e escalabilidade."
  },
  {
    icon: TrendSubindo,
    title: "Gestão orientada por dados",
    description: "Empodera gestores e docentes com ferramentas inteligentes para decisões eficazes."
  },
  {
    icon: MaosDadas,
    title: "Comunidade conectada",
    description: "Integra diferentes frentes da comunidade escolar em um ambiente unificado."
  },
]
</script>
<style scoped>
.sublinhado-evoluir {
  background-image: url('~/assets/images/sublinhado-azul.png');
  background-position: 50% 100%;
}
.about-us {
  background-image: url('~/assets/images/bg-o-que-e.png');
  background-size: cover;
}
@media (min-width: 1026px) {
  .about-us {
    background-image: url('~/assets/images/bg-secao-2.png');
  }
}
</style>