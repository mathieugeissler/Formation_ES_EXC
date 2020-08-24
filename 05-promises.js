/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

function order(order) {
  return cooking(order.burger)
      .catch((error) => {
        console.error('Error when cooking', error);
        throw error;
      })
      .then((burgerCooked) => packing(burgerCooked))
      .catch((error) => {
        console.error('Error when packing', error);
        throw error;
      })
      .then((pack) => delivery(pack))
      .then(() => console.log('delivery success'));
}

function cooking(burger) {
  return new Promise((resolve, reject) => {
    console.log('cooking...');
    setTimeout(() => {
      // do some cooking....
      const burgerCooked = {isBurn: false};
      if (burgerCooked.isBurn) {
        return reject(new Error('burn'));
      }
      return resolve(burgerCooked);
    }, 5000);
  });
}

function packing(burgerCooked) {
  return new Promise((resolve, reject) => {
    console.log('packing...');
    setTimeout(() => {
      if (!burgerCooked) {
        return reject(new Error('burger missing'));
      }
      const packing = {burgerCooked};
      return resolve(packing);
    }, 2000);
  });
}

function delivery(pack) {
  return new Promise((resolve, reject) => {
    console.log('delivery...');
    setTimeout(() => resolve(), 5000);
  });
}

order({burger: {}})
    .then(() => console.log('order finish'))
    .catch((error) => console.error('order have error', error));


// multiple promise with error
const promise1 = Promise.resolve('promise1');
const promise2 = new Promise((resolve, reject) => setTimeout(resolve('promise2'), 2000));
const promise3 = Promise.resolve('promise3');

// Promise.all([promise1, promise2, promise3])
//     .then((results) => results.forEach((result) => console.log(result)))
//     .catch((error) => console.error('something append', error));

// Promise.allSettled([promise1, promise2, promise3])
//     .then((results) => results.forEach((result) => console.log(result.value, result.status)))
//     .catch((error) => console.error('something append', error));
