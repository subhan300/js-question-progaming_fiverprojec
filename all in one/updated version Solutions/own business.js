var wid = +prompt("Enter the width of free space:");
var len = +prompt("Enter the length of free space:");
var hei = +prompt("Enter the height of free space:");
var timesOfComputers = +prompt("Enter the no of times the computers that are transfered to the hall:");
var computers = [];
    for (let i = 0; i < timesOfComputers;i++ ) {
        no = +prompt("Enter the no of computers that are transfered to the hall:");
        computers.push(no);
    }    


var widthInt = parseInt(wid);
var lengthInt = parseInt(len);
var heightInt = parseInt(hei);
// var computersInt = parseInt(computers);


var totalCompVolume = 0;
for (let i = 0; i < computers.length; i++) {
    totalCompVolume += computers[i]; 
}

var roomVolume = widthInt * lengthInt * heightInt;

var space = roomVolume - totalCompVolume;
var spacePositive = Math.abs(space);

if (totalCompVolume > roomVolume) {
    console.log(`No more free space! you need ${spacePositive} cubic meters more.`);
}
else {
    console.log(`${spacePositive} cubic meters left.`)
}