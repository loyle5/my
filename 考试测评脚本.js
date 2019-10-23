var data;
$.ajax({
    type: 'get',
    dataType: 'json',
    url: 'https://raw.githubusercontent.com/loyle5/my/master/ques.json',
    success: function (d) {
        console.log(d.length)
        data = d;
    },
    error: function (data) {
        console.log("网络错误");
    }
});

function backQuestion() {
    //当前页小于第二页
    if (currentIndex < 2) {
        return;
    }
    //进入第一页
    if (currentIndex == 2) {
        $("#btn_div").html(backBtn0 + answerBtn + nextBtn);
    } else {
        $("#btn_div").html(backBtn1 + answerBtn + nextBtn);
    }
    $("#questionIndex" + currentIndex).hide(); //隐藏此页
    currentIndex--;
    $("#questionIndex" + currentIndex).show(); //显示上一页
    $("#questionNum").html('<i class="cblue">' + currentIndex + '</i>/' + questionCount);
    getan(currentIndex);
}
function nextQuestion() {
    //当前页大于等于总页数
    if (currentIndex >= questionCount) {
        return;
    }
    //进入最后一页
    if (currentIndex == questionCount - 1) {
        $("#btn_div").html(backBtn1 + answerBtn + saveBtn);
    } else {
        $("#btn_div").html(backBtn1 + answerBtn + nextBtn);
    }
    $("#questionIndex" + currentIndex).hide(); //隐藏此页
    currentIndex++;
    $("#questionIndex" + currentIndex).show(); //显示下一页
    $("#questionNum").html('<i class="cblue">' + currentIndex + '</i>/' + questionCount);
    addAnswerCache();
    getan(currentIndex);
}

function getan(id) {
    var q = document.getElementById("questionIndex" + id).innerText.replace(/\s+/g, "");
    console.clear();
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