const os = require ('os')


// info about user

const user = os.userInfo()
console.log(user)

// method ruturn the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}
console.log(currentOS)