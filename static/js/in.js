//*** 獲取CSS style
function getcssbyobject(object, style) {
//get CSS Style by tag object
    //默認只要傳入tag 的值，若是其他的要先先getby什麼什麼
    if (window.getComputedStyle) {
        //這樣就可以獲取"內聯(行內)樣式"以外的樣式
        //not IE
        //console.log(str);
        //console.log(typeof str);
        return getComputedStyle(object)[style];
    } else {
        //IE
        return object.currentStyle[style];
    }
}

//*** 設定CSS style
function setcssbyobject(object, setstyle, setstr) {
//set CSS style
//     console.log(str);
//     console.log(setstyle);
//     console.log(setstr);

    eval("object.style." + setstyle + "=\"" + setstr + "\"");

}

//函數使用window.onload方法
function wo(onload_function) {
    //==轉換相同型別後比較，===不轉型別，型別不同直接false
    if (typeof onload_function === "function") {
        window.onload = onload_function;
    } else {
        console.log("$(onload_function)type error. exception:需要傳入function型態調用window.onload=")
    }
}

//*** 透過ID獲取元素
function $ByID(object_or_string) {
    //因為使用ID不需要透過此函數，可直接調用；亦提供方法
    // document.getElementById()
    // document.getElementsByClassName()
    // document.getElementsByTagName()
    // document.getElementsByName()
    // document.getElementsByTagNameNS()
    // document.getSelection()
    if (typeof object_or_string === "string") {
        // console.log("true");
        return document.getElementById(object_or_string);
    }
    if (typeof object_or_string === "object") {
        return object_or_string;
    }
}

//*** 透過ClassName獲取元素
function $ByClassName(Classname_String, index) {
    //因為使用ID不需要透過此函數，可直接調用；亦提供方法
    // document.getElementById()
    // document.getElementsByClassName()
    // document.getElementsByTagName()
    // document.getElementsByName()
    // document.getElementsByTagNameNS()
    // document.getSelection()
    if (typeof index === "undefined") {
        // console.log(typeof index);
        // document.getElementsByTagName(TagName_String)
        var list = [];
        for (var i = 0; i < document.getElementsByClassName(Classname_String).length; i++) {
            list[i] = document.getElementsByClassName(Classname_String)[i];
        }
        return list;
    }
    if (typeof index === "object") {
        //指定為陣列
        var list = [];
        index.forEach(function (e, index) {
            //若傳入亂序[5,2,1,3,4]
            //則list內的元件會照傳入的array重新排序
            //document.getElementsByClassName第5個排到第0個去
            list[index] = document.getElementsByClassName(Classname_String)[e];
        })
        return list;//回傳陣列
    }
    if (typeof index === "number") {
        return document.getElementsByClassName(Classname_String)[parseInt(index)]//無條件捨去取整
    }
    if (typeof index === "string") {
        return document.getElementsByClassName(Classname_String)[parseInt(index)]//無條件捨去取整
    }
}

//*** 透過TagName獲取元素
function $ByTagName(TagName_String, index) {
    //因為使用ID不需要透過此函數，可直接調用；亦提供方法
    // document.getElementById()
    // document.getElementsByClassName()
    // document.getElementsByTagName()
    // document.getElementsByName()
    // document.getElementsByTagNameNS()
    // document.getSelection()

    if (typeof index === "undefined") {
        // console.log(typeof index);
        // document.getElementsByTagName(TagName_String)
        var list = [];
        for (var i = 0; i < document.getElementsByTagName(TagName_String).length; i++) {
            list[i] = document.getElementsByTagName(TagName_String)[i];
        }
        return list;
    }
    if (typeof index === "object") {
        //指定為陣列
        var list = [];
        index.forEach(function (e, index) {
            //若傳入亂序[5,2,1,3,4]
            //則list內的元件會照傳入的array重新排序
            //document.getElementsByClassName第5個排到第0個去
            list[index] = document.getElementsByTagName(TagName_String)[e];
        })
        return list;//回傳陣列
    }
    if (typeof index === "number") {
        return document.getElementsByTagName(TagName_String)[parseInt(index)]//無條件捨去取整
    }
    if (typeof index === "string") {
        return document.getElementsByTagName(TagName_String)[parseInt(index)]//無條件捨去取整
    }
}

//*** 透過Name獲取元素
function $ByName(Name_String, index) {
    //因為使用ID不需要透過此函數，可直接調用；亦提供方法
    // document.getElementById()
    // document.getElementsByClassName()
    // document.getElementsByTagName()
    // document.getElementsByName()
    // document.getElementsByTagNameNS()
    // document.getSelection()
    if (typeof index === "undefined") {
        // console.log(typeof index);
        // document.getElementsByTagName(TagName_String)
        var list = [];
        for (var i = 0; i < document.getElementsByName(Name_String).length; i++) {
            list[i] = document.getElementsByName(Name_String)[i];
        }
        return list;
    }
    if (typeof index === "object") {
        //指定為陣列
        var list = [];
        index.forEach(function (e, index) {
            //若傳入亂序[5,2,1,3,4]
            //則list內的元件會照傳入的array重新排序
            //document.getElementsByClassName第5個排到第0個去
            list[index] = document.getElementsByName(Name_String)[e];
        })
        return list;//回傳陣列
    }
    if (typeof index === "number") {
        return document.getElementsByName(Name_String)[parseInt(index)]//無條件捨去取整
    }
    if (typeof index === "string") {
        return document.getElementsByName(Name_String)[parseInt(index)]//無條件捨去取整
    }
}

//未設定函數
function $ByTagNameNS() {
    //未設定此函數
    //因為使用ID不需要透過此函數，可直接調用；亦提供方法
    // document.getElementById()
    // document.getElementsByClassName()
    // document.getElementsByTagName()
    // document.getElementsByName()
    // document.getElementsByTagNameNS()
    // document.getSelection()
}

//創建數列陣列，從何開始，到哪結束，中間間隔
function to(start, end, sep) {
    // console.log(start)
    // console.log(end)
    // console.log(sep)
    //sep預設為1
    var arr = [];
    if (parseInt(sep) > 0) {
        var index = 0;
        for (var i = start; i < end + 1; i = i + sep) {
            arr[index] = i;
            index = index + 1;
        }
        return arr;
    }
    if (typeof sep === "undefined") {
        var index = 0;
        for (var i = start; i < end + 1; i = i + 1) {
            arr[index] = i;
            index = index + 1;
        }
        return arr;
    }
    return arr;
}

//創建數列陣列，從何開始，項數，中間間隔
function toNumberofitem(start, Numberofitem, sep) {
    // console.log(start)
    // console.log(end)
    // console.log(sep)
    //sep預設為1
    var arr = [];
    if (parseInt(sep) > 0) {
        var index = 0;
        for (var i = 0; i < Numberofitem; i = i + 1) {
            if (index == 0) {
                arr[index] = start;
            } else {
                arr[index] = arr[0] + index * sep;
            }
            index = index + 1;
        }
        return arr;
    }
    if (typeof sep === "undefined") {
        var index = 0;
        for (var i = 0; i < Numberofitem; i = i + 1) {
            if (index == 0) {
                arr[index] = start;
            } else {
                arr[index] = arr[0] + index * 1;
            }
            index = index + 1;
        }
        return arr;
    }
}

//Onclick事件封裝
function $OnClick(object, onclick_function, isArray_true_or_false) {
    //若傳入陣列，需設定參數為true or false
    if (isArray_true_or_false) {
        object.forEach(function (e) {
            e.onclick = onclick_function;
        })
    } else {
        object.onclick = onclick_function;
    }
}

//onmouseover事件封裝
function $onmouseover(object, onclick_function, isArray_true_or_false) {
    //若傳入陣列，需設定參數為true or false
    if (isArray_true_or_false) {
        object.forEach(function (e) {
            e.onmouseover = onclick_function;
        })
    } else {
        object.onmouseover = onclick_function;
    }
}

//onmouseleave事件封裝
function $onmouseleave(object, onclick_function, isArray_true_or_false) {
    //若傳入陣列，需設定參數為true or false
    if (isArray_true_or_false) {
        object.forEach(function (e) {
            e.onmouseleave = onclick_function;
        })
    } else {
        object.onmouseleave = onclick_function;
    }
}

//去除文本節點外的所有子節點，直接對document操作
function $removechildNodeExceptTextNode(object) {
    for (var i = 0; i < object.childNodes.length; i++) {
        if ("#text" === object.childNodes[i].nodeName) {
            object.removeChild(object.childNodes[i]);
            i = i - 1;
        }
    }
}

//打印去除文本節點外的所有子節點，並直接對傳入的節點做操作
function $getchildNodeExceptTextNode(object) {
    var origin = object.cloneNode(true);
    var newobject = object.cloneNode(true);
    for (var i = 0; i < newobject.childNodes.length; i++) {
        if ("#text" === newobject.childNodes[i].nodeName) {
            newobject.removeChild(newobject.childNodes[i]);
            i = i - 1;
        }
    }
    console.log("展示去除文本節點外所有子節點:");
    console.log(newobject.childNodes);
    if ("undefined" === typeof object.childNodes[0]) {
        return object;
    }
        return object.childNodes[0].parentNode;
}

//test


//取得所有子標籤名

//取得所有子孫標籤名









