function raceHorses(someInput) {
    let horses = someInput.shift().split('|').reverse();


    let command = someInput.shift();
    while (command !== 'Finish') {
        const [act, horseName, ...args] = command.split(' ');

        switch (act) {
            case 'Retake':
                const [secondHorse] = args;
                const [firstIndex, secondIndex] = [horses.indexOf(horseName), horses.indexOf(secondHorse)];
                if (secondIndex < firstIndex && firstIndex !== -1 && secondIndex !== -1) {
                    [horses[firstIndex], horses[secondIndex]] = [horses[secondIndex], horses[firstIndex]];
                    console.log(`${horseName} retakes ${secondHorse}.`);
                }

                break;
            case 'Trouble':
                let horseIndex = horses.indexOf(horseName);
                if (horseIndex < horses.length - 1 && horseIndex !== -1) {
                    [horses[horseIndex], horses[horseIndex + 1]] = [horses[horseIndex + 1], horses[horseIndex]];
                    console.log(`Trouble for ${horseName} - drops one position.`);
                }
                break;
            case 'Rage':
                const indexHorse = horses.indexOf(horseName);
                if (indexHorse > 0 && indexHorse !== -1) {
                    const newIndex = indexHorse > 1 ? indexHorse - 2 : 0;
                    horses.splice(indexHorse, 1);
                    horses.splice(newIndex, 0, horseName);
                }
                console.log(`${horseName} rages 2 positions ahead.`);
                break;
            case 'Miracle':
                const lastHorse = horses.pop();
                horses.unshift(lastHorse);
                console.log(`What a miracle - ${lastHorse} becomes first.`);
                break;
        }
        command = someInput.shift();
    }
    console.log(horses.reverse().join('->'));
    console.log(`The winner is: ${horses[horses.length - 1]}`)
}