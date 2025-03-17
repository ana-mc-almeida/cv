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
        :description="$t('experience.dsi.description') + ' ' + $t('experience.dsi.technologies')"
        :icons="['nodedotjs', 'vuedotjs', 'mongodb', 'elasticsearch', 'i18next', 'gitlab', 'scss']"
      />
      <SectionEntry
        :mainTitle="$t('experience.ambidata.title')"
        :subTitle="$t('ambidata')"
        startDate="01-07-2020"
        endDate="01-04-2021"
        :description="
          $t('experience.ambidata.description') + ' ' + $t('experience.ambidata.technologies')
        "
        :icons="['postman', 'azuredevops']"
      />
    </SectionContainer>
    <SectionContainer :title="$t('projects.title')">
      <SectionEntry
        :mainTitle="$t('projects.expocic.title')"
        :subTitle="$t('cic')"
        startDate="31-10-2020"
        endDate="01-10-2021"
        :description="
          $t('projects.expocic.description') + ' ' + $t('projects.expocic.technologies')
        "
        :icons="['php', 'mysql', 'bootstrap', 'javascript', 'html5', 'css']"
      />
      <SectionEntry
        :mainTitle="$t('projects.pap.title')"
        :subTitle="$t('ambidata')"
        startDate="06-01-2021"
        endDate="22-04-2021"
        :description="$t('projects.pap.description') + ' ' + $t('projects.pap.technologies')"
        :icons="['dotnet', 'devexpress']"
      />
      <SectionEntry
        :mainTitle="$t('projects.depressure.title')"
        subTitle="Finalista TecStorm'22"
        startDate="01-01-2022"
        endDate="01-03-2022"
        :description="
          $t('projects.depressure.description') + ' ' + $t('projects.depressure.technologies')
        "
        :icons="['figma']"
      />
    </SectionContainer>
    <SectionContainer :title="$t('volunteering.title')">
      <LinkEntry :text="$t('miup')" iconSize="2xs" type="regular" color="#1e3a5f" />
      <LinkEntry :text="$t('jn_solidario')" iconSize="2xs" type="regular" color="#1e3a5f" />
      <!-- <LinkEntry
        :text="$t('homeless_distribution')"
        iconSize="2xs"
        type="regular"
        color="#1e3a5f"
      /> -->
      <LinkEntry :text="$t('banco-alimentar')" iconSize="2xs" type="regular" color="#1e3a5f" />
    </SectionContainer>
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
</style>
