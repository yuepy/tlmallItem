import * as Constant from '../../../../constant/constant.js';

export var load = function (row_Id) {
    upLoadFun(row_Id);
}

function upLoadFun(row_Id) {
    /*
        1、初始进来：
        ~如果有图片，且图片多余特定宽度，
            --隐藏多余图片，显示“更多”；
            --点击“更多”，显示所有图片，“更多”改为“收回”；
        ~如果没有上传图片，.textBtn隐藏；
        
        2、上传图片：
        --“收回”隐藏；
        --上传图片，当.images高度超过file-item高度，就显示“收回”；
        --点击“收回”，.images高度设置为file-item高度，隐藏多余图片，“收回”改为“更多”；

        3、“收回”和“更多”点击事件相互切换
    */
    var $list = $("#fileList"),
        $wh = $(".m-upload .file-item img").css('width'),
        thumbnailWidth = $wh,
        thumbnailHeight = $wh;
    var $imagesBoxH = parseInt($(".m-uploading .imagesBox").css("height"));



    // 初始判断
    var $imagesH = $imagesBoxH + parseInt($(".m-uploading .file-item").css("margin-bottom"));
    if ($(".file-item").length == 0) {
        $(".m-uploading .imagesBox").height("auto");
    }
    if (parseInt($(".m-uploading .images").height()) > $imagesH) {
        console.log("more");
        $(".m-uploading .textBtn").show().addClass("more").html("更多");
    } else {
        $(".m-uploading .textBtn").hide();
    }

    // 显示或隐藏上传图片，“更多”和“收回”切换事件
    $(".m-uploading .textBtn").click(function() {
        var $this = $(this);
        if ($this.hasClass('more')) {
            $this.html("收回").removeClass("more").addClass("less");
            $this.siblings(".imagesBox").height("auto");
        } else if ($this.hasClass('less')) {
            $this.html("更多").removeClass("less").addClass("more");
            $this.siblings(".imagesBox").height($imagesBoxH);
        }
    });

    // 初始化Web Uploader
    var uploader = WebUploader.create({

        // 选完文件后，是否自动上传。
        auto: true,

        // swf文件路径
        swf: './js/lib/webuploader/Uploader.swf',

        // 文件接收服务端。
        server: 'http://localhost:8080/pttlCrm/sys/file/upload',

        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '#filePicker',

        formData: {
            roleId:row_Id
        },
        // 只允许选择图片文件。
        accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,bmp,png',
            mimeTypes: 'image/jpg,image/jpeg,image/png'
        }
    });

    // 当有文件添加进来的时候
    uploader.on('fileQueued', function(file) {
        var $li = $(
                '<div id="' + file.id + '" class="file-item thumbnail">' +
                '<img title="' + file.name + '">' +
                '<div class="info" title="' + file.name + '">' + file.name + '</div>' +
                '</div>'
            ),
            $btns = $('<div class="file-panel"><span class="cancel">删除</span></div>').appendTo($li),
            $img = $li.find('img');

        // $list为容器jQuery实例
        $list.append($li);

        // 创建缩略图
        // 如果为非图片文件，可以不用调用此方法。
        // thumbnailWidth x thumbnailHeight 为 100 x 100
        uploader.makeThumb(file, function(error, src) {
            if (error) {
                $img.replaceWith('<span>不能预览</span>');
                return;
            }

            $img.attr('src', src);
        }, thumbnailWidth, thumbnailHeight);

        // (禁止删除！)上传图片之后判断
        var imagesH = $imagesBoxH + parseInt($(".m-uploading .file-item").css("margin-bottom"));
        if (parseInt($(".m-uploading .images").height()) > imagesH) {
            $(".m-uploading .imagesBox").height("auto");
            $(".m-uploading .textBtn").show().addClass("less").html("收回").removeClass("more");
        } else {
            $(".m-uploading .textBtn").hide();
        }

        $btns.on('click', 'span', function() {
            var index = $(this).index();
            switch (index) {
                case 0:
                    uploader.removeFile(file);
                    return;
            }
        });

    });
    uploader.onFileDequeued = function(file) {
        removeFile(file);
    };
}

// 负责view的销毁
function removeFile(file) {
    console.log($imagesBoxH);
    var $li = $('#' + file.id);
    $li.off().find('.file-panel').off().end().remove();
    var imagesH = $imagesBoxH + parseInt($(".m-uploading .file-item").css("margin-bottom"));
    console.log(parseInt($(".m-uploading .images").height()));
    if (parseInt($(".m-uploading .images").height()) > imagesH) {
        $(".m-uploading .textBtn").show();
    } else {
        $(".m-uploading .textBtn").hide();
    }
}