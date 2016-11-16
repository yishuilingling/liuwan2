function addEvent (obj,type,fn) {//添加绑定事件 false是冒泡
	if(obj.addEventListener){//支持W3C的浏览器
		obj.addEventListener(type,fn,false);
	}else{//IE浏览器
		obj.attachEvent('on'+type,fn);
	}
}
function removeEvent (obj,type,fn) {//移除事件监听
	if(obj.removeEventListener){//支持W3C的浏览器
		obj.removeEventListener(type,fn,false);
	}else{//IE浏览器
		obj.detachEvent('on'+type,fn);
	}
}

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

function stopDefaultEvent(e){//阻止默认事件
	if(e.preventDefault){
		e.preventDefault();//非IE阻止默认事件
	}else{
		e.returnValue=false;//IE阻止默认事件
	}
}

function stopEventchb(e){//阻止事件传播
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble=true;
	}
}

function offsetTL (obj) {//获取对象到body的offsetLeft或offsetTop
	var l=0,t=0;
	while(obj){
		l=l+obj.offsetLeft;
		t=t+obj.offsetTop;
		obj=obj.offsetParent;
	}
	return {left:l,top:t};//保存在对象里，中间用逗号隔开
}

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

















