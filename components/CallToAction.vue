<template>
  <v-btn
    class="!tw-mx-auto !tw-block tw-bg-blue-bottom !tw-normal-case !tw-text-base !tw-pr-1 !tw-py-1 !tw-font-bold"
    :color="blueBottom"
    rounded
    @click="action"
    size="large"
  >
    <slot>Entrar em contato</slot>
    <div class="tw-ml-4 tw-bg-white tw-rounded-full tw-w-9 tw-h-9 tw-flex tw-items-center tw-justify-center">
      <v-img
        src="~/assets/icons/send-green.svg"
        max-width="16"
        class="tw-ml-[2px] tw-mt-[1px]"
      />
    </div>
  </v-btn>
</template>
<script setup lang="ts">
defineProps({
  action: () => {}
});
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "~/tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);
const blueBottom = fullConfig.theme.colors['blue-bottom']
</script>