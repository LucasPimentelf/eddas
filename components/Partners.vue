<template>
  <v-container class="tw-mt-12 md:!tw-pb-20" fluid>
    <v-row>
      <v-col cols="12">
        <p class="tw-text-center">Parceiros que confiam em nossos produtos</p>
      </v-col>
      <v-col
        cols="12"
        class="tw-flex tw-flex-nowrap tw-items-center tw-gap-8 tw-overflow-hidden tw-relative"
        @mouseover="isHovering = true"
        @mouseleave="isHovering = false"
      >
        <div
          class="animate tw-flex tw-flex-nowrap tw-gap-12 tw-relative tw-z-10 tw-bg-white tw-pl-12"
          :class="{'pause-animation': isHovering}"
        >
          <v-img
            v-for="{image, description} in carousel"
            :src="image"
            @mouseenter="chosenDescription = description"
            class="tw-w-[100px] tw-max-h-[40px] tw-saturate-0 tw-opacity-50 images-saturation"
          />
        </div>
        <div
          class="animate tw-flex tw-flex-nowrap tw-gap-12 tw-relative tw--ml-8 tw-pl-8"
          :class="{'pause-animation': isHovering}"
        >
          <v-img
            v-for="{image, description} in carousel"
            :src="image"
            @mouseenter="chosenDescription = description"
            @mouseleave="chosenDescription = ''"
            class="tw-w-[100px] tw-max-h-[40px] tw-saturate-0 tw-opacity-50 images-saturation"
          />
        </div>
      </v-col>
      <v-col
        cols="12"
        class="!tw-pt-0 tw-relative"
      >
        <Transition>
          <div v-if="isHovering">
            <p class="tw-bg-purple-50 tw-rounded-lg tw-px-4 tw-py-2 tw-text-sm tw-absolute tw-top-0" v-html="chosenDescription"/>
          </div>
        </Transition>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import Rondonia from "~/assets/images/parceiros/governo-rondonia.png";
import Amazonas from "~/assets/images/parceiros/governo-amazonas.png";
import Lunik from "~/assets/images/parceiros/lunik.png";
import MaisSaber from "~/assets/images/parceiros/mais-saber.png";
import MvcEditora from "~/assets/images/parceiros/mvc-editora.png";
import RevisaEnem from "~/assets/images/parceiros/revisa-enem.png";

const chosenDescription = ref('');
const carousel = [
  {
    image: MaisSaber,
    description: 'Referência nacional em recomposição da aprendizagem, a solução Mais Saber utiliza o ecossistema Evoluir para apoiar redes municipais em avaliações diagnósticas e intervenções pedagógicas. Com os módulos <b>EvoAvalia</b> e <b>EvoReds</b>, já foram aplicadas mais de <b>1 milhão de avaliações em 200+ municípios</b> brasileiros. Dessa forma, gestores conseguem identificar lacunas de aprendizagem e agir com rapidez.'
  },
  {
    image: MvcEditora, 
    description: 'Há mais de 9 anos, a MVC Editora confia na Plataforma Evoluir para <b>oferecer soluções digitais integradas aos seus conteúdos impressos</b>, do Infantil ao Ensino Médio. A parceria beneficia <b>escolas públicas e privadas</b>, que passam a contar com trilhas digitais, jogos, relatórios e avaliações conectadas ao material didático.'
  },
  {
    image: Amazonas, 
    description: 'A rede estadual do Amazonas escolheu o Evoluir como base para o maior projeto preparatório para o ENEM da região Norte. <b>Em apenas 2 anos, mais de 300 mil estudantes foram impactados</b>. Como resultado, a rede <b>melhorou significativamente os índices em redação e nas provas objetivas.</b>'
  },
  {
    image: RevisaEnem,
    description: '<b>Presente em mais de 5 estados brasileiros</b>, o Revisa ENEM já <b>impactou mais de 1 milhão de alunos</b> por meio da Plataforma Evoluir. Utilizando os módulos EvoReds, EvoCorrige e EvoAvalia, o projeto oferece aulões, simulados com TRI e análise de desempenho. Com apoio às redes públicas e grandes municípios, a solução aumentou significativamente o número de aprovações.'
  },
  {
    image: Rondonia,
    description: 'Há mais de 6 anos, a Secretaria de Educação de Rondônia utiliza a Plataforma Evoluir como base para a preparação dos alunos da rede pública para o ENEM. <b>Mais de 400 mil estudantes acompanhados, 4 milhões de avaliações aplicadas, 1 milhão de redações corrigidas e centenas de formações docentes realizadas</b> comprovam o impacto da solução.'
  },
  {
    image: Lunik, 
    description: 'A Lunik transforma seus conteúdos impressos em experiências educacionais híbridas ao incorporar os módulos do Evoluir. Com trilhas, jogos, avaliações e relatórios integrados à sua coleção didática, a editora entrega mais valor aos seus clientes institucionais da educação básica. O ambiente digital amplia a experiência de aprendizagem e facilita o acompanhamento do progresso dos alunos por professores e gestores.'
  },
];
const isHovering = ref(false);
</script>
<style scoped>
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
.animate {
  animation: scroll 10s linear infinite;
}
.pause-animation {
  animation-play-state: paused;
}
@media (min-width: 768px) {
  .images-saturation:hover {
    filter: saturate(1);
    opacity: 1;
    position: relative;
    overflow: visible;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all .3s ease;
}
.v-enter-from,
.v-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>