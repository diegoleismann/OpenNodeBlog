
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

export function DateISOFormat(dateString) {
  const date = dateString.replace(/\D/g, "")
  const current = new Date();
  const D = parseInt(date.substring(0, 2))
  const M = parseInt(date.substring(2, 4)) - 1
  const Y = parseInt(date.substring(4, 8))
  const H = parseInt(date.substring(8, 10))
  const m = parseInt(date.substring(10, 12))
  current.setDate(D)
  current.setMonth(M)
  current.setFullYear(Y)
  current.setHours(H)
  current.setMinutes(m);
  return current.toISOString();
}