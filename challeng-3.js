// To calculate PAYE tax using function 
function calculatePAYE(grossSalary) {  
    let tax = 0;  
    const personalRelief = 2400; // Monthly personal relief  

    // PAYE tax  
    if (grossSalary <= 24000) {  
        tax = grossSalary * 0.1; // 10% for income up to Ksh. 24,000  
    } 
    else if (grossSalary <= 32333) {  
        tax = 24000 * 0.1 + (grossSalary - 24000) * 0.25; // 25% for next range  
    }
     else if (grossSalary <= 500000) {  
        tax = 24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3; // 30% for next range  
    }
     else if (grossSalary <= 800000) {  
        tax = 24000 * 0.1 + 8333 * 0.25 + 166667 * 0.3 + (grossSalary - 500000) * 0.325; // 32.5%  
    }
     else {  
        tax = 24000 * 0.1 + 8333 * 0.25 + 166667 * 0.3 + 300000 * 0.325 + (grossSalary - 800000) * 0.35; // 35%  
    }  

    // Subtract personal relief  
    return Math.max(0, tax - personalRelief);  
}  

// Function to calculate NHIF deduction  
function calculateNHIF(grossSalary) {  
    let nhif = 0;  

    // NHIF rates  
    if (grossSalary <= 5999) {  
        nhif = 150;  
    } 
    else if (grossSalary <= 7999) {  
        nhif = 300;  
    }
     else if (grossSalary <= 11999) {  
        nhif = 400;  
    }
     else if (grossSalary <= 14999) {  
        nhif = 500;  
    }
     else if (grossSalary <= 19999) {  
        nhif = 600;  
    }
     else if (grossSalary <= 24999) {  
        nhif = 750;  
    }
     else if (grossSalary <= 29999) {  
        nhif = 850;  
    }
     else if (grossSalary <= 34999) {  
        nhif = 900;  
    }
     else if (grossSalary <= 39999) {  
        nhif = 950;  
    }
     else if (grossSalary <= 44999) {  
        nhif = 1000;  
    } 
    else if (grossSalary <= 49999) {  
        nhif = 1100;  
    } 
    else if (grossSalary <= 59999) {  
        nhif = 1200;  
    } 
    else if (grossSalary <= 69999) {  
        nhif = 1300;  
    } 
    else if (grossSalary <= 79999) {  
        nhif = 1400;  
    } 
    else if (grossSalary <= 89999) {  
        nhif = 1500;  
    }
     else if (grossSalary <= 99999) {  
        nhif = 1600;  
    }
     else {  
        nhif = 1700;  
    }  

    return nhif;  
}  

// To calculate NSSF deduction using function  
function calculateNSSF(grossSalary) {  
    const tier1Limit = 7000; // Tier 1 limit  
    const tier2UpperLimit = 36000; // Tier 2 limit  
    const tierRate = 0.06; // 6% for both tiers  
    let nssf = 0;  

    if (grossSalary <= tier1Limit) {  
        nssf = grossSalary * tierRate; // Tier I contributions  
    } 
    else if (grossSalary <= tier2UpperLimit) {  
        nssf = (tier1Limit * tierRate) + ((grossSalary - tier1Limit) * tierRate); // Tier I and II contributions  
    } 
    else {  
        nssf = (tier1Limit * tierRate) + ((tier2UpperLimit - tier1Limit) * tierRate) + ((grossSalary - tier2UpperLimit) * tierRate);  
    }  

    return nssf;  
}  

// Function to calculate Housing Levy  
function calculateHousingLevy(grossSalary) {  
    return grossSalary * 0.015; // 1.5% housing levy  
}  

//  To calculate total deductions and take-home salary using main function  
function calculateSalaryBreakdown(grossSalary) {  
    const paye = calculatePAYE(grossSalary);  
    const nhif = calculateNHIF(grossSalary);  
    const nssf = calculateNSSF(grossSalary);  
    const housingLevy = calculateHousingLevy(grossSalary);  

    const totalDeductions = paye + nhif + nssf + housingLevy;  
    const takeHomeSalary = grossSalary - totalDeductions;  

    console.log(`Gross Salary: Ksh ${grossSalary}`);  
    console.log(`PAYE Tax: Ksh ${paye}`);  
    console.log(`NHIF Contribution: Ksh ${nhif}`);  
    console.log(`NSSF Contribution: Ksh ${nssf}`);  
    console.log(`Housing Levy: Ksh ${housingLevy}`);  
    console.log(`Total Deductions: Ksh ${totalDeductions}`);  
    console.log(`Take-Home Salary: Ksh ${takeHomeSalary}`);  
}  

// Example Usage  
const grossSalary = 70000; // Change this to any salary you want to calculate  
calculateSalaryBreakdown(grossSalary);  