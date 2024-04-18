window.addEventListener("load", function(){
	let video=document.getElementById("main_video");
	video.addEventListener("loadeddata", function(){
		video.muted=true;
		video.play();
	});

	video.addEventListener("ended", function(){
		video.play();
	});
});