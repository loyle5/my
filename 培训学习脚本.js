// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.do1.com.cn/v_*
// @grant        none
// @include      https://qy.do1.com.cn/*
// @require    https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'https://github.com/loyle5/my/raw/master/ques.json',
        success: function (data) {
            console.log(data.length)
            setTimeout(function () {
                var next = document.getElementsByClassName("next_button")[0];
                next.onclick = function () {
                    console.clear();
                    var q = document.getElementsByClassName("subject")[0].innerText;
                    var qList = data;
                    for (var i = 0; i < qList.length; i++) {
                        if (q.indexOf(qList[i].content) > -1) {
                            var optionList = qList[i].optionList;
                            for (var j = 0; j < optionList.length; j++) {
                                if (optionList[j].isAnswer === "1") {
                                    console.log(optionList[j].content);
                                }
                            }
                        }
                    }
                }
                var previous = document.getElementsByClassName("previous_button")[0];
                previous.onclick = function () {
                    console.clear();
                    var q = document.getElementsByClassName("subject")[0].innerText;
                    var qList = data;
                    for (var i = 0; i < qList.length; i++) {
                        if (q.indexOf(qList[i].content) > -1) {
                            var optionList = qList[i].optionList;
                            for (var j = 0; j < optionList.length; j++) {
                                if (optionList[j].isAnswer === "1") {
                                    console.log(optionList[j].content);
                                }
                            }
                        }
                    }
                }
            }, 2000);
        },
        error: function (data) {
            console.log("网络错误");
        }
    });
})();