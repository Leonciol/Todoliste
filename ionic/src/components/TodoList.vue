<template>
  <div id="todo__list">
    <p>Produit:</p>
    <p>{{ name }}</p>
    <label
      >Acheté
      <input type="checkbox" />
    </label>
  </div>
</template>

<script>
export default {
  name: "TodoList.vue",
  props: {
    name: String,
  },
};
</script>

<style scoped lang="scss">
#todo__list {
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;

  p:first-child {
    color: red;
  }
}
</style>
