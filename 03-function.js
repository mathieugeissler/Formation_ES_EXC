function getOldTitleName(name, title) {
  title = title || 'Leader';
  console.log(title + ' ' + name);
}

getOldTitleName('John');

function getTitleName(name, title = 'Leader') {
  const titleName = title + ' ' + name;
  console.log(titleName);
  return titleName;
}


getTitleName('John');

function getLeaderName(name = getTitleName('Alice')) {
  console.log('Suprem ' + name);
}

getLeaderName();

// Rest Operator
function addUsers(...users) {
  const userInApp = [];
  for (const user of users) {
    userInApp.push(user);
  }
}
addUsers('John', 'Alice', 'Nike');

const users = ['John', 'Alice', 'Nike'];
addUsers(...users);
