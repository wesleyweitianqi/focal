const raisinAlarmArray = function(arrs) {
  let result = [];
  for (let arr of arrs) {
   
    if (arr.indexOf("🍇") !== -1) {
      result.push("Raisin Alert");
    } else {
      result.push("All Good!");
    }
  }
  return result;
};
console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));
