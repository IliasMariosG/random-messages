function generateRundomNumber(number) {
  return Math.floor(Math.random() * number)
}

const messages = {
  sign: ['sun', 'moon'],
  fortune: ['good luck', 'ok luck'],
  advice: ['trust some', 'do what you need to']
}

const expressions = {
  signExpression: 'Your sign is ',
  fortuneExpression: 'You are having ',
  adviceExpression: 'You should '
}
