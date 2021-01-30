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

const generateRandomExpression = () => {
  let finalMessage = [];
  for (let property in messages) {
    
    var randomNum = generateRundomNumber(messages[property].length)
    switch (property) {
      case 'sign':
        finalMessage.push(expressions.signExpression + messages[property][randomNum])
        break;
      case 'fortune':
        finalMessage.push(expressions.fortuneExpression + messages[property][randomNum])
        break;
      case 'advice':
        finalMessage.push(expressions.adviceExpression + messages[property][randomNum])
        break;
      default:
        finalMessage.push('Come back later')
    }
  }
  return finalMessage
}

function generateFinalExpression(generateRandomExpression) {
  let finalExpressionresult = generateRandomExpression().join('\n');
  return finalExpressionresult
}

// console.log(generatefinalExpression(generateRandomExpression))
