<template>
  <v-container class="tw-mt-12" fluid>
    <v-row>
      <v-col cols="12">
        <h3 class="tw-pb-1 tw-text-primary-purple font-courgette tw-text-center sublinhado-roxo">Infraestrutura e
          tecnologia?</h3>
      </v-col>
      <v-col cols="12">
        <h4 class="tw-text-center tw-text-2xl tw-font-medium">Tecnologia pensada para a educação brasileira</h4>
      </v-col>
      <v-col cols="12"
        class="!tw-pt-0">
        <p class="tw-text-sm tw-text-center">Diferente de plataformas engessadas, a <b>Plataforma Evoluir</b> foi
          construída com uma arquitetura técnica robusta e flexível, baseada em microserviços, APIs abertas e um modelo
          cloud-native, que garante escalabilidade, interoperabilidade e segurança. Tudo isso com um olhar voltado à
          BNCC e às necessidades reais da educação brasileira.</p>
      </v-col>
    </v-row>
    <v-row class="!tw-mt-8">
      <v-col cols="12"
        class="tw-flex tw-gap-4 tw-items-center tw-overflow-x-scroll">
        <div v-for="card in cards"
          :key="card.title"
          class="tw-p-5 tw-min-w-[360px] tw-rounded-2xl tw-bg-white tw-border-[#DADADA] tw-border-solid tw-border-[1px]">
          <div class="tw-p-2 tw-rounded-md tw-w-10 tw-h-10" :class="card.color">
            <v-img :src="card.icon"
              max-width="24" />
          </div>
          <p class="tw-mt-5 tw-text-xl tw-font-bold">{{ card.title }}</p>
          <ul class="tw-mt-2 tw-list-disc tw-ml-4">
            <li
              class="tw-text-base tw-text-subtitle"
              v-for="bulletPoint in card.description"
              :key="bulletPoint"
            >
              {{ bulletPoint }}
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
  import Pessoa from "~/assets/images/pessoa.svg";
  import Tomada from "~/assets/images/tomada.svg";
  import Cadeado from "~/assets/images/cadeado.svg";
  const cards = [
    {
      icon: Tomada,
      color: 'tw-bg-orange-50',
      title: "Conectividade e escalabilidade",
      description: ['Plataforma em nuvem com suporte a milhares de acessos.', 'Compatível com dispositivos móveis e navegadores diversos.']
    },
    {
      icon: Cadeado,
      color: 'tw-bg-purple-100',
      title: "Segurança e conformidade",
      description: ['Criptografia de dados e padrões ISO/IEC 27001.', 'Totalmente em conformidade com a LGPD.']
    },
    {
      icon: Pessoa,
      color: 'tw-bg-blue-100',
      title: "Flexibilidade e acessibilidade",
      description: ['Integração via APIs com sistemas legados (ERPs, BI, etc.).', 'White label e acessibilidade (Libras, leitura por voz)']
    },
  ]
</script>
<style scoped>
.sublinhado-roxo {
  background-image: url('~/assets/images/sublinhado-roxo.png');
  background-position: 50% 100%;
}
</style>