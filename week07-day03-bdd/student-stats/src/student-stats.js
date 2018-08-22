const processData = require('./process-data');

class StudentStats {
    constructor(rawData) {
        this.data = processData(rawData);
    }

    queryProject(projectName) {
        if (!this.data.projects[projectName]) {
            throw new Error('Invalid project name');
        }

        return this.data.projects[projectName];
    }
}

module.exports = StudentStats; 