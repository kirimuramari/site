
img = ["img/gu2.png","img/kyoki2.png","img/pa2.png"];

hantei = ["img/kati_MS.png","img/make_MS.png","img/aiko_MS.png"];


function random() {
	i = Math.random() * img.length;
mayVal = Math.floor(i);
}


/*
*/
function gu(){

	random();
 document.getElementById("0")
	
	document.top.src = img[mayVal];
	

		if ( mayVal == 1){//勝ち判定
			
			document.kekka.src = hantei[0];
			 }else if ( mayVal == 2){//負け判定
				 document.kekka.src = hantei[1];//あいこ判定
				 }else{
					 document.kekka.src = hantei[2];
					 }
			
		/*console.log(mayVal);
		console.log(kekka);*/
	}

function kyoki(){
	/*i = Math.random() * img.length;
	mayVal = Math.floor(i);
	*/
	random();
 document.getElementById("1")
	
	document.top.src = img[mayVal];
	
		if ( mayVal == 2){//勝ち判定
			
			document.kekka.src = hantei[0];
			 }else if ( mayVal == 0){//負け判定
				 document.kekka.src = hantei[1];//あいこ判定
				 }else{
					 document.kekka.src = hantei[2];
					 }

	//console.log(mayVal);
	}
	
function pa(){
	/*i = Math.random() * img.length;
	mayVal = Math.floor(i);
	*/
	random();
 document.getElementById("2")
	
	document.top.src = img[mayVal];
	
		if ( mayVal == 0){//勝ち判定
			
			document.kekka.src = hantei[0];
			 }else if ( mayVal == 1){//負け判定
				 document.kekka.src = hantei[1];//あいこ判定
				 }else{
					 document.kekka.src = hantei[2];
					 }

}

	