# imageCompress
用file和canvas api实现的图片压缩的jquery插件。
只有压缩质量和回调函数两个参数，使用简单，欢迎完善补充。

```javascript
$('#image').imageCompress({
	'quality': 50,
	'onloadStart': function(result){
		console.log('读取图片开始'+result);
	},
	'onloadEnd': function(result){
		console.log('读取图片结束'+result);
	},
	'oncompressStart': function(result){
		console.log('压缩图片开始'+result);
	},
	'oncompressEnd': function(result){
		console.log('压缩图片结束'+result);
		$('#preview').append(result);
		$('#preview').find('img').addClass('preview');
	},
	'callback': function(){
		console.log('处理完毕');
	}
});
```

使用说明：
- el：为上传框
- quality：压缩图片质量，单位为％
- onloadStart：读取图片开始，传入文件对象
- onloadEnd：读取图片结束，传入图片对象
- oncompressStart：压缩图片开始，传入压缩前图片对象
- oncompressEnd：压缩图片结束，传入压缩后图片对象
- callback：所有图片压缩处理完成以后的回调
