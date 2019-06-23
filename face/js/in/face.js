    	var saveArray = {};
        var video = document.getElementById('video');
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');

        var tracker = new tracking.ObjectTracker('face');
        tracker.setInitialScale(4);
        tracker.setStepSize(2);
        tracker.setEdgesDensity(0.1);

        tracking.track('#video', tracker, {camera: true});

        tracker.on('track', function (event) {
            context.clearRect(0, 0, canvas.width, canvas.height);

            event.data.forEach(function (rect) {
                context.strokeStyle = "#66F1C8";
                context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                context.font = '11px Helvetica';
                context.fillStyle = "#fff";
                context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
                context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
                context.fillText('请将脸部置于摄像头中心框内', (rect.x+rect.width)/2 - 10, rect.y + 100);
//              console.log(rect.x, rect.width, rect.y, rect.height);
                saveArray.x = rect.x;
                saveArray.y = rect.y;
                saveArray.width = rect.width;
                saveArray.height = rect.height;
	            });
	        });

	        var canvas1 = document.getElementById('canvas1');
	        var context1 = canvas1.getContext('2d');
	        context1.strokeStyle = "#00FFFF";
	        context1.moveTo(100, 100);
	        context1.lineTo(400, 100);
	        context1.lineTo(400, 400);
	        context1.lineTo(100, 400);
	        context1.lineTo(100, 100);
	        context1.stroke();


//      var img = document.getElementById("img")
//      //将canvas转化为图片
//      function convertCanvasToImage(canvas) {
//          var image = new Image();
//          image.src = canvas.toDataURL("image/png");
//          return image;
//      }
//      //保存图片
//      var keepImg = document.getElementById("keepImg");
//      keepImg.onclick = function () {
//          var photoImg = document.createElement("img");
//          photoImg.src = convertCanvasToImage(can).src;
//          img.appendChild(photoImg);
//          //获取到转化为base64的图片地址
//          console.log(convertCanvasToImage(can).src);
//      }
        //拍照
