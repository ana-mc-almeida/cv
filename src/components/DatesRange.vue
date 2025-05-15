<template>
  <p class="dates">{{ finalString }}</p>
</template>

<script>
export default {
  props: {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      default: null,
    },
    showTotalTime: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    totalMonths() {
      const start = this.parseDate(this.startDate)
      const end = this.endDate ? this.parseDate(this.endDate) : new Date()

      const yearsDiff = end.getFullYear() - start.getFullYear()
      const monthsDiff = end.getMonth() - start.getMonth()

      let totalMonths = yearsDiff * 12 + monthsDiff
      if (totalMonths < 0) {
        totalMonths = 0
      }
      return totalMonths
    },
    totalTime() {
      if (this.totalMonths >= 12) {
        const years = Math.floor(this.totalMonths / 12)
        const months = this.totalMonths % 12
        const yearsText = this.$t('dates.years', years)
        const monthsText = this.$t('dates.months', months)

        if (months !== 0) {
          return `${years} ${yearsText} ${months} ${monthsText}`
        }
        return `${years} ${yearsText}`
      } else {
        const monthsText = this.$t('dates.months', this.totalMonths)
        return `${this.totalMonths} ${monthsText}`
      }
    },
    startDateString() {
      return this.formatDate(this.startDate)
    },
    endDateString() {
      if (!this.endDate) return this.$t('dates.current')
      return this.formatDate(this.endDate)
    },
    finalString() {
      if (this.totalMonths === 0) return this.startDateString
      if (!this.showTotalTime) return this.startDateString + ' - ' + this.endDateString
      return this.totalTime + ' · ' + this.startDateString + ' - ' + this.endDateString
    },
  },
  methods: {
    formatDate(dateString) {
      const date = this.parseDate(dateString)
      const options = { year: 'numeric', month: 'short' }
      return date.toLocaleDateString('en-US', options)
    },
    parseDate(dateString) {
      const [day, month, year] = dateString.split('-').map((num) => parseInt(num, 10))
      return new Date(year, month - 1, day)
    },
  },
}
</script>

<style lang="scss" scoped>
.dates {
  font-size: 13px;
  opacity: 0.7;
  margin: 0;
}
</style>
