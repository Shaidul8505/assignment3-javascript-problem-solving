// kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}


// budgetCalculator
function budgetCalculator(watch,mobile,laptop){
    var result = (watch * 50) +(mobile * 100) + (laptop * 500);
    return result;
}



// hotelCost
function hotelCost(stayingDays){
    var cost = 0;
    if(stayingDays <= 10){
        cost = stayingDays * 100;
    }
    else if(stayingDays <= 20){
        var firstPart = 10 * 100;
        var remaining = stayingDays - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = stayingDays - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost
}



// megaFriend
function megaFriend(names){
    var largestName = '';
    for(var i = 0; i < names.length; i++){
        var element = names[i];
        if(element.length > largestName.length){
            largestName = names[i];
        }
    }
    return largestName;
}

