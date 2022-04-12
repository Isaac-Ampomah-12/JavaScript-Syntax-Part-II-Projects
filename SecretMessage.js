let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
//console.log(secretMessage);
console.log(secretMessage.length);

secretMessage.push('to', 'Program');
//console.log(secretMessage);

secretMessage[secretMessage.indexOf('easily')] = 'right';
//console.log(secretMessage);

secretMessage.shift();
secretMessage.unshift('Programming');
//console.log(secretMessage);

secretMessage.splice(6, 4, 'know');
console.log(secretMessage.join(' '));
