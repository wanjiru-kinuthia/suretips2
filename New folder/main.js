var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
console.log(n);
document.querySelector('#day').innerHTML = n;

var m = weekday[d.getDay()+1];
console.log(m);
document.querySelector('#day1').innerHTML = m;


var m = weekday[d.getDay()-5];
console.log(m);
document.querySelector('#day2').innerHTML = m;

var m = weekday[d.getDay()-4];
console.log(m);
document.querySelector('#day3').innerHTML = m;

var m = weekday[d.getDay()-3];
console.log(m);
document.querySelector('#day4').innerHTML = m;

var m = weekday[d.getDay()-2];
console.log(m);
document.querySelector('#day5').innerHTML = m;

var m = weekday[d.getDay()-1];
console.log(m);
document.querySelector('#day6').innerHTML = m;

/* var d = new Date("2020-10-20 20:00:00");
var z = d.toLocaleDateString();
console.log(z);
document.querySelector('#date').innerHTML = z;*/

var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

var data = "{\"app_package\":\"com.betway.tips\",\"gamedate\":\"2020-10-20\",\"market\":\"classic\"}";
var requestOptions = {
 method: 'POST',
 headers: myHeaders,
 body: data,
 redirect: 'follow'
};

fetch("https://www.suretips.co.ke/bettips_api//tips/all/v2", requestOptions)
 .then(response => response.json())
 .then(data => { console.log(data)
 
const matchescountry = data;
         
getMatches0(data);
getMatches1(data);
getMatches2(data);
getMatches3(data);
getMatches4(data);
getMatches5(data);
getMatches6(data);
getMatches7(data);
getMatches8(data);
getMatches9(data);
getMatches10(data);
getMatches11(data);
getMatches12(data);
getMatches13(data);
getMatches14(data);
getMatches15(data);
getMatches16(data);
getMatches17(data);
getMatches18(data);
getMatches19(data);
getMatches20(data);
getMatches21(data);
getMatches22(data);
getMatches23(data);
getMatches24(data);
getMatches25(data);
getMatches26(data);
getMatches27(data);
getMatches28(data);

getCountry(data);
getCountry1(data);
getCountry2(data);
getCountry3(data);
getCountry4(data);
getCountry5(data);
getCountry6(data);
getCountry7(data);
getCountry8(data);
getCountry9(data);
getCountry10(data);
getCountry11(data);
getCountry12(data);
getCountry13(data);
getCountry14(data);
getCountry15(data);
getCountry16(data);
getCountry17(data);
getCountry18(data);
getCountry19(data);
getCountry20(data);
getCountry21(data);
getCountry22(data);
getCountry23(data);
getCountry24(data);
getCountry25(data);
getCountry26(data);
getCountry27(data);
getCountry28(data);

getTeams(data);
getTeams1(data);
getTeams2(data);
getTeams3(data);
getTeams4(data);
getTeams5(data);
getTeams6(data);
getTeams7(data);
getTeams8(data);
getTeams9(data);
getTeams10(data);
getTeams11(data);
getTeams12(data);
getTeams13(data);
getTeams14(data);
getTeams15(data);
getTeams16(data);
getTeams17(data);
getTeams18(data);
getTeams19(data);
getTeams20(data);
getTeams21(data);
getTeams22(data);
getTeams23(data);
getTeams24(data);
getTeams25(data);
getTeams26(data);
getTeams27(data);
getTeams28(data);
getTeams29(data);
getTeams30(data);
getTeams31(data);
getTeams32(data);
getTeams33(data);
getTeams34(data);
getTeams35(data);
getTeams36(data);
getTeams37(data);
getTeams38(data);
getTeams39(data);
getTeams40(data);
getTeams41(data);
getTeams42(data);
getTeams43(data);
getTeams44(data);
getTeams45(data);
getTeams46(data);
getTeams47(data);
getTeams48(data);
getTeams49(data);
getTeams50(data);
getTeams51(data);
getTeams52(data);
getTeams53(data);
getTeams54(data);
getTeams55(data);
getTeams56(data);
getTeams57(data);
getTeams58(data);
getTeams59(data);
getTeams60(data);
getTeams61(data);
getTeams62(data);
getTeams63(data);
getTeams64(data);
getTeams65(data);
getTeams66(data);
getTeams67(data);
getTeams68(data);
getTeams69(data);
getTeams70(data);
getTeams71(data);
getTeams72(data);
getTeams73(data);
getTeams74(data);
getTeams75(data);
getTeams76(data);
getTeams77(data);
getTeams78(data);
getTeams79(data);
getTeams80(data);
getTeams81(data);
})

function getMatches0(val){
var x = val.data.matches[0].league_name;
document.querySelector('#first1').innerHTML = x;
}
function getMatches1(val){
var x = val.data.matches[1].league_name;
document.querySelector('#second1').innerHTML = x;  
}
function getMatches2(val){
var x = val.data.matches[2].league_name;
document.querySelector('#third1').innerHTML = x;  
}
function getMatches3(val){
var x = val.data.matches[3].league_name;
document.querySelector('#fourth1').innerHTML = x;  
}
function getMatches4(val){
var x = val.data.matches[4].league_name;
document.querySelector('#five1').innerHTML = x;  
}
function getMatches5(val){
var x = val.data.matches[5].league_name;
document.querySelector('#six1').innerHTML = x;  
}
function getMatches6(val){
var x = val.data.matches[6].league_name;
document.querySelector('#seven1').innerHTML = x;  
}
function getMatches7(val){
var x = val.data.matches[7].league_name;
document.querySelector('#eight1').innerHTML = x;  
}
function getMatches8(val){
var x = val.data.matches[8].league_name;
document.querySelector('#nine1').innerHTML = x;  
}
function getMatches9(val){
var x = val.data.matches[9].league_name;
document.querySelector('#ten1').innerHTML = x;  
}
function getMatches10(val){
var x = val.data.matches[10].league_name;
document.querySelector('#eleven1').innerHTML = x;  
}
function getMatches11(val){
var x = val.data.matches[11].league_name;
document.querySelector('#twelve1').innerHTML = x;  
}
function getMatches12(val){
var x = val.data.matches[12].league_name;
document.querySelector('#thirteen1').innerHTML = x;  
}
function getMatches13(val){
var x = val.data.matches[13].league_name;
document.querySelector('#fourteen1').innerHTML = x;  
}
function getMatches14(val){
var x = val.data.matches[14].league_name;
document.querySelector('#fifteen1').innerHTML = x;  
}
function getMatches15(val){
var x = val.data.matches[15].league_name;
document.querySelector('#sixteen1').innerHTML = x;  
}
function getMatches16(val){
var x = val.data.matches[16].league_name;
document.querySelector('#seventeen1').innerHTML = x;  
}
function getMatches17(val){
var x = val.data.matches[17].league_name;
document.querySelector('#eighteen1').innerHTML = x;  
}
function getMatches18(val){
var x = val.data.matches[18].league_name;
document.querySelector('#nineteen1').innerHTML = x;  
}
function getMatches19(val){
var x = val.data.matches[19].league_name;
document.querySelector('#twenty1').innerHTML = x;  
}
function getMatches20(val){
var x = val.data.matches[20].league_name;
document.querySelector('#twentyone1').innerHTML = x;  
}
function getMatches21(val){
var x = val.data.matches[21].league_name;
document.querySelector('#twentytwo1').innerHTML = x;  
}
function getMatches22(val){
var x = val.data.matches[22].league_name;
document.querySelector('#twentythree1').innerHTML = x;  
}
function getMatches23(val){
var x = val.data.matches[23].league_name;
document.querySelector('#twentyfour1').innerHTML = x;  
}
function getMatches24(val){
var x = val.data.matches[24].league_name;
document.querySelector('#twentyfive1').innerHTML = x;  
}
function getMatches25(val){
var x = val.data.matches[25].league_name;
document.querySelector('#twentysix1').innerHTML = x;  
}
function getMatches26(val){
var x = val.data.matches[26].league_name;
document.querySelector('#twentyseven1').innerHTML = x;  
}
function getMatches27(val){
var x = val.data.matches[27].league_name;
document.querySelector('#twentyeight1').innerHTML = x;  
}
function getMatches28(val){
var x = val.data.matches[28].league_name;
document.querySelector('#twentynine1').innerHTML = x;  
}

function getCountry(val){
var x = val.data.matches[0].country;
document.querySelector('#first').innerHTML = x;
}
function getCountry1(val){
var x = val.data.matches[1].country;
document.querySelector('#second').innerHTML = x;
}
function getCountry2(val){
var x = val.data.matches[2].country;
document.querySelector('#third').innerHTML = x;
}
function getCountry3(val){
var x = val.data.matches[3].country;
document.querySelector('#fourth').innerHTML = x;
}
function getCountry4(val){
var x = val.data.matches[4].country;
document.querySelector('#five').innerHTML = x;
}
function getCountry5(val){
var x = val.data.matches[5].country;
document.querySelector('#six').innerHTML = x;
}
function getCountry6(val){
var x = val.data.matches[6].country;
document.querySelector('#seven').innerHTML = x;
}
function getCountry7(val){
var x = val.data.matches[7].country;
document.querySelector('#eight').innerHTML = x;
}
function getCountry8(val){
var x = val.data.matches[8].country;
document.querySelector('#nine').innerHTML = x;
}
function getCountry9(val){
var x = val.data.matches[9].country;
document.querySelector('#ten').innerHTML = x;
}
function getCountry10(val){
var x = val.data.matches[10].country;
document.querySelector('#eleven').innerHTML = x;
}
function getCountry11(val){
var x = val.data.matches[11].country;
document.querySelector('#twelve').innerHTML = x;
}
function getCountry12(val){
var x = val.data.matches[12].country;
document.querySelector('#thirteen').innerHTML = x;
}
function getCountry13(val){
var x = val.data.matches[13].country;
document.querySelector('#fourteen').innerHTML = x;
}
function getCountry14(val){
var x = val.data.matches[14].country;
document.querySelector('#fifteen').innerHTML = x;
}
function getCountry15(val){
var x = val.data.matches[15].country;
document.querySelector('#sixteen').innerHTML = x;
}
function getCountry16(val){
var x = val.data.matches[16].country;
document.querySelector('#seventeen').innerHTML = x;
}
function getCountry17(val){
var x = val.data.matches[17].country;
document.querySelector('#eighteen').innerHTML = x;
}
function getCountry18(val){
var x = val.data.matches[18].country;
document.querySelector('#nineteen').innerHTML = x;
}
function getCountry19(val){
var x = val.data.matches[19].country;
document.querySelector('#twenty').innerHTML = x;
}
function getCountry20(val){
var x = val.data.matches[20].country;
document.querySelector('#twentyone').innerHTML = x;
}
function getCountry21(val){
var x = val.data.matches[21].country;
document.querySelector('#twentytwo').innerHTML = x;
}
function getCountry22(val){
var x = val.data.matches[22].country;
document.querySelector('#twentythree').innerHTML = x;
}
function getCountry23(val){
var x = val.data.matches[23].country;
document.querySelector('#twentyfour').innerHTML = x;
}
function getCountry24(val){
var x = val.data.matches[24].country;
document.querySelector('#twentyfive').innerHTML = x;
}
function getCountry25(val){
var x = val.data.matches[25].country;
document.querySelector('#twentysix').innerHTML = x;
}
function getCountry26(val){
var x = val.data.matches[26].country;
document.querySelector('#twentyseven').innerHTML = x;
}
function getCountry27(val){
var x = val.data.matches[27].country;
document.querySelector('#twentyeight').innerHTML = x;
}
function getCountry28(val){
var x = val.data.matches[28].country;
document.querySelector('#twentynine').innerHTML = x;
}


function getMatches(val){
var x = val.data.matches[1].country;
document.querySelector('#second').innerHTML = x;
}
function getTeams(val){
var x = val.data.matches[0].matches[0].home_team ;
document.querySelector('#team').innerHTML = x;
var x = val.data.matches[0].matches[0].away_team ;
document.querySelector('#team1').innerHTML = x;
var x = val.data.matches[0].matches[0].match_start_time ;
document.querySelector('#time').innerHTML = x;
var x = Math.round (val.data.matches[0].matches[0].home_strength) ;
document.querySelector('#strength').innerHTML = x;
var x = Math.round (val.data.matches[0].matches[0].away_strength) ;
document.querySelector('#strength1').innerHTML = x;
var x = val.data.matches[0].matches[0].prediction ;
document.querySelector('#prediction').innerHTML = x;

}
function getTeams1(val){
var x = val.data.matches[1].matches[0].home_team ;
document.querySelector('#team2').innerHTML = x;
var x = val.data.matches[1].matches[0].away_team ;
document.querySelector('#team3').innerHTML = x;
var x = val.data.matches[1].matches[0].match_start_time ;
document.querySelector('#time1').innerHTML = x;
var x = Math.round (val.data.matches[1].matches[0].home_strength) ;
document.querySelector('#strength2').innerHTML = x;
var x = Math.round (val.data.matches[1].matches[0].away_strength) ;
document.querySelector('#strength3').innerHTML = x;
var x = val.data.matches[1].matches[0].prediction ;
document.querySelector('#prediction1').innerHTML = x;
//var x = val.data.matches[1].matches[0].home_team ;
//document.querySelector('#team2').innerHTML = x; 
}
function getTeams2(val){
var x = val.data.matches[1].matches[1].home_team ;
document.querySelector('#team4').innerHTML = x;
var x = val.data.matches[1].matches[1].away_team ;
document.querySelector('#team5').innerHTML = x;
var x = val.data.matches[1].matches[1].match_start_time ;
document.querySelector('#time2').innerHTML = x;
var x = Math.round (val.data.matches[1].matches[1].home_strength) ;
document.querySelector('#strength4').innerHTML = x;
var x = Math.round (val.data.matches[1].matches[1].away_strength) ;
document.querySelector('#strength5').innerHTML = x;
var x = val.data.matches[1].matches[1].prediction ;
document.querySelector('#prediction2').innerHTML = x;
}
function getTeams3(val){
var x = val.data.matches[2].matches[0].home_team ;
document.querySelector('#team6').innerHTML = x;
var x = val.data.matches[2].matches[0].away_team ;
document.querySelector('#team7').innerHTML = x;
var x = val.data.matches[2].matches[0].match_start_time ;
document.querySelector('#time3').innerHTML = x;
var x = Math.round (val.data.matches[2].matches[0].home_strength) ;
document.querySelector('#strength6').innerHTML = x;
var x = Math.round (val.data.matches[2].matches[0].away_strength) ;
document.querySelector('#strength7').innerHTML = x;
var x = val.data.matches[2].matches[0].prediction ;
document.querySelector('#prediction3').innerHTML = x;
}
function getTeams4(val){
var x = val.data.matches[2].matches[1].home_team ;
document.querySelector('#team8').innerHTML = x;
var x = val.data.matches[2].matches[1].away_team ;
document.querySelector('#team9').innerHTML = x;
var x = val.data.matches[2].matches[1].match_start_time ;
document.querySelector('#time4').innerHTML = x;
var x = Math.round (val.data.matches[2].matches[1].home_strength) ;
document.querySelector('#strength8').innerHTML = x;
var x = Math.round (val.data.matches[2].matches[1].away_strength) ;
document.querySelector('#strength9').innerHTML = x;
var x = val.data.matches[2].matches[1].prediction ;
document.querySelector('#prediction4').innerHTML = x;
}
function getTeams5(val){
var x = val.data.matches[3].matches[0].home_team ;
document.querySelector('#team10').innerHTML = x;
var x = val.data.matches[3].matches[0].away_team ;
document.querySelector('#team11').innerHTML = x;
var x = val.data.matches[3].matches[0].match_start_time ;
document.querySelector('#time5').innerHTML = x;
var x = Math.round (val.data.matches[3].matches[0].home_strength) ;
document.querySelector('#strength10').innerHTML = x;
var x = Math.round (val.data.matches[3].matches[0].away_strength) ;
document.querySelector('#strength11').innerHTML = x;
var x = val.data.matches[3].matches[0].prediction ;
document.querySelector('#prediction5').innerHTML = x;
}
function getTeams6(val){
var x = val.data.matches[3].matches[1].home_team ;
document.querySelector('#team12').innerHTML = x;
var x = val.data.matches[3].matches[1].away_team ;
document.querySelector('#team13').innerHTML = x;
var x = val.data.matches[3].matches[1].match_start_time ;
document.querySelector('#time6').innerHTML = x;
var x = Math.round (val.data.matches[3].matches[1].home_strength) ;
document.querySelector('#strength12').innerHTML = x;
var x = Math.round (val.data.matches[3].matches[1].away_strength) ;
document.querySelector('#strength13').innerHTML = x;
var x = val.data.matches[3].matches[1].prediction ;
document.querySelector('#prediction6').innerHTML = x;
}
function getTeams7(val){
var x = val.data.matches[4].matches[0].home_team ;
document.querySelector('#team14').innerHTML = x;
var x = val.data.matches[4].matches[0].away_team ;
document.querySelector('#team15').innerHTML = x;
var x = val.data.matches[4].matches[0].match_start_time ;
document.querySelector('#time7').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[0].home_strength) ;
document.querySelector('#strength14').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[0].away_strength) ;
document.querySelector('#strength15').innerHTML = x;
var x = val.data.matches[4].matches[0].prediction ;
document.querySelector('#prediction7').innerHTML = x;
}
function getTeams8(val){
var x = val.data.matches[4].matches[1].home_team ;
document.querySelector('#team16').innerHTML = x;
var x = val.data.matches[4].matches[1].away_team ;
document.querySelector('#team17').innerHTML = x;
var x = val.data.matches[4].matches[1].match_start_time ;
document.querySelector('#time8').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[1].home_strength) ;
document.querySelector('#strength16').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[1].away_strength) ;
document.querySelector('#strength17').innerHTML = x;
var x = val.data.matches[4].matches[1].prediction ;
document.querySelector('#prediction8').innerHTML = x;
}
function getTeams9(val){
var x = val.data.matches[4].matches[2].home_team ;
document.querySelector('#team18').innerHTML = x;
var x = val.data.matches[4].matches[2].away_team ;
document.querySelector('#team19').innerHTML = x;
var x = val.data.matches[4].matches[2].match_start_time ;
document.querySelector('#time9').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[2].home_strength) ;
document.querySelector('#strength18').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[2].away_strength) ;
document.querySelector('#strength19').innerHTML = x;
var x = val.data.matches[4].matches[2].prediction ;
document.querySelector('#prediction9').innerHTML = x;
}
function getTeams10(val){
var x = val.data.matches[4].matches[3].home_team ;
document.querySelector('#team20').innerHTML = x;
var x = val.data.matches[4].matches[3].away_team ;
document.querySelector('#team21').innerHTML = x;
var x = val.data.matches[4].matches[3].match_start_time ;
document.querySelector('#time10').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[3].home_strength) ;
document.querySelector('#strength20').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[3].away_strength) ;
document.querySelector('#strength21').innerHTML = x;
var x = val.data.matches[4].matches[3].prediction ;
document.querySelector('#prediction10').innerHTML = x;
}
function getTeams11(val){
var x = val.data.matches[4].matches[4].home_team ;
document.querySelector('#team22').innerHTML = x;
var x = val.data.matches[4].matches[4].away_team ;
document.querySelector('#team23').innerHTML = x;
var x = val.data.matches[4].matches[4].match_start_time ;
document.querySelector('#time11').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[4].home_strength) ;
document.querySelector('#strength22').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[4].away_strength) ;
document.querySelector('#strength23').innerHTML = x;
var x = val.data.matches[4].matches[4].prediction ;
document.querySelector('#prediction11').innerHTML = x;
}
function getTeams12(val){
var x = val.data.matches[4].matches[5].home_team ;
document.querySelector('#team24').innerHTML = x;
var x = val.data.matches[4].matches[5].away_team ;
document.querySelector('#team25').innerHTML = x;
var x = val.data.matches[4].matches[5].match_start_time ;
document.querySelector('#time12').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[5].home_strength) ;
document.querySelector('#strength24').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[5].away_strength) ;
document.querySelector('#strength25').innerHTML = x;
var x = val.data.matches[4].matches[5].prediction ;
document.querySelector('#prediction12').innerHTML = x;
}
function getTeams13(val){
var x = val.data.matches[4].matches[6].home_team ;
document.querySelector('#team26').innerHTML = x;
var x = val.data.matches[4].matches[6].away_team ;
document.querySelector('#team27').innerHTML = x;
var x = val.data.matches[4].matches[6].match_start_time ;
document.querySelector('#time13').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[6].home_strength) ;
document.querySelector('#strength26').innerHTML = x;
var x = Math.round (val.data.matches[4].matches[6].away_strength) ;
document.querySelector('#strength27').innerHTML = x;
var x = val.data.matches[4].matches[6].prediction ;
document.querySelector('#prediction13').innerHTML = x;
}
function getTeams14(val){
var x = val.data.matches[5].matches[0].home_team ;
document.querySelector('#team28').innerHTML = x;
var x = val.data.matches[5].matches[0].away_team ;
document.querySelector('#team29').innerHTML = x;
var x = val.data.matches[5].matches[0].match_start_time ;
document.querySelector('#time14').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[0].home_strength) ;
document.querySelector('#strength28').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[0].away_strength) ;
document.querySelector('#strength29').innerHTML = x;
var x = val.data.matches[5].matches[0].prediction ;
document.querySelector('#prediction14').innerHTML = x;
}
function getTeams15(val){
var x = val.data.matches[5].matches[1].home_team ;
document.querySelector('#team30').innerHTML = x;
var x = val.data.matches[5].matches[1].away_team ;
document.querySelector('#team31').innerHTML = x;
var x = val.data.matches[5].matches[1].match_start_time ;
document.querySelector('#time15').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[1].home_strength) ;
document.querySelector('#strength30').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[1].away_strength) ;
document.querySelector('#strength31').innerHTML = x;
var x = val.data.matches[5].matches[1].prediction ;
document.querySelector('#prediction15').innerHTML = x;
}
function getTeams16(val){
var x = val.data.matches[5].matches[2].home_team ;
document.querySelector('#team32').innerHTML = x;
var x = val.data.matches[5].matches[2].away_team ;
document.querySelector('#team33').innerHTML = x;
var x = val.data.matches[5].matches[2].match_start_time ;
document.querySelector('#time16').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[2].home_strength) ;
document.querySelector('#strength32').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[2].away_strength) ;
document.querySelector('#strength33').innerHTML = x;
var x = val.data.matches[5].matches[2].prediction ;
document.querySelector('#prediction16').innerHTML = x;
}
function getTeams17(val){
var x = val.data.matches[5].matches[3].home_team ;
document.querySelector('#team34').innerHTML = x;
var x = val.data.matches[5].matches[3].away_team ;
document.querySelector('#team35').innerHTML = x;
var x = val.data.matches[5].matches[3].match_start_time ;
document.querySelector('#time17').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[3].home_strength) ;
document.querySelector('#strength34').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[3].away_strength) ;
document.querySelector('#strength35').innerHTML = x;
var x = val.data.matches[5].matches[3].prediction ;
document.querySelector('#prediction17').innerHTML = x;
}
function getTeams18(val){
var x = val.data.matches[5].matches[4].home_team ;
document.querySelector('#team36').innerHTML = x;
var x = val.data.matches[5].matches[4].away_team ;
document.querySelector('#team37').innerHTML = x;
var x = val.data.matches[5].matches[4].match_start_time ;
document.querySelector('#time18').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[4].home_strength) ;
document.querySelector('#strength36').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[4].away_strength) ;
document.querySelector('#strength37').innerHTML = x;
var x = val.data.matches[5].matches[4].prediction ;
document.querySelector('#prediction18').innerHTML = x;
}
function getTeams19(val){
var x = val.data.matches[5].matches[5].home_team ;
document.querySelector('#team38').innerHTML = x;
var x = val.data.matches[5].matches[5].away_team ;
document.querySelector('#team39').innerHTML = x;
var x = val.data.matches[5].matches[5].match_start_time ;
document.querySelector('#time19').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[5].home_strength) ;
document.querySelector('#strength38').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[5].away_strength) ;
document.querySelector('#strength39').innerHTML = x;
var x = val.data.matches[5].matches[5].prediction ;
document.querySelector('#prediction19').innerHTML = x;
}
function getTeams20(val){
var x = val.data.matches[5].matches[6].home_team ;
document.querySelector('#team40').innerHTML = x;
var x = val.data.matches[5].matches[6].away_team ;
document.querySelector('#team41').innerHTML = x;
var x = val.data.matches[5].matches[6].match_start_time ;
document.querySelector('#time20').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[6].home_strength) ;
document.querySelector('#strength40').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[6].away_strength) ;
document.querySelector('#strength41').innerHTML = x;
var x = val.data.matches[5].matches[6].prediction ;
document.querySelector('#prediction20').innerHTML = x;
}
function getTeams21(val){
var x = val.data.matches[5].matches[7].home_team ;
document.querySelector('#team42').innerHTML = x;
var x = val.data.matches[5].matches[7].away_team ;
document.querySelector('#team43').innerHTML = x;
var x = val.data.matches[5].matches[7].match_start_time ;
document.querySelector('#time21').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[7].home_strength) ;
document.querySelector('#strength42').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[7].away_strength) ;
document.querySelector('#strength43').innerHTML = x;
var x = val.data.matches[5].matches[7].prediction ;
document.querySelector('#prediction21').innerHTML = x;
}
function getTeams22(val){
var x = val.data.matches[5].matches[8].home_team ;
document.querySelector('#team44').innerHTML = x;
var x = val.data.matches[5].matches[8].away_team ;
document.querySelector('#team45').innerHTML = x;
var x = val.data.matches[5].matches[8].match_start_time ;
document.querySelector('#time22').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[8].home_strength) ;
document.querySelector('#strength44').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[8].away_strength) ;
document.querySelector('#strength45').innerHTML = x;
var x = val.data.matches[5].matches[8].prediction ;
document.querySelector('#prediction22').innerHTML = x;
}
function getTeams23(val){
var x = val.data.matches[5].matches[9].home_team ;
document.querySelector('#team46').innerHTML = x;
var x = val.data.matches[5].matches[9].away_team ;
document.querySelector('#team47').innerHTML = x;
var x = val.data.matches[5].matches[9].match_start_time ;
document.querySelector('#time23').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[9].home_strength) ;
document.querySelector('#strength46').innerHTML = x;
var x = Math.round (val.data.matches[5].matches[9].away_strength) ;
document.querySelector('#strength47').innerHTML = x;
var x = val.data.matches[5].matches[9].prediction ;
document.querySelector('#prediction23').innerHTML = x;
}
function getTeams24(val){
var x = val.data.matches[6].matches[0].home_team ;
document.querySelector('#team48').innerHTML = x;
var x = val.data.matches[6].matches[0].away_team ;
document.querySelector('#team49').innerHTML = x;
var x = val.data.matches[6].matches[0].match_start_time ;
document.querySelector('#time24').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[0].home_strength) ;
document.querySelector('#strength48').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[0].away_strength) ;
document.querySelector('#strength49').innerHTML = x;
var x = val.data.matches[6].matches[0].prediction ;
document.querySelector('#prediction24').innerHTML = x;
}
function getTeams25(val){
var x = val.data.matches[6].matches[1].home_team ;
document.querySelector('#team50').innerHTML = x;
var x = val.data.matches[6].matches[1].away_team ;
document.querySelector('#team51').innerHTML = x;
var x = val.data.matches[6].matches[1].match_start_time ;
document.querySelector('#time25').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[1].home_strength) ;
document.querySelector('#strength50').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[1].away_strength) ;
document.querySelector('#strength51').innerHTML = x;
var x = val.data.matches[6].matches[1].prediction ;
document.querySelector('#prediction25').innerHTML = x;
}
function getTeams26(val){
var x = val.data.matches[6].matches[2].home_team ;
document.querySelector('#team52').innerHTML = x;
var x = val.data.matches[6].matches[2].away_team ;
document.querySelector('#team53').innerHTML = x;
var x = val.data.matches[6].matches[2].match_start_time ;
document.querySelector('#time26').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[2].home_strength) ;
document.querySelector('#strength52').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[2].away_strength) ;
document.querySelector('#strength53').innerHTML = x;
var x = val.data.matches[6].matches[2].prediction ;
document.querySelector('#prediction26').innerHTML = x;
}
function getTeams27(val){
var x = val.data.matches[6].matches[3].home_team ;
document.querySelector('#team54').innerHTML = x;
var x = val.data.matches[6].matches[3].away_team ;
document.querySelector('#team55').innerHTML = x;
var x = val.data.matches[6].matches[3].match_start_time ;
document.querySelector('#time27').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[3].home_strength) ;
document.querySelector('#strength54').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[3].away_strength) ;
document.querySelector('#strength55').innerHTML = x;
var x = val.data.matches[6].matches[3].prediction ;
document.querySelector('#prediction27').innerHTML = x;
}
function getTeams28(val){
var x = val.data.matches[6].matches[4].home_team ;
document.querySelector('#team56').innerHTML = x;
var x = val.data.matches[6].matches[4].away_team ;
document.querySelector('#team57').innerHTML = x;
var x = val.data.matches[6].matches[4].match_start_time ;
document.querySelector('#time28').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[4].home_strength) ;
document.querySelector('#strength56').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[4].away_strength) ;
document.querySelector('#strength57').innerHTML = x;
var x = val.data.matches[6].matches[4].prediction ;
document.querySelector('#prediction28').innerHTML = x;
}
function getTeams29(val){
var x = val.data.matches[6].matches[5].home_team ;
document.querySelector('#team58').innerHTML = x;
var x = val.data.matches[6].matches[5].away_team ;
document.querySelector('#team59').innerHTML = x;
var x = val.data.matches[6].matches[5].match_start_time ;
document.querySelector('#time29').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[5].home_strength) ;
document.querySelector('#strength58').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[5].away_strength) ;
document.querySelector('#strength59').innerHTML = x;
var x = val.data.matches[6].matches[5].prediction ;
document.querySelector('#prediction29').innerHTML = x;
}
function getTeams30(val){
var x = val.data.matches[6].matches[6].home_team ;
document.querySelector('#team60').innerHTML = x;
var x = val.data.matches[6].matches[6].away_team ;
document.querySelector('#team61').innerHTML = x;
var x = val.data.matches[6].matches[6].match_start_time ;
document.querySelector('#time30').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[6].home_strength) ;
document.querySelector('#strength60').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[6].away_strength) ;
document.querySelector('#strength61').innerHTML = x;
var x = val.data.matches[6].matches[6].prediction ;
document.querySelector('#prediction30').innerHTML = x;
}
function getTeams31(val){
var x = val.data.matches[6].matches[7].home_team ;
document.querySelector('#team62').innerHTML = x;
var x = val.data.matches[6].matches[7].away_team ;
document.querySelector('#team63').innerHTML = x;
var x = val.data.matches[6].matches[7].match_start_time ;
document.querySelector('#time31').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[7].home_strength) ;
document.querySelector('#strength62').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[7].away_strength) ;
document.querySelector('#strength63').innerHTML = x;
var x = val.data.matches[6].matches[7].prediction ;
document.querySelector('#prediction31').innerHTML = x;
}
function getTeams32(val){
var x = val.data.matches[6].matches[8].home_team ;
document.querySelector('#team64').innerHTML = x;
var x = val.data.matches[6].matches[8].away_team ;
document.querySelector('#team65').innerHTML = x;
var x = val.data.matches[6].matches[8].match_start_time ;
document.querySelector('#time32').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[8].home_strength) ;
document.querySelector('#strength64').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[8].away_strength) ;
document.querySelector('#strength65').innerHTML = x;
var x = val.data.matches[6].matches[8].prediction ;
document.querySelector('#prediction32').innerHTML = x;
}
function getTeams33(val){
var x = val.data.matches[6].matches[9].home_team ;
document.querySelector('#team66').innerHTML = x;
var x = val.data.matches[6].matches[9].away_team ;
document.querySelector('#team67').innerHTML = x;
var x = val.data.matches[6].matches[9].match_start_time ;
document.querySelector('#time33').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[9].home_strength) ;
document.querySelector('#strength66').innerHTML = x;
var x = Math.round (val.data.matches[6].matches[9].away_strength) ;
document.querySelector('#strength67').innerHTML = x;
var x = val.data.matches[6].matches[9].prediction ;
document.querySelector('#prediction33').innerHTML = x;
}
function getTeams34(val){
var x = val.data.matches[7].matches[0].home_team ;
document.querySelector('#team68').innerHTML = x;
var x = val.data.matches[7].matches[0].away_team ;
document.querySelector('#team69').innerHTML = x;
var x = val.data.matches[7].matches[0].match_start_time ;
document.querySelector('#time34').innerHTML = x;
var x = Math.round (val.data.matches[7].matches[0].home_strength) ;
document.querySelector('#strength68').innerHTML = x;
var x = Math.round (val.data.matches[7].matches[0].away_strength) ;
document.querySelector('#strength69').innerHTML = x;
var x = val.data.matches[7].matches[0].prediction ;
document.querySelector('#prediction34').innerHTML = x;
}
function getTeams35(val){
var x = val.data.matches[7].matches[1].home_team ;
document.querySelector('#team70').innerHTML = x;
var x = val.data.matches[7].matches[1].away_team ;
document.querySelector('#team71').innerHTML = x;
var x = val.data.matches[7].matches[1].match_start_time ;
document.querySelector('#time35').innerHTML = x;
var x = Math.round (val.data.matches[7].matches[1].home_strength) ;
document.querySelector('#strength70').innerHTML = x;
var x = Math.round (val.data.matches[7].matches[1].away_strength) ;
document.querySelector('#strength71').innerHTML = x;
var x = val.data.matches[7].matches[1].prediction ;
document.querySelector('#prediction35').innerHTML = x;
}
function getTeams36(val){
    var x = val.data.matches[8].matches[0].home_team ;
    document.querySelector('#team72').innerHTML = x;
    var x = val.data.matches[8].matches[0].away_team ;
    document.querySelector('#team73').innerHTML = x;
    var x = val.data.matches[8].matches[0].match_start_time ;
    document.querySelector('#time36').innerHTML = x;
    var x = Math.round (val.data.matches[8].matches[0].home_strength) ;
    document.querySelector('#strength72').innerHTML = x;
    var x = Math.round (val.data.matches[8].matches[0].away_strength) ;
    document.querySelector('#strength73').innerHTML = x;
    var x = val.data.matches[8].matches[0].prediction ;
    document.querySelector('#prediction36').innerHTML = x;
 }
 function getTeams37(val){
    var x = val.data.matches[8].matches[1].home_team ;
    document.querySelector('#team74').innerHTML = x;
    var x = val.data.matches[8].matches[1].away_team ;
    document.querySelector('#team75').innerHTML = x;
    var x = val.data.matches[8].matches[1].match_start_time ;
    document.querySelector('#time37').innerHTML = x;
    var x = Math.round (val.data.matches[8].matches[1].home_strength) ;
    document.querySelector('#strength74').innerHTML = x;
    var x = Math.round (val.data.matches[8].matches[1].away_strength) ;
    document.querySelector('#strength75').innerHTML = x;
    var x = val.data.matches[8].matches[1].prediction ;
    document.querySelector('#prediction37').innerHTML = x;
    } 
  function getTeams38(val){
     var x = val.data.matches[8].matches[2].home_team ;
     document.querySelector('#team76').innerHTML = x;
    var x = val.data.matches[8].matches[2].away_team ;
    document.querySelector('#team77').innerHTML = x;
     var x = val.data.matches[8].matches[2].match_start_time ;
     document.querySelector('#time38').innerHTML = x;
     var x = Math.round (val.data.matches[8].matches[2].home_strength) ;
    document.querySelector('#strength76').innerHTML = x;
    var x = Math.round (val.data.matches[8].matches[2].away_strength) ;
    document.querySelector('#strength77').innerHTML = x;
     var x = val.data.matches[8].matches[2].prediction ;
     document.querySelector('#prediction38').innerHTML = x;
        }
 function getTeams39(val){
     var x = val.data.matches[8].matches[3].home_team ;
     document.querySelector('#team78').innerHTML = x;
     var x = val.data.matches[8].matches[3].away_team ;
    document.querySelector('#team79').innerHTML = x;
    var x = val.data.matches[8].matches[3].match_start_time ;
     document.querySelector('#time39').innerHTML = x;
    var x = Math.round (val.data.matches[8].matches[3].home_strength) ;
    document.querySelector('#strength78').innerHTML = x;
    var x = Math.round (val.data.matches[8].matches[3].away_strength) ;
    document.querySelector('#strength79').innerHTML = x;
     var x = val.data.matches[8].matches[3].prediction ;
    document.querySelector('#prediction39').innerHTML = x;
 }  
 function getTeams40(val){
    var x = val.data.matches[8].matches[4].home_team ;
    document.querySelector('#team80').innerHTML = x;
    var x = val.data.matches[8].matches[4].away_team ;
   document.querySelector('#team81').innerHTML = x;
   var x = val.data.matches[8].matches[4].match_start_time ;
    document.querySelector('#time40').innerHTML = x;
   var x = Math.round (val.data.matches[8].matches[4].home_strength) ;
   document.querySelector('#strength80').innerHTML = x;
   var x = Math.round (val.data.matches[8].matches[4].away_strength) ;
   document.querySelector('#strength81').innerHTML = x;
    var x = val.data.matches[8].matches[4].prediction ;
   document.querySelector('#prediction40').innerHTML = x;
}  
function getTeams41(val){
    var x = val.data.matches[8].matches[5].home_team ;
    document.querySelector('#team82').innerHTML = x;
    var x = val.data.matches[8].matches[5].away_team ;
   document.querySelector('#team83').innerHTML = x;
   var x = val.data.matches[8].matches[5].match_start_time ;
    document.querySelector('#time41').innerHTML = x;
   var x = Math.round (val.data.matches[8].matches[5].home_strength) ;
   document.querySelector('#strength82').innerHTML = x;
   var x = Math.round (val.data.matches[8].matches[5].away_strength) ;
   document.querySelector('#strength83').innerHTML = x;
    var x = val.data.matches[8].matches[5].prediction ;
   document.querySelector('#prediction41').innerHTML = x;
} 
function getTeams42(val){
    var x = val.data.matches[8].matches[6].home_team ;
    document.querySelector('#team84').innerHTML = x;
    var x = val.data.matches[8].matches[6].away_team ;
   document.querySelector('#team85').innerHTML = x;
   var x = val.data.matches[8].matches[6].match_start_time ;
    document.querySelector('#time42').innerHTML = x;
   var x = Math.round (val.data.matches[8].matches[6].home_strength) ;
   document.querySelector('#strength84').innerHTML = x;
   var x = Math.round (val.data.matches[8].matches[6].away_strength) ;
   document.querySelector('#strength85').innerHTML = x;
    var x = val.data.matches[8].matches[6].prediction ;
   document.querySelector('#prediction42').innerHTML = x;
}   
function getTeams43(val){
    var x = val.data.matches[8].matches[7].home_team ;
    document.querySelector('#team86').innerHTML = x;
    var x = val.data.matches[8].matches[7].away_team ;
   document.querySelector('#team87').innerHTML = x;
   var x = val.data.matches[8].matches[7].match_start_time ;
    document.querySelector('#time43').innerHTML = x;
   var x = Math.round (val.data.matches[8].matches[7].home_strength) ;
   document.querySelector('#strength86').innerHTML = x;
   var x = Math.round (val.data.matches[8].matches[7].away_strength) ;
   document.querySelector('#strength87').innerHTML = x;
    var x = val.data.matches[8].matches[7].prediction ;
   document.querySelector('#prediction43').innerHTML = x;
}   
function getTeams44(val){
    var x = val.data.matches[9].matches[0].home_team ;
    document.querySelector('#team88').innerHTML = x;
    var x = val.data.matches[9].matches[0].away_team ;
   document.querySelector('#team89').innerHTML = x;
   var x = val.data.matches[9].matches[0].match_start_time ;
    document.querySelector('#time44').innerHTML = x;
   var x = Math.round (val.data.matches[9].matches[0].home_strength) ;
   document.querySelector('#strength88').innerHTML = x;
   var x = Math.round (val.data.matches[9].matches[0].away_strength) ;
   document.querySelector('#strength89').innerHTML = x;
    var x = val.data.matches[9].matches[0].prediction ;
   document.querySelector('#prediction44').innerHTML = x;
}  
function getTeams45(val){
    var x = val.data.matches[9].matches[1].home_team ;
    document.querySelector('#team90').innerHTML = x;
    var x = val.data.matches[9].matches[1].away_team ;
   document.querySelector('#team91').innerHTML = x;
   var x = val.data.matches[9].matches[1].match_start_time ;
    document.querySelector('#time45').innerHTML = x;
   var x = Math.round (val.data.matches[9].matches[1].home_strength) ;
   document.querySelector('#strength90').innerHTML = x;
   var x = Math.round (val.data.matches[9].matches[1].away_strength) ;
   document.querySelector('#strength91').innerHTML = x;
    var x = val.data.matches[9].matches[1].prediction ;
   document.querySelector('#prediction45').innerHTML = x;
} 
function getTeams46(val){
   var x = val.data.matches[10].matches[0].home_team ;
   document.querySelector('#team92').innerHTML = x;
   var x = val.data.matches[10].matches[0].away_team ;
  document.querySelector('#team93').innerHTML = x;
  var x = val.data.matches[10].matches[0].match_start_time ;
   document.querySelector('#time46').innerHTML = x;
  var x = Math.round (val.data.matches[10].matches[0].home_strength) ;
  document.querySelector('#strength92').innerHTML = x;
  var x = Math.round (val.data.matches[10].matches[0].away_strength) ;
  document.querySelector('#strength93').innerHTML = x;
   var x = val.data.matches[10].matches[0].prediction ;
  document.querySelector('#prediction46').innerHTML = x;
}
function getTeams47(val){
   var x = val.data.matches[11].matches[0].home_team ;
   document.querySelector('#team94').innerHTML = x;
   var x = val.data.matches[11].matches[0].away_team ;
  document.querySelector('#team95').innerHTML = x;
  var x = val.data.matches[11].matches[0].match_start_time ;
   document.querySelector('#time47').innerHTML = x;
  var x = Math.round (val.data.matches[11].matches[0].home_strength) ;
  document.querySelector('#strength94').innerHTML = x;
  var x = Math.round (val.data.matches[11].matches[0].away_strength) ;
  document.querySelector('#strength95').innerHTML = x;
   var x = val.data.matches[11].matches[0].prediction ;
  document.querySelector('#prediction47').innerHTML = x;
}
function getTeams48(val){
   var x = val.data.matches[12].matches[0].home_team ;
   document.querySelector('#team96').innerHTML = x;
   var x = val.data.matches[12].matches[0].away_team ;
  document.querySelector('#team97').innerHTML = x;
  var x = val.data.matches[12].matches[0].match_start_time ;
   document.querySelector('#time48').innerHTML = x;
  var x = Math.round (val.data.matches[12].matches[0].home_strength) ;
  document.querySelector('#strength96').innerHTML = x;
  var x = Math.round (val.data.matches[12].matches[0].away_strength) ;
  document.querySelector('#strength97').innerHTML = x;
   var x = val.data.matches[12].matches[0].prediction ;
  document.querySelector('#prediction48').innerHTML = x;
}
function getTeams49(val){
   var x = val.data.matches[12].matches[1].home_team ;
   document.querySelector('#team98').innerHTML = x;
   var x = val.data.matches[12].matches[1].away_team ;
  document.querySelector('#team99').innerHTML = x;
  var x = val.data.matches[12].matches[1].match_start_time ;
   document.querySelector('#time49').innerHTML = x;
  var x = Math.round (val.data.matches[12].matches[1].home_strength) ;
  document.querySelector('#strength98').innerHTML = x;
  var x = Math.round (val.data.matches[12].matches[1].away_strength) ;
  document.querySelector('#strength99').innerHTML = x;
   var x = val.data.matches[12].matches[1].prediction ;
  document.querySelector('#prediction49').innerHTML = x;
}
function getTeams50(val){
   var x = val.data.matches[13].matches[0].home_team ;
   document.querySelector('#team100').innerHTML = x;
   var x = val.data.matches[13].matches[0].away_team ;
  document.querySelector('#team101').innerHTML = x;
  var x = val.data.matches[13].matches[0].match_start_time ;
   document.querySelector('#time50').innerHTML = x;
  var x = Math.round (val.data.matches[13].matches[0].home_strength) ;
  document.querySelector('#strength100').innerHTML = x;
  var x = Math.round (val.data.matches[13].matches[0].away_strength) ;
  document.querySelector('#strength101').innerHTML = x;
   var x = val.data.matches[13].matches[0].prediction ;
  document.querySelector('#prediction50').innerHTML = x;
}
function getTeams51(val){
   var x = val.data.matches[13].matches[1].home_team ;
   document.querySelector('#team102').innerHTML = x;
   var x = val.data.matches[13].matches[1].away_team ;
  document.querySelector('#team103').innerHTML = x;
  var x = val.data.matches[13].matches[1].match_start_time ;
   document.querySelector('#time51').innerHTML = x;
  var x = Math.round (val.data.matches[13].matches[1].home_strength) ;
  document.querySelector('#strength102').innerHTML = x;
  var x = Math.round (val.data.matches[13].matches[1].away_strength) ;
  document.querySelector('#strength103').innerHTML = x;
   var x = val.data.matches[13].matches[1].prediction ;
  document.querySelector('#prediction51').innerHTML = x;
} 
function getTeams52(val){
   var x = val.data.matches[14].matches[0].home_team ;
   document.querySelector('#team104').innerHTML = x;
   var x = val.data.matches[14].matches[0].away_team ;
  document.querySelector('#team105').innerHTML = x;
  var x = val.data.matches[14].matches[0].match_start_time ;
   document.querySelector('#time52').innerHTML = x;
  var x = Math.round (val.data.matches[14].matches[0].home_strength) ;
  document.querySelector('#strength104').innerHTML = x;
  var x = Math.round (val.data.matches[14].matches[0].away_strength) ;
  document.querySelector('#strength105').innerHTML = x;
   var x = val.data.matches[14].matches[0].prediction ;
  document.querySelector('#prediction52').innerHTML = x;
}
function getTeams53(val){
   var x = val.data.matches[14].matches[1].home_team ;
   document.querySelector('#team106').innerHTML = x;
   var x = val.data.matches[14].matches[1].away_team ;
  document.querySelector('#team107').innerHTML = x;
  var x = val.data.matches[14].matches[1].match_start_time ;
   document.querySelector('#time53').innerHTML = x;
  var x = Math.round (val.data.matches[14].matches[1].home_strength) ;
  document.querySelector('#strength106').innerHTML = x;
  var x = Math.round (val.data.matches[14].matches[1].away_strength) ;
  document.querySelector('#strength107').innerHTML = x;
   var x = val.data.matches[14].matches[1].prediction ;
  document.querySelector('#prediction53').innerHTML = x;
}
function getTeams54(val){
   var x = val.data.matches[14].matches[2].home_team ;
   document.querySelector('#team108').innerHTML = x;
   var x = val.data.matches[14].matches[2].away_team ;
  document.querySelector('#team109').innerHTML = x;
  var x = val.data.matches[14].matches[2].match_start_time ;
   document.querySelector('#time54').innerHTML = x;
  var x = Math.round (val.data.matches[14].matches[2].home_strength) ;
  document.querySelector('#strength108').innerHTML = x;
  var x = Math.round (val.data.matches[14].matches[2].away_strength) ;
  document.querySelector('#strength109').innerHTML = x;
   var x = val.data.matches[14].matches[2].prediction ;
  document.querySelector('#prediction54').innerHTML = x;
}
function getTeams55(val){
   var x = val.data.matches[15].matches[0].home_team ;
   document.querySelector('#team110').innerHTML = x;
   var x = val.data.matches[15].matches[0].away_team ;
  document.querySelector('#team111').innerHTML = x;
  var x = val.data.matches[15].matches[0].match_start_time ;
   document.querySelector('#time55').innerHTML = x;
  var x = Math.round (val.data.matches[15].matches[0].home_strength) ;
  document.querySelector('#strength110').innerHTML = x;
  var x = Math.round (val.data.matches[15].matches[0].away_strength) ;
  document.querySelector('#strength111').innerHTML = x;
   var x = val.data.matches[15].matches[0].prediction ;
  document.querySelector('#prediction55').innerHTML = x;
}
function getTeams56(val){
   var x = val.data.matches[15].matches[1].home_team ;
   document.querySelector('#team112').innerHTML = x;
   var x = val.data.matches[15].matches[1].away_team ;
  document.querySelector('#team113').innerHTML = x;
  var x = val.data.matches[15].matches[1].match_start_time ;
   document.querySelector('#time56').innerHTML = x;
  var x = Math.round (val.data.matches[15].matches[1].home_strength) ;
  document.querySelector('#strength112').innerHTML = x;
  var x = Math.round (val.data.matches[15].matches[1].away_strength) ;
  document.querySelector('#strength113').innerHTML = x;
   var x = val.data.matches[15].matches[1].prediction ;
  document.querySelector('#prediction56').innerHTML = x;
} 
function getTeams57(val){
   var x = val.data.matches[16].matches[0].home_team ;
   document.querySelector('#team114').innerHTML = x;
   var x = val.data.matches[16].matches[0].away_team ;
  document.querySelector('#team115').innerHTML = x;
  var x = val.data.matches[16].matches[0].match_start_time ;
   document.querySelector('#time57').innerHTML = x;
  var x = Math.round (val.data.matches[16].matches[0].home_strength) ;
  document.querySelector('#strength114').innerHTML = x;
  var x = Math.round (val.data.matches[16].matches[0].away_strength) ;
  document.querySelector('#strength115').innerHTML = x;
   var x = val.data.matches[16].matches[0].prediction ;
  document.querySelector('#prediction57').innerHTML = x;
}
function getTeams58(val){
   var x = val.data.matches[17].matches[0].home_team ;
   document.querySelector('#team116').innerHTML = x;
   var x = val.data.matches[17].matches[0].away_team ;
  document.querySelector('#team117').innerHTML = x;
  var x = val.data.matches[17].matches[0].match_start_time ;
   document.querySelector('#time58').innerHTML = x;
  var x = Math.round (val.data.matches[17].matches[0].home_strength) ;
  document.querySelector('#strength116').innerHTML = x;
  var x = Math.round (val.data.matches[17].matches[0].away_strength) ;
  document.querySelector('#strength117').innerHTML = x;
   var x = val.data.matches[17].matches[0].prediction ;
  document.querySelector('#prediction58').innerHTML = x;
}
function getTeams59(val){
   var x = val.data.matches[17].matches[1].home_team ;
   document.querySelector('#team118').innerHTML = x;
   var x = val.data.matches[17].matches[1].away_team ;
  document.querySelector('#team119').innerHTML = x;
  var x = val.data.matches[17].matches[1].match_start_time ;
   document.querySelector('#time59').innerHTML = x;
  var x = Math.round (val.data.matches[17].matches[1].home_strength) ;
  document.querySelector('#strength118').innerHTML = x;
  var x = Math.round (val.data.matches[17].matches[1].away_strength) ;
  document.querySelector('#strength119').innerHTML = x;
   var x = val.data.matches[17].matches[1].prediction ;
  document.querySelector('#prediction59').innerHTML = x;
}
function getTeams60(val){
   var x = val.data.matches[18].matches[0].home_team ;
   document.querySelector('#team120').innerHTML = x;
   var x = val.data.matches[18].matches[0].away_team ;
  document.querySelector('#team121').innerHTML = x;
  var x = val.data.matches[18].matches[0].match_start_time ;
   document.querySelector('#time60').innerHTML = x;
  var x = Math.round (val.data.matches[18].matches[0].home_strength) ;
  document.querySelector('#strength120').innerHTML = x;
  var x = Math.round (val.data.matches[18].matches[0].away_strength) ;
  document.querySelector('#strength121').innerHTML = x;
   var x = val.data.matches[18].matches[0].prediction ;
  document.querySelector('#prediction60').innerHTML = x;
}
function getTeams61(val){
   var x = val.data.matches[19].matches[0].home_team ;
   document.querySelector('#team122').innerHTML = x;
   var x = val.data.matches[19].matches[0].away_team ;
  document.querySelector('#team123').innerHTML = x;
  var x = val.data.matches[19].matches[0].match_start_time ;
   document.querySelector('#time61').innerHTML = x;
  var x = Math.round (val.data.matches[19].matches[0].home_strength) ;
  document.querySelector('#strength122').innerHTML = x;
  var x = Math.round (val.data.matches[19].matches[0].away_strength) ;
  document.querySelector('#strength123').innerHTML = x;
   var x = val.data.matches[19].matches[0].prediction ;
  document.querySelector('#prediction61').innerHTML = x;
}
function getTeams62(val){
   var x = val.data.matches[19].matches[1].home_team ;
   document.querySelector('#team124').innerHTML = x;
   var x = val.data.matches[19].matches[1].away_team ;
  document.querySelector('#team125').innerHTML = x;
  var x = val.data.matches[19].matches[1].match_start_time ;
   document.querySelector('#time62').innerHTML = x;
  var x = Math.round (val.data.matches[19].matches[1].home_strength) ;
  document.querySelector('#strength124').innerHTML = x;
  var x = Math.round (val.data.matches[19].matches[1].away_strength) ;
  document.querySelector('#strength125').innerHTML = x;
   var x = val.data.matches[19].matches[1].prediction ;
  document.querySelector('#prediction62').innerHTML = x;
}
function getTeams63(val){
   var x = val.data.matches[20].matches[0].home_team ;
   document.querySelector('#team126').innerHTML = x;
   var x = val.data.matches[20].matches[0].away_team ;
  document.querySelector('#team127').innerHTML = x;
  var x = val.data.matches[20].matches[0].match_start_time ;
   document.querySelector('#time63').innerHTML = x;
  var x = Math.round (val.data.matches[20].matches[0].home_strength) ;
  document.querySelector('#strength126').innerHTML = x;
  var x = Math.round (val.data.matches[20].matches[0].away_strength) ;
  document.querySelector('#strength127').innerHTML = x;
   var x = val.data.matches[20].matches[0].prediction ;
  document.querySelector('#prediction63').innerHTML = x;
}
function getTeams64(val){
   var x = val.data.matches[20].matches[1].home_team ;
   document.querySelector('#team128').innerHTML = x;
   var x = val.data.matches[20].matches[1].away_team ;
  document.querySelector('#team129').innerHTML = x;
  var x = val.data.matches[20].matches[1].match_start_time ;
   document.querySelector('#time64').innerHTML = x;
  var x = Math.round (val.data.matches[20].matches[1].home_strength) ;
  document.querySelector('#strength128').innerHTML = x;
  var x = Math.round (val.data.matches[20].matches[1].away_strength) ;
  document.querySelector('#strength129').innerHTML = x;
   var x = val.data.matches[20].matches[1].prediction ;
  document.querySelector('#prediction64').innerHTML = x;
}
function getTeams65(val){
   var x = val.data.matches[20].matches[2].home_team ;
   document.querySelector('#team130').innerHTML = x;
   var x = val.data.matches[20].matches[2].away_team ;
  document.querySelector('#team131').innerHTML = x;
  var x = val.data.matches[20].matches[2].match_start_time ;
   document.querySelector('#time65').innerHTML = x;
  var x = Math.round (val.data.matches[20].matches[2].home_strength) ;
  document.querySelector('#strength130').innerHTML = x;
  var x = Math.round (val.data.matches[20].matches[2].away_strength) ;
  document.querySelector('#strength131').innerHTML = x;
   var x = val.data.matches[20].matches[2].prediction ;
  document.querySelector('#prediction65').innerHTML = x;
}
function getTeams66(val){
   var x = val.data.matches[20].matches[3].home_team ;
   document.querySelector('#team132').innerHTML = x;
   var x = val.data.matches[20].matches[3].away_team ;
  document.querySelector('#team133').innerHTML = x;
  var x = val.data.matches[20].matches[3].match_start_time ;
   document.querySelector('#time66').innerHTML = x;
  var x = Math.round (val.data.matches[20].matches[3].home_strength) ;
  document.querySelector('#strength132').innerHTML = x;
  var x = Math.round (val.data.matches[20].matches[3].away_strength) ;
  document.querySelector('#strength133').innerHTML = x;
   var x = val.data.matches[20].matches[3].prediction ;
  document.querySelector('#prediction66').innerHTML = x;
}
function getTeams67(val){
   var x = val.data.matches[21].matches[0].home_team ;
   document.querySelector('#team134').innerHTML = x;
   var x = val.data.matches[21].matches[0].away_team ;
  document.querySelector('#team135').innerHTML = x;
  var x = val.data.matches[21].matches[0].match_start_time ;
   document.querySelector('#time67').innerHTML = x;
  var x = Math.round (val.data.matches[21].matches[0].home_strength) ;
  document.querySelector('#strength134').innerHTML = x;
  var x = Math.round (val.data.matches[21].matches[0].away_strength) ;
  document.querySelector('#strength135').innerHTML = x;
   var x = val.data.matches[21].matches[0].prediction ;
  document.querySelector('#prediction67').innerHTML = x;
}
function getTeams68(val){
   var x = val.data.matches[21].matches[1].home_team ;
   document.querySelector('#team136').innerHTML = x;
   var x = val.data.matches[21].matches[1].away_team ;
  document.querySelector('#team137').innerHTML = x;
  var x = val.data.matches[21].matches[1].match_start_time ;
   document.querySelector('#time68').innerHTML = x;
  var x = Math.round (val.data.matches[21].matches[1].home_strength) ;
  document.querySelector('#strength136').innerHTML = x;
  var x = Math.round (val.data.matches[21].matches[1].away_strength) ;
  document.querySelector('#strength137').innerHTML = x;
   var x = val.data.matches[21].matches[1].prediction ;
  document.querySelector('#prediction68').innerHTML = x;
}
function getTeams69(val){
   var x = val.data.matches[21].matches[2].home_team ;
   document.querySelector('#team138').innerHTML = x;
   var x = val.data.matches[21].matches[2].away_team ;
  document.querySelector('#team139').innerHTML = x;
  var x = val.data.matches[21].matches[2].match_start_time ;
   document.querySelector('#time69').innerHTML = x;
  var x = Math.round (val.data.matches[21].matches[2].home_strength) ;
  document.querySelector('#strength138').innerHTML = x;
  var x = Math.round (val.data.matches[21].matches[2].away_strength) ;
  document.querySelector('#strength139').innerHTML = x;
   var x = val.data.matches[21].matches[2].prediction ;
  document.querySelector('#prediction69').innerHTML = x;
}
function getTeams70(val){
   var x = val.data.matches[22].matches[0].home_team ;
   document.querySelector('#team140').innerHTML = x;
   var x = val.data.matches[22].matches[0].away_team ;
  document.querySelector('#team141').innerHTML = x;
  var x = val.data.matches[22].matches[0].match_start_time ;
   document.querySelector('#time70').innerHTML = x;
  var x = Math.round (val.data.matches[22].matches[0].home_strength) ;
  document.querySelector('#strength140').innerHTML = x;
  var x = Math.round (val.data.matches[22].matches[0].away_strength) ;
  document.querySelector('#strength141').innerHTML = x;
   var x = val.data.matches[22].matches[0].prediction ;
  document.querySelector('#prediction70').innerHTML = x;
}
function getTeams71(val){
   var x = val.data.matches[22].matches[1].home_team ;
   document.querySelector('#team142').innerHTML = x;
   var x = val.data.matches[22].matches[1].away_team ;
  document.querySelector('#team143').innerHTML = x;
  var x = val.data.matches[22].matches[1].match_start_time ;
   document.querySelector('#time71').innerHTML = x;
  var x = Math.round (val.data.matches[22].matches[1].home_strength) ;
  document.querySelector('#strength142').innerHTML = x;
  var x = Math.round (val.data.matches[22].matches[1].away_strength) ;
  document.querySelector('#strength143').innerHTML = x;
   var x = val.data.matches[22].matches[1].prediction ;
  document.querySelector('#prediction71').innerHTML = x;
}
function getTeams72(val){
   var x = val.data.matches[23].matches[0].home_team ;
   document.querySelector('#team144').innerHTML = x;
   var x = val.data.matches[23].matches[0].away_team ;
  document.querySelector('#team145').innerHTML = x;
  var x = val.data.matches[23].matches[0].match_start_time ;
   document.querySelector('#time72').innerHTML = x;
  var x = Math.round (val.data.matches[23].matches[0].home_strength) ;
  document.querySelector('#strength144').innerHTML = x;
  var x = Math.round (val.data.matches[23].matches[0].away_strength) ;
  document.querySelector('#strength145').innerHTML = x;
   var x = val.data.matches[23].matches[0].prediction ;
  document.querySelector('#prediction72').innerHTML = x;
}
function getTeams73(val){
   var x = val.data.matches[23].matches[1].home_team ;
   document.querySelector('#team146').innerHTML = x;
   var x = val.data.matches[23].matches[1].away_team ;
  document.querySelector('#team147').innerHTML = x;
  var x = val.data.matches[23].matches[1].match_start_time ;
   document.querySelector('#time73').innerHTML = x;
  var x = Math.round (val.data.matches[23].matches[1].home_strength) ;
  document.querySelector('#strength146').innerHTML = x;
  var x = Math.round (val.data.matches[23].matches[1].away_strength) ;
  document.querySelector('#strength147').innerHTML = x;
   var x = val.data.matches[23].matches[1].prediction ;
  document.querySelector('#prediction73').innerHTML = x;
}
function getTeams74(val){
   var x = val.data.matches[23].matches[2].home_team ;
   document.querySelector('#team148').innerHTML = x;
   var x = val.data.matches[23].matches[2].away_team ;
  document.querySelector('#team149').innerHTML = x;
  var x = val.data.matches[23].matches[2].match_start_time ;
   document.querySelector('#time74').innerHTML = x;
  var x = Math.round (val.data.matches[23].matches[2].home_strength) ;
  document.querySelector('#strength148').innerHTML = x;
  var x = Math.round (val.data.matches[23].matches[2].away_strength) ;
  document.querySelector('#strength149').innerHTML = x;
   var x = val.data.matches[23].matches[2].prediction ;
  document.querySelector('#prediction74').innerHTML = x;
}
function getTeams75(val){
   var x = val.data.matches[23].matches[3].home_team ;
   document.querySelector('#team150').innerHTML = x;
   var x = val.data.matches[23].matches[3].away_team ;
  document.querySelector('#team151').innerHTML = x;
  var x = val.data.matches[23].matches[3].match_start_time ;
   document.querySelector('#time75').innerHTML = x;
  var x = Math.round (val.data.matches[23].matches[3].home_strength) ;
  document.querySelector('#strength150').innerHTML = x;
  var x = Math.round (val.data.matches[23].matches[3].away_strength) ;
  document.querySelector('#strength151').innerHTML = x;
   var x = val.data.matches[23].matches[3].prediction ;
  document.querySelector('#prediction75').innerHTML = x;
}
function getTeams76(val){
   var x = val.data.matches[24].matches[0].home_team ;
   document.querySelector('#team152').innerHTML = x;
   var x = val.data.matches[24].matches[0].away_team ;
  document.querySelector('#team153').innerHTML = x;
  var x = val.data.matches[24].matches[0].match_start_time ;
   document.querySelector('#time76').innerHTML = x;
  var x = Math.round (val.data.matches[24].matches[0].home_strength) ;
  document.querySelector('#strength152').innerHTML = x;
  var x = Math.round (val.data.matches[24].matches[0].away_strength) ;
  document.querySelector('#strength153').innerHTML = x;
   var x = val.data.matches[24].matches[0].prediction ;
  document.querySelector('#prediction76').innerHTML = x;
}
function getTeams77(val){
   var x = val.data.matches[25].matches[0].home_team ;
   document.querySelector('#team154').innerHTML = x;
   var x = val.data.matches[25].matches[0].away_team ;
  document.querySelector('#team155').innerHTML = x;
  var x = val.data.matches[25].matches[0].match_start_time ;
   document.querySelector('#time77').innerHTML = x;
  var x = Math.round (val.data.matches[25].matches[0].home_strength) ;
  document.querySelector('#strength154').innerHTML = x;
  var x = Math.round (val.data.matches[25].matches[0].away_strength) ;
  document.querySelector('#strength155').innerHTML = x;
   var x = val.data.matches[25].matches[0].prediction ;
  document.querySelector('#prediction77').innerHTML = x;
}
function getTeams78(val){
   var x = val.data.matches[26].matches[0].home_team ;
   document.querySelector('#team156').innerHTML = x;
   var x = val.data.matches[26].matches[0].away_team ;
  document.querySelector('#team157').innerHTML = x;
  var x = val.data.matches[26].matches[0].match_start_time ;
   document.querySelector('#time78').innerHTML = x;
  var x = Math.round (val.data.matches[26].matches[0].home_strength) ;
  document.querySelector('#strength156').innerHTML = x;
  var x = Math.round (val.data.matches[26].matches[0].away_strength) ;
  document.querySelector('#strength157').innerHTML = x;
   var x = val.data.matches[26].matches[0].prediction ;
  document.querySelector('#prediction78').innerHTML = x;
}
function getTeams79(val){
   var x = val.data.matches[27].matches[0].home_team ;
   document.querySelector('#team158').innerHTML = x;
   var x = val.data.matches[27].matches[0].away_team ;
  document.querySelector('#team159').innerHTML = x;
  var x = val.data.matches[27].matches[0].match_start_time ;
   document.querySelector('#time79').innerHTML = x;
  var x = Math.round (val.data.matches[27].matches[0].home_strength) ;
  document.querySelector('#strength158').innerHTML = x;
  var x = Math.round (val.data.matches[27].matches[0].away_strength) ;
  document.querySelector('#strength159').innerHTML = x;
   var x = val.data.matches[27].matches[0].prediction ;
  document.querySelector('#prediction79').innerHTML = x;
}
function getTeams80(val){
   var x = val.data.matches[28].matches[0].home_team ;
   document.querySelector('#team160').innerHTML = x;
   var x = val.data.matches[28].matches[0].away_team ;
  document.querySelector('#team161').innerHTML = x;
  var x = val.data.matches[28].matches[0].match_start_time ;
   document.querySelector('#time80').innerHTML = x;
  var x = Math.round (val.data.matches[28].matches[0].home_strength) ;
  document.querySelector('#strength160').innerHTML = x;
  var x = Math.round (val.data.matches[28].matches[0].away_strength) ;
  document.querySelector('#strength161').innerHTML = x;
   var x = val.data.matches[28].matches[0].prediction ;
  document.querySelector('#prediction80').innerHTML = x;
}
function getTeams81(val){
   var x = val.data.matches[28].matches[1].home_team ;
   document.querySelector('#team162').innerHTML = x;
   var x = val.data.matches[28].matches[1].away_team ;
  document.querySelector('#team163').innerHTML = x;
  var x = val.data.matches[28].matches[1].match_start_time ;
   document.querySelector('#time81').innerHTML = x;
  var x = Math.round (val.data.matches[28].matches[1].home_strength) ;
  document.querySelector('#strength162').innerHTML = x;
  var x = Math.round (val.data.matches[28].matches[1].away_strength) ;
  document.querySelector('#strength163').innerHTML = x;
   var x = val.data.matches[28].matches[1].prediction ;
  document.querySelector('#prediction81').innerHTML = x;
}