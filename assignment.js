//feetToMile
function feetToMile(feet){
    var mile=feet/5280;
    return mile;
}
var result1 = feetToMile(550);
console.log(result1);


//woodCalculator
function woodCalculator(chair, table, khat){ 
    var chairwood = chair*1;
    var tablewood = table*3;
    var khatwood = khat*5;
    var totalWood = chairwood + tablewood + khatwood;
    return totalWood; 
}
var result2 = woodCalculator(1,1,1);
console.log(result2);


//brickCalculator
function brickCalculator(floorNumber){
    if(floorNumber<=10){
        var total_height = floorNumber * 15;
        var num_of_bricks = total_height * 1000;
    }
    else if(floorNumber<=20){
        var prev_height = 10 * 15;
        var total_height = prev_height + (floorNumber-10)*12;
        var num_of_bricks = total_height * 1000;
    }
    else{
        var prev_height = (10 * 15) + (10 * 12);
        var total_height = prev_height + (floorNumber-20) * 10;
        var num_of_bricks = total_height * 1000;
    }
    return num_of_bricks;
}
var result3 = brickCalculator(30);
console.log(result3);


//tinyFriend
function tinyFriend(name){
    var min_value = 1000;
        for(var i = 0; i<name.length; i++){
            if(min_value>name[i].length){
                var min_value = name[i].length;
                var ans = name[i];
            }
        }
    return ans;
}
var result4 = tinyFriend(['rocy', 'sagor', 'fahim', 'dip']);
console.log(result4);