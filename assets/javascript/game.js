$(document).ready(function(){

	var fred ={
		health: 120,
		counterAttack: 8,
		attack: 8,
	};
	var sam={
		health: 100,
		counterAttack: 10,
		attack: 10,
	};
	var timmy={
		health:150,
		counterAttack: 6,
		attack: 6,
	};
	var jeff={
		health: 180,
		counterAttack: 4,
		attack: 4,
	};
	var fighterSelected = false;
	var fighter;
	var challenger;
	var challengersLeft = 3;
	var challengerSelected = false;

	function reset(){
		fighterSelected =false;
		challengerSelected=false;
		challengersLeft =3;

		$('#tutorial').html("choose your Fighter");
		$('#fightDetails').empty();
		$('.selectFighter').empty();
		$('.challenger').empty();
		$('.myFighter').empty();
		$('.selectFighter').append('<div class"col-md 2 fred"></div>');
		$('.selectFighter').append('<div class"col-md 2 sam"></div>');
		$('.selectFighter').append('<div class"col-md 2 timmy"></div>');
		$('.selectFighter').append('<div class"col-md 2 jeff"></div>');
		fred.health=120;
		sam.health=100;
		timmy.health=150;
		jeff.health=180;
		fred.counterAttack=8;
		sam.counterAttack=10;
		timmy.counterAttack=6;
		jeff.counterAttack=4;
		fighterStats();
		clicks();	
	}

	//onclick functions

	function clicks() {
		$('.fred').on('click', function(){
			if (fighterSelected ===false) {
				$('.myFighter').append(this);
				fighterSelected = true;
				fighter = fred;
				$(this).attr("id", "fighter");
				$('#tutorial').html("Pick your challenger");

			}
			else if (fighterSelected === true && challengerSelected === false){
				challengerSelected=true;
				$('.challenger').append(this);
				$('#tutorial').html("FIGHT!");
				challenger =fred;
				$(this).attr("id","challenger");
			}
			else {
				alert("A true warrior finishes his target before moving to the next.");
			}
		});
		$('.sam').on('click', function(){
			if (fighterSelected === false) {
				$('.myFighter').append(this);
				fighterSelected=true;
				fighter= sam;
				$(this).attr("id", "fighter");
				$('#tutorial').html("Pick your challenger");

			}
			else if (fighterSelected === true && challengerSelected === false){
				challengerSelected=true;
				$('.challenger').append(this);
				$('#tutorial').html("FIGHT");
				challenger=sam;
				$(this).attr("id", "challenger");
			}
			else{
				alert("A true warrior finishes his target before moving to the next.");
			}
		});
		$('.timmy').on('click', function(){
			if (fighterSelected === false) {
				$('.myFighter').append(this);
				fighterSelected=true;
				fighter= timmy;
				$(this).attr("id", "fighter");
				$('#tutorial').html("Pick your challenger");

			}
			else if (fighterSelected === true && challengerSelected === false){
				challengerSelected=true;
				$('.challenger').append(this);
				$('#tutorial').html("FIGHT");
				challenger=timmy;
				$(this).attr("id", "challenger");
			}
			else{
				alert("A true warrior finishes his target before moving to the next.");
			}
		});
		$('.jeff').on('click', function(){
			if (fighterSelected === false) {
				$('.myFighter').append(this);
				fighterSelected=true;
				fighter= jeff;
				$(this).attr("id", "fighter");
				$('#tutorial').html("Pick your challenger");

			}
			else if (fighterSelected === true && challengerSelected === false){
				challengerSelected=true;
				$('.challenger').append(this);
				$('#tutorial').html("FIGHT");
				challenger=jeff;
				$(this).attr("id", "challenger");
			}
			else{
				alert("A true warrior finishes his target before moving to the next.");
			}
		});
	}

	clicks();

	function fighterStats() {
		$('.fred').html("<p>fred</p>"+ "<p>health: "+ fred.health +"</p>");
		$('.sam').html("<p>fred</p>"+ "<p>health: "+ sam.health +"</p>");
		$('.timmy').html("<p>fred</p>"+ "<p>health: "+ timmy.health +"</p>");
		$('.jeff').html("<p>fred</p>"+ "<p>health: "+ jeff.health +"</p>");

	}

	fighterStats();

	//onclick for fight
	$("#attackChallenger").on('click', function(){
		if (challengerSelected === true) {
			fighter.counterAttack += fighter.attack;
			challenger.health = challenger.health - fighter.counterAttack;
			fighter.health = fighter.health - challenger.counterAttack;

		}
	})

	//Display fight stats
	if (challenger === fred && challengerSelected === true){
		$('#fightDetails').html("<p>You attacked fred for" + fighter.counterAttack +"HP</p>"+"<p> fred attacked you for " + challenger.counterAttack +"HP</p>"); 
	} 
	else if (challenger === sam && challengerSelected === true){
		$('#fightDetails').html("<p>You attacked sam for" + fighter.counterAttack + "HP</p>"+"<p> sam attacked you for " + challenger.counterAttack +"HP</p>");
	}
	else if (challenger === timmy && challengerSelected === true){
		$('#fightDetails').html("<p>You attacked timmy for" + fighter.counterAttack + "HP</p>"+"<p> timmy attacked you for " + challenger.counterAttack +"HP</p>");
	}
	else if (challenger === jeff && challengerSelected === true){
		$('#fightDetails').html("<p>You attacked jeff for" + fighter.counterAttack + "HP</p>"+"<p> jeff attacked you for " + challenger.counterAttack +"HP</p>");
	}
	else{
		$("#fightDetails").html("<p>choose your next challenger to continue</p>");
	}

	if (fighter.health <= 0 && challenger.health >0){
		$("#fightDetails").html("<p>you have died. Begin again.</p>");
		alert("you have died. Begin again.");
		reset();
	}

	if (fighter.health <= 0 && challenger.health <= 0) {
		$("#fightDetail").html("<p> you have died. BEgin again</p>");
		alert("you have tie died. Begin again.</p>");
		reset();
	}
	









})