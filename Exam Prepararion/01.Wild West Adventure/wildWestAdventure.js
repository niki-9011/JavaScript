function wildWestAdventure(someInput) {
    const countOfHeroes = Number(someInput.shift());
    let crew = {};

    for (let i = 0; i < countOfHeroes; i++) {
        const [name, hp, ammo] = someInput.shift().split(' ');
        
        crew[name] = {'hp': Number(hp), 'ammo': ammo};
    }

    let command = someInput.shift();

    while (command !== 'Ride Off Into Sunset') {
        const [act, name, ...args] = command.split(' - ');

        let hero = crew[name];
        switch (act) {
            case 'FireShot':
                const [target] = args;
                const bullets = hero.ammo;
                if (bullets > 0) {
                    hero.ammo -= 1;
                    console.log(`${name} has successfully hit ${target} and now has ${hero.ammo} bullets!`);
                } else {
                    console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
                }
                break;
            case 'TakeHit':
                const damage = Number(args[0]);
                const attacker = args[1];

                hero.hp -= damage;
                if (hero.hp > 0) {
                    console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${hero.hp} HP!`);
                } else {
                    console.log(`${name} was gunned down by ${attacker}!`);
                    delete crew[name];
                }
                break;
            case 'Reload':
                const MAX_BULLETS = 6;
                const reloadedBullets = MAX_BULLETS - hero.ammo;
                if (reloadedBullets > 0) {
                    hero.ammo = MAX_BULLETS;
                    console.log(`${name} reloaded ${reloadedBullets} bullets!`);
                } else {
                    console.log(`${name}'s pistol is fully loaded!`);
                }
                break;
            case 'PatchUp':
                const MAX_HP = 100;
                const amount = Number(args[0]);
                if (hero.hp < MAX_HP) {
                    hero.hp += amount;
                    const healedHP = MAX_HP - hero.hp;
                    if (healedHP > 0) {
                        console.log(`${name} patched up and recovered ${amount} HP!`);
                    } else {
                        hero.hp = MAX_HP;
                        console.log(`${name} patched up and recovered ${healedHP} HP!`);
                    }
                } else {
                    console.log(`${name} is in full health!`)
                    break;
                }


        }
        command = someInput.shift();
    }

    for (const name in crew) {
        const hero = crew[name];

        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  Bullets: ${hero.ammo}`);
    }
}

// wildWestAdventure(["2",
//     "Gus 100 0",
//     "Walt 100 6",
//     "FireShot - Gus - Bandit",
//     "TakeHit - Gus - 100 - Bandit",
//     "Reload - Walt",
//     "Ride Off Into Sunset"])
// ;
wildWestAdventure(["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"])
//
// wildWestAdventure(["2",
//    "Gus 100 4",
//    "Walt 100 5",
//    "FireShot - Gus - Bandit",
//    "TakeHit - Walt - 100 - Bandit",
//    "Reload - Gus",
//    "Ride Off Into Sunset"])
// ;