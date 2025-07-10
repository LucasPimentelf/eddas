<template>
  <v-container class="lg:!tw-pb-0 tw-mt-16 tw-bg-[#F6EDFF] !tw-py-16 container" id="contato" fluid>
    <v-row class="lg:!tw-pb-0">
      <v-col cols="0" md="6" class="lg:!tw-pb-0">
        <v-img src="~/assets/images/menino-contato.png"/>
      </v-col>
      <v-col cols="12" md="6" class="lg:!tw-pb0">
        <v-card class="lg:tw-mt-12 !tw-p-6 !tw-rounded-xl">
          <h3 class="tw-text-2xl tw-font-bold">Entre em contato!</h3>
          <p class="tw-text-[#73737C] tw-mt-2 tw-mb-8">Fale com a gente, peça uma demonstração ou envie seu desafio. Vamos criar
            algo sob medida para o seu sucesso.</p>
          <v-form>
            <v-text-field
              v-for="input in inputs"
              v-model="input.modelValue.value"
              :placeholder="input.placeholder"
              variant="outlined"
              rounded
              :type="input.type"
              :rules="[v => !!v || 'Campo obrigatório']"
            >
              <template #prepend-inner>
                <v-img
                  :src="input.icon"
                  width="24"
                  height="24"
                />
                <div class="tw-mx-2 tw-h-1/2 tw-w-[1px] tw-bg-[#DADADA]"></div>
              </template>
            </v-text-field>
          
            <v-textarea v-model="message"
              placeholder="Mensagem"
              variant="outlined"
              rounded />
            <v-btn
              block
              :color="blueBottom"
              class="!tw-normal-case !tw-font-bold"
              size="large"
              rounded
              type="submit"
            >
              Entrar em contato
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
  import resolveConfig from "tailwindcss/resolveConfig";
  import tailwindConfig from "~/tailwind.config.js";
  import User from "~/assets/icons/User.svg"
  import EnvelopeSimple from "~/assets/icons/EnvelopeSimple.svg"
  import PhoneCall from "~/assets/icons/PhoneCall.svg"

  const fullConfig = resolveConfig(tailwindConfig);
  const blueBottom = fullConfig.theme.colors['blue-bottom']

  const name = ref('');
  const email = ref('');
  const phoneNumber = ref('');
  const message = ref('');
  const inputs = [
    {
      modelValue: name,
      placeholder: 'Nome*',
      icon: User,
      type: "text"
    },
    {
      modelValue: email,
      placeholder: 'E-mail*',
      icon: EnvelopeSimple,
      type: "email"
    },
    {
      modelValue: phoneNumber,
      placeholder: 'Telefone*',
      icon: PhoneCall,
      type: "tel"
    },
  ]
</script>
<style scoped>
.container {
  background-image: url('~/assets/images/fundo-form.png');
  background-size: contain;
  background-position: center;
}
</style>