
function ftToMile(ft){
    
    var mile = (1/5280)*ft;
    
    if (ft<=0){
        return "Invalid input! Please enter a valid value!";
    }
    else{
        return mile;
    }
    
}
mile = ftToMile(6000);
console.log(mileFromFt);
// 
// 
function woodCalculator(chair,table,bed){
    var chairCount = chair*1;
    var tableCount = table*3;
    var bedCount = bed*5;
    var totalCount = chairCount+tableCount+bedCount;
    if (chair<0 || table<0 || bed<0){
        return "Invalid input! Please enter a valid value.";

    }
    else {
        return "You need total "+totalCount+" cubic feet of wood.";
    }


}

console.log(woodCalculator(1,22,3));
// 
// 
function tinyFriend(name){
    var smallestName = name[0];
    for (var i = 0;i<name.length;i++){
        var currentName = name[i];
        if (currentName.length<smallestName.length){
            smallestName = currentName;
        }
    }
    return smallestName;
}

console.log(tinyFriend(["jack","jacky","sacker"]));

// 
// 

function brickCalculator(numOfStorey){
    
    for( i = numOfStorey;i<=10;i++){
        var totalFeet1 = i*15;
        var totalBrick1 = totalFeet1*1000;

        return totalBrick1;
    }
    // return totalBrick1;
}

console.log(brickCalculator(6));