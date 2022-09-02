//####### SECTION 1 ###########

const myList = ['canada', 'usa', 'mexico', 'france', 'italie', 'europe'];

//remove "europe" from the array because it's not a country
const myFilteredList = []; //add your logic

//sort by descending order;
const mySortedList = []; //add your logic

//list items converted to a string and separated with a dash
const myDiplayList = ''; //add your logic

//####### SECTION 2 ###########

/**
 * @description takes an input of nested items array and flatten it
 * @input [ 1,2, [3,4], [[5]], 6 ]
 * @output [ 1,2,3,4,5,6 ]
 */
function flatten(items: any) {
  //TODO: add logic. Use recursion
  return [];
}

//####### DONT TOUCH THIS SECTION ###########
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML =
  '<h3>SECTION 1</h3><div> <h4>FilteredList:</h4> ' +
  myFilteredList.toString() +
  '</div>' +
  '<div> <h4>SortedList: </h4>' +
  mySortedList.toString() +
  '</div>' +
  '<div> <h4>DisplayList: </h4>' +
  myDiplayList +
  '</div><br/> </br>' +
  '<h3>SECTION 2</h3><div> <h4>Flatten:</h4> ' +
  flatten([1, 2, [3, 4], [[5]], 6]).map((i) => (Array.isArray(i) ? 'NO' : i));
