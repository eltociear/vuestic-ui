<template>
  <div class="color-grid">
    <div
      class="color-grid__item-wrapper"
      v-for="[name, value] in colorsComputed"
      :key="name"
    >
      <ColorsGridCard class="color-grid__item " :value="getColor(value)" :name="name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColors } from 'vuestic-ui/src/main'
import ColorsGridCard from './colors-grid-card.vue'

const { colors, getColor } = useColors()

const colorsComputed = computed(() => Object.entries(colors))
</script>

<style lang="scss" scoped>
$gap: 12px;

.color-grid {
  display: flex;
  flex-wrap: wrap;
  margin: -$gap;
  padding: $gap 0;

  p {
    margin-bottom: 0.25rem;
  }

  &__item {
    box-sizing: border-box;
    border: 1px solid rgba(58, 58, 58, 0.307);
    border-radius: 5px;

    &-wrapper {
      padding: $gap;
      width: 50%;
    }
  }
}
</style>
