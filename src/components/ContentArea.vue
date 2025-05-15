<template>
  <div class="content-area">
    <h1 style="margin: 0">{{ $t('my-name') }}</h1>
    <h3 style="margin: 0">{{ $t('short-profile') }}</h3>
    <!-- <SectionContainer :title="$t('profile.title')" style="text-align: justify">
      <SectionEntry :description="$t('profile.description')" />
    </SectionContainer> -->
    <SectionContainer :title="$t('experience.title')">
      <SectionEntry
        :mainTitle="$t('experience.dsi.title')"
        :subTitle="$t('ist')"
        startDate="15-01-2023"
        :icons="['nodedotjs', 'vuedotjs', 'mongodb', 'elasticsearch', 'i18next', 'gitlab', 'scss']"
      >
        <template #description>
          <p>{{ $t('experience.dsi.description') }}</p>
          <p>{{ $t('experience.dsi.technologies') }}</p>
        </template>
      </SectionEntry>
      <SectionEntry
        :mainTitle="$t('experience.ambidata.title')"
        :subTitle="$t('ambidata')"
        startDate="01-07-2020"
        endDate="01-04-2021"
        :icons="['postman', 'azuredevops']"
      >
        <template #description>
          <p>{{ $t('experience.ambidata.description') }}</p>
          <p>{{ $t('experience.ambidata.technologies') }}</p>
        </template>
      </SectionEntry>
    </SectionContainer>
    <SectionContainer :title="$t('education.title')">
      <SectionEntry
        :subTitle="$t('education.masters.title')"
        :mainTitle="$t('ist')"
        startDate="1-09-2024"
      >
        <template #description>
          <p style="margin-bottom: 15px">{{ $t('education.masters.description') }}</p>
          <p>{{ $t('education.masters.grade') }}</p>
          <p>{{ $t('education.masters.merits') }}</p>
          <p>
            {{ $t('education.masters.github') }}
            <a href="https://github.com/ana-mc-almeida/">Github</a>.
          </p>
        </template>
      </SectionEntry>
      <SectionEntry
        :subTitle="$t('education.bachelors.title')"
        :mainTitle="$t('ist')"
        startDate="04-10-2021"
        endDate="31-07-2024"
      >
        <template #description>
          <p>{{ $t('education.bachelors.description') }}</p>
          <p>
            {{ $t('education.bachelors.github') }}
            <a href="https://github.com/ana-mc-almeida/">Github</a>.
          </p>
        </template>
      </SectionEntry>
      <SectionEntry
        :mainTitle="$t('cic')"
        :subTitle="$t('education.high-school.title')"
        startDate="13-09-2018"
        endDate="13-07-2021"
      >
        <template #description>
          <p>{{ $t('education.high-school.grade') }}</p>
          <p>{{ $t('education.high-school.description') }}</p>
        </template>
      </SectionEntry>
    </SectionContainer>
    <SectionContainer :title="$t('languages.title')" class="languages">
      <LinkEntry
        :text="$t('languages.portuguese.title') + ' - ' + $t('languages.portuguese.level')"
        iconSize="2xs"
        type="regular"
        color="#1e3a5f"
      />
      <LinkEntry
        :text="$t('languages.english.title') + ' - ' + $t('languages.english.level')"
        iconSize="2xs"
        type="regular"
        color="#1e3a5f"
      />
      <LinkEntry
        :text="$t('languages.spanish.title') + ' - ' + $t('languages.spanish.level')"
        iconSize="2xs"
        type="regular"
        color="#1e3a5f"
      />
    </SectionContainer>
    <!-- <SectionContainer :title="$t('volunteering.title')">
      <LinkEntry :text="$t('miup')" iconSize="2xs" type="regular" color="#1e3a5f" />
      <LinkEntry :text="$t('jn_solidario')" iconSize="2xs" type="regular" color="#1e3a5f" />
      <LinkEntry
        :text="$t('homeless_distribution')"
        iconSize="2xs"
        type="regular"
        color="#1e3a5f"
      />
      <LinkEntry :text="$t('banco-alimentar')" iconSize="2xs" type="regular" color="#1e3a5f" />
    </SectionContainer> -->
  </div>
</template>

<script>
import SectionContainer from './SectionContainer.vue'
import SectionEntry from './SectionEntry.vue'
import LinkEntry from './LinkEntry.vue'

export default {
  components: {
    SectionContainer,
    SectionEntry,
    LinkEntry,
  },
}
</script>

<style lang="scss">
@use '@/assets/styles/_variables.scss' as *;

.content-area {
  background: $primary-color;
  color: $secondary-color;
  padding: 0 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

p a {
  text-decoration: none;
  color: $secondary-color;
  opacity: 0.8;
  font-weight: bold;
}

.languages .contact-item {
  margin-bottom: 5px;
}
</style>
