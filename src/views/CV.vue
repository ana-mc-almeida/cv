<template>
  <div class="page">
    <OptionsBar :cvContainer="cvContainerRef" />
    <div class="cv-container" ref="cvContainer">
      <div class="side-panel-container">
        <SidePanel />
      </div>
      <div class="content-area-container">
        <ContentArea />
      </div>
    </div>
  </div>
</template>

<script>
import OptionsBar from '../components/OptionsBar.vue'
import SidePanel from '../components/SidePanel.vue'
import ContentArea from '../components/ContentArea.vue'

export default {
  components: { OptionsBar, SidePanel, ContentArea },
  data() {
    return {
      cvContainerRef: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.cvContainerRef = this.$refs.cvContainer
    })
  },
}
</script>

<style lang="scss">
@use '@/assets/styles/_variables.scss' as *;

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: $secondary-color;
}

.page {
  max-width: 800px;
  margin: 20px auto;
}

.cv-container {
  display: flex;
  background: $primary-color;
  // box-shadow: 0 0 10px rgba($primary-color, 0.1); // TODO: fix because its not showing
  padding: 1rem;
  box-sizing: border-box;
}

.side-panel-container {
  flex: 1.5;
  display: flex;
}

.content-area-container {
  flex: 2.5;
}
</style>
