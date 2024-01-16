// extra - зробити реверс кожного слова не змінюючи порядок слів
// 1. розбити масив слів
// 2.1 розбити кожне слово масив символів
// 2.2 реверснути
// 2.3 зібрати слово в один рядок
// 3. зібрати текст із масиву слів

// emocleW ot eht erutuf
const string = 'Welcome to the future';

const strArr = string.split(' ');
console.log(strArr);
let result = '';

for (let i = 0; i < strArr.length; i += 1){
  // const chrArr = strArr[i].split('');
  // const reversed = chrArr.reverse();
  // const join = reversed.join('');
  // console.log(join);

  strArr[i].split('').reverse().join('');

  result += strArr[i];
}

console.log(result);