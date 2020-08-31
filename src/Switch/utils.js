export function getRandomHexString(len) {
  if (len < 1) return ''

  const charSet = 'abcdef0123456789'
  let hexString = ''

  while (len) {
    const i = Math.floor(Math.random() * charSet.length)
    hexString += charSet[i]
    len--
  }

  return hexString
}
