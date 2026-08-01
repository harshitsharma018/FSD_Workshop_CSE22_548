console.log("This is the starting pointof my code ");
process.nextTick(() => {
console.log("This is process.nextTick code");
})
setTimeout(()=>{
     console.log("This is first timeout function");
},5000);
console.log("This is the end point of my code");