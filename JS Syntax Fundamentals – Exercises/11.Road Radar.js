    function drive(speed, area) {
        let diff = 0;
        let status = '';
        let areaObj = {motorway: 130, interstate: 90, city: 50, residential: 20}
        if (area in areaObj) {
            if ( areaObj[area] >= speed){
            console.log(`Driving ${speed} km/h in a ${areaObj[area]} zone`)
        } else {
            diff = speed - areaObj[area];
            if (diff <= 20) status = "speeding";
            else if (diff <= 40) status = "excessive speeding";
            else status = "reckless driving";
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${areaObj[area]} - ${status}`)
        }
    }
    }
    drive(40, 'city')
    drive(21, 'residential')
    drive(120, 'interstate')
    drive(200, 'motorway')