"use strict"
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
function spentMostTime() {
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
console.log(spentMostTime());