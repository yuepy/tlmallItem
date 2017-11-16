/**
 * Listener.js
 * �������ڽ�����ie�£�ͨ��js�ı�input��ֵʱ��
 * �޷��������¼������⣨�磺onpropertychange, oninput, onchange��
 * Sample: ���ײ�
 * clyt v0.1 2012/10/22
 */
function Listener() {
    //��ʱ��
    var interval_l = null;
    //key:name,value:value.  �����ж�Ԫ��value�Ƿ�����
    var objValMap = new Map();
    //��ʱɨ����Ԫ�ؼ�
    var targetObjects = null;
    //���鵱ǰ�������Ƿ���ie
    var isIe = function() {
        return jQuery.browser.msie;
    };

    //���鵱ǰ���������Ƿ��а󶨼�������
    var isEmpty = function() {
        if (targetObjects == null || targetObjects.length == 0) {
            return true;
        }
        return false;
    };

    //��ʱִ�е�����
    var execute = function(exeattr) {
        if (isIe() && !isEmpty()) {
            return;
        }
        if (isEmpty()) { return; }
        //����Ԫ�ؼ���
        jQuery.each(targetObjects, function(i, n) {
            var oldVal = objValMap.get(n.name);
            var _element = jQuery("input[name=" + n.name + "]")[0];
            var newVal = _element.value;
            if (oldVal != newVal) {
                objValMap.put(n.name, n.value);
                var _callbak = jQuery(_element).attr(exeattr);
                try {
                    eval(_callbak);
                } catch (e) {}
            }
        });
    };
    //��ʼִ��
    var start = function(seed, exeattr) {
            if (isIe() && !isEmpty()) {
                return;
            }
            if (seed == undefined || seed == 0) {
                seed = 500;
            }
            if (exeattr == undefined) {
                exeattr = "_listener";
            }
            interval_l = window.setInterval(function() { execute(exeattr); }, seed);
        }
        //ֹͣ������
    var stop = function() {
        if (interval_l) {
            window.clearInterval(interval_l);
        }
    };
    //�󶨼�������
    var load = function(selector) {
        if (isIe()) {
            return;
        }
        if (selector == undefined) {
            selector = "input[type=hidden][_listener!='']";
        }
        targetObjects = jQuery(selector);
        jQuery.each(targetObjects, function(i, n) {
            objValMap.put(n.name, n.value);
        });
    };
    this.execute = execute;
    this.start = start;
    this.stop = stop;
    this.load = load;
}

/**
 * ��ֵ�ԣ�ͬJava Map
 */
function Map() {
    var struct = function(key, value) {
        this.key = key;
        this.value = value;
    }
    var put = function(key, value) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].key === key) {
                this.arr[i].value = value;
                return;
            }
        }
        this.arr[this.arr.length] = new struct(key, value);
    }

    var get = function(key) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].key === key) {
                return this.arr[i].value;
            }
        }
        return null;
    }

    var remove = function(key) {
        var v;
        for (var i = 0; i < this.arr.length; i++) {
            v = this.arr.pop();
            if (v.key === key) {
                continue;
            }
            this.arr.unshift(v);
        }
    }

    var size = function() {
        return this.arr.length;
    }

    var isEmpty = function() {
        return this.arr.length <= 0;
    }

    this.arr = new Array();
    this.get = get;
    this.put = put;
    this.remove = remove;
    this.size = size;
    this.isEmpty = isEmpty;
};
/*
//Sample
var l = null;
jQuery(document).ready(function(){
	l = new Listener();
	l.load("input[onpropertychange!='']"); //��������ʱ��Ĭ�ϲ���Ϊ��"input[type=hidden][_listener!='']";
	l.start(500, "onpropertychange");      //��������ʱ��Ĭ�ϲ���Ϊ��500, "_listener"
});
//ֹͣ����ʱ����:
l.stop();
*/