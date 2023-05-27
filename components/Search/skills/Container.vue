<template>
  <div class="relative mb-6">
    <div class="expand w-full rounded inline-block overflow-hidden relative" tabindex="0">
      <input v-model="skill" :class="{'border-blue-custom border-b-2': showSkillList}"
             class="w-full px-4  h-10 bg-gray-100 rounded   bg-gray-custom appearance-none   focus:outline-none  focus:border-blue-custom focus:border-b-2"
             placeholder="Add skills"
             type="text" @input="filterList($event),showSkillList = true"
      />
      <div class="block absolute border-expand   bg-blue-custom w-full"></div>
    </div>


    <SearchSkillsList class="rounded shadow-md  absolute top-11 z-10 w-full"  v-if="showSkillList" ref="skillList" :items="filteredList =  filteredList.filter(el => !formStore.skills.includes(el) &&  el.name.toLowerCase().includes(skill)) "
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
import Json from '../../../mockData/skills.json'
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
<style scoped>
.expand input {
  padding: 10px;
  border: none;
}
.border-expand {
  height: 3px;
  top: 94%;
  transform: scaleX(0);
  transition: transform 0.2s;
  transform-origin:  center;
}
input:focus + .border-expand, .expand:focus .border-expand{
  transform: scaleX(1);
  border-width: 0;
}
</style>