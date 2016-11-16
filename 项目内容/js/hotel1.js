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

// 地区选择
var diqu=getClassByParentId('cons','diqu')[0];
var spans1=diqu.getElementsByTagName('span');
spans1[0].style.borderColor='#FFA309';
for (var i = 0; i < spans1.length; i++) {
	spans1[i].onclick=function  () {
		for (var i = 0; i < spans1.length; i++) {
			spans1[i].style.borderColor='#fff';
			// alert('111');
		};
		this.style.borderColor='#FFA309';
		// alert('222');
	}
};
// 价格选择
var price=getClassByParentId('cons','price')[0];
var spans3=price.getElementsByTagName('span');
spans3[0].style.color='#FFA309';
for (var i = 0; i < spans3.length; i++) {
	spans3[i].index=i;
	spans3[i].onclick=function  () {
		for (var i = 0; i < spans3.length; i++) {
			if(this.index==0){
				spans3[0].style.color='#FFA309';
				//移除单选按钮 
	            var checkedbrowser=document.getElementsByName("1");  
	            var len = checkedbrowser.length;  
	            var i = 0;  
	            for(i=0; i < len; i++){  
	                // 必须先赋值为false,再移除属性  
	                checkedbrowser[i].checked = false;  
	                // 不移除属性也可以  
	                // checkedbrowser[i].removeAttribute("checked");  
	            }  
			}else{
				spans3[0].style.color='#000';
				spans3[this.index].getElementsByTagName('input')[0].checked='true';
			}
		};
	}
};
// 房型选择
var fx=getClassByParentId('cons','fx')[0];
var spans2=fx.getElementsByTagName('span');
spans2[0].style.color='#FFA309';
for (var i = 0; i < spans2.length; i++) {
	spans2[i].onclick=function  () {
		for (var i = 0; i < spans2.length; i++) {
			spans2[i].style.color='#000';
		};
		this.style.color='#FFA309';
	}
};

// 样式重置
var reset=getClass('reset')[0];
reset.onclick=function  () {

	for (var i = 0; i < spans1.length; i++) {
		spans1[i].style.borderColor='#fff';
	};
	spans1[0].style.borderColor='#FFA309';

	spans3[0].style.color='#FFA309';
	var checkedbrowser=document.getElementsByName("1");  
    var len = checkedbrowser.length;  
    var i = 0;  
    for(i=0; i < len; i++){  
        // 必须先赋值为false,再移除属性  
        checkedbrowser[i].checked = false;  
        // 不移除属性也可以  
        // checkedbrowser[i].removeAttribute("checked");  
    }  

	for (var i = 0; i < spans2.length; i++) {
		spans2[i].style.color='#000';
	};
	spans2[0].style.color='#FFA309';
}
// 复制双人床
var gh7=getClass('gh7')[0];
var shr=gh7.cloneNode(true);
shr.className='gh7';
shr.children[0].src='img/hotel1/02.jpg';
var fz1=getClass('fz1');
fz1[0].appendChild(shr);

// 复制多家酒店
var arr=[2,3,1,3,2,1];
var fzs=document.getElementById('fzs');
for (var i = 0,j=0; i < 2; i++) {
	var newfz=fz1[0].cloneNode(true);
	newfz.className='fz1 clear';
	// console.log(newfz.children[0].children[0].children[0].innerHTML);
	// 改变透明度切换图片
	newfz.children[0].children[0].children[0].children[0].src='img/hotel1/tu'+arr[j]+'.jpg';
	j++;
	newfz.children[0].children[0].children[1].children[0].src='img/hotel1/tu'+arr[j]+'.jpg';
	j++;
	newfz.children[0].children[0].children[2].children[0].src='img/hotel1/tu'+arr[j]+'.jpg';
	j++;
	// 改变订房间的两张小图片
	newfz.children[3].children[0].src='img/hotel1/0'+(2*i+3)+'.jpg';
	newfz.children[4].children[0].src='img/hotel1/0'+(2*i+4)+'.jpg';
	fzs.appendChild(newfz);
};

// 透明度切换
// console.log(fz1.length)//1
fz1=getClass('fz1');
fz1[0].style.borderTop='none';

var inners=getClass('inner');
for (var i = 0; i < inners.length; i++) {
	var lis=inners[i].getElementsByTagName('li');
	lis[i].style.display='block';
	lis[i].style.opacity=1;
};//给每一个初始化

// 给第一个添加效果
lis=inners[0].getElementsByTagName('li');
var time1=null,time2=null;
var a=0;//图片下标
function automove () {
	clearInterval(time1);
	time1=setInterval(function  () {
		a++;
		// console.log(a);
		// console.log(lis.length)
		if(a>=lis.length){
			a=0;
		}
		move();
	},2000)
}	
function move () {	
	var tmd=0;
	time2=setInterval(function  () {
		tmd+=1/50;
		if(tmd>=1){
			clearInterval(time2);
			tmd=1;
		}
		lis[a].style.opacity=tmd;	
	},20);	
	for (var i = 0; i < lis.length; i++) {
		lis[i].style.display='none';
		lis[i].style.opacity=0;	
	};
	lis[a].style.display='block';
}
automove();

var left=getClass('left')[0];
var right=getClass('right')[0];
left.onclick=function  () {
	a--;
	if(a<0){
		a=lis.length-1;
	}
	move();
	automove();
}
right.onclick=function  () {
	a++;
	if(a>=lis.length){
		a=0;
	}
	move();
	automove();
}
inners[0].onmouseover=function  () {
	clearInterval(time2);
	clearInterval(time1);
	lis[a].style.display='block';
	lis[a].style.opacity=1;	
}
inners[0].onmouseout=function  () {
	automove();
}
for (var i = 0; i < inners.length; i++) {
	inners[i].onclick=function  () {
		window.open('hotel2.html','_blank');
	}
	
};
for (var i = 0; i < inners.length; i++) {
	inners[i].omclick=function  () {
		window.open('hotel2.html','_self');
	}
};