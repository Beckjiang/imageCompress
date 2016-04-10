# imageCompress
```javascript
$(el).imageCompress({
	'quality': 50,
	'callback': function(result){
		$('#preview').append(result);
		$('#preview').find('img').addClass('preview');
	}
});
```

试用说明：
- el：为上传图片的文件域
- quality：压缩图片质量，单位为％
- callback：压缩完成的回调，result为压缩后的图片对象
