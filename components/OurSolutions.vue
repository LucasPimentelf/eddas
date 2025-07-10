<template>
  <v-container class="tw-mt-12" fluid>
    <v-row>
      <v-col cols="12">
        <h3 class="tw-pb-1 tw-text-primary-purple font-courgette tw-text-center sublinhado-roxo">Nossas soluções</h3>
      </v-col>
      <v-col cols="12">
        <h4 class="tw-px-8 tw-text-center tw-text-2xl tw-font-medium lg:tw-text-[40px] lg:tw-max-w-[800px] lg:tw-mx-auto">Um ecossistema educacional completo para <b>pais, escolas e alunos</b></h4>
      </v-col>
      <v-col cols="12" class="!tw-pt-0">
        <p class="tw-text-sm tw-text-center lg:tw-text-xl lg:tw-max-w-[900px] lg:tw-mx-auto">A plataforma Evoluir é composta por soluções que se adaptam à cada realidade. Você escolhe o que faz mais sentido para o seu dia a dia e personaliza conforme a necessidade.</p>
      </v-col>
    </v-row>
    <v-row class="lg:tw-max-w-[900px] lg:!tw-mx-auto">
      <v-col
        :cols="index !== solutions.length - 1 ? 6 : 12"
        md="4"
        v-for="(solution, index) in solutions"
        :key="solution.image"
        class="lg:tw-mt-8"
      >
        <div
          class="lg:tw-h-full tw-p-1 tw-rounded-2xl tw-border-[#DADADA] tw-border-solid tw-border-[1px] tw-relative tw-overflow-hidden"
        >
          <span
            v-if="solution.tag"
            :style="`background-color: ${solution.color};`"
            class="tw-pb-1 tw-p-5 tw-text-[10px] tw-absolute tw-rotate-[-45deg] tw-left-[-1.5rem] tw-top-[-.6rem] tw-text-white tw-font-bold"
          >
            {{ solution.tag }}
          </span>
          <div
            :style="`background-color: ${solution.color};`"
            class="tw-ml-auto tw-m-3 tw-w-8 tw-h-8 tw-rounded-full tw-flex tw-items-center tw-justify-center"
          >
            <img src="~/assets/icons/send.svg">
          </div>
          <v-img
            :src="solution.image"
            :max-width="index !== solutions.length -1 ? 100 : 270"
            :width="index !== solutions.length -1 ? 100 : 270"
            class="tw-ml-3 tw-mb-3 tw-mt-6"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '~/tailwind.config';
import Evoassistant from '~/assets/images/solucoes/evoassistant.png';
import Evoavalia from '~/assets/images/solucoes/evoavalia.png';
import Evoescrita from '~/assets/images/solucoes/evoescrita.png';
import Evoevoluir from '~/assets/images/solucoes/evoevoluir.png';
import Evofamilia from '~/assets/images/solucoes/evofamilia.png';
import Evoforma from '~/assets/images/solucoes/evoforma.png';
import Evoler from '~/assets/images/solucoes/evoler.png';
import Evoreds from '~/assets/images/solucoes/evoreds.png';
import Evogame from '~/assets/images/solucoes/evogame.png';

const { colors } = resolveConfig(tailwindConfig).theme;
const solutions = [
  {
    color: colors['primary-pink'],
    image: Evoavalia,
    link: 'asdf'
  },
  {
    color: colors['primary-orange'],
    image: Evoescrita,
    link: 'asdf'
  },
  {
    color: colors['primary-blue'],
    image: Evoreds,
    link: 'asdf'
  },
  {
    color: '#374490',
    image: Evoforma,
    link: 'asdf'
  },
  {
    color: '#99346E',
    image: Evoler,
    link: 'asdf'
  },
  {
    color: '#F0386B',
    image: Evogame,
    link: 'asdf'
  },
  {
    color: '#E7474D',
    image: Evofamilia,
    link: 'asdf',
    tag: 'NOVO'
  },
  {
    color: '#FFB802',
    image: Evoassistant,
    link: 'asdf',
    tag: 'NOVO'
  },
  {
    color: '#5841C1',
    image: Evoevoluir,
    link: 'asdf',
    tag: 'PLUS'
  },
];
</script>
<style scoped>
.sublinhado-roxo {
  background-image: url('~/assets/images/sublinhado-roxo.png');
  background-size: 130px;
  background-position: 50% 100%;
}
</style>