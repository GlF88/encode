$(document).ready(function () {
	$('#wrapper').html('<div class="category" id="coder">шифратор</div> <div class="category" id="deCoder">дешифратор</div><div id="shellTextarea"><textarea class="textArr" id="text" placeholder="текст"> </textarea><textarea class="textArr" id="code" placeholder="шифр"></textarea></div><div class="btn" id="btnCode"> зашифровать </div><div class="btn" id="btndeCode"> дешифровать </div>');


var latin = ["а", "б", "в", "г", "д", "е", 
			"ё", "ж", "з", "и", "й", "к", "л",  
			"м", "н", "о", "п", "р", "с", "т", 
			"у", "ф", "х", "ц", "ч", "ш","щ","ъ",
			"ы","ь","э","ю","я",".",",","?"," ",
			"1","2","3","4","5","6","7","8","9","0",
			"А", "Б", "В", "Г", "Д", "Е", 
			"Ё", "Ж", "З", "И", "Й", "К", "Л",  
			"М", "Н", "О", "П", "Р", "С", "Т", 
			"У", "Ф", "Х", "Ц", "Ч", "Ш","Щ","Ъ",
			"Ы","Ь","Э","Ю","Я", "a", "b", "c", "d", "e", "f", 
			"g", "h", "i", "j", "k", "l", "m",  
			"n", "o", "p", "q", "r", "s", "t", 
			"u", "v", "w", "x", "y", "z","/",":",
			"A", "B", "C", "D", "E", "F", 
			"G", "H", "I", "J", "K", "L", "M",  
			"N", "O", "P", "Q", "R", "S", "T", 
			"U", "V", "W", "X", "Y", "Z"];

var code = ["$", ")", "!", "'", ">", "=", 
			"%", "(", "`", "]", "<", "-", "♂", 
			"^", "}", "/", "_", "@", "♀", "☻", 
			"*", "&", "☭", "?", "+", "☯","☓","☑",
			"☏","☎","q","n","i","m","w","g","|",
			"➲","↓","✽","✿","❂","❆","♓","♋","❇","❅",
			"Á", "Æ", "Ç", "È", "✐", "✑", 
			"✒", "✖", "✗", "✪", "✫", "✬", "✯",  
			"✰", "✍", "✆", "✄", "✂", "❥", "❍", 
			"❒", "™", "‰", "†", "‡", "…","ω","ψ",
			"σ","ς","θ","η","ζ","♔", "♕", "♖", "♗", "♘", "♙", 
			"♚", "♛", "♜", "♝", "♞", "♟", "☍",  
			"☌", "☋", "☊", "☾", "☽", "☷", "☶", 
			"☵", "☴", "☳", "☲", "☱", "☰","⁾","⁻",
			"├", "¼", "½", "¬", "⌐", "¿", 
			"Ñ", "ñ", "₧", "¥", "£", "¢", "ÿ",  
			"€", "■", "√", "இ", "〄", "☠", "Џ", 
			"Գ", "☄", "ッ", "█", "∞", "∑"];	


$("#btnCode").click(function(){
	$('#code').empty();
	var textArea = $("#text").val(); 
	var newArr = []; 
	for(var i = 0; i <= textArea.length; i++){ 
		for (var j = 0; j <= latin.length; j++){ 
			if(textArea.charAt(i) == latin[j]){ 
				var endText = latin.indexOf(latin[j]); 
				newArr.push(endText); 
			}
		}
	}
		 for(var l = 0; l <= newArr.length; l++){
		 	$("#code").append(code[newArr[l]]); 
		 };

});

$("#btndeCode").click(function(){
	$('#text').empty();
	var textArea = $("#code").val(); 
	var newArr = []; 
	for(var i = 0; i <= textArea.length; i++){ 
		for (var j = 0; j <= code.length; j++){ 
			if(textArea.charAt(i) == code[j]){ 
				var endText = code.indexOf(code[j]); 
				newArr.push(endText); 
			}
		}
	}
		 for(var l = 0; l <= newArr.length; l++){
		 	$("#text").append(latin[newArr[l]]); 
		 };

});

$("#coder").click(function(){
	$(".textArr").remove();
	activeCoder ();
	$("#btndeCode").animate({opacity: 0}, 1);
	$("#btnCode").animate({opacity: 1}, 1);
	$("#shellTextarea").append('<textarea class="textArr" id="text" placeholder="текст"></textarea> <textarea class="textArr" id="code" placeholder="шифр"></textarea>');
})

$("#deCoder").click(function(){
	$(".textArr").remove();
	activeDecoder ();
	$("#btnCode").animate({opacity: 0}, 1);
	$("#btndeCode").animate({opacity: 1}, 1);
	$("#shellTextarea").append('<textarea class="textArr" id="code" placeholder="шифр"></textarea> <textarea class="textArr" id="text" placeholder="текст"></textarea>');
})

function activeCoder (){
	$("#coder").css({background: "#eee"});
	$("#deCoder").css({background: "none"});
}
function activeDecoder (){
	$("#deCoder").css({background: "#eee"});
	$("#coder").css({background: "none"});
}

});