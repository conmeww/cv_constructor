<template>
  <div class="relative mb-6">
    <input v-model="skill" :class="{'border-blue-custom border-b-2': showSkillList}"
           class="w-full px-4  h-10 bg-gray-100 appearance-none   focus:outline-none  focus:border-blue-custom focus:border-b-2"
           placeholder="Add skills"
           type="text" @input="filterList($event),showSkillList = true"
    />
    <SearchSkillsList v-if="showSkillList" ref="skillList" :items="filteredList =  filteredList.filter(el => !formStore.skills.includes(el) &&  el.name.toLowerCase().includes(skill)) " class="absolute top-10 z-10 w-full"
                      @add="formStore.addSkill($event),skill = '',showSkillList = false"/>


  </div>
  <div class="flex flex-wrap gap-2">
    <SearchSkillsItem v-for="skill in formStore.skills" :skill="skill"
                      @delete="formStore.deleteSkill($event),returnItemToList($event)">

    </SearchSkillsItem>
  </div>

</template>
<script lang="ts" setup>
import {reactive, ref} from "vue";
import {Skill} from "~/types";
import {onClickOutside} from '@vueuse/core'
import {useFormStore} from "~/store";
import Json from '../../../mock/skills.json'
import {retry} from "rxjs/src/internal/operators/retry";

let showSkillList = ref(false)
const skillList = ref(null)
onClickOutside(skillList, (event) => showSkillList.value = false)

const formStore = useFormStore()
type SkillsList = Array<Skill>

let mockSkills = Json

const items = reactive({
  value: [{}] as SkillsList,
})

let filteredList = ref([])
const filterList = (e) => {
  filteredList.value = mockSkills.filter(el => {
    el.name.toLowerCase().includes(e.target.value.toLowerCase()) && !formStore.skills.includes(el)
    return mockSkills
  })
}
const returnItemToList = (e) => {
//  filteredList.value = mockSkills.filter(el => {
 //    !formStore.skills.includes(el)
  //  return mockSkills
 // })
}
defineExpose({
  items
})
</script>