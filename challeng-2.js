function speedDetector(speed) {  
    const speedLimit = 70;  // Maximum allowed speed  
    const demeritPointThreshold = 12;  // Points leading to license suspension  
    const demeritPointPerUnit = 5;  // Points per 5 km/h over the limit  

    // Check if speed is acceptable  
    if (speed < speedLimit) {  
        console.log("Ok");  
    } else {  
        // Calculate excess speed  
        const overSpeed = speed - speedLimit;  

        // Calculate demerit points  
        const demeritPoints = Math.floor(overSpeed / demeritPointPerUnit);  
        
        // Display demerit points  
        console.log("Points: " + demeritPoints);  

        // Check if license should be suspended  
        if (demeritPoints > demeritPointThreshold) {  
            console.log("License suspended");  
        }  
    }  
}  

// Example calls  
speedDetector(80);  // "Points: 2"  
speedDetector(50);  //  "Ok"  
speedDetector(130); // "Points: 12" and "and is point of license suspension"
speedDetector(180) ; //  "points:22" license suspended