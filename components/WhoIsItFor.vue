<template>
  <v-container class="tw-mt-12 tw-relative" fluid>
    <img
      class="tw-absolute tw-right-0 tw--top-24"
      src="~/assets/images/estrela.png"
      width="100"
    />
    <v-row>
      <v-col cols="12">
        <h3 class="tw-pb-1 tw-text-primary-orange font-courgette tw-text-center sublinhado-evoluir">Para quem é o evoluir?</h3>
      </v-col>
      <v-col cols="12">
        <h4 class="lg:tw-mt-4 tw-px-8 tw-text-center tw-text-2xl lg:tw-text-[40px] tw-font-medium">Solução sob medida para cada tipo de organização <span v-if="!lgAndUp">educacional</span></h4>
      </v-col>
      <v-col cols="12" class="!tw-pt-0">
        <p class="lg:tw-mt-6 tw-text-sm tw-text-center lg:tw-text-xl lg:tw-w-[890px] lg:tw-mx-auto">A plataforma foi desenvolvida para atender as necessidades específicas de instituições de ensino, redes públicas e privadas, além de empresas educacionais. Com uma estrutura modular e escalável, ela se adapta ao nível de maturidade digital de cada organização, apoiando desde a gestão pedagógica até a tomada de decisões estratégicas com base em dados.</p>
      </v-col>
    </v-row>
    <v-row class="!tw-mt-8">
      <v-col cols="12" class="tw-flex tw-gap-4 tw-items-center tw-overflow-x-scroll lg:tw-justify-center">
        <div
          v-for="card in cards"
          class="tw-p-5 tw-h-[242px] tw-min-w-[340px] lg:tw-w-[280px] lg:tw-min-w-[280px] lg:tw-h-[330px] tw-rounded-2xl tw-border-purple-200 tw-bg-purple-50 tw-border-solid tw-border-[1px]"
        >
          <div class="tw-p-2 tw-rounded-md tw-bg-orange-100 tw-border-orange-300 tw-border-solid tw-border-[1px] tw-w-10 tw-h-10 lg:tw-h-16 lg:tw-w-16 tw-flex tw-items-center tw-justify-center">
            <v-img :src="card.icon" :max-width="lgAndUp ? 32 : 24"/>
          </div>
          <p class="tw-mt-5 tw-text-xl tw-font-bold">{{ card.title }}</p>
          <p class="tw-mt-3 tw-text-sm tw-text-subtitle">{{ card.description }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import Foguete from "~/assets/icons/foguete.svg";
import Livro from "~/assets/icons/livro.svg";
import ChapeuGraduacao from "~/assets/icons/chapeu-graduacao.svg";
import { useDisplay } from "vuetify/lib/framework.mjs";
const { lgAndUp } = useDisplay();
const cards = [
  {
    icon: Foguete,
    title: "Redes de ensino",
    description: "Unifique dados escolares, acompanhe o desempenho em tempo real e tome decisões pedagógicas baseadas em evidências. Escale a gestão com tecnologia, trilhas e intervenções por proficiência."
  },
  {
    icon: Livro,
    title: "Escolas",
    description: "Modernize sua escola com avaliações, jogos e relatórios automáticos. Personalize o ensino, engaje alunos e simplifique a rotina docente em um sistema alinhado à BNCC."
  },
  {
    icon: ChapeuGraduacao,
    title: "Empresas educacionais",
    description: "Transforme seus conteúdos em soluções digitais com o ecossistema Evoluir. Integre impresso e digital, ofereça tecnologia white label e amplie resultados com inovação e escalabilidade."
  },
]
</script>
<style scoped>
.sublinhado-evoluir {
  background-image: url('~/assets/images/sublinhado-laranja.png');
  background-position: 50% 100%;
}
</style>