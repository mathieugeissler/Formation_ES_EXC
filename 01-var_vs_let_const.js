/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */

// declaration de la variable dans le bloc function
function getVarLeaderName1(user) {
  console.log('Function 1');
  var name;
  if (user.show) {
    name = 'Leader ' + user.nickname;
    console.log('Name in if bloc:', name);
  }
  console.log('Name in function bloc:', name);
}

// déclaration de la variable dans le bloc if
function getVarLeaderName2(user) {
  console.log('Function 2');
  if (user.show) {
    var name = 'Leader ' + user.nickname;
    console.log('Name in if bloc:', name);
  }
  console.log('Name in function bloc:', name);
}

function varExemples() {
  getVarLeaderName1({show: true, nickname: 'John'});
  getVarLeaderName2({show: true, nickname: 'Alice'});
}

function getLetLeaderName(user) {
  if (user.show) {
    let name = 'Leader ' + user.nickname;
    console.log('Name in if bloc:', name);
  }
  console.log('Name in function bloc:', name);
}

function letExemple() {
  getLetLeaderName({show: true, nickname: 'Nike'});
}

varExemples();
// letExemple();

function getConstLeaderName(user) {
  if (user.show) {
    const name = 'Leader ' + user.nickname;
    console.log('Name in if bloc:', name);
    name = 'test';
  }
  console.log('Name in function bloc:', name);
}

// getConstLeaderName({nickname: 'Sarah', show: true});
