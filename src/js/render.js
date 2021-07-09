//渲染功能：渲染图片，音乐信息，是否喜欢
// 将方法暴露出去：1.reutrn 2.让它成为window属性

//	前面加 ; 是防止压缩导致错误
;(function(root){
	//	渲染图片
	function renderImg(src){
		root.blurImg(src);	//给body添加背景图片

		var img = document.querySelector('.songImg img');
		img.src = src;
	}

	//	渲染音乐信息
	function renderInfo(data){
		var songInfoChildren = document.querySelector('.songInfo').children;
		songInfoChildren[0].innerHTML = data.name;
		songInfoChildren[1].innerHTML = data.singer;
		songInfoChildren[2].innerHTML = data.album;
	}
	
	//	是否喜欢
	function renderIsLike(isLike){
		var lis = document.querySelectorAll('.control li');
		lis[0].className = isLike ? 'liking' : '';
	}

	root.render = function(data){//data为请求过来的数据(图片，音乐的来源)，必须给
		renderImg(data.image);
		renderInfo(data);
		renderIsLike(data.isLike);
	};

})(window.player || (window.player = {}));