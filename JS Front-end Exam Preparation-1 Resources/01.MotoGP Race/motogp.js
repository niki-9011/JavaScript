function motogp(input) {
    const driverNumbers = input.shift();
    const inputLenght = input.length;
    driversObj = {};

    for (let driver = 0; driver < driverNumbers; driver++) {
        const [rider, fuel, position] = input[driver].split("|");

        driversObj[rider] = {
            fuel: Number(fuel),
            position: Number(position)
        };
    }
    const command = input.splice(3, inputLenght);

    let commandLine = command.shift();
    while (commandLine !== "Finish") {
        commandLine = commandLine.split(" - ");
        const commandDrive = commandLine.shift();

        switch (commandDrive) {
            case 'StopForFuel':
                const nameDrive = commandLine.shift();
                const fuelDrive = commandLine.shift();
                const positionDrive = commandLine.shift();

                if (driversObj[nameDrive].fuel < fuelDrive){
                    driversObj[nameDrive].position = positionDrive;

                    console.log(`${nameDrive} stopped to refuel but lost his position, now he is ${positionDrive}.`);
                } else {
                    console.log(`${nameDrive} does not need to stop for fuel!`);
                }
                    break;
            case 'Overtaking':
                const [driveOne, driveSecond] = commandLine
                const firstPosition = driversObj[driveOne].position;
                const secondPosition = driversObj[driveSecond].position;

                if (driversObj[driveOne].position < driversObj[driveSecond].position){
                    console.log(`${driveOne} overtook ${driveSecond}!`);
                    driversObj[driveOne].position = secondPosition;
                    driversObj[driveSecond].position = firstPosition;
                };
                break;
            case 'EngineFail':
                const nameDelete = commandLine.shift();
                const laps = commandLine.shift();
                delete driversObj[nameDelete];
                console.log(`${nameDelete} is out of the race because of a technical issue, ${laps} laps before the finish.`);
                break;
        }
        commandLine = command.shift();
    }
    for (const key in driversObj) {
        if (Object.hasOwnProperty.call(driversObj, key)) {
            const element = driversObj[key];
            console.log(key);
            console.log(`  Final position: ${driversObj[key].position}`);
        }
    }
}
motogp(["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
