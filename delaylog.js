function delayLog() {
  for(var num = 1; num <= 10; num++) {
    setTimeout(() => console.log(num), 1000 * num);
  }
}

delayLog();