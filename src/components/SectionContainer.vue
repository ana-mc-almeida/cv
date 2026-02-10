<template>
  <div class="section">
    <h2 class="section-title">{{ title }}</h2>
    <div class="underline" />
    <div class="section-content" :class="direction">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'column',
      validator(value) {
        return ['column', 'row'].includes(value)
      },
    },
  },
}
</script>

<style>
.section {
  flex: 1;
  width: 100%;
  text-align: left;
  margin-top: 1rem;
}
.section-title {
  /* text-transform: uppercase; */
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 10px;
  border-bottom: 1px solid;
  display: flex;
}

.section-content.column {
  display: flex;
  flex-direction: column;
}

.section-content.row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

</style>
