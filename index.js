var accounts = [[2,8,7],[7,1,3],[1,9,5]]
var maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      // console.log(accounts[i][j]);
      wealth += accounts[i][j];
    }
    if (wealth > maxWealth) {
      maxWealth = wealth;
    }
  }
  return maxWealth;
};

const richestUser = maximumWealth(accounts);
// console.log(richestUser);
