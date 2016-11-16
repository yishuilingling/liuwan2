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

// 大图滚动
var outer=getClass('outer')[0];
var inner1=getClass('inner1')[0];
var inner2=getClass('inner2')[0];
var left=getClass('left')[1];
var right=getClass('right')[1];
var imgs=inner1.getElementsByTagName('img');
inner2.innerHTML=inner1.innerHTML;
var time1=null,time2=null,time3=null,time4=null;
var bj=0;

function moveLeft () {
	time1=setInterval(function  () {
		outer.scrollLeft++;
		if (outer.scrollLeft>=inner1.offsetWidth) {
			outer.scrollLeft=0;
		};
		if (outer.scrollLeft%imgs[0].offsetWidth==0) {  //滚动条滚动得距离是一张图片和外边距之和得整数倍
			clearInterval(time1);//停下来
			clearTimeout(time2);
			time2=setTimeout(function  () {//2秒钟之后再接着走
				moveLeft();			
			},2000)
		};
	},10)
	bj=0;//标记运动方向
}
moveLeft();//进入页面向左走

function moveRight () {
	time3=setInterval(function  () {
		outer.scrollLeft--;
		if (outer.scrollLeft<=0) {
			outer.scrollLeft=inner1.offsetWidth;
		};
		if (outer.scrollLeft%imgs[0].offsetWidth==0) {
			clearInterval(time3);
			clearTimeout(time4);
			time4=setTimeout(function  () {
				moveRight();
			},2000)
		};
	},10)
	bj=1;
}

function clear () {
	clearInterval(time1);
	clearInterval(time3);
	clearTimeout(time2);
	clearTimeout(time4);
}
outer.onmouseover=function  () {
	clear();
}
outer.onmouseout=function  () {
	if (bj==0) {  //说明运动方向为左
		moveLeft();
	}else{  //运动方向为右
		moveRight();
	};
}

left.onclick=function  () {
	clear();//防止绑定多个计时器
	moveLeft();
}
right.onclick=function  () {
	clear();//防止绑定多个计时器
	moveRight();
}

// 复制大床房
var bj=getClass('bj')[0];
var newbj=bj.cloneNode(true);
newbj.children[0].children[0].children[1].children[0].src='img/hotel2/z2.jpg';
newbj.children[0].children[4].children[1].innerHTML='大床';
var fzs=document.getElementById('conxz');
fzs.insertBefore(newbj,fzs.children[1]);

// 房间mouseover效果
bj=getClass('bj');
// console.log(bj.length);
for (var i = 0; i < bj.length; i++) {
	bj[i].index=i;
	bj[i].onmouseover=function  () {
		for (var i = 0; i < this.children[0].children.length; i++) {
			this.children[0].children[i].style.background='#eee';
		};
		this.children[1].style.display='block';
	}
	bj[i].onmouseout=function  () {
		for (var i = 0; i < this.children[0].children.length; i++) {
			this.children[0].children[i].style.background='#fff';
		};
		this.children[1].style.display='none';
	}
};

// 复制评论
var concon=document.getElementById('youji');
var z4=getClass('z4')[0];
var z4s=z4.cloneNode(true);
concon.insertBefore(z4s,z4);
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
var bjsq=[];
for (var i = 0; i < yc.length; i++) {
	bjsq[i]=0;
};
// console.log(yc.length);
for (var i = 0; i < yc.length; i++) {
	shq[i].index=i;
	shq[i].onclick=function  () {
		// console.log(bjsq[this.index]);
		// console.log(this.index);
		if(bjsq[this.index]==0){
			yc[this.index].style.display='none';
			this.innerHTML='更多&gt;'
			bjsq[this.index]=1;
		}else{
			yc[this.index].style.display='block';
			this.innerHTML='收起&gt;'
			bjsq[this.index]=0;
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


// 右边复制呢
var conxy=document.getElementById('conxy');
var ul=conxy.children[1];
var li1=ul.children[0];
for (var i = 0; i < 5; i++) {
	var newli=li1.cloneNode(true);
	newli.children[0].src='img/hotel2/y'+(i+2)+'.jpg';
	ul.appendChild(newli);
};