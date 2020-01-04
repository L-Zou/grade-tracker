# grade-tracker
A node.js application that allows the user to record their assignment grades for various courses. The application calculates and displays the overall average of a course based on the entered data. The user can also request the application to calculate the average grade needed on the remaining assignments in order to end up with certain overall average. 
```
============== GRADES ==============

MATH
-------------------------------------

MATH135
...................................
ID ASSIGNMENT_NAME AVERAGE WEIGHT
1  Assignment      60      20
2  Assignment      60      20
...................................
Current Average:           24%

CS135
...................................
ID ASSIGNMENT_NAME AVERAGE WEIGHT
1  Assignment      60      20
2  Assignment      60      20
...................................
Current Average:           24%
```
## installation
Clone the repository:
```
git clone https://github.com/L-Zou/grade-tracker.git
```
Go to the cloned repository (grade-tracker) and install the required npm modules with: 
```
npm install
```
## commands
```
Usage: gt <command> [options]

Commands:
  grade-tracker-app.js add          Record an assignment grade
  grade-tracker-app.js rm           Remove an assignment grade
  grade-tracker-app.js rm-all       Remove all recorded grades
  grade-tracker-app.js list         List all recorded grades
  grade-tracker-app.js rm-all       Remove all recorded grades
  grade-tracker-app.js add-subject  Add a subject
  grade-tracker-app.js rm-subject   Remove a subject
  grade-tracker-app.js add-course   Add a course
  grade-tracker-app.js rm-course    Remove a course
  grade-tracker-app.js git-gud      Calculate assignment grades needed in order
                                    to obtain certain average

Options:
  --version   Show version number                                      [boolean]
  --help, -h  Show help                                                [boolean]

Examples:
  gt add -c MATH135 -g 60 -w 25  Record an assignment grade
  ```
