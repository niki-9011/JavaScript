
function moto(input) {
    const count = Number(input.shift());
    const racers = {};

    for (let i = 0; i < count; i++) {
        let [name, fuel, position] = input.shift().split('|');
        fuel = Number(fuel) > 100 ? 100 : Number(fuel);
        racers[name] = {'fuel': fuel, 'position': Number(position)};
    }

    let command = input.shift();
    
    while (command !== 'Finish') {
        const [act, riderName, ...args] = command.split(' - ');

        let rider = racers[riderName];

        switch (act) {
            case 'StopForFuel':
                const minFuel = Number(args[0]);
                const newPosition = Number(args[1]);

                if (rider.fuel < minFuel) {
                    rider.position = newPosition;
                    console.log(`${riderName} stopped to refuel but lost his position, now he is ${newPosition}.`);
                } else {
                    console.log(`${riderName} does not need to stop for fuel!`);
                }
                break;
            case 'Overtaking':
                const secondName = args[0];
                const secondRider = racers[secondName];

                if (rider.position <= secondRider.position) {
                    [secondRider.position, rider.position] = [rider.position, secondRider.position];

                    console.log(`${riderName} overtook ${secondName}!`);
                }
                break;
            case 'EngineFail':
                const lapsLeft = args[0];
                delete racers[riderName];
                console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break;

        }

        command = input.shift();
    }

    for (const [name, data] of Object.entries(racers)) {
        console.log(`${name}\n  Final position: ${data.position}`);
    }
}

moto((["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|4",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Johann Zarco - 10",

    "Finish"])
);