<template>
  <v-container class="tw-relative !tw-pb-32 lg:tw-z-10" fluid>
    <img src="~/assets/images/animar-1.png" width="40" class="animate-1 tw-absolute"/>
    <img src="~/assets/images/animar-2.png" width="60" class="animate-2 tw-absolute"/>
    <img src="~/assets/images/animar-3.png" width="100" class="animate-3 tw-absolute"/>
    <img src="~/assets/images/animar-4.png" width="60" class="animate-4 tw-absolute"/>
    <v-row>
      <img
        src="~/assets/images/mulher-celular.png"
        max-width="300"
        width="300"
        class="tw-absolute tw-top-4 tw-left-4 -tw-z-10 people-images"
      />
      <img
        src="~/assets/images/crianca-bolsa.png"
        max-width="300"
        width="300"
        class="tw-absolute tw-bottom-4 tw-right-4 -tw-z-10 people-images"
      />
      <v-col cols="12" class="tw-mt-24">
        <h2 class="tw-font-bold tw-text-2xl lg:tw-text-6xl lg:tw-mx-auto lg:tw-max-w-[700px] tw-text-center">A melhor opção para a educação <span class="underline-evoluir font-courgette tw-text-primary-orange">evoluir</span></h2>
      </v-col>
      <v-col cols="12">
        <p class="tw-text-center tw-mt-2 tw-text-sm lg:tw-mx-auto lg:tw-max-w-[600px] lg:tw-text-xl">
          O <b>Evoluir</b> conecta escolas, famílias e estudantes organizando, acompanhando e potencializando o desenvolvimento escolar.
        </p>
      </v-col>
      <v-col cols="8" offset="2">
        <CallToAction href="#contato" class="!tw-max-w-[247px]"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.underline-evoluir {
  background-image: url('~/assets/images/evoluir-sublinhado.png');
  background-position: 0 100%;
  background-size: 100%;
}
@keyframes move-1 {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(17px, -25px); }
  50%  { transform: translate(0, -50px); }
  75%  { transform: translate(-17px, -25px); }
  100% { transform: translate(0, 0); }
}
@keyframes move-2 {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(-33px, 17px); }
  50%  { transform: translate(0, 33px); }
  75%  { transform: translate(33px, 17px); }
  100% { transform: translate(0, 0); }
}
@keyframes move-3 {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(42px, 8px); }
  50%  { transform: translate(25px, -42px); }
  75%  { transform: translate(-42px, -17px); }
  100% { transform: translate(0, 0); }
}
@keyframes move-4 {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(8px, 33px); }
  50%  { transform: translate(-25px, 17px); }
  75%  { transform: translate(0, -33px); }
  100% { transform: translate(0, 0); }
}
.animate-1 {
  animation: move-1 8s infinite;
  top: 10%;
  left: 10%;
}

.animate-2 {
  animation: move-2 10s infinite;
  top: 5%;
  right: 10%;
}

.animate-3 {
  animation: move-3 12s infinite;
  bottom: 5%;
  left: 10%;
}

.animate-4 {
  animation: move-4 9s infinite;
  bottom: 5%;
  right: 10%;
}
.people-images {
  display: none;
}
@media (min-width: 1026px) {
  .people-images {
    display: block;
  }
}
</style>