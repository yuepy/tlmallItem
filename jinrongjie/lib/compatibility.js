//compatibility.js v1.0.0
//支持 2.3.0 以上版本运行时

ysp.appMain.resolveCompatibility = ysp.appMain.resolveCompatibility || function() {};

//activeXObject 
ysp.appMain.resolveCompatibility('activeX', function(win) {
    win.ActiveXObject = function(type) {
        var typename = type.split('.')[1];
        if (typename) {
            typename = typename.toLowerCase();
            switch (typename) {
                case 'xmlhttp':
                    {
                        return new win.XMLHttpRequest();
                    }
                case 'xmldocument':
                case 'domdocument':
                    {
                        return new XML();
                    }
                default:
                    throw 'ActiveXObject ' + type + ' not supported.';
            }
        }
        throw 'ActiveXObject type error.';
    }

    win.Object.defineProperty(win.XMLHttpRequest.prototype, 'Open', {
        get: function() {
            return this.open;
        },
        enumerable: true,
        configurable: true
    });

    win.Object.defineProperty(win.XMLHttpRequest.prototype, 'Send', {
        get: function() {
            return this.send;
        },
        enumerable: true,
        configurable: true
    });

    function XML() {}

    XML.prototype = {
        get readyState() {
            return this._xhr.readyState;
        },
        get status() {
            return this._xhr.status;
        },
        get parseError() {
            var error = this._parseError || this.doc.querySelector('parsererror');
            if (error) {
                return {
                    errorCode: 1,
                    info: error.textContent
                };
            }
            return {
                errorCode: 0
            };
        },
        get firstChild() {
            return this.documentElement;
        },
        set parseError(error) {
            this._parseError = error;
        },
        _loadXML: function(str) {
            var parser = new win.DOMParser();
            this.doc = parser.parseFromString(str, "text/xml");
        },
        loadXML: function(str) {
            this._loadXML(str);
        },
        load: function(url) {
            if (!url.trim()) {
                return;
            }
            var xhr = this._xhr = new win.XMLHttpRequest();
            var _this = this;
            if (this.async !== false) {
                xhr.onreadystatechange = function() {

                    if (xhr.readyState == 4) { //readyState 0:未初始化 1:启动，已经调用open方法，但未调用send方法 2:发送 已经调用send方法，但尚未接到服务端相应 3:接收，但是只接收了部分响应 4:完成，已经接收了全部响应数据，而且已经可以在客户端使用了
                        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0) {
                            // console.info("successful responseText: " + xhr.responseText)
                            _this._loadXML(xhr.responseText);
                        } else {
                            this.parseError = {
                                errorCode: xhr.status,
                                info: xhr.statusText
                            };
                        }
                    }

                    if (_this.onreadystatechange) {
                        _this.onreadystatechange();
                    }
                }
            }
            xhr.open("get", url, this.async !== false);
            xhr.send(null);
            if (this.async === false) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0) {
                    this._loadXML(xhr.responseText);
                } else {
                    this.parseError = {
                        errorCode: xhr.status,
                        info: xhr.statusText
                    };
                }
            }
        },
        get documentElement() {
            return this.doc.documentElement;
        },
        selectSingleNode: function(selector) {
            return this.doc.evaluate(selector, this.doc, null, win.XPathResult.ANY_TYPE, null).iterateNext();
        },
        selectNodes: function(selector) {
            if (!this.doc) {
                return [];
            }
            var result = this.doc.evaluate(selector, this.doc, null, win.XPathResult.ANY_TYPE, null);
            var nodes = result.iterateNext(); //枚举第一个元素
            var ret = [];

            while (nodes) {
                ret.push(nodes);
                nodes = result.iterateNext(); //枚举下一个元素
            }

            return ret;
        }
    };

    win.Node.prototype.selectSingleNode = function(selector) {
        return win.document.evaluate(selector, this, null, win.XPathResult.ANY_TYPE, null).iterateNext();
    };

    win.Node.prototype.selectNodes = function(selector) {
        var result = win.document.evaluate(selector, this, null, win.XPathResult.ANY_TYPE, null);
        var nodes = result.iterateNext(); //枚举第一个元素
        var ret = [];

        while (nodes) {
            ret.push(nodes);
            nodes = result.iterateNext(); //枚举下一个元素
        }

        return ret;
    };

    win.Object.defineProperty(win.HTMLElement.prototype, 'document', {
        get: function() {
            if (this.tagName.toLowerCase() === 'iframe' || this.tagName.toLowerCase() === 'frame') {
                return this.contentDocument;
            }
            return this.ownerDocument;
        },
        enumerable: true,
        configurable: true
    });

    win.Object.defineProperty(win.Node.prototype, 'location', {
        get: function() {
            // if (this.tagName.toLowerCase() === 'iframe' || this.tagName.toLowerCase() === 'frame') {
            // 	return this.contentDocument.location;
            // }    
            return this.ownerDocument.location;
        },
        enumerable: true,
        configurable: true
    });

    win.Object.defineProperty(win.Node.prototype, 'text', {
        get: function() {
            return this.textContent && this.textContent.trim();
        },
        enumerable: true,
        configurable: true
    });

    win.Object.defineProperty(win.Node.prototype, 'offsetParent', {
        get: function() {
            var parent = this.parentNode;
            while (parent.tagName.toLowerCase() !== 'td' &&
                parent.tagName.toLowerCase() !== 'table' &&
                parent.tagName.toLowerCase() !== 'body' &&
                parent.tagName.toLowerCase() !== 'html') {
                parent = parent.parentNode;
            }
            return parent;
        },
        enumerable: true,
        configurable: true
    });
    try {
        win.Object.defineProperty(win.Node.prototype, 'firstChild', {
            get: function() {
                return this.firstElementChild;
            },
            enumerable: true,
            configurable: true
        });

        win.Object.defineProperty(win.Node.prototype, 'nextSibling', {
            get: function() {
                var nextSibling = this.nextElementSibling;
                if (nextSibling == null && this.parentNode.children.length === 1) {
                    var nextSiblings = this.parentNode.childNodes;
                    for (var i = 0; i < nextSiblings.length; i++) {
                        if (this == nextSiblings[i] && nextSiblings[i + 1]) {
                            nextSibling = nextSiblings[i + 1];
                            break;
                        }
                    }
                };
                return nextSibling;
            },
            enumerable: true,
            configurable: true
        });

        win.Object.defineProperty(win.Node.prototype, 'preSibling', {
            get: function() {
                return this.preElementSibling;
            },
            enumerable: true,
            configurable: true
        });

        win.Object.defineProperty(win.Node.prototype, 'uniqueID', {
            get: function() {
                var ret;
                if (this._uniqueID) {
                    return this._uniqueID;
                }
                if (win.yspUniqueIDCount) {
                    ret = 'ysp_uniqueID' + win.yspUniqueIDCount++;
                } else {
                    ret = 'ysp_uniqueID0';
                    win.yspUniqueIDCount = 1;
                }
                this._uniqueID = ret;
                win.yspUniqueIDMap = win.yspUniqueIDMap || {};
                win.yspUniqueIDMap[ret] = this;
                return ret;
            },
            enumerable: true,
            configurable: true
        });

        win.Object.defineProperty(win.Document.prototype, 'parentWindow', {
            get: function() {
                return this.defaultView.parent;
            },
            enumerable: true,
            configurable: true
        });
    } catch (e) {
        console.log('报错啦');
    }


    // win.Object.defineProperty(win.Node.prototype, 'currentStyle', {
    //     get: function() {
    //         return win.getComputedStyle(this, '');
    //     }
    // });

    // win.Object.defineProperty(win.Node.prototype, 'runtimeStyle', {
    //     get: function() {
    //         // return win.getComputedStyle(this);
    //         return this.style;
    //     }
    // });

    // win.Object.defineProperty(win.CSSStyleSheet.prototype, 'owningElement', {
    //     get: function() {
    //         return this.ownerNode;
    //     }
    // });

    // win.Object.defineProperty(win.HTMLElement.prototype, 'all', {
    //     get: function() {
    //         var allNodes = [].slice.call(this.querySelectorAll('*'));
    //         var ret = {};
    //         var validNodes = [];
    //         allNodes.forEach(function(node) {
    //             if (node.id || node.name) {
    //                 if (node.id) {
    //                     ret[node.id] = node;
    //                 } else {
    //                     ret[node.name] = node;
    //                 }
    //                 validNodes.push(node);
    //             }

    //         }, this);

    //         ret.tags = function(tagName) {
    //             return validNodes.filter(function(node) {
    //                 return node.tagName === tagName.trim();
    //             })
    //         }

    //         return ret;
    //     }
    // });
});


ysp.appMain.resolveCompatibility('showModalDialog', function(win) {
    //showModalDialog
    win.showModalDialog = function(url, params) {
        win.open.call(win, url);
        win._dialogArguments = params;
    };

    if (win.opener) {
        win.dialogArguments = win.opener._dialogArguments;
    }
});


ysp.appMain.resolveCompatibility('events', function(win) {
    //event
    win.attachEvent = function(type, cb) {
        if (type.indexOf('on') === 0) {
            type = type.substr(2);
        }
        win.addEventListener(type, cb);
    };

    win.detachEvent = function(type, cb) {
        if (type.indexOf('on') === 0) {
            type = type.substr(2);
        }
        win.removeEventListener(type, cb);
    };

    win.fireEvent = function(type) {
        if (type.indexOf('on') === 0) {
            type = type.substr(2);
        }
        win.dispatchEvent(new win.Event(type));
    };

    win.Node.prototype.attachEvent = function(type, cb) {
        if (type.indexOf('on') === 0) {
            type = type.substr(2);
        }
        this.addEventListener(type, cb);
    };

    win.Node.prototype.detachEvent = function(type, cb) {
        if (type.indexOf('on') === 0) {
            type = type.substr(2);
        }
        this.removeEventListener(type, cb);
    };

    win.Node.prototype.fireEvent = function(type) {
        if (type.indexOf('on') === 0) {
            type = type.substr(2);
        }
        this.dispatchEvent(new win.Event(type));
    };
});

ysp.appMain.resolveCompatibility('element', function(win) {
    //DOM
    var _getElementById = win.document.getElementById;
    var _getElementsByName = win.document.getElementsByName;

    win.document.getElementById = function(id) {
        if (win.yspUniqueIDMap && win.yspUniqueIDMap[id]) {
            return win.yspUniqueIDMap[id];
        }
        var ret = _getElementById.call(win.document, id);
        if (!ret) {
            ret = _getElementsByName.call(win.document, id)[0];
        }
        return ret;
    }

    win.document.getElementsByName = function(id) {
        var ret = _getElementsByName.call(win.document, id);
        if (!ret.length) {
            // ret = _getElementById.call(win.document, id);
            ret = win.document.querySelectorAll('#' + id);
            return ret;
        }
        return ret;
    }

    var _createElement = win.document.createElement;
    win.document.createElement = function(str) {
        try {
            var elem = _createElement.call(win.document, str);
            return elem;
        } catch (e) {
            console.warn('can not create element directly');
        }

        try {
            var tags = ['div', 'tr', 'tbody', 'table'];
            var container;
            var ret;

            tags.some(function(tag) {
                container = _createElement.call(win.document, tag);
                container.innerHTML = str;
                if (container.children[0]) {
                    ret = container.children[0];
                    return true;
                } else {
                    console.warn('can not create element in ' + tag);
                    return false;
                }
            });

            if (!ret) {
                console.warn('can not create element with ' + str);
            }

            return ret;

        } catch (e) {}

    };


    // win.Object.defineProperty(win.HTMLElement.prototype,'height',{
    // 	get: function(){
    // 		return this.style.height;
    // 	},
    // 	set: function(h){
    // 		this.style.height = h;
    // 	},
    // 	enumerable: true,
    // 	configurable: true
    // });

    // win.Object.defineProperty(win.HTMLElement.prototype,'width',{
    // 	get: function(){
    // 		return this.style.width;
    // 	},
    // 	set: function(h){
    // 		this.style.width = h;
    // 	},
    // 	enumerable: true,
    // 	configurable: true
    // });
});