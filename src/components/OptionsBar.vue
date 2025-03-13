<template>
  <div class="options-bar">
    <button class="export-button" @click="exportToPDF">Exportar para PDF</button>
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'

export default {
  props: {
    cvContainer: {
      type: Object,
    },
  },
  methods: {
    exportToPDF() {
      // FIXME: text should be selectable
      const element = this.cvContainer

      const options = {
        margin: 0,
        filename: 'Curriculum_Vitae.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        enableLinks: true,
      }

      html2pdf().set(options).from(element).save()
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/styles/_variables.scss' as *;

.options-bar {
  margin: 1rem;
}

.export-button {
  // TODO: improve button style
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  color: $text-color;
  background: $primary-color;
  border: 1px solid transparent;
  cursor: pointer;
  text-align: center;
}
.export-button:hover {
  background: $secondary-color;
  color: $primary-color;
  border: 1px solid $primary-color;
}
</style>
