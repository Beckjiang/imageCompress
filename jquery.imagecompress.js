+function ($) {
  'use strict';
  /**
   * 闭包中的构造方法
   * @param evt 上传文件域的change事件对象
   * @param options 用户定义参数（图片压缩质量，处理完成回调函数，图片输出格式）
   */
  var ImageCompress = function (evt, options) {
    var that = this;
    //读取图片
    var originalImage = this.readFile(evt, function(originalImage){
      //读取完成，压缩图片
      var compressImage = that.compress(originalImage, options.quality, options.outputFormat);

      //用户回调函数
      if(typeof options.callback === 'function'){
        options.callback(compressImage);
      }
    });
  }

  // 原型方法
  /**
   * 压缩图片
   * @param imageObj 图片对象
   * @param quality 压缩质量
   * @param outputFormat 图片输出格式
   * return returnImageObj 返回压缩后的图片对象
   */
  ImageCompress.prototype.compress = function(imageObj, quality, outputFormat){
    var mimeType = "image/jpeg";
    if(outputFormat!=undefined && outputFormat=="png"){
      mimeType = "image/png";
    }


    var cvs = document.createElement('canvas');
    //naturalWidth真实图片的宽度
    cvs.width = imageObj.naturalWidth;
    cvs.height = imageObj.naturalHeight;
    var ctx = cvs.getContext("2d").drawImage(imageObj, 0, 0);
    var newImageData = cvs.toDataURL(mimeType, quality/100);
    var returnImageObj = new Image();
    returnImageObj.src = newImageData;

    return returnImageObj;
  }

  /**
   * 读取图片
   * @param evt 上传文件域的change事件对象
   * @param onloadCallback 当文件读取完毕后的回调
   */
  ImageCompress.prototype.readFile = function(evt, onloadCallback) {
    var files = evt.target.files;

    for (var i = 0, file; file = files[i]; i++) {
      // 只处理图片
      if (!file.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var i = new Image();
          i.src = e.target.result;
          if(typeof onloadCallback === 'function') onloadCallback(i);
        };
      })(file);

        // Read in the image file as a data URL.
      reader.readAsDataURL(file);
    }
  }

  //默认参数
  ImageCompress.DEFAULTS = {

  }


  //在jQuery对象上提供的静态方法
  $.extend({
    
  });

  //如果有原型方法
  $.fn.extend({
    imageCompress: function(options) {
      var $this = $(this);
      $this.on('change', function(evt){
        var model = new ImageCompress(evt, options);
      });
    }
  });

  //noconflict
  $.fn.imageCompress.noConflict = function () {

  }
  //代理的事件监听
  
}(jQuery);