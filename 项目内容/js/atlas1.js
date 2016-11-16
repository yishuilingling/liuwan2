// atlas1的图片复制 11
var ul1=document.getElementById('ul1');
var ul2=document.getElementById('ul2');
var liimg=ul1.getElementsByTagName('li');
for (var i = 0; i < 11; i++) {
	var newli1=document.createElement('li');
	newli1.className='img';
	if(i%3==0){
		newli1.className='img img2';
	}
	newli1.innerHTML=liimg[0].innerHTML;

	ul1.appendChild(newli1);	
};

// 改变图片中的不同
var arr=['台北一日游','嘉义一日游','台东一日游','高雄一日游','嘉义一日游','台中一日游','台北一日游','花莲一日游','台东绿岛一日游','日月潭一日游','台中一日游'];
var img1=getClass('photo');
var wys=getClass('wy');
var wzs=getClass('wz');
var j=0;
for (var i = 0; i < 11; i++) {
	img1[i+1].src='img/atlas1/'+(i+2)+'_03.jpg';	
	var words=wys[i+1].getElementsByTagName('p')[0];
	var samlls=wzs[i+1].getElementsByTagName('img')[0];
	words.innerHTML=arr[i];
	if((i+2)%3==0){
		j=3;
	}else{
		j=(i+2)%3;
	}
	samlls.src='img/atlas1/s'+j+'.png';
};

function getClass(claname){//获取页面中所有的这个类名
	var tags=document.all?document.all:document.getElementsByTagName('*');
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

// 添加后三张
for (var i = 0; i < 3; i++) {
	var newli2=document.createElement('li');
	newli2.className='img';
	if(i%3==1){
		newli2.className='img img2';
	}
	newli2.innerHTML=liimg[i+3].innerHTML;
	ul2.appendChild(newli2);	
};

// 页面跳转
var con2=document.getElementById('con2');
var lists=con2.getElementsByTagName('*');
for (var i = 0; i < lists.length; i++) {
	lists[i].onclick=function  () {
		window.open('atlas2.html','_blank');
	}
};