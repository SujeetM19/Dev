// os module :- this module provides function that we can use to retireve information from the underline operating system if.e OS and also we can interact with it

// os se interact aur os se information retrieve

const os = require('os');
//ye run bhi karega os module ko aur import bhi

let mySystemArch = os.arch();
console.log(mySystemArch);
// returns the underlying architecture

let myCpuInfo = os.cpus();
//console.log(myCpuInfo);
//returns the information of cpus

let hostName = os.hostname();
console.log(hostName);
let networkInfo = os.networkInterfaces();
console.log(networkInfo);
//gives information about network interfaces that has been assigned to a network address

//returns the operating system as a stirng
console.log(os.release());

console.log(os.platform());

console.log(os.type());

//returns the total memory in the system memory in bytes
console.log(os.totalmem());

//returns the system uuptime in number of seconds
console.log(os.uptime()/3600);


//returns the information about the currentlly effective user
console.log(os.userInfo());
