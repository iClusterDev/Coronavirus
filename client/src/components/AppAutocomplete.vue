<template>
  <div id="app-autocomplete">
    <input
      type="text"
      autocomplete="off"
      placeholder="Add Country..."
      v-model="userOption"
      @input="onInput"
    />
    <button @click.stop="onClear">
      <font-awesome-icon icon="times" />
    </button>
    <ul v-show="isOpen" class="menu elevated">
      <li
        class="menu-item"
        v-for="(item, index) of userMenu"
        :key="index"
        @click.stop="onSelect(item.country)"
      >
        <div class="menu-item-text">{{ item.country }}</div>
        <img class="menu-item-thumb" :src="item.flag" alt="country flag" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app-autocomplete",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      userOption: "",
      userMenu: []
    };
  },
  computed: {
    isOpen() {
      return this.userOption ? true : false;
    }
  },
  methods: {
    onInput() {
      this.userMenu = this.options.filter(item =>
        item.country.startsWith(this.userOption.toLowerCase())
      );
    },
    onSelect(country) {
      this.userOption = "";
      this.$emit("select", country);
    },
    onClear() {
      this.userOption = "";
    }
  }
};
</script>

<style lang="scss">
#app-autocomplete {
  position: relative;
  margin: 1rem 0;

  input {
    outline: none;
    border: none;
    width: 100%;
    height: 36px;
    padding: 0 1rem;
    border-radius: 4px;
  }

  button {
    cursor: pointer;
    position: absolute;
    height: 30px;
    border: none;
    width: 30px;
    top: 50%;
    left: calc(100% - 30px - 0.5rem);
    transform: translateY(-50%);
    background: transparent;
    outline: none;
  }

  ul,
  .menu {
    z-index: 10;
    background: #fff;
    max-height: 320px;
    list-style: none;
    overflow-y: scroll;
    position: absolute;
    border-radius: 4px;
    width: 100%;
    padding: 0;
    margin: 0;
    top: 40px;

    li,
    .menu-item {
      cursor: pointer;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background-color: lighten($color: #000, $amount: 90);
      }

      .menu-item-text {
        font-weight: 500;
        text-transform: capitalize;
        transition: background-color 0.5s;
      }

      img,
      .menu-item-thumb {
        margin-right: 0.5rem;
        display: block;
        width: 24px;
        height: 16px;
      }
    }
  }
}
</style>
