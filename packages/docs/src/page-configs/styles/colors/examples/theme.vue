<template>
  <div>
    <p class="d-flex align--center">
      Background colors:
      <va-button-toggle v-model="theme" :options="themeOptions" class="ml-2" />
    </p>

    <p class="d-flex align--center">
      Primary color:
      <va-color-palette
        class="ml-2"
        v-model="primaryColor"
        :palette="primaryColorVariants"
      />
    </p>
  </div>
</template>

<script>
import { ref, watchEffect, toRef } from 'vue'
import { useColors } from 'vuestic-ui/src/main'

export default {
  setup () {
    const { presets, applyPreset, colors } = useColors()

    const theme = ref(localStorage.getItem('vuestic-docs-theme')?.toLowerCase() || 'light')

    watchEffect(() => {
      applyPreset(theme.value)
    })

    const primaryColorVariants = ['#2c82e0', '#ef476f', '#ffd166', '#06d6a0', '#8338ec']

    const primaryColor = toRef(colors, 'primary')

    return {
      theme,
      themeOptions: Object.keys(presets.value).map((themeName) => ({
        value: themeName,
        label: themeName,
      })),

      primaryColor,
      primaryColorVariants,
    }
  },
}
</script>
