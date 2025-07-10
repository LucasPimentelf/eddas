<template>
  <v-container class="tw-mt-16 !tw-py-12 lg:tw-py-24 tw-bg-orange-100 container"
    fluid>
    <v-row>
      <v-col
        cols="12"
        md="6"
        class="lg:!tw-px-12"
      >
        <h3 class="tw-pb-1 lg:tw-mt-12 tw-text-primary-purple font-courgette tw-text-center lg:tw-text-left sublinhado-roxo">Impacto em números</h3>

        <h4 class="tw-pt-8 tw-pb-4 tw-px-8 lg:tw-pl-0 tw-text-center lg:tw-text-left tw-text-2xl tw-font-medium">Resultado que <b>impulsionam a
            educação</b> todos os dias.</h4>
        <p class="tw-text-sm tw-text-center lg:tw-text-left">O Evoluir transforma a experiência de escolas, educadores e famílias por todo o Brasil. Com recursos inovadores e dados reais, seguimos avançando na missão de apoiar o desenvolvimento integral dos estudantes.
        </p>
        <CallToAction
          class="tw-mt-4 !tw-max-w-[245px] lg:!tw-mx-0 lg:tw-mt-8"
          href="#contato"
        />
      </v-col>
      
      <div ref="impactNumbersSection"></div>
      <Transition>
        <v-col
          cols="12"
          md="6"
          v-if="isVisible"
        >
          <v-row class="!tw-pt-8">
            <v-col cols="6"
              v-for="(card, index) in cards"
              :key="card.title">
              <div
                class="!tw-p-8 tw-bg-orange-50 tw-shadow-lg tw-rounded-t-2xl lg:tw-h-full tw-relative after:tw-absolute after:tw-bottom-0 after:tw-left-0 after:tw-right-0"
                :class="index === 0 ? 'after:tw-bg-purple-600 after:tw-h-2' : 'after:tw-bg-primary-orange after:tw-h-1'">
                <h2 class="tw-text-center tw-font-bold tw-text-2xl"
                  :class="{ 'tw-text-purple-600': index === 0 }">
                  {{ card.title }}
                </h2>
                <p class="tw-text-center">
                  {{ card.description }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </Transition>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
  import { useVisibilityObserver } from '~/composables/useVisibilityObserver.js';

  const impactNumbersSection = ref<HTMLElement | null>(null);
  const { isVisible } = useVisibilityObserver(impactNumbersSection);

  const cards = [
    {
      title: "+20M",
      description: "de alunos impactados"
    },
    {
      title: "+12k",
      description: "de escolas e redes parceiras"
    },
    {
      title: "+240k",
      description: "de avaliações aplicadas"
    },
    {
      title: "+21M",
      description: "de redações corrigidas"
    },
  ]
</script>
<style scoped>
.container {
  background-image: url('~/assets/images/evoluir-impacto.svg');
  background-position: 0 0;
  background-size: 50%;
}

.sublinhado-roxo {
  background-image: url('~/assets/images/sublinhado-roxo.png');
  background-position: 50% 100%;
}
@media (min-width: 1026px) {
  .sublinhado-roxo {
    background-position: 0% 100%;
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