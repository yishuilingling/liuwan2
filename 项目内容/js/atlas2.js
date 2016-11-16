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

// 大图滚动
var outer=getClass('z1')[0];
var inner=getClass('inner')[0];
var mask=getClass('mask')[0];
var imgs=inner.getElementsByTagName('img');
var fisimg=inner.children[0].cloneNode(true);
var lastimg=inner.children[imgs.length-1].cloneNode(true);
inner.appendChild(fisimg);//添加最后一张图片
inner.insertBefore(lastimg,inner.children[0]);//添加第一张图片
var a=1,b=1;//a是图片下标，b是下面文字变化
var time1=null,time2=null;
outer.scrollLeft=imgs[0].offsetWidth;
mask.innerHTML='第1张 / 共5张';

function moveLeft () {
	clearInterval(time1);
	// clearInterval(time2);//计时器不能清除两遍！
	time1=setInterval(function  () {
		a++;
		if(a>imgs.length-1){
			outer.scrollLeft=imgs[0].offsetWidth;
			a=2;
		}
		move();
		b++;
		if(b>imgs.length-2){
			b=1;
		}
		mask.innerHTML='第'+b+'张 / 共5张';
	},2000)
}

function move () {
	var min=0;
	var max=50;
	var start=outer.scrollLeft;
	var end=imgs[0].offsetWidth*a;
	var change=(end-start)/50;
	clearInterval(time2);
	time2=setInterval(function  () {
		min++;
		if(min>=max){
			clearInterval(time2);
		}
		start+=change;
		outer.scrollLeft=start;
	},20)
}

moveLeft();

var left=getClass('left')[0];
var right=getClass('right')[0];

left.onclick=function  () {
	clearInterval(time1);
	clearInterval(time2);
	a--;
	if(a<1){
		outer.scrollLeft=imgs[0].offsetWidth*(imgs.length-1);
		a=imgs.length-2;
	}
	b--;
	if(b<1){
		b=5;
	}
	mask.innerHTML='第'+b+'张 / 共5张';
	move();
	moveLeft();
}
right.onclick=function  () {
	clearInterval(time1);
	clearInterval(time2);
	a++;
	if(a>imgs.length-1){
		outer.scrollLeft=imgs[0].offsetWidth;
		a=2;
	}

	b++;
	if(b>imgs.length-2){
		b=1;
	}
	mask.innerHTML='第'+b+'张 / 共5张';
	move();
	moveLeft();
}

// 右边缩减代码，减少重复
var y13=getClass('y13')[0];
var ul1=y13.children[1];
var li1=ul1.children[0];
var li2=li1.cloneNode(true);
li2.children[0].src='img/atlas2/y2_03.jpg';
ul1.appendChild(li2);

var yx=getClass('yx')[0];
var ul2=yx.children[1];
var li3=li2.cloneNode(true);
ul2.appendChild(li3);

var time3=null,time4=null;

var concon=document.getElementById('con2z');
var z4=getClassByParentId('con2z','z4')[0];
for (var i = 0; i < 2; i++) {
	var z4s=z4.cloneNode(true);
	concon.insertBefore(z4s,z4);
};
//发布
var p1=getClass('p1')[0];
var p2=getClass('p2')[0];
var p3=getClass('p3');
var p4=getClass('p4');

var login=document.getElementById('login');
var ipts=login.getElementsByTagName('input');
var btn=login.getElementsByTagName('button');
var sys=document.getElementsByTagName('strong');
var pinglun=document.getElementsByTagName('textarea');

p1.style.display='none';
p2.style.display='none';

pinglun[0].onfocus=function  () {
	p1.style.display='none';
	p2.style.display='none';
	time3=setInterval(function  () {
		sys[0].innerHTML=200-pinglun[0].value.length;
		if(pinglun[0].value.length>200){
			p3[0].style.color='red';
		}
	},1)
}

var nr='';
p2.onclick=function  () {//登录
	login.style.display='block';
	btn[0].onclick=function  () {
		var ss=ipts[0].value;
		if(ss!=''&&ipts[1].value!=''){
			setCookie('user','ss','7');
			login.style.display='none';
			p1.style.display='none';
			p2.style.display='none';
			pinglun[0].value=nr;
		}else{
			alert('账户和密码不能为空')
		}
	}	
	btn[1].onclick=function  () {
		login.style.display='none';
		p1.style.display='block';
		p2.style.display='block';
	}
}

p4[0].onclick=function  () {
	var user=getCookie('user');
	if(user==false){// 判断是否登录
		p1.style.display='block';
		p2.style.display='block';
		nr=pinglun[0].value;
		pinglun[0].value='';
	}else{
		var newz4=z4.cloneNode(true);
		newz4.children[1].children[0].innerHTML=pinglun[0].value.substring(0,200);
		if(newz4.children[1].children[2]){
			newz4.children[1].removeChild(newz4.children[1].children[2]);
		}	
		concon.insertBefore(newz4,z4);
		pinglun[0].value='';
		sys[0].innerHTML=200;
		p3[0].style.color='#000';
		var shq=getClass('sq');
		var yc=getClass('c_left_bottom2_content_b');
		var bj=[];
		for (var i = 0; i < yc.length; i++) {
			bj[i]=0;
		};
		for (var i = 0; i < yc.length; i++) {
			shq[i].index=i;
			shq[i].onclick=function  () {
				if(bj[this.index]==0){
					yc[this.index].style.display='none';
					this.innerHTML='更多&gt;'
					bj[this.index]=1;
				}else{
					yc[this.index].style.display='block';
					this.innerHTML='收起&gt;'
					bj[this.index]=0;
				}
			}
		};
	}
}

// 点击回复
var reply=getClass('reply');
// console.log(reply.length);//3
for (var i = 0; i < reply.length; i++) {
	reply[i].onclick=function  () {
		this.parentNode.parentNode.nextElementSibling.style.display='block';
		this.parentNode.parentNode.nextElementSibling.nextElementSibling.style.display='block';
	}
};
//回复评论
var pp=getClass('pppp');
for (var i = 0; i < pp.length; i++) {
	pinglun[i+1].index=i+1;
	pinglun[i+1].onfocus=function  () {
		var ii=this.index-1;
		pp[ii].children[1].style.display='none';
		pp[ii].children[2].style.display='none';
		clearInterval(time4);
		time4=setInterval(function  () {
			sys[ii+1].innerHTML=200-pinglun[ii+1].value.length;
			if(pinglun[ii].value.length>200){
				p3[ii+1].style.color='red';
			}
		},1)
	}

	p4[i+1].index=i+1;
	var p4on=0
	p4[i+1].onclick=function  () {
		var jj=this.index;
		if(pinglun[jj].value==''){
			pp[jj-1].children[1].style.display='block';
			pp[jj-1].children[2].style.display='block';
		}else{
			var cleft=getClass('c_left_bottom2_content_left')[0];
			var clf=cleft.parentNode;
			var newhh1=clf.cloneNode(true);
			newhh1.children[0].children[0].src='img/atlas2/bottom1.jpg';
			newhh1.children[0].children[1].innerHTML='闪烁尾戒';
			newhh1.children[1].children[1].innerHTML=pinglun[jj].value;

			if(p4on==0){
				p4on=1;//是否添加删除节点
				var newvar=document.createElement('var');
				newvar.className='del';
				newvar.innerHTML='删除';
				newhh1.children[1].appendChild(newvar);
			}		

			var now=new Date();
			var full=now.getFullYear();
			var mou=now.getMonth()+1;
			var dat=now.getDate();
			var hou=now.getHours();
			var minu=now.getMinutes();
			if(mou<10){
				mou='0'+mou;
			}
			if(dat<10){
				dat='0'+dat;
			}
			if(hou<10){
				hou='0'+hou;
			}
			if(minu<10){
				minu='0'+minu;
			}

			newhh1.children[1].children[2].innerHTML=full+'-'+mou+'-'+dat+' '+hou+':'+minu;
			var cb=getClass('c_left_bottom2_content_b')[jj-1];
			cb.insertBefore(newhh1,cb.children[0]);
			// cb.appendChild(newhh1);
			pinglun[jj].value='';
			sys[jj].innerHTML=200;
			p3[jj].style.color='#000';
			var dels=getClass('del');
				for (var i = 0; i < dels.length; i++) {
				dels[i].onclick=function  () {
					this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
				}
			};
		}
	}
};

// 收起与更多
var shq=getClass('sq');
var yc=getClass('c_left_bottom2_content_b');
var bj=[];
for (var i = 0; i < yc.length; i++) {
	bj[i]=0;
};
for (var i = 0; i < yc.length; i++) {
	shq[i].index=i;
	shq[i].onclick=function  () {
		if(bj[this.index]==0){
			yc[this.index].style.display='none';
			this.innerHTML='更多&gt;'
			bj[this.index]=1;
		}else{
			yc[this.index].style.display='block';
			this.innerHTML='收起&gt;'
			bj[this.index]=0;
		}
	}
};

//删除
 var dels=getClass('del');
 for (var i = 0; i < dels.length; i++) {
 	dels[i].onclick=function  () {
 		this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
 		// this.parentNode.parentNode.removeChild(this.parentNode.previousSibling);
 		// this.parentNode.parentNode.removeChild(this.parentNode);
 	}
 };
function setCookie (key,value,days) {//创建cookie
	var date=new Date();
	date.setDate(date.getDate()+days);//设置有效期，以天为单位
	document.cookie=key+"="+escape(value)+"; expires="+date;//secape进行编码
}

function getCookie (key) {//获取cookie
	var arr=document.cookie.split('; ');
	for (var i = 0; i < arr.length; i++) {
		var arr1=arr[i].split('=');//分割每一组值
		if(arr1[0]==key){
			return unescape(arr1[1]);//解码
		}
	};
	return false;
}

function removeCookie (key) {//删除cookie
	setCookie(key,'0',-1);
}
