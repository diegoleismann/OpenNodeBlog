
function zeroFill(n) {
  return n > 9 ? n : '0' + n
}

export function DateFormat(dateString) {
  const currentDate = new Date(dateString)
  const D = zeroFill(currentDate.getDate())
  const M = zeroFill(currentDate.getMonth() + 1)
  const Y = currentDate.getFullYear()
  const H = zeroFill(currentDate.getHours())
  const m = zeroFill(currentDate.getMinutes())
  return `${D}/${M}/${Y} ${H}:${m}`
}