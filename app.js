var sqlite3 = require('sqlite3').verbose(),
	db 		= new sqlite3.Database('sms.db');

console.log(db);

var words 	= [],
	ngrams 	= [],
	textsCount= 0,
	wordCount = 0;

db.serialize(function() {

	db.each("SELECT message.text FROM message WHERE message.is_from_me=1", function(err, row) {
		textsCount++;
		if (row.text!=null){
			var wordsInText = row.text.split(" ");
			for(var i=0; i<wordsInText.length; i++){
				var word = wordsInText[i].toLowerCase();
				wordCount++;
				word = word.replace(",","");
				word = word.replace(".","");
				
				if (words[word]){
					words[word]++;
				} else {
					words[word]=1;
				}
			}
			
			var ngramsInText = row.text.ngram(2);
			for(var i=0; i<ngramsInText.length; i++){
				var ngram = ngramsInText[i];
				if (ngrams[ngram]){
					ngrams[ngram]++;
				} else {
					ngrams[ngram]=1;
				}
			}
		}
	}, function(){
		var fs = require('fs');
		var filename = "data.json";
		var newWords = getTop10(words);
		var newNgrams = getTop10(ngrams);
		
		fs.writeFile("data.json","var data="+JSON.stringify([newWords,newNgrams,textsCount,wordCount]),function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log("success");
			}
		});
	});
});
String.prototype.ngram = function(length){
	var ar = this.split(" ");
	if( ar.length - (length - 1) < 0 ){
		return [];
	}
	var bcount=ar.length - length - 1;
	var b = [];
	for( var i = 0; i < bcount; i++ ){
		b[i] = "";
		for( var i2 = 0; i2 < length; i2++ ){
			b[i] += ar[i + i2];
			if( i2 + 1 < length )
				b[i] += " "
		}
	}
	return b;
}
function getTop10(old){
	var newArr = [];
	for( var i in old ){
		newArr.push( [i, old[i]] )
	}
	newArr.sort( function(a, b ){
		return a[1]-b[1]; 
	});
	return newArr.reverse().splice(0,10);
}