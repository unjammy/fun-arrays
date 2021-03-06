var dataset = require('./dataset.json');

/*
  create an array with accounts from bankBalances that are
  greater than 100000
  assign the resulting new array to `hundredThousandairs`
*/
var hundredThousandairs = dataset.bankBalances.filter(function( account ){
  return account.amount > 100000;
});

/*
  DO NOT MUTATE DATA.

  create a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `rounded`

  `rounded` value is `amount` rounded to the nearest dollar

  Example:
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting new array to `datasetWithRoundedDollar`
*/
var datasetWithRoundedDollar = dataset.bankBalances.map( function(account){
  return {
    amount: account.amount,
    state: account.state,
    rounded: Math.round(account.amount)
  };
});

/*
  DO NOT MUTATE DATA.

  create a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `roundedDime`

  `roundedDime` value is `amount` rounded to the nearest 10th of a cent

  Example 1
    {
      "amount": "134758.46",
      "state": "HI"
      "roundedDime": 134758.5
    }
  Example 2
    {
      "amount": "134758.44",
      "state": "HI"
      "roundedDime": 134758.4
    }
  assign the resulting new array to `roundedDime`
*/
var datasetWithRoundedDime = dataset.bankBalances.map( function(account) {
  return {
    amount: account.amount,
    state: account.state,
    roundedDime: Number( parseFloat(account.amount).toFixed(1) )
  };
});


// set sumOfBankBalances to be the sum of all value held at `amount` for each bank object
var sumOfBankBalances = dataset.bankBalances.reduce( (mySum, account) => {
  return Number( parseFloat(mySum).toFixed(2) ) + Number( parseFloat(account.amount).toFixed(2) );
}, 0);

/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it rounded to the nearest cent
  and then sum it all up into one value saved to `sumOfInterests`
 */
var sumOfInterests = dataset.bankBalances.filter( (account) => {
  return account.state === 'WI' || account.state ==='IL' || account.state === 'WY' || account.state === 'OH' || account.state === 'GA' || account.state === 'DE';
}).map( (account) => {
  return Number( parseFloat(account.amount * 0.189).toFixed(2));
}).reduce( (mySum, accountBalance) => {
  return Number( parseFloat(mySum).toFixed(2) ) + accountBalance;
} ,0);

/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table where

  the key is:
    the two letter state abbreviation
  and the value is:
    the sum of all amounts from that state
    the value must be rounded to the nearest cent

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest 10th of a cent before moving on.
  )
 */
var stateSums = {};

statesums = dataset.bankBalances.map(function(account){
  stateSums[account.state] = 0;
});

statesums = dataset.bankBalances.map(function(account){
  newVal = Number(parseFloat(account.amount));
  if(  typeof newVal === 'number') {
  stateSums[account.state] += newVal;
  stateSums[account.state] = Number( parseFloat(stateSums[account.state]).toFixed(2) );
  }
});

/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it
  only sum values greater than 50,000 and save it to `sumOfInterests`

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest 10th of a cent before moving on.
  )
 */
var sumOfHighInterests = dataset.bankBalances.filter( (account) => {
  return account.state !== 'WI' || account.state !=='IL' || account.state !== 'WY' || account.state !== 'OH' || account.state !== 'GA' || account.state !== 'DE';
}).map( (account) => {
  console.log(account.amount);
  return Number( parseFloat(account.amount * 0.189).toFixed(2));
}).filter( (balance) => {
  return balance > 50000;
}).reduce( (tally, balance) => {
  return tally + balance;
}, 0);

/*
  set `lowerSumStates` to be an array of two letter state
  abbreviations of each state where the sum of amounts
  in the state is less than 1,000,000
 */
var lowerSumStates = {};
lowerSumStates = dataset.bankBalances.map(function(account){
  if(lowerSumStates.hasOwnProperty(account.state)){
    lowerSumStates[account.state] += Number(parseFloat(account.amount));
  } else {
    lowerSumStates[account.state] = Number(parseFloat(account.amount));
  }
});
lowerSumStates = dataset.bankBalances.map(function(account){
  newBalance = Number(parseFloat(account.amount));
  lowerSumStates[account.state] += newBalance;
  lowerSumStates[account.state] = Number(parseFloat(lowerSumStates[account.state]).toFixed(2));
});
lowerSumStates = lowerSumStates.filter(function(state){
  return state
})

/*
  aggregate the sum of each state into one hash table
  `higherStateSums` should be the sum of all states with totals greater than 1,000,000
 */
var higherStateSums = null;

/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware

  Check if all of these states have a sum of account values
  greater than 2,550,000

  if true set `areStatesInHigherStateSum` to `true`
  otherwise set it to `false`
 */
var areStatesInHigherStateSum = null;

/*
  Stretch Goal && Final Boss

  set `anyStatesInHigherStateSum` to be `true` if
  any of these states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  have a sum of account values greater than 2,550,000
  otherwise set it to be `false`
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs : hundredThousandairs,
  datasetWithRoundedDollar : datasetWithRoundedDollar,
  datasetWithRoundedDime : datasetWithRoundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};
