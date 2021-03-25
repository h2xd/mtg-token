<template>
  <div class="library">
    <Headline>
      Library
      <template #icon>
        <BookIcon />
      </template>
    </Headline>
    <ul v-for="entry in Library.entries" :key="entry.slug">
      <li>
        <div>{{ entry.name }}</div>
        <div>{{ entry.tokenOptions.power }}P / {{ entry.tokenOptions.toughness }}T</div>

        <Button @click="$emit('summon', entry)">Summon</Button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { useLibraryStore } from "../stores/libraryStore"

import Button from "../components/base/Button.vue"
import Headline from "../components/base/Headline.vue"
import BookIcon from "../assets/svg/book.svg"

export default defineComponent({
  name: "Board",
  components: {
    BookIcon,
    Button,
    Headline,
  },
  setup: () => {
    const Library = useLibraryStore()

    return { Library }
  },
})
</script>

<style scoped>
.library {
  padding: var(--space-l);
  transition: var(--transition);
  background-color: var(--color-background);
  color: var(--color-text);
  box-shadow: var(--box-shadow-overlay);
  text-align: left;
}
</style>
