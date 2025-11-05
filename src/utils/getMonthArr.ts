interface GetMonthArrParams {
  year: number
  monthIndex: number
}

export const getMonthArr = ({ year, monthIndex }: GetMonthArrParams): number[][] => {
  const firstDay = new Date(year, monthIndex, 1)
  const lastDay = new Date(year, monthIndex + 1, 0)
  const daysCount = lastDay.getDate()
  const firstDayIndex = firstDay.getDay()
  const prevMonthDaysCount = firstDayIndex === 0 ? 6 : firstDayIndex - 1
  const prevMonthDays = Array.from({ length: prevMonthDaysCount }, () => -1)
  const monthDays = Array.from({ length: daysCount }, (_, i) => i + 1)
  const nextMonthDaysCount = 42 - (prevMonthDaysCount + daysCount)
  const nextMonthDays = Array.from({ length: nextMonthDaysCount }, () => -1)
  const allDays = [...prevMonthDays, ...monthDays, ...nextMonthDays]
  const weekChunks = []

  for (let i = 0; i < allDays.length; i += 7) {
    const week = allDays.slice(i, i + 7)

    if (week.some((day) => day > 0)) {
      weekChunks.push(week)
    }
  }
  return weekChunks
}
