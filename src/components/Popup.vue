<template>
  <teleport :to="popupStore.portalTarget">
    <div v-if="popupStore.isOpen" class="popup-underlay" @click="popupStore.close()"></div>
    <transition name="bounce">
      <div v-if="popupStore.isOpen" class="popup">
        <button @click="popupStore.close()">Close <CloseIcon /></button>
        <div>
          <slot name="default" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue"
import { usePopupStore } from "../stores/popupStore"

import CloseIcon from "../assets/svg/x.svg"

export default defineComponent({
  name: "App",
  components: {
    CloseIcon,
  },
  setup() {
    const popupStore = usePopupStore()

    watch(popupStore, (value) => {
      window.document.body.style.overflow = value.isOpen ? "hidden" : null
    })

    return { popupStore }
  },
})
</script>

<style>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  width: min(60vw, calc(100% - var(--space-l) * 2));
  height: min(60vw, calc(100% - var(--space-l) * 2));
  z-index: 50;
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-overlay);
  transform: translate(-50%, -50%) scale3d(1, 1, 1);
  opacity: 1;
  border-radius: var(--border-radius);
  padding: var(--space-l);
}

.popup-underlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.bounce-enter-active {
  animation: bounce-in 300ms;
}

.bounce-leave-active {
  animation: bounce-in 300ms reverse;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale3d(1.2, 1.2, 1.2);
  }
  100% {
    transform: translate(-50%, -50%) scale3d(1, 1, 1);
  }
}
</style>
