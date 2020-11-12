function match(job, candidates) {
    // Which of these candidates match this job?
    let matchCandidate;

    for (let i = 0; i < 2; i++) {
        if (candidates[i].desiresEquity === true && job.equityMax !== 0) {
            for (let j = 0; j < 2; j++) {
                if (candidates[i].currentLocation === (job.locations[j]) || candidates[i].desiredLocations.includes(job.locations[j]))
                    return candidates[i]
            }
        }
        else if (candidates[i].desiresEquity === false && job.equityMax === 0) {
            for (let j = 0; j < 2; j++) {
                if (candidates[i].currentLocation === (job.locations[j]) || candidates[i].desiredLocations.includes(job.locations[j]))
                    return candidates[i]
            }
        }
    }

    //not match

    return false
}

let candidates = [{
    desiresEquity: true,
    currentLocation: 'New York',
    desiredLocations: ['San Francisco', 'Los Angeles']
}, {
    desiresEquity: false,
    currentLocation: 'San Francisco',
    desiredLocations: ['Kentucky', 'Los Angeles', 'New Mexico']
}];
let job1 = { equityMax: 0, locations: ['Los Angeles', 'New York'] },
    job2 = { equityMax: 1.2, locations: ['New York', 'Kentucky'] };
console.log(match(job1, candidates));
console.log(match(job2, candidates));