
img = ["img/f36f67df_12.png","img/f36f67df_13.png","img/f36f67df_14.png"];

hantei = ["img/f36f67df_04.png","img/f36f67df_05.png","img/f36f67df_06.png"];


function random() {
	i = Math.random() * img.length;
mayVal = Math.floor(i);
}


/*
*/
function gu(){
	/*i = Math.random() * img.length;
	mayVal = Math.floor(i);
	*/
	random();
 document.getElementById("0")
	
	document.top.src = img[mayVal];
	

		if ( mayVal == 1){//勝ち判定
			
			document.title.src = hantei[2];
			 }else if ( mayVal == 2){//負け判定
				 document.title.src = hantei[0];//あいこ判定
				 }else{
					 document.title.src = hantei[1];
					 }
			
		
	}

function kyoki(){
	/*i = Math.random() * img.length;
	mayVal = Math.floor(i);
	*/
	random();
 document.getElementById("1")
	
	document.top.src = img[mayVal];
	
		if ( mayVal == 2){//勝ち判定
			
			document.title.src = hantei[2];
			 }else if ( mayVal == 0){//負け判定
				 document.title.src = hantei[0];//あいこ判定
				 }else{
					 document.title.src = hantei[1];
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
			
			document.title.src = hantei[2];
			 }else if ( mayVal == 1){//負け判定
				 document.title.src = hantei[0];//あいこ判定
				 }else{
					 document.title.src = hantei[1];
					 }

//	console.log(mayVal);
	
	}

