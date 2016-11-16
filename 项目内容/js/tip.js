// tip的6块复制
var gl=document.getElementById('gl');
var li0=gl.getElementsByTagName('li')[0];
for (var i = 0; i < 5; i++) {
	var newli=document.createElement('li');
	newli.innerHTML=li0.innerHTML;
	gl.appendChild(newli);
};

// 头像添加超链接
var bg=document.getElementById('tip_bg');
var tags=bg.all?bg.all:bg.getElementsByTagName('*');
for (var i = 0; i < 2; i++) {
	tags[i].onclick=function  () {
		window.open('atlas1.html','_blank');
	}
};