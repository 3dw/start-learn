(function(){"use strict";var a={2928:function(a,e,t){var i=t(5130),s=t(6768);const d={key:0,class:"ui menu"};function n(a,e,t,i,n,o){const r=(0,s.g2)("router-link"),l=(0,s.g2)("router-view"),v=(0,s.g2)("ad");return(0,s.uX)(),(0,s.CE)(s.FK,null,[a.$route.path.startsWith("/embed")?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("nav",d,[(0,s.bF)(r,{class:"item",to:"/"},{default:(0,s.k6)((()=>e[0]||(e[0]=[(0,s.Lk)("i",{class:"home icon"},null,-1),(0,s.eW)("自學是什麼")]))),_:1}),(0,s.bF)(r,{class:"item",to:"/faq"},{default:(0,s.k6)((()=>e[1]||(e[1]=[(0,s.Lk)("i",{class:"question circle icon"},null,-1),(0,s.eW)("問答集")]))),_:1}),(0,s.bF)(r,{class:"item",to:"/four"},{default:(0,s.k6)((()=>e[2]||(e[2]=[(0,s.Lk)("i",{class:"tasks icon"},null,-1),(0,s.eW)("四階段")]))),_:1}),(0,s.bF)(r,{class:"item fat-only",to:"/outer"},{default:(0,s.k6)((()=>e[3]||(e[3]=[(0,s.Lk)("i",{class:"book icon"},null,-1),(0,s.eW)("資源推薦")]))),_:1}),(0,s.bF)(r,{class:"item",to:"/github"},{default:(0,s.k6)((()=>e[4]||(e[4]=[(0,s.Lk)("i",{class:"github icon"},null,-1),(0,s.Lk)("span",{class:"fat-only"},"本專案源碼",-1)]))),_:1})])),(0,s.bF)(l,{faqs:a.faqs},null,8,["faqs"]),a.$route.path.startsWith("/embed")?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(v,{key:1,class:"fat-only"}))],64)}const o={class:"hello"};function r(a,e,t,i,d,n){return(0,s.uX)(),(0,s.CE)("div",o,e[0]||(e[0]=[(0,s.Lk)("div",{id:"ad"},[(0,s.Lk)("a",{href:"https://www.alearn.org.tw",target:"_blank",rel:"noopener noreferrer"},[(0,s.Lk)("img",{class:"ad",src:"/ad-be.jpg",alt:"本站由自主學習促進會製作"}),(0,s.eW)("本站由自主學習促進會製作")])],-1)]))}var l={name:"AdComp",data(){return{}}},v=t(1241);const c=(0,v.A)(l,[["render",r],["__scopeId","data-v-2b9743c6"]]);var u=c,f=t(4373),b=(0,s.pM)({name:"AutoMap",components:{Ad:u},data(){return{faqs:[],marqueeStyle:{animationDuration:"60s"}}},methods:{parse:a=>"您想知道"+a.replace("？","嗎？"),async fetchFaqs(){try{const a=await f.A.get("https://members-backend.alearn13994229.workers.dev/api/Faq");this.faqs=a.data}catch(a){console.error("獲取FAQ資料失敗:",a)}}},mounted(){this.fetchFaqs()}});const h=(0,v.A)(b,[["render",n]]);var m=h,p=t(4458);(0,p.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(a){console.error("Error during service worker registration:",a)}});var g=t(1387);const k={class:"home"};function L(a,e,t,i,d,n){const o=(0,s.g2)("HelloWorld");return(0,s.uX)(),(0,s.CE)("div",k,[(0,s.bF)(o)])}var w=t(4232),y=t(3153),C=t(5466);const F={class:"hello"},A={class:"ui segment container"},_={class:"ui input"},E={class:"result"},W={key:0},j={key:1},O={class:"ui buttons"},q={class:"ui segment container"},x={class:"ui list"},S={class:"item"},M={class:"list"},P={class:"item"},N={class:"ui list"},T={class:"item"},I={class:"list"},R={class:"item"},X={class:"ui list"},Q={class:"item"},H={class:"list"},K={class:"item"};function U(a,e,t,d,n,o){const r=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",F,[(0,s.Lk)("div",A,[a.showLineQRCode?((0,s.uX)(),(0,s.CE)("img",{key:1,class:"clickable",id:"logo",alt:"Logo",src:C,onClick:e[1]||(e[1]=e=>a.showLineQRCode=!1)})):((0,s.uX)(),(0,s.CE)("img",{key:0,class:"clickable",id:"logo",alt:"Logo",src:y,onClick:e[0]||(e[0]=e=>a.showLineQRCode=!0)})),e[12]||(e[12]=(0,s.Lk)("h2",{class:"center aligned ui header"},[(0,s.eW)("自學AI"),(0,s.Lk)("div",{class:"center aligned ui sub header"},"以自學問答集為基礎，提供更即時的回答"),(0,s.Lk)("div",{class:"center aligned ui sub header"},[(0,s.Lk)("a",{href:"https://lin.ee/CashU46",target:"_blank",rel:"noopener noreferrer"},"將自學AI加入LINE好友")])],-1)),(0,s.Lk)("div",_,[(0,s.bo)((0,s.Lk)("input",{autofocus:"",type:"text",placeholder:"問AI關於自學的任何問題...","onUpdate:modelValue":e[2]||(e[2]=e=>a.message=e),onKeyup:e[3]||(e[3]=(0,i.jR)(((...e)=>a.sendMessage&&a.sendMessage(...e)),["enter"]))},null,544),[[i.Jo,a.message]]),(0,s.Lk)("button",{class:"ui primary button",onClick:e[4]||(e[4]=(...e)=>a.sendMessage&&a.sendMessage(...e))},"送出")]),(0,s.Lk)("div",E,[""===a.result&&""!==a.message&&a.isLoading?((0,s.uX)(),(0,s.CE)("p",W,"載入中，請稍候...")):""!==a.result?((0,s.uX)(),(0,s.CE)("div",j,[(0,s.Lk)("p",null,(0,w.v_)(a.parseResult(a.result)),1),e[9]||(e[9]=(0,s.Lk)("br",null,null,-1)),e[10]||(e[10]=(0,s.Lk)("br",null,null,-1)),e[11]||(e[11]=(0,s.Lk)("p",null,"您覺得這個回答怎麼樣呢？",-1)),(0,s.Lk)("div",O,[(0,s.Lk)("button",{class:"ui green button",onClick:e[5]||(e[5]=e=>a.sendFeedback("good"))},e[7]||(e[7]=[(0,s.Lk)("i",{class:"thumbs up icon"},null,-1),(0,s.eW)("很棒")])),(0,s.Lk)("button",{class:"ui red button",onClick:e[6]||(e[6]=e=>a.sendFeedback("bad"))},e[8]||(e[8]=[(0,s.Lk)("i",{class:"thumbs down icon"},null,-1),(0,s.eW)("不佳")]))])])):(0,s.Q3)("",!0)])]),(0,s.Lk)("div",q,[e[35]||(e[35]=(0,s.Fv)('<h1 class="ui header" data-v-267afb52>自學<sub class="header" data-v-267afb52>正式名稱為「非學校型態實驗教育」</sub></h1><section data-v-267afb52><h2 class="ui header" data-v-267afb52>1. 一些關於自學生的刻板印象🥸</h2><div class="ui list" data-v-267afb52><div class="item" data-v-267afb52>1.1 都是天才?? ➡️ 不一定!</div><div class="item" data-v-267afb52>1.2 家裡很有錢?? ➡️ 不一定!</div><div class="item" data-v-267afb52>1.3 沒有朋友?? ➡️ 完全不是!</div><div class="item" data-v-267afb52>1.4 社交能力差?? ➡️ 因人而異!</div><div class="item" data-v-267afb52>1.5 自制力很強?? ➡️ 因人而異!</div></div></section>',2)),(0,s.Lk)("section",null,[e[17]||(e[17]=(0,s.Lk)("h2",{class:"ui header"},"2. 自學申請流程🛝",-1)),(0,s.Lk)("div",x,[e[16]||(e[16]=(0,s.Fv)('<div class="item" data-v-267afb52><div class="header" data-v-267afb52>2.1 申請時間</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>2.1.1 每年四月和十月<div class="description" data-v-267afb52><a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0070059" data-v-267afb52> 高級中等以下教育階段非學校型態實驗教育實施條例</a>第六條：前條申請人應填具申請書，並檢附實驗教育計畫，至遲於每年<span class="bold text-underline" data-v-267afb52>四月三十日</span>或<span class="bold text-underline" data-v-267afb52>十月三十一日</span>前提出申請。</div></div></div></div><div class="item" data-v-267afb52><div class="header" data-v-267afb52>2.2 申請材料</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>2.2.1 申請書 ➡️ 參考<a href="https://www.homeschool.tw/p/blog-page.html" data-v-267afb52>一週完成自學申請書</a></div><div class="item" data-v-267afb52>2.2.2 實驗教育計畫書 ➡️ 參考<a href="https://youtu.be/SUoT5P8_UOI?si=zdHxoRdRoCadmYMc" data-v-267afb52>談學習計畫-朱佳仁主講</a></div></div></div><div class="item" data-v-267afb52><div class="header" data-v-267afb52>2.3 申請人</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>2.3.1 國小、國中、高中職，由法定代理人提出申請。因此，家長是申請人。想要申請自學的話，需要先和家長達成共識。</div></div></div><div class="item" data-v-267afb52><div class="header" data-v-267afb52>2.4 審核與補件</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>2.4.1 各縣市教育局審核</div><div class="item" data-v-267afb52>2.4.2 初審不通過 ➡️ 可申請補件</div><div class="item" data-v-267afb52>2.4.3 初審通過 ➡️ 受到申請成功通知</div></div></div>',4)),(0,s.Lk)("div",S,[e[15]||(e[15]=(0,s.Lk)("div",{class:"header"},"2.5 延伸閱讀",-1)),(0,s.Lk)("div",M,[(0,s.Lk)("div",P,[e[14]||(e[14]=(0,s.eW)("2.5.1 ")),(0,s.bF)(r,{to:"/senior"},{default:(0,s.k6)((()=>e[13]||(e[13]=[(0,s.eW)("「第一次申請高中自學就上手」工作坊記錄")]))),_:1})])])])])]),e[36]||(e[36]=(0,s.Fv)('<section data-v-267afb52><h2 class="ui header" data-v-267afb52>3. 自學的種類👨‍👩‍👧‍👦</h2><div class="ui list" data-v-267afb52><div class="item" data-v-267afb52><div class="header" data-v-267afb52>3.1 個人自學</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>3.1.1 與學校合作：掛籍在學校，可完全在家自學，也可部分時間在學校上課，部分時間自學</div><div class="item" data-v-267afb52>3.1.2 教育部掛籍：在教育部註冊，完全在家自學</div></div></div><div class="item" data-v-267afb52><div class="header" data-v-267afb52>3.2 團體自學</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>3.2.1 自學生團體：多個家庭或學生組成學習小組</div><div class="item" data-v-267afb52>3.2.2 分攤學費：共同聘請老師或分享資源，降低成本</div></div></div><div class="item" data-v-267afb52><div class="header" data-v-267afb52>3.3 機構自學</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>由專業教育機構提供課程和資源，計畫書需經過審核</div></div></div></div></section>',1)),(0,s.Lk)("section",null,[e[24]||(e[24]=(0,s.Lk)("h2",{class:"ui header"},"4. 自學生活🧞‍♂️",-1)),(0,s.Lk)("div",N,[e[22]||(e[22]=(0,s.Fv)('<div class="item" data-v-267afb52><div class="header" data-v-267afb52>4.1 成績評定</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>4.1.1 成果報告 ➡️ 每學年結束後兩個月內(即每年九月底前)</div><div class="item" data-v-267afb52>4.1.2 評分標準 ➡️ 依自學計畫</div></div></div><div class="item" data-v-267afb52><div class="header" data-v-267afb52>4.2 自學課程🐙</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>4.2.1 線上課程：如MOOCs、Khan Academy等平台</div><div class="item" data-v-267afb52>4.2.2 實體課程：參加工作坊、講座或社區大學課程、到大學旁聽課程，也可自行設計課程</div></div></div>',2)),(0,s.Lk)("div",T,[e[21]||(e[21]=(0,s.Lk)("div",{class:"header"},"4.3 自學資源🌵",-1)),(0,s.Lk)("div",I,[e[20]||(e[20]=(0,s.Lk)("div",{class:"item"},[(0,s.eW)("4.3.1 政府補助"),(0,s.Lk)("div",{class:"description"},"目前台灣高中職階段有政府補助")],-1)),(0,s.Lk)("div",R,[e[19]||(e[19]=(0,s.eW)("4.3.2 ")),(0,s.bF)(r,{to:"/outer"},{default:(0,s.k6)((()=>e[18]||(e[18]=[(0,s.eW)("線上資源：包括免費教材、教學影片和學習社群")]))),_:1})])])]),e[23]||(e[23]=(0,s.Fv)('<div class="item" data-v-267afb52><div class="header" data-v-267afb52>4.4 社交活動🤽‍♀️</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>4.4.1 自學生活動：聚會、讀書會或主題討論</div><div class="item" data-v-267afb52>4.4.2 外部講座與活動：參與各種公開活動，拓展視野</div><div class="item" data-v-267afb52>4.4.3 競賽：參加各種競賽，如科學展覽、數學競賽等</div></div></div>',1))])]),e[37]||(e[37]=(0,s.Fv)('<section data-v-267afb52><h2 class="ui header" data-v-267afb52>5. 自學的挑戰🧨</h2><div class="ui list" data-v-267afb52><div class="item" data-v-267afb52><div class="header" data-v-267afb52>5.1 撞牆期</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>5.1.1 不知道如何規畫：如果不知道自學的目標，可以參考<a href="https://www.youtube.com/watch?v=SUoT5P8_UOI&amp;list=PLebzuoh5ZI3JKOarYED1ASt2kG9g5sKFj" target="_blank" rel="noopener noreferrer" data-v-267afb52>談學習計畫-朱佳仁主講</a></div><div class="item" data-v-267afb52>5.1.2 不知道未來：如果不知道自學的未來，可以參考<a href="https://www.youtube.com/watch?v=ZPzqw3x05-g&amp;list=PLebzuoh5ZI3JKOarYED1ASt2kG9g5sKFj&amp;index=6" target="_blank" rel="noopener noreferrer" data-v-267afb52>如何成為未來職場需要的自由人才-唐鳳主講</a></div></div></div><div class="item" data-v-267afb52><div class="header" data-v-267afb52>5.2 家長的擔憂👀</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>5.2.1 不了解自學：可請家長參考<div class="description" data-v-267afb52><a href="https://www.alearn.org.tw/" data-v-267afb52>自主學習促進會</a></div></div><div class="item" data-v-267afb52>5.2.2 擔心社交問題：可請家長參考<div class="description" data-v-267afb52><a href="https://we.alearn.org.tw" data-v-267afb52>自學2.0</a></div></div></div></div></div></section><section data-v-267afb52><h2 class="ui header" data-v-267afb52>6. 自學的溝通🗣️</h2><div class="ui list" data-v-267afb52><div class="item" data-v-267afb52><div class="header" data-v-267afb52>6.1 與家長溝通</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>計劃與目標：計劃書的撰寫、家長的期望和孩子的興趣</div></div></div><div class="item" data-v-267afb52><div class="header" data-v-267afb52>6.2 與學校溝通</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>合作方式：掛籍在學校，可完全在家自學，也可部分時間在學校上課，部分時間自學</div></div></div></div></section>',2)),(0,s.Lk)("section",null,[e[30]||(e[30]=(0,s.Lk)("h2",{class:"ui header"},"7. 自學後的發展🎯",-1)),(0,s.Lk)("div",X,[e[29]||(e[29]=(0,s.Fv)('<div class="item" data-v-267afb52><div class="header" data-v-267afb52>7.1 畢業後的選擇</div><div class="list" data-v-267afb52><div class="item" data-v-267afb52>7.1.1 考大學</div><div class="item" data-v-267afb52>7.1.2 工作或實習</div></div></div>',1)),(0,s.Lk)("div",Q,[e[28]||(e[28]=(0,s.Lk)("div",{class:"header"},"7.2 自學經驗的影響",-1)),(0,s.Lk)("div",H,[(0,s.Lk)("div",K,[e[26]||(e[26]=(0,s.eW)("7.2.1 成熟度 ➡️ ")),(0,s.bF)(r,{to:"four"},{default:(0,s.k6)((()=>e[25]||(e[25]=[(0,s.eW)("學習自律四階段🐫")]))),_:1})]),e[27]||(e[27]=(0,s.Lk)("div",{class:"item"},"7.2.2 自我管理能力",-1))])])])]),(0,s.Lk)("section",null,[e[33]||(e[33]=(0,s.Lk)("h2",{class:"ui header"},"8. 問答集❤️‍🩹",-1)),(0,s.Lk)("p",null,[e[32]||(e[32]=(0,s.eW)("請參考 ➡️ ")),(0,s.bF)(r,{to:"faq"},{default:(0,s.k6)((()=>e[31]||(e[31]=[(0,s.eW)("自學問答集")]))),_:1})]),e[34]||(e[34]=(0,s.Fv)('<div class="ui divider" data-v-267afb52></div><h3 data-v-267afb52>找夥伴👫</h3><p data-v-267afb52>請參考 ➡️ <a href="https://we.alearn.org.tw" data-v-267afb52>自學2.0</a></p><div class="ui divider" data-v-267afb52></div><h3 data-v-267afb52>真人諮詢👩‍🏫</h3><p data-v-267afb52>請用「您居住的縣市」 + 「非學校」當關鍵字，即可查詢到教育局的相關業務單位，通常都會有聯絡電話。</p><div class="ui divider" data-v-267afb52></div><h3 data-v-267afb52>相關連結🪱</h3><div class="ui vertical large buttons" data-v-267afb52><a class="ui teal button" href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0070059" data-v-267afb52> 高級中等以下教育階段非學校型態實驗教育實施條例</a><a class="ui green button" href="https://www.alearn.org.tw" data-v-267afb52>自主學習促進會</a><a class="ui blue button" href="https://galacticproject.notion.site/d7477db76ecd4ff3b453a39ba21d97ef" data-v-267afb52>星河計畫：自學生經驗匯流</a></div>',9))])])])}t(4114);var B=(0,s.pM)({name:"HelloWorld",data(){return{showLineQRCode:!1,message:"",result:"",isLoading:!1}},methods:{sendMessage(){this.isLoading=!0,this.result="",console.log(this.message),this.message.endsWith("？")||(this.message+="？"),f.A.get("https://members-backend.alearn13994229.workers.dev/ai/"+this.message,{headers:{"Content-Type":"application/json"}}).then((a=>{console.log(a),this.result=a.data,this.isLoading=!1}))},parseResult(a){return"。"===a?"請說得詳細一點":a},sendFeedback(a){console.log(a),"good"===a?(console.log("good"),window.alert("感謝您的回饋！")):"bad"===a&&(console.log("bad"),window.confirm("請告訴我們哪裡做得不好，我們會努力改進！")?this.$router.push("/feedback"):window.alert("感謝您的回饋！"))}}});const D=(0,v.A)(B,[["render",U],["__scopeId","data-v-267afb52"]]);var z=D,G=(0,s.pM)({name:"HomeView",components:{HelloWorld:z}});const J=(0,v.A)(G,[["render",L]]);var Y=J;const Z=[{path:"/",name:"home",component:Y},{path:"/ans/:id",name:"answer",component:()=>t.e(594).then(t.bind(t,4392))},{path:"/faq",name:"faq",component:()=>t.e(594).then(t.bind(t,6863))},{path:"/four",name:"four",component:()=>t.e(594).then(t.bind(t,5022))},{path:"/senior",name:"senior",component:()=>t.e(594).then(t.bind(t,4921))},{path:"/outer",name:"outer",component:()=>t.e(594).then(t.bind(t,511))},{path:"/feedback",name:"feedback",component:()=>t.e(594).then(t.bind(t,2538))},{path:"/github",name:"github",component:()=>t.e(594).then(t.bind(t,2161))},{path:"/embed/ai",name:"aiembed",component:()=>t.e(272).then(t.bind(t,3177))}],$=(0,g.aE)({history:(0,g.LA)(),routes:Z});var V=$,aa=t(758);(0,i.Ef)(m).use(V).use(aa.Ay,{config:{id:"G-PYJRP1QSGE"}},V).mount("#app")},5466:function(a,e,t){a.exports=t.p+"img/autobot.3d79c2c9.png"},3153:function(a,e,t){a.exports=t.p+"img/logo.d05fb2e6.png"}},e={};function t(i){var s=e[i];if(void 0!==s)return s.exports;var d=e[i]={exports:{}};return a[i].call(d.exports,d,d.exports,t),d.exports}t.m=a,function(){var a=[];t.O=function(e,i,s,d){if(!i){var n=1/0;for(v=0;v<a.length;v++){i=a[v][0],s=a[v][1],d=a[v][2];for(var o=!0,r=0;r<i.length;r++)(!1&d||n>=d)&&Object.keys(t.O).every((function(a){return t.O[a](i[r])}))?i.splice(r--,1):(o=!1,d<n&&(n=d));if(o){a.splice(v--,1);var l=s();void 0!==l&&(e=l)}}return e}d=d||0;for(var v=a.length;v>0&&a[v-1][2]>d;v--)a[v]=a[v-1];a[v]=[i,s,d]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var i in e)t.o(e,i)&&!t.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:e[i]})}}(),function(){t.f={},t.e=function(a){return Promise.all(Object.keys(t.f).reduce((function(e,i){return t.f[i](a,e),e}),[]))}}(),function(){t.u=function(a){return"js/"+{272:"aiembed",594:"about"}[a]+"."+{272:"010dc69c",594:"1ea6fd31"}[a]+".js"}}(),function(){t.miniCssF=function(a){return"css/"+{272:"aiembed",594:"about"}[a]+"."+{272:"4acb345b",594:"22c1ab5c"}[a]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={},e="start-learn:";t.l=function(i,s,d,n){if(a[i])a[i].push(s);else{var o,r;if(void 0!==d)for(var l=document.getElementsByTagName("script"),v=0;v<l.length;v++){var c=l[v];if(c.getAttribute("src")==i||c.getAttribute("data-webpack")==e+d){o=c;break}}o||(r=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,t.nc&&o.setAttribute("nonce",t.nc),o.setAttribute("data-webpack",e+d),o.src=i),a[i]=[s];var u=function(e,t){o.onerror=o.onload=null,clearTimeout(f);var s=a[i];if(delete a[i],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(a){return a(t)})),e)return e(t)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),r&&document.head.appendChild(o)}}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var a=function(a,e,i,s,d){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",t.nc&&(n.nonce=t.nc);var o=function(t){if(n.onerror=n.onload=null,"load"===t.type)s();else{var i=t&&t.type,o=t&&t.target&&t.target.href||e,r=new Error("Loading CSS chunk "+a+" failed.\n("+i+": "+o+")");r.name="ChunkLoadError",r.code="CSS_CHUNK_LOAD_FAILED",r.type=i,r.request=o,n.parentNode&&n.parentNode.removeChild(n),d(r)}};return n.onerror=n.onload=o,n.href=e,i?i.parentNode.insertBefore(n,i.nextSibling):document.head.appendChild(n),n},e=function(a,e){for(var t=document.getElementsByTagName("link"),i=0;i<t.length;i++){var s=t[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===e))return s}var n=document.getElementsByTagName("style");for(i=0;i<n.length;i++){s=n[i],d=s.getAttribute("data-href");if(d===a||d===e)return s}},i=function(i){return new Promise((function(s,d){var n=t.miniCssF(i),o=t.p+n;if(e(n,o))return s();a(i,o,null,s,d)}))},s={524:0};t.f.miniCss=function(a,e){var t={272:1,594:1};s[a]?e.push(s[a]):0!==s[a]&&t[a]&&e.push(s[a]=i(a).then((function(){s[a]=0}),(function(e){throw delete s[a],e})))}}}(),function(){var a={524:0};t.f.j=function(e,i){var s=t.o(a,e)?a[e]:void 0;if(0!==s)if(s)i.push(s[2]);else{var d=new Promise((function(t,i){s=a[e]=[t,i]}));i.push(s[2]=d);var n=t.p+t.u(e),o=new Error,r=function(i){if(t.o(a,e)&&(s=a[e],0!==s&&(a[e]=void 0),s)){var d=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;o.message="Loading chunk "+e+" failed.\n("+d+": "+n+")",o.name="ChunkLoadError",o.type=d,o.request=n,s[1](o)}};t.l(n,r,"chunk-"+e,e)}},t.O.j=function(e){return 0===a[e]};var e=function(e,i){var s,d,n=i[0],o=i[1],r=i[2],l=0;if(n.some((function(e){return 0!==a[e]}))){for(s in o)t.o(o,s)&&(t.m[s]=o[s]);if(r)var v=r(t)}for(e&&e(i);l<n.length;l++)d=n[l],t.o(a,d)&&a[d]&&a[d][0](),a[d]=0;return t.O(v)},i=self["webpackChunkstart_learn"]=self["webpackChunkstart_learn"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[504],(function(){return t(2928)}));i=t.O(i)})();
//# sourceMappingURL=app.bd5b7f5e.js.map