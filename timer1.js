const listOfTimes = process.argv.slice(2);

const timer = (timers) => {
  for (let element of timers) {
    setTimeout(function() {
      process.stdout.write('\x07');
      console.log('beep');
    }, element * 1000);
  }
};

timer(listOfTimes);