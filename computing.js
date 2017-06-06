document.getElementById('less_details').style.display = "none";
var know = 0;

var data = {};
var teams = ['DD','GL','KKR','KXIP','MI','RCB','RPS','SRH'];
var lower_teams = ['dd','gl','kkr','kxip','mi','rcb','rps','srh'];
 var i=0;
// For RCB data
      			$.getJSON("json/"+teams[0]+".json", function(json) {
		    data[teams[0]] = json;
		    console.log(teams[i]);
		    var add = document.getElementById('data'+teams[0]);
		    add.innerHTML = '';
		    for (var i = 0; i < data[teams[0]].length; i++) {
		    	add.innerHTML += '<tr><td class="mdl-data-table__cell--non-numeric">'+data[teams[0]][i].name+'</td><td>'+data[teams[0]][i].bat.toFixed(2)+'</td><td>'+data[teams[0]][i].ball.toFixed(2)+'</td></tr>';
		    }
		});

				$.getJSON("json/"+teams[1]+".json", function(json) {
		    data[teams[1]] = json;
		    console.log(teams[i]);
		    var add = document.getElementById('data'+teams[1]);
		    add.innerHTML = '';
		    for (var i = 0; i < data[teams[1]].length; i++) {
		    	add.innerHTML += '<tr><td class="mdl-data-table__cell--non-numeric">'+data[teams[1]][i].name+'</td><td>'+data[teams[1]][i].bat.toFixed(2)+'</td><td>'+data[teams[1]][i].ball.toFixed(2)+'</td></tr>';
		    }
		});

				$.getJSON("json/"+teams[2]+".json", function(json) {
		    data[teams[2]] = json;
		    console.log(teams[i]);
		    var add = document.getElementById('data'+teams[2]);
		    add.innerHTML = '';
		    for (var i = 0; i < data[teams[2]].length; i++) {
		    	add.innerHTML += '<tr><td class="mdl-data-table__cell--non-numeric">'+data[teams[2]][i].name+'</td><td>'+data[teams[2]][i].bat.toFixed(2)+'</td><td>'+data[teams[2]][i].ball.toFixed(2)+'</td></tr>';
		    }
		});

				$.getJSON("json/"+teams[3]+".json", function(json) {
		    data[teams[3]] = json;
		    console.log(teams[i]);
		    var add = document.getElementById('data'+teams[3]);
		    add.innerHTML = '';
		    for (var i = 0; i < data[teams[3]].length; i++) {
		    	add.innerHTML += '<tr><td class="mdl-data-table__cell--non-numeric">'+data[teams[3]][i].name+'</td><td>'+data[teams[3]][i].bat.toFixed(2)+'</td><td>'+data[teams[3]][i].ball.toFixed(2)+'</td></tr>';
		    }
		});

				$.getJSON("json/"+teams[4]+".json", function(json) {
		    data[teams[4]] = json;
		    console.log(teams[i]);
		    var add = document.getElementById('data'+teams[4]);
		    add.innerHTML = '';
		    for (var i = 0; i < data[teams[4]].length; i++) {
		    	add.innerHTML += '<tr><td class="mdl-data-table__cell--non-numeric">'+data[teams[4]][i].name+'</td><td>'+data[teams[4]][i].bat.toFixed(2)+'</td><td>'+data[teams[4]][i].ball.toFixed(2)+'</td></tr>';
		    }
		});

				$.getJSON("json/"+teams[5]+".json", function(json) {
		    data[teams[5]] = json;
		    console.log(teams[i]);
		    var add = document.getElementById('data'+teams[5]);
		    add.innerHTML = '';
		    for (var i = 0; i < data[teams[5]].length; i++) {
		    	add.innerHTML += '<tr><td class="mdl-data-table__cell--non-numeric">'+data[teams[5]][i].name+'</td><td>'+data[teams[5]][i].bat.toFixed(2)+'</td><td>'+data[teams[5]][i].ball.toFixed(2)+'</td></tr>';
		    }
		});

				$.getJSON("json/"+teams[6]+".json", function(json) {
		    data[teams[6]] = json;
		    console.log(teams[i]);
		    var add = document.getElementById('data'+teams[6]);
		    add.innerHTML = '';
		    for (var i = 0; i < data[teams[6]].length; i++) {
		    	add.innerHTML += '<tr><td class="mdl-data-table__cell--non-numeric">'+data[teams[6]][i].name+'</td><td>'+data[teams[6]][i].bat.toFixed(2)+'</td><td>'+data[teams[6]][i].ball.toFixed(2)+'</td></tr>';
		    }
		});

				$.getJSON("json/"+teams[7]+".json", function(json) {
		    data[teams[7]] = json;
		    console.log(teams[i]);
		    var add = document.getElementById('data'+teams[7]);
		    add.innerHTML = '';
		    for (var i = 0; i < data[teams[7]].length; i++) {
		    	add.innerHTML += '<tr><td class="mdl-data-table__cell--non-numeric">'+data[teams[7]][i].name+'</td><td>'+data[teams[7]][i].bat.toFixed(2)+'</td><td>'+data[teams[7]][i].ball.toFixed(2)+'</td></tr>';
		    }
		});


function show_form_team1() {
	var team = document.getElementById('team1').value;
	console.log(team);
	var add_team1 = document.getElementById('team1_form');
    add_team1.innerHTML = '';
    var koun = data[team]; var ceck='';
    for (var i = 0; i < koun.length; i++) {
    	batid = 'batok'+(i+1).toString();
    	poorid = 'poorok' + (i+1).toString();
    	normalid = 'normalok' + (i+1).toString();
    	goodid = 'goodok' + (i+1).toString();
    	name = 't1'+(i+1).toString();
    	if (i<6 || i>9) {
    		ceck = "checked";
    	}else{
    		ceck = '';
    	}
    	add_team1.innerHTML += '<tr><td class="mdl-data-table__cell--non-numeric"><input type="checkbox" '+ceck+' id="'+ batid +'" name="'+batid+'" value="batsman">'+koun[i].name +'</td><td><div id="team1_'+team+'"> <input type="radio" name="'+name+'" id="'+poorid+'" value="poor">Poor <input type="radio"  id="'+normalid+ '" name="'+name+'" value="normal">Normal <input type="radio" id="'+  goodid+'" name="'+name+'" value="good">Good</div></td></tr>';
    }
}
function show_form_team2() {
	var team = document.getElementById('team2').value;
	var add_team2 = document.getElementById('team2_form');
    add_team2.innerHTML = '';
    var koun = data[team];var ceck = '';
    for (var i = 0; i < koun.length; i++) {
    	batid = 'bat'+(i+1).toString();
    	poorid = 'poor' + (i+1).toString();
    	normalid = 'normal' + (i+1).toString();
    	goodid = 'good' + (i+1).toString();
    	name = 't2'+(i+1).toString();
    	if (i<6 || i>9) {
    		ceck = "checked";
    	}else{
    		ceck = '';
    	}
    	add_team2.innerHTML += '<tr><td class="mdl-data-table__cell--non-numeric"> <input type="checkbox" '+ceck+' id="'+ batid +'" name="'+batid+'" value="batsman">'+koun[i].name+'</td><td><div id="team2_'+team+'"> <input type="radio" name="'+name+'" id="'+poorid+'" value="poor">Poor <input type="radio" id="'+normalid+ '" name="'+name+'" value="normal">Normal <input type="radio" id="'+  goodid+'" name="'+name+'" value="good">Good</div></td></tr>';
    }
}

setTimeout(function(){ 

	// alert('Data has been successfully retrieved');
	show_form_team1();
	show_form_team2();
	teamscores();
	 }, 100);

var team_score = {};
var bat_score = {};
var ball_score = {};
function teamscores(){
	for (var i = 0; i < teams.length; i++) {
		var batscore = 0;
		var ballscore = 0;
		for (var j = 0; j < data[teams[i]].length; j++) {
			batscore += data[teams[i]][j]['bat'];
			ballscore += data[teams[i]][j]['ball'];
		}
		totalscore = ballscore + batscore;
		totalscore = totalscore.toFixed(2);
		batscore = batscore.toFixed(2);
		ballscore = ballscore.toFixed(2);
		team_score[teams[i]] = [batscore,ballscore,totalscore];
		console.log(lower_teams[i]);
		document.getElementById(lower_teams[i] +'score').innerHTML = totalscore ;
	}
}
function execute() {
        var comp1 = document.getElementById('team1').value;
        var comp2 = document.getElementById('team2').value;
        
        if (know == 1) {
        var tosskoun = [0,0];var batkoun = [0,0];var homekoun = [0,0];
        if (document.getElementById('itoss1').checked == true) {
        	
        	tosskoun[0] = 1;
        } else{
        	tosskoun[1] = 1;
        }
        if (document.getElementById('ibat1').checked == true) {
        	batkoun[0] = 1;
        } else{
        	batkoun[1] = 1;
        }
        if (document.getElementById('ihome1').checked == true) {
        	homekoun[0] = 1;
        } else if(document.getElementById('ihome2').checked == true){
        	homekoun[1] = 1;
        }
        var team1players = [];var team1form = [];
        var team2players = [];var team2form = [];
        for (var i = 0; i < 15; i++) {
        	team1players[i] = 0;
        	team2players[i] = 0;
        	team1form[i] = 2;
        	team2form[i] = 2;
        	var batid = 'batok'+(i+1).toString();
	    	var poorid = 'poorok' + (i+1).toString();
	    	var normalid = 'normalok' + (i+1).toString();
	    	var goodid = 'goodok' + (i+1).toString();
	    	if (document.getElementById(batid).checked == true) {
	    		team1players[i] = 1;
	    	}
			if (document.getElementById(poorid).checked == true) {
				    		team1form[i] = 1;
				    	}
			if (document.getElementById(normalid).checked == true) {
				    		team1form[i] = 2;
				    	}
			if (document.getElementById(goodid).checked == true) {
				    		team1form[i] = 3;
				    	}
			var tbatid = 'bat'+(i+1).toString();
	    	var tpoorid = 'poor' + (i+1).toString();
	    	var tnormalid = 'normal' + (i+1).toString();
	    	var tgoodid = 'good' + (i+1).toString();
	    	if (document.getElementById(tbatid).checked == true) {
	    		team2players[i] = 1;
	    	}
			if (document.getElementById(tpoorid).checked == true) {
				    		team2form[i] = 1;
				    	}
			if (document.getElementById(tnormalid).checked == true) {
				    		team2form[i] = 2;
				    	}
			if (document.getElementById(tgoodid).checked == true) {
				    		team2form[i] = 3;
				    	}
        }
        var score1value = [0,0];
        var score2value = [0,0];
        count1 = 0; count2= 0;
        for (var i = 0; i < 15; i++) {
        	if (team1players[i] == 1 ) {
        		++count1;
        		var imp = 1;
        		if (team1form[i] == 1) {imp = 0.7};
        		if (team1form[i] == 3) {imp = 1.3};
        		score1value[0] += data[comp1][i]['bat'] * imp;
        		score1value[1] += data[comp1][i]['ball'] * imp;
        	}
        	if (team2players[i] == 1 ) {
        		++count2;
        		var imp = 1;
        		if (team2form[i] == 1) {imp = 0.7};
        		if (team2form[i] == 3) {imp = 1.3};
        		score2value[0] += data[comp2][i]['bat'] * imp;
        		score2value[1] += data[comp2][i]['ball'] * imp;
        	}
        	

        }
        console.log(score1value[0]);
        console.log(score2value[0]);
        console.log(score1value[1]);
        console.log(score2value[1]);
        if (count1 < 11 || count2 < 11) {
        	alert('Enter all the details');
        	return 0;
        }
        if (homekoun[0] == 1) {
        		score1value[0] = score1value[0] * 1.05;
        		score1value[1] = score1value[1] * 1.05;
        		score2value[0] = score2value[0] / 1.05;
        		score2value[1] = score2value[1] / 1.05;
        	}else if (homekoun[1] == 1) {
        		score1value[0] = score1value[0] / 1.05;
        		score1value[1] = score1value[1] / 1.05;
        		score2value[0] = score2value[0] * 1.05;
        		score2value[1] = score2value[1] * 1.05;
        	}
        	if (document.getElementById('itoss1').checked ==true) {
        		if(document.getElementById('ibat1').checked == true){
        			var mul = 1.20/1.25;
        		}else if(document.getElementById('ibat2').checked == true){
        			var mul = 1.3/1.25;
        		}
        	}
        	if (document.getElementById('itoss2').checked ==true) {
        		if(document.getElementById('ibat1').checked == true){
        			var mul = 1.25/1.30;
        		}else if(document.getElementById('ibat2').checked == true){
        			var mul = 1.25/1.20;
        		}
        	}
        	var value1 = score1value[0]/score2value[1]; value1 *= mul;
        	var value2 = score2value[0]/score1value[1]; value2 /= mul;
        }
else{
		console.log()
        var value1 = team_score[comp1][0]/team_score[comp2][1];

        var value2 = team_score[comp2][0]/team_score[comp1][1];
}
        if (value1 > value2) {
        	document.getElementById('prediction').innerHTML = '<h3>Team <b>' + comp1 + '</b> is going to win.</h3>';
        } else if(value2 > value1){
        	document.getElementById('prediction').innerHTML = '<h3>Team <b>' + comp2 + ' </b> is going to win.</h3>';
        }else{
        	document.getElementById('prediction').innerHTML = "<h3>It's most probably a tie.</h3>";
        }
        
        var c1 = value1*100/(value1 + value2);
        var c2 = 100-c1;
        c1 = c1.toFixed(2);
        c2 = c2.toFixed(2);
        var x1 = c1.toString();
        var x2 = c2.toString();
        console.log(x1);
        console.log(c1);
        
        document.getElementById('chancetext1').innerHTML ="Chances of " + comp1 + " winning are ";
        document.getElementById('chance1').innerHTML =c1;
        document.getElementById('chancetext2').innerHTML = "Chances of " + comp2 + " winning are ";
        document.getElementById('chance2').innerHTML = c2;
        document.getElementById('prediction').style.display = "initial";
        document.getElementById('chance1').style.display = "initial";
        document.getElementById('chance2').style.display = "initial";
        document.getElementById('lala').style.display = "initial";
        document.getElementById('lalala').style.display = "initial";

      }
function update() {
	show_form_team1();
	show_form_team2();
}
function dead() {
        document.getElementById('prediction').style.display = "none";
        document.getElementById('chance1').style.display = "none";
        document.getElementById('chance2').style.display = "none";
      }
      
      function more(){
      	update();
      	document.getElementById('moredetails').style.display = "initial";
      	document.getElementById('less_details').style.display = "initial";
      	document.getElementById('tobaho').style.display = "initial";
      	document.getElementById('more_details').style.display = "none";
      	know = 1;
      }
      function less(){
      	document.getElementById('moredetails').style.display = "none";
      	document.getElementById('less_details').style.display = "none";
      	document.getElementById('tobaho').style.display = "none";
      	document.getElementById('more_details').style.display = "initial";
      	know = 0;
      }
      less();

$("#team1 option").click(function(){
	alert('Machaya Be');
	show_form_team1();
});
$("#team2 option").click(function(){
	show_form_team2();
});