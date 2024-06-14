function distantion(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
  console.log(distantion);

//   const deposit = 12000;
//   const rate = 0.07;
//   const years = 24;
//   const houseCost = 16500

//   const res = deposit * (1 + rate / 12) ** 24;
//   if (res > houseCost) {
//     console.log(`Можем купить. Остаток ${res - houseCost}`)
//   } else {
//     console.log('Нищеброд, пока иди похай')
//   }

  const languages = ('ru' , 'en');

  switch (true) {
    case languages == 'ru':
    console.log('Привет')
    case languages == 'en':
        console.log('hello')
  }