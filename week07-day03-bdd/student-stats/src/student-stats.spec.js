const StudentStats = require('./student-stats');

const testData = [
    {
        name: 'Miss Jermain Waters',
        age: 31,
        yearsExperience: 3,
        satisfaction: 4,
        projects: {
            project1: 'pass',
            project2: 'fail',
            project3: 'fail',
            project4: 'pass'
        }
    },
    {
        name: 'Juliana Runte',
        age: 42,
        yearsExperience: 3,
        satisfaction: 2,
        projects: {
            project1: 'fail',
            project2: 'fail',
            project3: 'fail',
            project4: 'pass'
        }
    }
];
let testStudentStats;

describe('StudentStats', () => {
    beforeEach(() => {
        testStudentStats = new StudentStats(testData);
    });

    describe('queryProject()', () => {
        describe('when project name specified does not exist', () => {
            it('should throw an error', () => {
                const testProjectName = 'doesnotexist';

                expect(() => testStudentStats.queryProject(testProjectName)).toThrowError('Invalid project name');
            });
        });
        describe('when project name specified exists', () => {
            let testProjectData;

            beforeEach(() => {
                testProjectData = testStudentStats.queryProject('project1');
            });

            it('should provide percentage of students that passed the project', () => {
                expect(testProjectData.passPercentage).toEqual(0.5);
            });
            it('should provide the satisfaction level of students that passed the project', () => {
                expect(testProjectData.passSatisfaction).toEqual(4);
            });
            it('should provide the satisfaction level of students that failed the project', () => {
                expect(testProjectData.failSatisfaction).toEqual(2);
            });
        });
    });
});