const tossCoin = () => {
    return Math.random() > 0.5 ? "heads" : "tails";
}

const fiveHeadsSync = () => {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        }
        else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five heads`;
}

console.log(fiveHeadsSync());
console.log( "This is run after the fiveHeadsSync function completes" );
console.log( "When does this run now?" );

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            }
            else {
                headsCount = 0;
            }
            if (attempts > 10000) {
                reject("Too many attemps, stopping ...")
                return
            }
        }
        resolve(`It took ${attempts} tries to flip five heads in a row`);
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );