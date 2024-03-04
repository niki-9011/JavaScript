function solve(teams) {
    let astrounauts = Number(teams.shift());
    let objects = {};

    for (let index = 0; index < astrounauts; index++) {
        let [name, oxygen, energy] = teams.shift().split(' ');
        objects[name] = [oxygen, energy];
    }

    while (teams.length > 0) {
        let [command, astronautName, astronautEnergy] = teams.shift().split(' - ');
        switch (command) {
            case "Explore":
                if (parseInt(astronautEnergy) <= parseInt(objects[astronautName][1])) {
                    let energyLeftExplore = parseInt(objects[astronautName][1]) - parseInt(astronautEnergy);
                    console.log(`${astronautName} has successfully explored a new area and now has ${energyLeftExplore} energy!`);
                    objects[astronautName][1] = energyLeftExplore;
                } else console.log(`${astronautName} does not have enough energy to explore!`);
                break;

            case "Refuel":
                if (objects[astronautName][1] <= 200) {
                    let energyLeftRefuel = parseInt(objects[astronautName][1]) + parseInt(astronautEnergy);
                    if (energyLeftRefuel >= 200) {
                        console.log(`${astronautName} refueled their energy by ${200 - objects[astronautName][1]}!`)
                        objects[astronautName][1] = 200;
                    } else if (energyLeftRefuel < 200) {
                        console.log(`${astronautName} refueled their energy by ${energyLeftRefuel}!`)
                        objects[astronautName][1] = energyLeftRefuel;
                    }
                }
                break;

            case "Breathe":
                if (parseInt(objects[astronautName][0]) <= 100) {
                    let oxygenLeft = parseInt(objects[astronautName][0]) + parseInt(astronautEnergy);
                    if (oxygenLeft >= 100) {
                        console.log(`${astronautName} took a breath and recovered ${100} oxygen!`)
                        objects[astronautName][0] = 100;
                    } else if (oxygenLeft < 100) {
                        console.log(`${astronautName} took a breath and recovered ${oxygenLeft} oxygen!`)
                        objects[astronautName][0] = oxygenLeft;
                    }
                }
                break;

            case "End":
                break;
        }
    }
    for (const [name, stats] of Object.entries(objects)) {
        const oxygen = stats[0];
        const energy = stats[1];
        console.log(`Astronaut: ${name}, Oxygen: ${oxygen}, Energy: ${energy}`);
    }
}

solve(['3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']
)

solve(['4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']
)