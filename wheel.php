<!DOCTYPE html>
<head>
	<meta charset="utf-8">
	<title>Games | The Wheel</title>
	<meta name="viewport"  content="width=device-width, initial-scale=1">
  <link rel="shortcut icon"    href="https://cdn-images-1.medium.com/fit/c/120/120/1*434TrD4EYMgqXR7ICIIPkQ.png" />
  <script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js?ver=1.9.1'></script>
	<link href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Exo:200" rel="stylesheet">
  <link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css?ver=4.9.8' type='text/css' media='all' />
  <link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css?ver=4.9.8' type='text/css' media='all' />
  <link rel="stylesheet/less" type="text/css" href="less/main.less?date=<?= time(); ?>" />
  <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.7.1/less.min.js" ></script>
	<script>
		var guessed = [];
		$(function() {
			var _ = {
				'clues' : ['Los+Lobos','Oingo Boingo'],
				'alphabet' : []
			};
			for (i = 65; i < 91; i++) {
      	_.alphabet.push(String.fromCharCode(i));
			}
			_['alphabet_html'] = _.alphabet.map(function(letter){
				return '<a href="javascript:vanna(\'' + letter + '\');">' + letter + '</span>';
			}).join(' ');
			_['alphabet_html'] += "<hr /><p><a href='javascript:pat();'>Reveal!</a> | <a href='javascript:unPat();'>Conceal!</a>";

			_['clue'] = _.clues[<?=(isset($_GET['clue'])) ? $_GET['clue'] : 0 ?>];
			_['clue_html'] = _['clue'].split("").map(function(letter){
				if (letter === '+') return '<span class="not-shown spacer">&nbsp;</span>';
				if (letter === ' ') return '<br />';
				return '<span class="not-shown display letter-' + letter.toUpperCase() + '">' + letter + '</span>';
			}).join(' ');

			// console.log(_);
			$('#clue').html(_.clue_html);
			$('#alphabet').html(_.alphabet_html);
		});

		function vanna(letter){
			console.log('function');
			$('#clue').children().map(function(i){
				setTimeout(function(){
					thisLetter = $('#clue').children().eq(i).html().toUpperCase();
					console.log(thisLetter + '===' + letter);
					if (thisLetter === letter){
						console.log('we are a go!');
						$('#clue').children().eq(i).removeClass('not-shown').addClass('shown');

					}
				},i*200);
			});
			window.guessed.push(letter);
			$('#guessed').html(guessed.join(', '));
		}

		function pat(){
				$('#clue').children().map(function(i){
					setTimeout(function(){
						thisOne = $('#clue').children().eq(i);
						isLetter = !thisOne.hasClass('spacer');
						if(isLetter){
							// console.log(i);
							// console.log(thisOne.html());
							thisOne.removeClass('not-shown').addClass('shown');
							console.log(isLetter);
						}
					},i*200);
				});
		}

		function unPat(){
			$('.display').removeClass('shown').addClass('not-shown');
		}

	</script>
</head>
<body id="wheel">
	<div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">The Wheel!</h1>
    </div>
  </div>
  <div class="container">
		<div class="row">
      <div class="col-xs-9" id="clue"></div>
			<div class="col-xs-3">
				<p id="alphabet"></p>
				<hr />
				<p id="guessed"></p>
			</div>
    </div>
	</div>
</body>
</html>
