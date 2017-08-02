$(function(){

  x = 0;
  win = 0;
  los = 0;
 
 
 count = 0;

   

  //shuffle
 Array.prototype.shuffle = function (){
 var i =this.length;
  while (i) {
     var j = Math.floor(Math.random()*i);
     var n = this[--i];
      this[i] = this[j];
      this[j] = n
  }
 // return this
     }

  y = [0,1,2,3,4,5,6,7];
 


$(".btn").prop("disabled",true); 
//普通をセレクト
/*
$("#nomal").on("click",function(){
Img = ['★','★','〇','〇','◆','◆','△','△'];
       
      
      
})
*/
//エジプトをセレクト

  
 //スタートボタン
 //case文に変更予定0
 $("#start").on("click",function(){
sn = $('#select').val();//選択肢の値
if (sn == 0)   {
  Img = ["img/mark_03.gif","img/mark_03.gif","img/mark_05.gif","img/mark_05.gif","img/mark_10.gif","img/mark_10.gif","img/mark_14.gif","img/mark_14.gif"];
y.shuffle();
}else if(sn == 1){
Img = ["img/july02_a07.png","img/july02_a07.png","img/july02_a16.png","img/july02_a16.png","img/july02_a18.png","img/july02_a18.png","img/july02_a27.png","img/july02_a27.png"];
}else if(sn == 2){
 Img = ["img/490.png","img/490.png","img/492.png","img/492.png","img/494.png","img/494.png","img/496.png","img/496.png"];
y.shuffle();

} else {
  Img = ["img/123.png","img/123.png","img/125.png","img/125.png","img/127.png","img/127.png","img/129.png","img/129.png"];
y.shuffle();
}
console.log(sn,Img);
$("#select").prop("disabled",true);
$("#start").replaceWith("<button type=reset id=reset class=nb>リセット");
$(".btn").prop("disabled",false); 
$("h2").html("どうかな？");
  

})
 

 $(".btn").on("click",function(){
     
   ++count;
console.log(y);
   if (count %2 !== 0) {
  //カウントが奇数

    $(this).replaceWith("<img src="+Img[y[x]]+">");
    a = Img[y[x]];
    
x++;


 
   } else {
    //カウントが偶数 
    $(this).replaceWith("<img src="+Img[y[x]]+">");
    b = Img[y[x]];
    
x++;

  if (a === b) {
                   $("h2").html("やったね‼");
                    win++
  } else {
                  $("h2").html("残念");
                    los++
  }
   }     
   
   $("p#win").html("正解："+win);
   $("p#los").html("ミス："+los);
  
//リセットボタン
$("#reset").on("click",function(){
  location.reload(true);
  //window.location.reload();
  //location.reload();
})
 })

})