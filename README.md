# imageCompress
用file和canvas api实现的图片压缩的jquery插件。
只有压缩质量和回调函数两个参数，使用简单，欢迎完善补充。

```javascript
$(el).imageCompress({
	'quality': 50,
	'callback': function(result){
		$('#preview').append(result);
		$('#preview').find('img').addClass('preview');
	}
});
```

使用说明：
- el：为上传框
- quality：压缩图片质量，单位为％
- callback：压缩完成的回调，result为压缩后的图片对象
