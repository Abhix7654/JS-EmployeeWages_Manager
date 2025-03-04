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

function calcDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }
    
    const MAX_HRS_INMONTH = 160;
    const NUM_OF_WORKINGDAYS = 20;
    let totalEmpHr = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

    while (totalEmpHrs <= MAX_HRS_INMONTH && totalWorkingDays < NUM_OF_WORKINGDAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHr += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }
    
    console.log(empDailyWageMap);
    
    let empWage = calcDailyWage(totalEmpHrs);
    console.log(`Total Days: ${totalWorkingDays}, Total Hrs: ${totalEmpHr}, Emp Wage: ${empWage}`);
    console.log("Daily Wages Array:", empDailyWageArr);

    let totEmpWage = 0;
    function sum(dailyWage) {
        totEmpWage += dailyWage;
    }
    empDailyWageArr.forEach(sum);
    console.log("UC7A - Total Days:", totalWorkingDays, "Total Hrs:", totalEmpHrs, "Emp Wage:", totEmpWage);
    
    function totalWages(totalWage, dailyWage) {
        return totalWage + dailyWage;
    }
    console.log("UC7A -Emp Wage Map Total Hrs:", Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
    
    
    let dailyCounter = 0;
    function mapDayWithWage(dailyWage) {
        dailyCounter++;
        return dailyCounter + " " + dailyWage;
    }
    let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
    console.log("UC7B - Daily Wage Map");
    console.log(mapDayWithWageArr);
    
    let fullTimeWageArr = empDailyWageArr.filter(wage => wage === 160);
    console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
    console.log(fullTimeWageArr);
    
    function findFullTimeWage(dailyWage) {
        return dailyWage === 160;
    }
    console.log("UC7D - First time Fulltime wage was earned on Day:", mapDayWithWageArr.find(findFullTimeWage));
    
    function isAllFullTimeWage(dailyWage) {
        return dailyWage === 160;
    }
    console.log("UC7E - Check All Elements have Full Time Wage", fullTimeWageArr.every(isAllFullTimeWage));
    
    function isAnyPartTimeWage(dailyWage) {
        return dailyWage === 80;
    }
    console.log("UC7F - Check If Any Part Time Wage:", mapDayWithWageArr.some(isAnyPartTimeWage));
    
    function totalDaysWorked(numOfDays, dailyWage) {
        if (dailyWage > 0) return numOfDays + 1;
        return numOfDays;
    }
    console.log("UC7G - Number Of Days Emp Worked:", empDailyWageArr.reduce(totalDaysWorked, 0));

    let empDailyHrsMap = new Map();

empDailyHrsMap.set(1, 8);
empDailyHrsMap.set(2, 4);
empDailyHrsMap.set(3, 0);
empDailyHrsMap.set(4, 8);
empDailyHrsMap.set(5, 4);
    
    const findTotal = (totalVal, dailyVal) => totalVal + dailyVal;
    let count = 0;
    let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
    let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
    console.log("UC9A— Emp Wage with Arrow. : ","Total Hour", totalHours, "Total Wages:", totalSalary);
    
    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    
    empDailyHrsMap.forEach((value, key, map) => {
        if (value === 8) fullWorkingDays.push(key);
        else if (value === 4) partWorkingDays.push(key);
        else nonWorkingDays.push(key);
    });
    
    console.log("Working Days:", fullWorkingDays);
    console.log("Working Days:", partWorkingDays);
    console.log("Non Working Days:", nonWorkingDays);