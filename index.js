// TODO: Converts 12hour string time format to 24hr
function timeConversion(s) {
    // Write your code here
    let timeOfDay = s.slice(-2).toUpperCase();
    console.log(timeOfDay);
    let newFormat = s.slice(0, (s.length - 2));
    let twelveHourArray = newFormat.split(":");
    console.log(twelveHourArray);
    let hour = parseInt(twelveHourArray[0]);
    console.log(hour);
    if (timeOfDay === 'PM' && hour < 12) {
        hour += 12;
        twelveHourArray[0] = hour;        
    } else if (timeOfDay === 'AM' && hour === 12) {
        hour = '00';
        twelveHourArray[0] = hour;
    }
    return twelveHourArray.join(':');
}

// TODO: Counts ten numbers from start and appends "then" between them
function countUp(start) {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(++start);
    }
    let output = arr.join(" then ");
    return output;
}