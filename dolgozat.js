function seconds(time) {

    const currentHours = parseInt(time.split(":")[0]);
    const currentMinutes = parseInt(time.split(":")[1]);
    const currentSeconds = parseInt(time.split(":")[2]);

    const currentDate = new Date();
    currentDate.setHours(currentHours);
    currentDate.setMinutes(currentMinutes);
    currentDate.setSeconds(currentSeconds)

    const date = new Date();
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);

    return((date - currentDate) / 1000);
}
console.log(seconds("14:34:42"));

function isLeapYear(year) {
    if(year % 4 == 0){
        if(year.toString().endsWith("00") && year % 400 == 0 ){
            return("True");
        } else if(year.toString().endsWith("00") && year % 400 != 0){
            return("False");
        } else {
            return("True");
        }
    } else {
        return("False");
    }
}
console.log(isLeapYear(2024))

function gradeCalculator(score,maximum) {

    const szazalek = score/maximum*100
    if (szazalek<50)
    {
        return "F";
    }
    else if (49<szazalek && szazalek<60)
    {
        return "E";
    }
    else if (59<szazalek && szazalek<70)
    {
        return "D";
    }
    else if (69<szazalek && szazalek<80)
    {
        return "C";
    }
    else if (79<szazalek && szazalek<90)
    {
        return "B";
    }
    else if (89<szazalek && szazalek<101)
    {
        return "A";
    }
}
console.log(gradeCalculator(65,100))

function stonePaperScissors(player1, player2) {
    if(player1 == 0){ 
        if(player2 == 2){
            return 'The second player wins.';
        } else if(player2 == 0) {
            return 'The game is a tie.';
        } else {
            return 'The first player wins.';
        }
    }

    if(player1 == 1){
        if(player2 == 0){
            return 'The second player wins.';
        } else if(player2 == 1){
            return 'The game is a tie.';
        } else {
            return 'The first player wins.';
        }
    }

    if(player1 == 2){
        if(player2 == 1){
            return 'The second player wins.';
        } else if(player2 == 2){
            return 'The game is a tie.';
        } else {
            return 'The first player wins.';
        }
    }
}
console.log(stonePaperScissors(2,1))