<template>
  <v-container class="tw-bg-pink-50 tw-mt-16 !tw-py-12 container tw-relative tw-overflow-hidden" fluid>
    <span
      class="tw-pb-2 tw-p-10 tw-text-[10px] tw-text-base tw-absolute tw-rotate-[45deg] tw-bg-[#E4B028] tw-right-[-3rem] tw-top-[-1.2rem] tw-text-white tw-font-bold"
    >
      NOVO
    </span>
    <v-row>
      <v-col cols="12" md="6">
        <div ref="targetImage"></div>
        <Transition>
          <img
            v-if="isVisible"
            src="~/assets/images/mao-evoassistant.png"
            width="320"
            class="lg:tw-mt-12 tw-mx-auto"
          />
        </Transition>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          src="~/assets/images/evoassistant.svg"
          width="110"
          class="tw-mt-8 tw-mx-auto lg:tw-mx-0 tw-mb-8"
        />
        <h3 class="tw-text-center lg:tw-text-left tw-text-2xl tw-mb-4 tw-font-medium">Transformando a Educação com <b>Inteligência Artificial</b></h3>
        <p class="tw-text-center lg:tw-text-left tw-mb-12">A Evo Assistant é a <b>inteligência artificial da plataforma Evoluir</b>, desenvolvida para atuar como um assistente educacional preditivo e responsivo. Integrada à rotina das escolas, ela oferece insights, acompanha o progresso dos alunos e apoia professores com recomendações inteligentes baseadas em dados reais, tornando o ensino mais personalizado e eficiente para todos.</p>
        <CallToAction class="lg:!tw-mx-0">
          Saber mais
        </CallToAction>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { useVisibilityObserver } from '~/composables/useVisibilityObserver.js';
const targetImage = ref<HTMLElement | null>(null);
const { isVisible } = useVisibilityObserver(targetImage);
</script>
<style scoped>
.container {
  background-image: url('~/assets/images/fundo-evoassistant.png');
  background-position: 100% 100%;
  background-size: 50%;
}
@media (min-width: 1026px) {
  .container {
    background-size: 20%;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 1.5s ease;
}
.v-enter-from,
.v-leave-to {
  transform: translateY(-400px);
  opacity: 0;
}
</style>