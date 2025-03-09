<template>
  <div class="entry-item">
    <div class="titles" v-if="mainTitle || subTitle">
      <h3 v-if="mainTitle" class="main-title">{{ mainTitle }}</h3>
      <h4 v-if="subTitle" class="sub-title">{{ subTitle }}</h4>
    </div>
    <DatesRange v-if="startDate" :startDate="startDate" :endDate="endDate" />
    <!-- <p class="location">{{ location }}</p> -->
    <p v-if="description" class="description">{{ description }}</p>

    <hr class="divider" />
  </div>
</template>

<script>
import DatesRange from './DatesRange.vue'

export default {
  components: { DatesRange },
  props: {
    // TODO: add 'titleInLine' bool to choose if we want main and sub title in the same line or not
    mainTitle: {
      type: String,
      default: null,
    },
    subTitle: {
      type: String,
      default: null,
    },
    startDate: {
      type: String,
      default: null,
    },
    endDate: {
      type: String,
      default: null,
    },
    // location: {
    //   type: String,
    //   default: '',
    // },
    description: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/_variables.scss' as *;

.entry-item {
  margin-bottom: 0.5rem;
}

.entry-item:last-child {
  margin-bottom: 0;
}

.entry-item:last-child .divider {
  visibility: hidden;
  margin: 0;
}

.titles {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
}

.main-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.sub-title {
  font-size: 16px;
  opacity: 0.9;
  margin: 0;
  text-align: right;
}

/* .location {
  font-size: 13px;
  color: #777;
} */

.description {
  font-size: 14px;
  margin: 0;
  text-align: justify;
}

.divider {
  border: none;
  border-top: 1px dotted $light-blue;
  margin-top: 12px;
  width: 90%;
}
</style>
