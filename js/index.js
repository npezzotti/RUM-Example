const counter = document.getElementById("counter");
counter.addEventListener('click', () => {
    if (counter.innerText === "Click Me") {
        counter.innerText = 1;
    } else {
        let newValue = Number(counter.innerText) + 1;
        counter.innerText = newValue;
    };
});

