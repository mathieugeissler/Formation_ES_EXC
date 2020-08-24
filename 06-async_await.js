async function order(order) {
  try {
    const burgerCooked = await cooking(order.burger);
    try {
      const pack = await packing(burgerCooked);
      await delivery(pack);
      console.log('delivery success');
      return order;
    } catch (error) {
      console.error('Error when packing', error);
      throw error;
    }
  } catch (error) {
    console.error('Error when cooking', error);
    throw error;
  };
}

async function cooking(burger) {
  return new Promise((resolve, reject) => {
    console.log('cooking...');
    setTimeout(() => {
      // do some cooking....
      const burgerCooked = {isBurn: true};
      if (burgerCooked.isBurn) {
        return reject(new Error('burn'));
      }
      return resolve(burgerCooked);
    }, 5000);
  });
}

async function packing(burgerCooked) {
  return new Promise((resolve, reject) => {
    console.log('packing...');
    setTimeout(() => {
      // do some packing...
      if (!burgerCooked) {
        return reject(new Error('burger missing'));
      }
      const packing = {burgerCooked};
      return resolve(packing);
    }, 2000);
  });
}

async function delivery(pack) {
  return new Promise((resolve, reject) => {
    console.log('delivery...');
    setTimeout(() => resolve(), 5000);
  });
}

async function go() {
  try {
    await order({burger: {}});
    console.log('order finish');
  } catch (error) {
    console.error('order have error', error);
  }
}

go();
