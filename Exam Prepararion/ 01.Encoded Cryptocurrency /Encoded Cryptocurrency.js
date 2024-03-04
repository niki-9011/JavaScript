function solve(input) {
    let message = input.shift();

    for (let line of input) {
        if (line === 'Buy') {
            break;
        }

        let [command, arg1, arg2] = line.split('?');

        switch (command) {
            case 'TakeEven':
                message = message.split('').filter((char, index) => index % 2 === 0).join('');
                console.log(message);
                break;
            case 'ChangeAll':
                while (message.includes(arg1)) {
                    message = message.replace(arg1, arg2);
                }
                console.log(message);
                break;
            case 'Reverse':
                if (message.includes(arg1)) {
                    let reversedSubstring = arg1.split('').reverse().join('');
                    message = message.replace(arg1, '');
                    message += reversedSubstring;
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            default:
                break;
        }
    }

    console.log(`The cryptocurrency is: ${message}`);
}

solve([
    "z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"
]);

solve([
    "PZDfA2PkAsakhnefZ7aZ",
    "TakeEven",
    "TakeEven",
    "TakeEven",
    "ChangeAll?Z?X",
    "ChangeAll?A?R",
    "Reverse?PRX",
    "Buy"
]);
