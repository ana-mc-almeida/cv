<template>
  <div class="content-area">
    <h1 style="margin: 0">{{ $t('my-name') }}</h1>
    <h4 style="margin: 0">{{ $t('short-profile') }}</h4>
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
    <!-- <SectionContainer :title="$t('projects.title')">
      <SectionEntry
        :mainTitle="$t('projects.expocic.title')"
        :subTitle="$t('cic')"
        startDate="31-10-2020"
        endDate="01-10-2021"
        :icons="['php', 'mysql', 'bootstrap', 'javascript', 'html5', 'css']"
      >
        <template #description>
          <p>{{ $t('projects.expocic.description') }}</p>
          <p>{{ $t('projects.expocic.technologies') }}</p>
        </template>
      </SectionEntry>
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
    </SectionContainer> -->
    <SectionContainer :title="$t('education.title')">
      <SectionEntry
        :subTitle="$t('education.erasmus.title')"
        :mainTitle="$t('tudelft')"
        startDate="14-08-2025"
        endDate="02-02-2026"
      >
        <template #description>
          <p>{{ $t('education.erasmus.description') }}</p>
        </template>
      </SectionEntry>
      <SectionEntry
        :subTitle="$t('education.masters.title')"
        :mainTitle="$t('ist')"
        startDate="1-09-2024"
      >
        <template #description>
          <p>{{ $t('education.masters.description') }}</p>
          <p>{{ $t('education.masters.github') }}</p>
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
          <p>{{ $t('education.bachelors.github') }}</p>
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
    <SectionContainer :title="$t('volunteering.title')" direction="row">
      <div style="flex: 1;">
        <LinkEntry :text="$t('bartender')" iconSize="2xs" type="regular" color="#1e3a5f" link="https://dwhdelft.nl/en" />
        <LinkEntry :text="$t('banco-alimentar')" iconSize="2xs" type="regular" color="#1e3a5f" link="https://www.bancoalimentar.pt/" />
      </div>
      <div style="flex: 1;">
        <LinkEntry :text="$t('miup')" iconSize="2xs" type="regular" color="#1e3a5f" link="https://tecnico.ulisboa.pt/pt/eventos/miup-2021-maratona-inter-universitaria-de-programacao/" />
        <LinkEntry :text="$t('jn_solidario')" iconSize="2xs" type="regular" color="#1e3a5f" link="https://www.jn.pt/nacional/artigo/atencao-especial-aos-idosos-durante-a-pandemia/12105746"/>
      </div>
      <!-- <LinkEntry
        :text="$t('homeless_distribution')"
        iconSize="2xs"
        type="regular"
        color="#1e3a5f"
      /> -->
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
