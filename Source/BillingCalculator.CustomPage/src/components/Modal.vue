<template>
  <div class="overlay">
    <rwc-modal-layout>
      <span slot="header">
        <span>Hello the bill calculator</span>
      </span>
      <span slot="actions" class="actions">
        <slot name="actions"></slot>
      </span>
    </rwc-modal-layout>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(108, 117, 132, 0.5);
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
