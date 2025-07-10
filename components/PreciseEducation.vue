<template>
  <v-container class="tw-mt-12 tw-bg-pink-50 !tw-pb-0 lg:!tw-pb-4 container tw-relative" fluid>
    <img
      class="tw-absolute tw-left-0 tw--top-4"
      src="~/assets/images/aviao-papel.png"
      width="100"
    />
    <v-row class="lg:!tw-pt-12 !tw-pb-0 lg:!tw-pb-20">
      <v-col cols="12" md="6" class="tw-text-center lg:tw-text-left">
        <h3 class="lg:tw-ml-8 tw-pt-12 lg:tw-pt-20 tw-pb-1 tw-text-primary-pink font-courgette sublinhado-rosa">Educação sob medida</h3>
        <h4 class="tw-pt-8 tw-px-8 tw-text-2xl lg:tw-text-[40px] tw-leading-tight tw-font-medium">Estrutura flexível, pensada para a <b>educação</b></h4>
        <p class="lg:tw-ml-8 tw-py-4 tw-text-sm lg:tw-text-xl">A plataforma Evoluir foi pensada para se moldar às necessidades de cada instituição. Com uma arquitetura baseada em princípios de design educacional adaptativo, ela garante flexibilidade e personalização da experiência conforme <b>três eixos centrais:</b></p>
        <CallToAction
          v-if="lgAndUp"
          class="!tw-mt-4 !tw-max-w-[235px] lg:!tw-max-w-[245px] !tw-mr-auto !tw-ml-8" href="#contato"
        />
      </v-col>
      <div ref="targetSection"></div>
      <Transition>
        <v-col
          v-if="isVisible"
          cols="12"
          md="6"
          class="!tw-pb-0 lg:!tw-pb-4"
        >
          <v-card :color="pink200" class="tw-mt-12 !tw-p-8 !tw-rounded-t-2xl !tw-rounded-b-none lg:!tw-rounded-b-3xl lg:!tw-rounded-t-3xl">
            <template v-for="card in cards">
              <p class="tw-mt-5 tw-text-xl lg:tw-text-left tw-font-bold tw-text-center">{{ card.title }}</p>
              <p class="tw-mt-3 tw-text-base lg:tw-text-left tw-text-subtitle tw-text-center">{{ card.description }}</p>
            </template>
            <CallToAction class="tw-mt-8 !tw-max-w-[245px]" href="#contato" v-if="!lgAndUp" />
          </v-card>
        </v-col>
      </Transition>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import tailwindConfig from '~/tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import { useVisibilityObserver } from '~/composables/useVisibilityObserver.js';
import { useDisplay } from 'vuetify/lib/framework.mjs';
const { lgAndUp } = useDisplay();
const pink200 = resolveConfig(tailwindConfig).theme.colors['pink-200'];
const targetSection = ref<HTMLElement | null>(null);
const { isVisible } = useVisibilityObserver(targetSection);
const cards = [
  {
    title: "Adaptação pedagógica",
    description: "O Evoluir é compatível com qualquer proposta pedagógica, seja ela tradicional, construtivista, híbrida ou baseada em competências."
  },
  {
    title: "Ferramentas educacionais",
    description: "Cada módulo oferece ferramentas específicas para resolver desafios reais, como correção de redações, aplicação de simulados, acompanhamento de leitura ou engajamento via jogos."
  },
  {
    title: "Conteúdo personalizável",
    description: "A plataforma é abastecida com materiais multimídia e interativos, mas também permite que a instituição importe seus próprios conteúdos ou selecione curadorias específicas."
  },
]
</script>
<style scoped>
.container {
  background-image: url('~/assets/images/bg-educacao-sob-medida.png');
  background-position: center bottom;
  background-size: contain;
}
.sublinhado-rosa {
  background-image: url('~/assets/images/sublinhado-rosa.png');
  background-position: 50% 100%;
}
@media (min-width: 1026px) {
  .sublinhado-rosa {
    background-position: 0% 100%;
  }
  .container {
    background-image: url('~/assets/images/bg-educacao-sob-medida-2.png');
    background-position: right center;
    background-size: 90%;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}
.v-enter-from,
.v-leave-to {
  transform: translateY(500px);
  opacity: 0;
}
</style>