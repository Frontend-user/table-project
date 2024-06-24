export const formatBirthDate = (date: string): string => {
  const year = new Date(date).getFullYear().toString()
  const month = new Date(date).getMonth().toString().padStart(2, '0')
  const day = new Date(date).getDay().toString().padStart(2, '0')
  return `${year}.${month}.${day}`
}
