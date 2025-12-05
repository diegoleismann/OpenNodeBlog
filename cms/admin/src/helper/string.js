export function Normalize(text) {
  return text.toLowerCase()
    .replace(/[aáàãâä]/g, "a")
    .replace(/[eéèêë]/g, "e")
    .replace(/[iíìîï]/g, "i")
    .replace(/[oóòõôö]/g, "o")
    .replace(/[uúùûü]/g, "u")
    .replace(/[ç]/g, "c")
    .replace(/[ ]/g, "-")
    .replace(/[^a-z-]/, "")
    .replace(/[-][-]/, "-")
}