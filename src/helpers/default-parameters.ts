export default function defaultParameters (parameters: any[]) {
  const data: { [key: string]: string } = {}

  parameters.forEach(function (parameter) {
    data[parameter.name()] = parameter.default()
  })

  return data
}
