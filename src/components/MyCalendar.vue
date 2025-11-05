<template>
  <div class="calendar">
    <div class="calendar-head">
      <button @click="() => setCurrentMonth(currentDate.getMonth() - 1)"><</button>
      <div @click="enableTyping" v-if="state.formState === 'idle'">
        {{ formattedHeader }}
      </div>
      <input
        v-else
        type="text"
        v-model="editableDate"
        @blur="applyDate"
        @keyup.enter="applyDate"
        autofocus
      />
      <button @click="() => setCurrentMonth(currentDate.getMonth() + 1)">></button>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(day, i) in weekDays" :key="i">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, i) in monthArr" :key="i + '-week'">
          <td
            @click="() => setCurrentDay(day)"
            :class="{ active: day === currentDate.getDate() }"
            v-for="(day, i) in week"
            :key="i + '-day'"
          >
            {{ day < 0 ? '' : day }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { getMonthArr } from '@/utils/getMonthArr'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { d, t } = useI18n()

const state = ref({ formState: 'idle' })

const currentDate = ref(new Date())

const editableDate = ref('')

const enableTyping = () => {
  editableDate.value = currentDate.value.toISOString().split('T')[0] || ''
  state.value.formState = 'typing'
}

const applyDate = () => {
  const parsed = new Date(editableDate.value)
  if (!isNaN(parsed.getTime())) {
    currentDate.value = parsed
  } else {
    alert(t('invalid_date'))
  }
  state.value.formState = 'idle'
}

const weekDays = computed(() => {
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(2025, 0, 5)
    date.setDate(date.getDate() + i)
    return d(date, 'weekday')
  })
})

const formattedHeader = computed(() => {
  return d(currentDate.value, 'full')
})

const monthArr = computed(() =>
  getMonthArr({
    year: currentDate.value.getFullYear(),
    monthIndex: currentDate.value.getMonth(),
  }),
)

const setCurrentDay = (day: number) => {
  if (day < 0) return
  currentDate.value.setDate(day)
  currentDate.value = new Date(currentDate.value)
}

const setCurrentMonth = (month: number) => {
  currentDate.value.setMonth(month)
  currentDate.value = new Date(currentDate.value)
}
</script>

<style scoped>
.calendar-head {
  display: flex;
  justify-content: space-between;
}
.calendar-head button {
  background: teal;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
}
.calendar-head > div {
  font-weight: bold;
  cursor: pointer;
}

.calendar {
  border: 1px solid teal;
  border-radius: 5px;
  padding: 10px;
}
table {
  border-collapse: collapse;
}
td {
  position: relative;
  padding: 3px;
  text-align: center;
  border: 1px solid teal;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.active:before {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: gray;
  border-radius: 50%;
  z-index: -1;
}
</style>
