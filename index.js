function countdowntimer(second) {
    let remainingtime = second;
    const timeInterval = setInterval(() => {
        if (remainingtime <= 0) {
            clearInterval(timeInterval);
            console.log(`Countdown finished!!!!!!`);
        }
        else {
            console.log(`${remainingtime} seconds remaining.......`);
            remainingtime--;
        }
    }, 1000);
}
countdowntimer(60);
export {};
