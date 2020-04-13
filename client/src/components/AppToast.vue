<template>
  <div id="app-toast">
    <transition name="bounce">
      <template v-if="text">
        <div class="toast">
          <div class="toast-text">{{text}}</div>
        </div>
      </template>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app-toast",
  props: {
    duration: {
      type: Number,
      default: 1000
    },
    flashMessage: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      text: null
    };
  },
  watch: {
    flashMessage() {
      const vm = this;
      vm.text = vm.flashMessage.message;
      setTimeout(function() {
        vm.text = null;
      }, vm.duration);
      // }
    }
  }
};
</script>

<style lang="scss">
.toast {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: calc(0px + 1rem);

  .toast-text {
    padding: 1rem 1.5rem;
    margin: 0 auto;
    color: #fff;
    font-size: 10px;
    text-transform: capitalize;
    background: rgba(32, 32, 32, 0.95);
    border-radius: 4px;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.125);
  }
  100% {
    transform: scale(1);
  }
}
</style>