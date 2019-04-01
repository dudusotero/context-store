export default function (str) {
  const params = str.match(/[^&?]*?=[^&?]*/g)
  const obj = {}
  if (params) {
    params.forEach((param) => {
      const [first, second] = param.split('=')
      obj[first] = second.replace('%20', ' ')
    })
  }
  return obj
}
