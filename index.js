// const record = [
//     {year: "2018", result: "L"},
//     {year: "2017", result: "W"},
//     {year: "2016", result: "N/A"}
//   ]


// function superbowlWin(testArray) {
// const time = testArray.find(yearOfDub).year;

//     function yearOfDub(element) {
//         return element.result === "W";
//     }

// //return time;
// console.log(time);
// }

const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ]


function superbowlWin(testArray) {

    function yearOfDub(element, index) {
        return element.result === "W";
    }
const time = testArray.find(yearOfDub);
for(const key in time) {
return (time.year); 
}
//return time;
//return ans;
}