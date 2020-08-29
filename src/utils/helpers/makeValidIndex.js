export default (idx, string) => {
  const validString = string
    .split(' ')
    .filter((el) => el !== '-')
    .join('-')
  return `${idx}-${validString}`
}
