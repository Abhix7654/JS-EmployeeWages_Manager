const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck === IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is PRESENT");
}
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    
    let empCheckUC3 = Math.floor(Math.random() * 10) % 3;
    let empHrsUC3 = getWorkingHours(empCheckUC3);
    let empWageUC3 = empHrsUC3 * WAGE_PER_HOUR;
    console.log("Emp Wage: " + empWageUC3);

    const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
    }
let dailyWage = getWorkingHours(empCheck) * WAGE_PER_HOUR;
console.log(`Total Monthly Hours: ${totalEmpHrs}, Total Monthly Wage: ${totalEmpHrs * WAGE_PER_HOUR}`);

const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS_LIMIT = 10;
let totalEmpHrsLimit = 0;
let totalWorkingDaysLimit = 0;
while (totalEmpHrsLimit < MAX_HRS_IN_MONTH && totalWorkingDaysLimit < NUM_OF_WORKING_DAYS_LIMIT) {
    totalWorkingDaysLimit++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrsLimit += getWorkingHours(empCheck);
    let empWageLimit = totalEmpHrsLimit * WAGE_PER_HOUR;
    console.log(`Total Days: ${totalWorkingDaysLimit}, Total Hrs: ${totalEmpHrsLimit}, Emp Wage: ${empWageLimit}`);
}

// UC 6: Store Daily Wage in an Array
function calcDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }
    
    const MAX_HRS_INMONTH = 160;
    const NUM_OF_WORKINGDAYS = 20;
    let totalEmpHr = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    
    while (totalEmpHrs <= MAX_HRS_INMONTH && totalWorkingDays < NUM_OF_WORKINGDAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHr += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
    }
    
    let empWage = calcDailyWage(totalEmpHrs);
    console.log(`Total Days: ${totalWorkingDays}, Total Hrs: ${totalEmpHr}, Emp Wage: ${empWage}`);
    console.log("Daily Wages Array:", empDailyWageArr);