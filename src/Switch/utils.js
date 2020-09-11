export function getRandomHexString(len) {
  if (typeof len !== 'number' || len < 1) return ''

  len = Math.floor(len)

  const charSet = 'abcdef0123456789'
  let hexString = ''

  while (len) {
    const i = Math.floor(Math.random() * charSet.length)
    hexString += charSet[i]
    len--
  }

  return hexString
}
