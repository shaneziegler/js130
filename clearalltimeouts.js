let timeoutArray = [];

for (let i = 0; i < 20; i++) {
  timeoutArray.push(setTimeout(() => {}, 0));
}

timeoutArray.forEach(id => console.log(id));

const lastTimeout = setTimeout(()=>{});
for(let i = 0; i <= lastTimeout; ++i) { 
  console.log(i);
  clearTimeout(i); 
}

console.log(lastTimeout);