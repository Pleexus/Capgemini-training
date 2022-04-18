function suggest_leap(days,num,den){
    return (1.0*den/num).toFixed(2);
}
var mindiff = suggest_leap(365,101,400);
console.log(mindiff);