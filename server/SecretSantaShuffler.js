function shuffleParticipants(arr) {
  let firstList = [...arr];
  let secondList = [...arr];
  let newSecondList;
  let allPairingFound = false;
  while (!allPairingFound) {
    console.log("pairing");
    newSecondList = shuffleArray(secondList);
    for (let i = 0; i < firstList.length; i++) {
      if (firstList[i].name !== newSecondList[i].name) {
        allPairingFound = true;
      } else {
        allPairingFound = false;
        break;
      }
    }
  }
  return newSecondList;
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

module.exports = { shuffleParticipants };
