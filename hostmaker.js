var fs = require("fs")
var rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("IP : ", ip => {
    fs.writeFileSync("host", ip+" growtopia1.com\n"+ip+" growtopia2.com")
    console.log("Host Created!")
    setTimeout(() => { process.exit(0) }, 2000)
})