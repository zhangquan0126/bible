
function convert()
{
    const _NoValue = "_NO_VALUE_"
    var markup = {
        date: _NoValue,
        weekNum: _NoValue,
        dayNum: _NoValue,
        bibleVerses: [_NoValue, _NoValue],
        url: _NoValue,
        title: _NoValue,        
        question: _NoValue,
        GodStories: [ ],
        myStories: [ ]
    };
    
    var day1 = new Date(2018, 0, 21);
    var tmpStr = ""; 
    var tmpPos = -1;
    var question = "";
    var readingGodStories = 0;
    var readingMyStories = 0;

    //Get the original plain text, and break into lines
    var input = document.getElementById("input");
    var inputText = input.value; 
    var inputTextLines = inputText.split("\n");

    //Patter matching for each line
    for (i = 0; i < inputTextLines.length; i++) { 
        text = inputTextLines[i];

        //Replace some punctuations
        text = text.replace(/,/g, "，");
        text = text.replace(/[?]/g, "？");
        text = text.replace(/:/g, "：");



        //== log: write back to the output
        //document.getElementById("markup").value += text + "\n";

        //Title: e.g. 第 67 週 第 1 天 亞哈斯王
        if (markup.weekNum == _NoValue) {
            text = text.replace(/ /g,"");
            tmpStr = text.slice(0,1);
            tmpPos = text.search("週第");
            if (( tmpStr == "第") && (tmpPos > 0) ){
                markup.weekNum = text.slice(1, tmpPos);
                markup.dayNum = text.slice(tmpPos+2, text.search("天"));
                markup.title = text.slice(text.search("天")+1);
                markup.url = "/daily/wk" + markup.weekNum + "-day" + markup.dayNum + "-daily.html";
                var newDate = day1.getTime();
                newDate += ((markup.weekNum-1)*7+(markup.dayNum-1))*24*60*60*1000;
                day1.setTime(newDate);
                markup.date =day1.getFullYear() + "-" + (day1.getMonth()+1) + "-" + (day1.getDate()+1);   
            }
        }
        //Question: e.g. 問題:約坦和亞哈斯兩個王有和異同?
        if (markup.question == _NoValue){
            if (text.indexOf("問題",0) == 0) {
                markup.question = text;
                console.log(question);
            }
        }

        //Bible Verses: e.g. 
        //讀經:歷代志下 27-28
        if (text.indexOf("讀經：",0) == 0) {
            readingGodStories = 0;
            readingMyStories = 0;
        }

        //God's Stories: e.g. 
        //默想:神的故事
        //• 約坦在耶路撒冷做王十六年,行耶和華眼中看為正的事,只是不入耶和華的殿。百姓還行邪僻的事。
        //• 約坦兒子亞哈斯接續他,在耶路撒冷做王十六年。不像他祖大衛行耶和華眼中看為正的事。
        //• 耶和華神將亞哈斯交在亞蘭王手裡,亞蘭王打敗他。神又將他交在以色列王手裡,以色列王向他大行戮。
        //• 亞哈斯王差遣人去見亞述諸王,求他們幫助,亞述王提革拉毗尼色上來,卻沒有幫
        //助他,反倒欺凌他。
        //• 亞哈斯王在急難的時候,越發得罪耶和華,祭祀攻擊他的大馬士革之神。
        if (markup.GodStories.length == 0){
            if (text.indexOf("默想：神的故事",0) == 0)  {
                readingGodStories = 1;
                markup.GodStories[0] = "";
            }

        }

        if (readingGodStories == 1) {
            //Add a new line
            if (text.indexOf("•",0) == 0){
                tmpPos = markup.GodStories.length;
                markup.GodStories[tmpPos] = text;
            }
            //Append current line
            else {
                tmpPos = markup.GodStories.length - 1;
                markup.GodStories[tmpPos] += text;
            }
        }

        //My Stories: e.g. 
        //默想:我的故事
        //• 【價值我定位】約坦在耶和華他神面前行正道,以致日漸強盛。我們如何看待自己所
        //得的恩賜和生活中的富足強盛?請數算神對我所賜的恩典。
        //• 【價值定位】亞哈斯王在急難的時候,越發得罪耶和華,祭祀攻擊他的大馬士革之
        //神。為什麼我們有時候在困難面前會求告神,而有時候卻會更加遠離神?
        if (markup.myStories.length == 0){
            if (text.indexOf("默想：我的故事",0) == 0)  {
                readingMyStories = 1;
                readingGodStories = 0;
                markup.myStories[0] = "";
            }
        }

        if (readingMyStories == 1) {
            //Add a new line
            if (text.indexOf("•",0) == 0){
                tmpPos = markup.myStories.length;
                markup.myStories[tmpPos] = text;
            }
            //Append current line
            else {
                tmpPos = markup.myStories.length - 1;
                markup.myStories[tmpPos] += text;
            }
        }

        //The rest can be ignored
        //讀經:雅歌 7
        //禱告:
        //筆記與生活回應:

    } 
    
    generateMarkup(markup);
    console.log(markup);

}

/*
---
layout: daily2
title: "第74周第1天因骄致祸"
date: 2019-06-17
categories: daily
permalink: /daily/wk74-day1-daily.html
weekNum: 74
dayNum: 1
---

### 问题：亚述王的骄傲的后果是什么？
 
{%- include BibleLinks.html -%}

### 默想：神的故事
+ 希西家王十四年，亚述王西拿基立上来攻击犹大的一切坚固城，将城攻取。

### 默想：我的故事
+ 【价值定位】耶和华说让人记得祂早先所做的，古时所立的，以至于敬畏祂。我们从圣经中可以知道神的作为，也可以纪念耶和华在我们身上的作为而知道神是如何的爱我们。默想神的作为，并向神献上感恩。

### 祷告：

### 笔记与回应：
*/
function generateMarkup(markup){
    var outputMarkup = [];
    var lineNum = 0;

    //Header
    /*
    ---
    layout: daily2
    title: "第74週第1天因骄致祸"
    date: 2019-06-17
    categories: daily
    permalink: /daily/wk74-day1-daily.html
    weekNum: 74
    dayNum: 1
    ---
    */
    outputMarkup[lineNum++] = "---";
    outputMarkup[lineNum++] = "layout: daily2";
    outputMarkup[lineNum++] = "title: 第" + markup.weekNum + "週第" + markup.dayNum + "天 " + markup.title; 
    outputMarkup[lineNum++] = "date: " + markup.date; 
    outputMarkup[lineNum++] = "categories: daily"; 
    outputMarkup[lineNum++] = "permalink: " + markup.url; 
    outputMarkup[lineNum++] = "weekNum: " + markup.weekNum; 
    outputMarkup[lineNum++] = "dayNum: " + markup.dayNum; 
    outputMarkup[lineNum++] = "---"; 
    outputMarkup[lineNum++] = ""; 

    //Question
    //### 问题：亚述王的骄傲的后果是什么？
    outputMarkup[lineNum++] = "### " + markup.question; //lineNum +=1;
    outputMarkup[lineNum++] = "";
    //lineNum++;

    //Bible Verses
    outputMarkup[lineNum++] = "{%- include BibleLinks.html -%}";
    outputMarkup[lineNum++] = "";

    //God's Stories
    //### 默想：神的故事
    //+ 希西家王十四年，亚述王西拿基立上来攻击犹大的一切坚固城，将城攻取。
    outputMarkup[lineNum++] = "### " + markup.GodStories[0];
    for (i = 1; i<markup.GodStories.length; i++){
        outputMarkup[lineNum++] = markup.GodStories[i].replace("•", "+");
        outputMarkup[lineNum++] = "";
    }
    outputMarkup[lineNum++] = "";

    //My Stories
    //### 默想：我的故事
    //+ 【价值定位】耶和华说让人记得祂早先所做的，古时所立的，以至于敬畏祂。我们从圣经中可以知道神的作为，也可以纪念耶和华在我们身上的作为而知道神是如何的爱我们。默想神的作为，并向神献上感恩。
    outputMarkup[lineNum++] = "### " + markup.myStories[0];
    for (i = 1; i<markup.myStories.length; i++){
        outputMarkup[lineNum++] = markup.myStories[i].replace("•", "+");
        outputMarkup[lineNum++] = "";
    }
    outputMarkup[lineNum++] = "";

    //The Rest
    //### 祷告：
    //### 笔记与回应：
    outputMarkup[lineNum++] = "### 禱告：";
    outputMarkup[lineNum++] = "";
    outputMarkup[lineNum++] = "### 筆記與生活回應：";
    outputMarkup[lineNum++] = "";

    //Display converted markup text
    for (i = 0; i < outputMarkup.length; i++) { 
        document.getElementById("markup").value += outputMarkup[i] + "\n";
    }
}

