function recursiveCount(num = 0) {
  
  if (num === 9){
    console.log(num)
    return
  }
  console.log(num)
  num++
  recursiveCount(num)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
