const counter = document.getElementById("counter");
counter.addEventListener('click', () => {
    if (counter.innerText === "Click Me") {
        counter.innerText = 1;
    } else {
        let newValue = Number(counter.innerText) + 1;
        counter.innerText = newValue;
    };
    window.DD_LOGS && DD_LOGS.logger.info('Button clicked', { name: 'counter', numTimes: counter.innerText })
});

const fakeElement = document.getElementById("does-not-exist");
console.log(fakeElement.innerText.toLowerCase);
