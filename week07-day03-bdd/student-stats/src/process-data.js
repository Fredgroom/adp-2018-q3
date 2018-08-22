function calcDemographics(data) {
    let totalAge = 0;
    let totalExperience = 0;

    for (let i = 0; i < data.length; i++) {
        totalAge += data[i].age;
        totalExperience += data[i].yearsExperience;
    }

    return {
        averageAge: totalAge / data.length,
        averageExperience: totalExperience / data.length
    };
}

function initProjectStats() {
    return {
        totalTaken: 0,
        totalPass: 0,
        totalPassSatisfaction: 0,
        totalFail: 0,
        totalFailSatisfaction: 0,
    };
}

function compileProjectStats(projectStats) {
    return Object.keys(projectStats).reduce((compiled, projectName) => {
        compiled[projectName] = {
            passPercentage: projectStats[projectName].totalPass / projectStats[projectName].totalTaken,
            passSatisfaction: projectStats[projectName].totalPassSatisfaction / projectStats[projectName].totalPass,
            failSatisfaction: projectStats[projectName].totalFailSatisfaction / projectStats[projectName].totalFail
        };
        return compiled;
    }, {});
}

function calcProjects(data) {
    const projectStats = {};

    // Iterate over all students and each of their projects O(mn)
    // Track how many students did each project, pass/fail totals,
    // and the total student satisfaction for the pass and for fail cases
    for (let i = 0; i < data.length; i++) {
        const student = data[i];
        const projectNames = Object.keys(student.projects);

        // For each project
        for (let j = 0; j < projectNames.length; j++) {
            const projectName = projectNames[j];

            if (!projectStats[projectName]) {
                projectStats[projectName] = initProjectStats();
            }

            projectStats[projectName].totalTaken += 1;

            if (student.projects[projectName] === 'pass') {
                projectStats[projectName].totalPass += 1;
                projectStats[projectName].totalPassSatisfaction += student.satisfaction;
            } else {
                projectStats[projectName].totalFail += 1;
                projectStats[projectName].totalFailSatisfaction += student.satisfaction;
            }
        }
    }

    return compileProjectStats(projectStats);
}

const processData = (data) => {
    return {
        demographics: calcDemographics(data),
        projects: calcProjects(data)
    };
};

module.exports = processData;