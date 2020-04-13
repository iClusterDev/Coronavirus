<template>
  <div class="app-info">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="value">
      <slot name="value"></slot>
    </div>
    <div class="extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
export default { name: "app-info" };
</script>

<style lang="scss">
.app-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lighten(#ad0e5d, 5);
  padding: 1.25rem 0;

  .value {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .title,
  .extra {
    font-size: 0.85rem;
  }
}
</style>