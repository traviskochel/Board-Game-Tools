
$(document).ready(function(){
	
	// card balance
	var total_cards = 60;
	var color_percent = .75;
	
	
	// colors
	var colors = new Array();
	colors[0] = 'Red';
	colors[1] = 'Green';
	colors[2] = 'Blue';
	colors[3] = 'Yellow';
	
	var colors_size = colors.length;
	
	
	// card names
	var specials = new Array();
	specials[0] = 'Move Anywhere';
	specials[1] = 'Bankrupt Opponent';
	specials[2] = 'Double Pay Marker';
	specials[3] = 'Lose One Turn';
	specials[4] = 'Lose 5 Resources';
	
	var specials_size = specials.length;
	
	
	// final deck 
	var total_color_cards = total_cards * color_percent;
	
	var cards = new Array();
	
	i = 0;
	x = 0;
	
	while (i < total_color_cards) {
		if (x >= colors_size ) {
			x = 0;
		}
	
		cards[i] = colors[x];
		
		i++;
		x++;
	}	
	
	x = 0;
	while (i < total_cards) {
		if (x >= specials_size ) {
			x = 0;
		}
	
		cards[i] = specials[x];
		
		i++;
		x++;
	}
	
	
	// target divs
	var parent_div = $('#rand-card');
	var results_div = $(parent_div).find('.result');
	var count_div = $(parent_div).find('.card-count');
	
	
	// calculate totals
	
	var total_each_color = Math.round(total_color_cards / colors_size);
	

	// show totals
	$(count_div).find('.total-card-count .total').html(total_cards);
	$(count_div).find('.color-card-count .total').html(total_each_color);
	
	


	$("#rand-card .submit").click(function() {
		
		var num_cards = $('#num-cards').val() - 1;
		var output = '';
		
		i = 0;
		while (i <= num_cards) {
			//pick random number
			var rand_number = Math.floor((Math.random()*total_cards));
			var rand_card = cards[rand_number];
			
			// add div 
			output +=  '<div class=" grid_4 card alpha"><div class="result">'+ rand_card +'</div></div>';
			
			i++;
		}
		
		$('#rand-card .results-target').html(output);
	  	
	  	
	  	return false;
	  	
	});



});


