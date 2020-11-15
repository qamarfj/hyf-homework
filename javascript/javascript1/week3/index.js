"use strict"
/***freecodecamp user qamarfj */
/***Item array removal */

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
        names.splice(i, 1)
        console.log('removed')
    }

}

console.log(names);

/**When will we be there?? */
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
function getTravelTime(travelInformation) {
    const travleTime = travelInformation.destinationDistance / travelInformation.speed;
    const travleHour = Math.floor(travleTime);
    const travleMinutes = Math.round((travleTime - travleHour) * 60);
    const travleTimeFormated = travleHour + ' hours and ' + travleMinutes + ' minutes';
    return travleTimeFormated;
}
const travelTime = getTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

/*Series duration of my life*/
const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
    /***added one more tv series */
    {
        title: "Diriliş: Ertuğrul",
        days: 40,
        hours: 22,
        minutes: 0,
    },
];

function logOutSeriesText() {

    const lifeHours = 80 * 365 * 24;
    let totalTookOfMyLife = 0;
    /* logs out the text like:
    Game of thrones took 0.01% of my life
    Sopranos took 0.012% of my life
    The Wire took 0.009% of my life
    Diriliş: Ertuğrul took 0.14% of my life
    In total that is0.171% of my life*/
    for (let i = 0; i < seriesDurations.length; i++) {
        const seriesTimeHours = seriesDurations[i].days * 24 + seriesDurations[i].hours + seriesDurations[i].minutes / 60
        const tookOfMyLife = parseFloat(((seriesTimeHours / lifeHours) * 100).toFixed(3));
        totalTookOfMyLife += tookOfMyLife;
        console.log(seriesDurations[i].title + ' took ' + tookOfMyLife + '% of my life');
    }
    console.log('In total that is' + totalTookOfMyLife + '% of my life');
}

logOutSeriesText();

/*CactusIO - interactive(Smart phone usage app)*/
const activities = [{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}];
/*Adding an activity*/
function addActivity(activity, duration) {
    const newActivity = {
        date: getDate(),
        activity: activity,
        duration: duration,
    };
    activities.push(newActivity);
}

/**return current date in string format i.e. dd/mm-yyyy */
function getDate() {
    const toDate = new Intl.DateTimeFormat();
    const formatDate = toDate.formatToParts();
    const date = (formatDate[0].value + '/' + formatDate[2].value + '-' + formatDate[4].value);
    return date;
}
addActivity("Youtube", 30);
addActivity("facebook", 10);
addActivity("twitter", 50);
addActivity("facebook", 10);
console.log(activities)
/* Show my status  shows activities for today*/
function showStatus(activities) {
    const limit = 90;
    if (activities.length < 1) {
        console.log("Add some activities before calling showStatus");
    }
    else {
        let usage = 0;
        let noOFActivities = 0;
        const date = getDate();
        for (const activity of activities) {
            if (date === activity.date) {
                const currentActivityUsage = activity.duration;
                usage += currentActivityUsage;
                noOFActivities++;

            }
        }
        console.log(`You have added ${noOFActivities} activities. They amount to ${usage} min. of usage`)
        if (usage >= limit) {
            console.log('You have reached your limit, no more smartphoning for you!');
        }

    }
}
showStatus(activities);

/*Extra feature  remove one activity*/
function removeActivity(activity) {
    for (let i = 0; i < activities.length; i++) {
        const currentActivity = activities[i].activity;
        if (currentActivity === activity) {
            activities.splice(i, 1)
            console.log('Removed one activity!');
            break;
        }
    }
}
removeActivity('facebook');
/* Optional function for calculating the activity a user has spent the most time on.*/
function getActivitySpentMostTime() {
    let spentMostTime = 0;
    let index = 0;
    for (let i = 0; i < activities.length; i++) {
        const currentActivityTime = activities[i].duration;
        if (currentActivityTime > spentMostTime) {
            index = i;
            spentMostTime = currentActivityTime;
        }
    }
    return activities[index]
}
console.log(getActivitySpentMostTime());