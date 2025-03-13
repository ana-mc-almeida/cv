<template>
  <div class="entry-item">
    <div
      class="inline-div"
      :class="!titlesInLine ? 'titles-not-in-line' : ''"
      v-if="mainTitle || subTitle"
    >
      <h3 v-if="mainTitle" class="main-title">{{ mainTitle }}</h3>
      <h4 v-if="subTitle" class="sub-title">{{ subTitle }}</h4>
    </div>
    <div class="inline-div" style="margin-bottom: 0.5rem; align-items: end">
      <div class="centered-div">
        <DatesRange
          v-if="startDate"
          :startDate="startDate"
          :endDate="endDate"
          :showTotalTime="showTotalTime"
        />
        <!-- <p class="location">{{ location }}</p> -->
      </div>
      <div class="centered-div">
        <LinkEntry
          v-for="(icon, index) in icons"
          :key="index"
          :icon="icon"
          type="fab"
          color="#1e3a5f"
          iconSize="lg"
          style="margin: 0 2px 0 0"
          iconSource="simpleIcons"
        />
      </div>
    </div>
    <p v-if="description" class="description">{{ description }}</p>
    <hr class="divider" />
  </div>
</template>

<script>
import DatesRange from './DatesRange.vue'
import LinkEntry from './LinkEntry.vue'

export default {
  components: { DatesRange, LinkEntry },
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
    titlesInLine: {
      type: Boolean,
      default: false,
    },
    startDate: {
      type: String,
      default: null,
    },
    endDate: {
      type: String,
      default: null,
    },
    showTotalTime: {
      type: Boolean,
      default: true,
    },
    // location: {
    //   type: String,
    //   default: '',
    // },
    description: {
      type: String,
      default: null,
    },
    icons: {
      type: Array,
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

.titles-not-in-line {
  flex-direction: column;
  align-items: start;
  gap: 0;

  :last-child {
    text-align: left;
  }
}

.main-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.sub-title {
  font-size: 16px;
  opacity: 0.8;
  margin: 0;
  // text-align: right;
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
