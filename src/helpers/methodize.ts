import pascal = require('pascal-case')

export default function (method: any) {
  const path = method.parentResource().completeRelativeUri()
    .split('/')
    .map((x: string) => pascal(x))
    .join('')

  return method.method() + path
}
