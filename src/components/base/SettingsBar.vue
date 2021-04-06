<template>
  <div :class="$style.container">
    <Button :class="$style.button" :clean="true" @click="popupStore.open(popupId)">
      <HexagonIcon />
    </Button>
  </div>

  <Popup v-if="isPopupSelected">
    <div>
      <Button @click="handleReset">Reset Game</Button>
    </div>

    <LayoutIcon />

    <div>
      <Button v-for="layout in appStore.layouts" :key="layout.name" @click="handleLayoutChange(layout)">
        {{ layout.name }}
      </Button>
    </div>
  </Popup>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"

import { usePopupStore } from "../../stores/popupStore"
import { AppLayout, useAppStore } from "../../stores/appStore"

import Button from "../../components/base/Button.vue"
import Popup from "../../components/Popup.vue"

import HexagonIcon from "../../assets/svg/hexagon.svg"
import LayoutIcon from "../../assets/svg/layout.svg"

export default defineComponent({
  components: {
    Button,
    Popup,
    HexagonIcon,
    LayoutIcon,
  },
  setup() {
    const popupStore = usePopupStore()
    const popupId = ref(popupStore.generateId())
    const isPopupSelected = computed(() => popupStore.selectedId === popupId.value)

    const appStore = useAppStore()
    const handleLayoutChange = (layout: AppLayout) => {
      popupStore.close()
      appStore.setLayout(layout)
    }

    const handleReset = () => {
      popupStore.close()
      appStore.reset()
    }

    return {
      popupStore,
      popupId,
      isPopupSelected,
      appStore,
      handleLayoutChange,
      handleReset,
    }
  },
})
</script>

<style module>
.container {
  display: flex;
  justify-content: center;
}

.button svg {
  position: relative;
  z-index: 1;
  stroke: var(--color-accent);
}
</style>
