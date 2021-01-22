// kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}


// budgetCalculator
function budgetCalculator(){

}



// hotelCost
function hotelCost(){

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
