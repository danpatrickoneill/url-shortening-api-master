// const axios = require('axios');

// async function shortenLink(url) {
//   function generateLink(url) {
//     return axios
//       .post('https://rel.ink/api/links/', { url })
//       .then((res) => res.data)
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   const dataPromise = generateLink(url);
//   const dataIWant = await generateLink(url);

//   console.log(dataPromise);

//   console.log(dataIWant);

//   return dataIWant;

//   let base = 'https://rel.ink/';
//   const hash = dataPromise
//     .then((data) => {
//       // console.log(base + data.hashid);
//       return data.hashid;
//     })
//     .catch((err) => console.log(err));
//   console.log(hashId);
// }

// const shortened = ['https://rel.ink/', null];
// shortenLink('https://news.ycombinator.com/').then((res) => {
//   shortened[1] = res.hashid;
//   // console.log(shortened.join(''));
// });

// console.log(shortened);
// shortenLink('https://news.ycombinator.com/');
