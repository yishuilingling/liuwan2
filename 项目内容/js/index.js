// 大图滚动复制四张图片
var inner1=document.getElementById('inner1');
var liimg=inner1.getElementsByTagName('li')[0];
for (var i = 0; i < 3; i++) {
	var newli1=document.createElement('li');
	newli1.innerHTML=liimg.innerHTML;
	inner1.appendChild(newli1);
};

// 改变图片中的不同
var img1=getClassByParentId('inner1','img');
for (var i = 0; i < 3; i++) {
	var gbimg=img1[i+1].getElementsByTagName('img')[0];
	gbimg.src='img/index/dr'+(i+2)+'.jpg';
};


function getClassByParentId(parentId,claname){//获取页面中某个id名下的这个类名
	var pid=document.getElementById(parentId);
	var tags=pid.all?pid.all:pid.getElementsByTagName('*');
	var arr=[];
	var reg=new RegExp('\\b'+claname+'\\b','g');
	for (var i = 0; i < tags.length; i++) {
		reg.lastIndex=0;
		if(reg.test(tags[i].className)){
			arr.push(tags[i]);
		}
	};
	return arr;
}

// 大图滚动效果
var left1=document.getElementById('leftrun');
var right1=document.getElementById('rightrun');
var outer=document.getElementById('outer');
var inner1=document.getElementById('inner1');
var inner2=document.getElementById('inner2');
inner2.innerHTML=inner1.innerHTML;
var time=null,time1=null;
var lis=inner1.getElementsByTagName('li');
var bj=0;
var a=0;

function MoveLeft() {
	bj=0;
	clearInterval(time);
	clearTimeout(time1);
	time=setInterval(function  () {
		outer.scrollLeft++;
		if(outer.scrollLeft>=inner1.offsetWidth){
			outer.scrollLeft=0;
			a=0;
		}
		if(outer.scrollLeft%lis[0].offsetWidth==0){
			a++;
			clearInterval(time);
			clearTimeout(time1);
			time1=setTimeout(function  () {
				MoveLeft();
			},2000)
		}
	},10)
}
function MoveRight () {
	bj=1;
	clearInterval(time);
	clearTimeout(time1);
	time=setInterval(function  () {
		outer.scrollLeft--;
		if(outer.scrollLeft<=0){
			a=0;
			outer.scrollLeft=inner1.offsetWidth;
		}
		if(outer.scrollLeft%lis[0].offsetWidth==0){
			a--;
			clearInterval(time);
			clearTimeout(time1);
			time1=setTimeout(function  () {
				MoveRight();
			},2000)
		}
	},10)
}
left1.onclick=function  () {
	MoveRight();
}
right1.onclick=function  () {
	MoveLeft();
}
MoveLeft();

outer.onmouseover=function  () {
	clearInterval(time);
	clearTimeout(time1);
}
outer.onmouseout=function  () {
	if(bj==0){
		MoveLeft();
	}else{
		MoveRight();
	}
}
// 下边六块
var gl=document.getElementById('gl');
var li0=gl.getElementsByTagName('li')[0];
for (var i = 0; i < 5; i++) {
	var newli=document.createElement('li');
	newli.innerHTML=li0.innerHTML;
	gl.appendChild(newli);
};

// 下边添加超链接
var lists=gl.getElementsByTagName('li');
for (var i = 0; i < lists.length; i++) {
	lists[i].onclick=function  () {
		window.open('tip.html','_blank');
	}
};