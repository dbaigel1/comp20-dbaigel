function init() {
	var img = new Image();
	var duck1 = new Image();
	var duck2 = new Image();

    var canvas=document.getElementById("game_canvas");
    var ctx=canvas.getContext("2d");
    //img=document.getElementById("game_canvas");
    img.src = "duckhunt-background.gif";
    duck1.src = "duckhunt_various_sheet.png";
    duck2.src = "duckhunt_various_sheet.png";
    img.onload = function(){
    	ctx.drawImage(img, 0, 0);
    	//375 x 267
    	ctx.drawImage(duck1, 125, 110, 40, 40, 130, 30, 50, 50);
        ctx.drawImage(duck2, 35, 110, 40, 40, 70, 50, 50, 50);

    }
}
