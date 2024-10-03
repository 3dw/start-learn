"use strict";(self["webpackChunkstart_learn"]=self["webpackChunkstart_learn"]||[]).push([[594],{3738:function(a,e,t){t.d(e,{$:function(){return n}});const n=[{t:"起步",description:"自學法源與申請流程",color:"#9ef",icon:"law"},{t:"計畫",description:"做自學計畫時可以想想這些面向",color:"#0f0",icon:"hourglass half"},{t:"支持",description:"自學的支持力量來自家庭與朋友",color:"#f93",icon:"home"},{t:"資源",description:"文化與經濟上的資源",color:"#c9c",icon:"in cart"}]},2388:function(a,e,t){t.r(e),t.d(e,{default:function(){return T}});var n=t(6768),r=t(4232),i=t(5130);const c=a=>((0,n.Qi)("data-v-d9b18ba8"),a=a(),(0,n.jt)(),a),d={class:"ans"},s={class:"ui segment container",id:"main-ans"},l={class:"ui header center aligned"},o=c((()=>(0,n.Lk)("i",{class:"huge orange users icon",style:{display:"block","margin-left":"auto","margin-right":"auto"}},null,-1))),p=c((()=>(0,n.Lk)("div",{class:"ui divider"},null,-1))),v={class:"ui grid"},u={class:"row"},h={class:"column"},g=["innerHTML"],k={class:"row"},m={class:"eighteen wide right aligned column"},A=c((()=>(0,n.Lk)("div",{class:"ui divider"},null,-1))),f={class:"ui divider"},b=["href"],C=c((()=>(0,n.Lk)("i",{class:"globe icon"},null,-1))),y={class:"row"},w={class:"eight wide column text-left"},L=c((()=>(0,n.Lk)("i",{class:"chevron left icon"},null,-1)));function E(a,e,t,c,E,B){const F=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",d,[(0,n.Lk)("div",s,[(0,n.bF)(F,{to:"/"},{default:(0,n.k6)((()=>[(0,n.Lk)("h1",l,(0,r.v_)(a.myQ.q),1),o])),_:1}),p,(0,n.Lk)("div",v,[(0,n.Lk)("div",u,[(0,n.Lk)("div",h,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.myQ.as,(e=>((0,n.uX)(),(0,n.CE)("p",{class:"description",innerHTML:a.highlightAndMakeBr(e,a.myKey)},null,8,g)))),256))])]),(0,n.Lk)("div",k,[(0,n.bo)((0,n.Lk)("div",m,[A,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.myQ.es,((a,e)=>((0,n.uX)(),(0,n.CE)("span",null,[(0,n.bo)((0,n.Lk)("div",f,null,512),[[i.aG,e]]),(0,n.eW)("參考:  "),(0,n.Lk)("a",{href:a.h,target:"_blank"},[C,(0,n.eW)((0,r.v_)(a.t),1)],8,b)])))),256))],512),[[i.aG,a.myQ.es&&a.myQ.es[0]]])]),(0,n.Lk)("div",y,[(0,n.Lk)("div",w,[(0,n.Lk)("button",{class:"ui blue button",onClick:e[0]||(e[0]=(...e)=>a.goBack&&a.goBack(...e))},[L,(0,n.eW)("回上一頁")])])])])])])}var B=t(3738),F=t(6789),O=t(8420),I=t(9591),q=t(7110),Q=(0,n.pM)({name:"AnsView",props:["myKey"],data(){return{myQ:{q:"",as:[],es:[]},handbook:{},catagories:B.$,faqs:O.n.concat(F.e).concat(I.m).concat(q.Z)}},mounted(){this.myQ=this.faqs[this.$route.params.id]},methods:{makeBr:function(a){return a=a||"",a.replace(/\s/g,"<br/>").replace(/&nbsp;/g,"<br/>")||""},highlightAndMakeBr:function(a,e){return a=this.makeBr(a),e?a.replace(new RegExp(e,"gi"),'<span class="highlightedText">$&</span>'):a},cataColor:function(a){return(this.catagories.filter((function(e){return e.t===a}))[0]||{}).color||"#999"},cataIcon:function(a){return(this.catagories.filter((function(e){return e.t===a}))[0]||{}).icon||"user"},goBack(){this.$router.go(-1)}}}),X=t(1241);const K=(0,X.A)(Q,[["render",E],["__scopeId","data-v-d9b18ba8"]]);var T=K},5334:function(a,e,t){t.r(e),t.d(e,{default:function(){return Q}});var n=t(6768),r=t(4232),i=t(5130);const c=a=>((0,n.Qi)("data-v-2da530de"),a=a(),(0,n.jt)(),a),d={class:"faq"},s=c((()=>(0,n.Lk)("h1",{class:"ui center aligned header"},"自學問答 ",-1))),l={class:"ui center aligned header"},o={class:"ui small buttons"},p=["onClick","title"],v=c((()=>(0,n.Lk)("div",{class:"ui divider"},null,-1))),u=c((()=>(0,n.Lk)("br",null,null,-1))),h={class:"ui four column doubling stackable relaxed grid container",id:"main"},g={class:"column"},k={class:"inner bordered bottom right left"},m={class:"ui center aligned icon header"},A=["innerHTML"],f=c((()=>(0,n.Lk)("br",null,null,-1))),b={class:"small gray note"},C=["onClick"];function y(a,e){const t=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",d,[(0,n.Lk)("section",null,[s,(0,n.Lk)("h4",l,[(0,n.eW)("分類："),(0,n.Lk)("div",o,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.catagories,(e=>((0,n.uX)(),(0,n.CE)("button",{class:"ui button",style:(0,r.Tr)(a.buttonStyle(e.t)),onClick:t=>a.myC=e.t,title:e.description},(0,r.v_)(e.t),13,p)))),256))])])]),v,u,(0,n.Lk)("div",h,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.faqs,((e,c)=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("div",g,[(0,n.Lk)("div",k,[(0,n.Lk)("h4",m,[(0,n.bF)(t,{onClick:t=>a.myF=e,to:"/ans/"+c},{default:(0,n.k6)((()=>[(0,n.Lk)("i",{class:(0,r.C4)(["circular icon",a.cataIcon(e.c)])},null,2),(0,n.Lk)("div",{class:(0,r.C4)(["description",{orange:c%2==0}]),innerHTML:a.highlightAndMakeBr(e.q,a.myKey)},null,10,A),f,(0,n.Lk)("div",b,(0,r.v_)(e.as[0])+"...",1)])),_:2},1032,["onClick","to"])])]),(0,n.Lk)("a",{class:"ui top left attached ribbon label",style:(0,r.Tr)({"background-color":a.cataColor(e.c)}),onClick:t=>a.myC=!a.myC&&e.c||0},(0,r.v_)(e.c),13,C)],512)),[[i.aG,(!a.myC||e.c==a.myC)&&(!a.myKey||e.q.indexOf(a.myKey)>-1)]]))),256))])])}var w=t(3738),L=t(6789),E=t(8420),B=t(9591),F=t(7110),O=(0,n.pM)({name:"FaqView",data(){return{myC:"起步",myKey:"",catagories:w.$,faqs:E.n.concat(L.e).concat(B.m).concat(F.Z)}},methods:{makeBr(a){return a=a||"",a.replace(/\s/g,"<br/>").replace(/&nbsp;/g,"<br/>")||""},highlightAndMakeBr(a,e){return a=this.makeBr(a),e?a.replace(new RegExp(e,"gi"),'<span class="highlightedText">$&</span>'):a},cataColor(a){return(this.catagories.filter((function(e){return e.t===a}))[0]||{}).color||"#999"},cataIcon(a){return(this.catagories.filter((function(e){return e.t===a}))[0]||{}).icon||"user"},buttonStyle(a){if(a===this.myC)return{"background-color":"purple",color:"white","text-decoration":"underline"};{const e=this.catagories.find((e=>e.t===a));return{"background-color":e?e.color:"#ffffff",color:"black",border:"none"}}}}}),I=t(1241);const q=(0,I.A)(O,[["render",y],["__scopeId","data-v-2da530de"]]);var Q=q},5022:function(a,e,t){t.r(e),t.d(e,{default:function(){return h}});var n=t(6768),r=t.p+"img/1s.198c50fc.webp",i=t.p+"img/2s.f0ae2c4a.webp",c=t.p+"img/3s.556c0212.webp",d=t.p+"img/4s.9a48c000.webp";const s={class:"hello"},l=(0,n.Fv)('<div class="ui segment container" data-v-e369e728><h1 data-v-e369e728>學習自律四階段🐫</h1><p data-v-e369e728>從他律到自主的過程，一般會經過解放散漫、自我中心、眼高手低和自主成熟這四個階段。</p><p data-v-e369e728>在解放散漫期需要安全感和逐漸健康的生活節奏、自我中心期需要外在明確界限、眼高手低期需要踏實的累積與持續創作。</p><p data-v-e369e728>這些都是需要成人介入引導與提點的，兒童與青少年，若任其自生自滅，往往不能自己走過自主四階段。</p><p data-v-e369e728>因此，本會致力於促進自主學習與教育的土壤。</p><p data-v-e369e728>一般說來，要從他律進到自律，多半會產生學習困惑、自我放逐、概念重建的內在革命歷程。</p><p data-v-e369e728>每個階段所花的時間端看孩子的情況和家庭的對應而定，其中父母的態度，有關鍵性的影響。</p><p data-v-e369e728>一般說來(實際情況因人而異)，他律到自律過程，在親師生協同的良好對應下，前兩個階段大約半年到一年左右，第三階段大約一到兩年，最後自主成熟，則是一輩子的美好。</p><h2 data-v-e369e728>解放散漫期(約0.5~1年)🐣</h2><img src="'+r+'" data-v-e369e728><p data-v-e369e728>──剛開始的第一階段，孩子可能呈現放鬆、晃盪、不上課、骯髒、玩不夠、粘人、食量大、多話、嗜睡、不願意嘗試新事物等情況。如果家裡要求得嚴，孩子對課業還會有個假裝在意的「偽裝期」。不過撐不久。</p><h3 data-v-e369e728>原因探討：</h3><p data-v-e369e728>離從他律狀態離開時，內在能量還很不穩定和虛弱，其實是需要休養生息，才有力氣好好學習。不可能馬上變得獨立自主、自動自發。養傷和回復，視之前累積耗損的嚴重程度、和家庭與環境的支持好壞，而需要或長或短，不同的時間。</p><h3 data-v-e369e728>親子對應要訣：</h3><p data-v-e369e728>身體的健康、規律的節奏最重要，學科的期待可以先放掉。</p><p data-v-e369e728>應確保：有好好吃、好好運動、好好睡眠，讓能量補充，就可以安然渡過解放期。</p><p data-v-e369e728>應避免：熬夜、睡前從事太剌激的活動、不運動、電動成癮、菸酒癮、毒癮。</p><h3 data-v-e369e728>師生對應要訣：</h3><p data-v-e369e728>首重正向支持氣氛和親師協同，學科的期待可以先放掉。</p><p data-v-e369e728>應確保：正向支持氣氛。秩序的明確底限。</p><p data-v-e369e728>應避免：坐視孩子受到霸凌、坐視孩子危險沒意識產生的安全問題。</p><h2 data-v-e369e728>自我中心期(約0.5~1年)🐸</h2><img src="'+i+'" data-v-e369e728><p data-v-e369e728>──第二階段，愛頂嘴、自我中心、自私自利、挑剔父母、挑戰權威、容易憤怒、不守秩序。自己身體回復得不錯，卻常常不自覺地，造成別人的困擾、疲累、或是傷害。</p><h3 data-v-e369e728>原因探討：</h3><p data-v-e369e728>身心的內在力量回復了，終於有力氣往外擴展，但是還不清楚人我的分際，以及各種社會情境與自然情境的邊界。</p><p data-v-e369e728>靠著外推來試探別人和世界的邊界。透過碰到邊界，來建立安定感。</p><h3 data-v-e369e728>親子對應要訣：</h3><p data-v-e369e728>不能放任孩子，也不能替孩子擋掉衝撞世界產生的自然結果。有時需要建立人為的邊界，讓孩子透過碰到邊界，建立安定感。</p><p data-v-e369e728>應確保：秩序的明確底限。成人自己感受的明確表達。堅定感。</p><p data-v-e369e728>應避免：討價還價、不斷退讓、搖擺不定。</p><h3 data-v-e369e728>師生對應要訣：</h3><p data-v-e369e728>自我中心期的孩子會過度拉走你的注意力，越界，或是不管別的同學的需求，要你只幫助他。這些情況超過了一個界限後，就必須明確拒絕。同時可以透過角色扮演、設身處地的引導，培養孩子的同理心。</p><p data-v-e369e728>應確保：秩序的明確底限。成人自己感受的明確表達。堅定感。</p><p data-v-e369e728>應避免：坐視孩子霸凌別人、搖擺不定。</p><h2 data-v-e369e728>眼高手低期(約1~2年)🐬</h2><p data-v-e369e728>──第三階段是眼高手低期。開始知道自己的方向和目標，但是發現自己的能力和目標非常遠。想得到卻做不到，也對於如何建立自己的學習習慣、克服慣性容易感到「我知道我應該，可是我很難去做」的挫折。</p><img src="'+c+'" data-v-e369e728><h3 data-v-e369e728>原因探討：</h3><p data-v-e369e728>當孩子確立了邊界，知道自己不是無所不能，需要學習和成長才能達成目標，會一下子感受到自己的能力其實很小。</p><h3 data-v-e369e728>親子對應要訣：</h3><p data-v-e369e728>很多孩子在這時候會出現明顯低落的自我認知，和停滯的學習進程。有些父母因此著急並放棄陪孩子學習自律，送回體制學校或機構。</p><p data-v-e369e728>其實，當孩子經歷到第三階段，就會羽化之前的蛹期，只要成人清楚、溫暖的接納，陪孩子一起找尋適切方法來支持，要啟動正向轉習循轉就不遠了。</p><p data-v-e369e728>有些父母會熬不過這些階段，應付不了自己心理的矛盾或是親友的壓力，中途撤退，也有些父母一開始抱著趕流行的心態，等到孩子的轉型開始後，又覺得後悔，這樣的搖擺，對孩子其實是有傷害的。</p><p data-v-e369e728>在蛹期，要看到孩子能夠瞭解自己的「眼高手低」，就是代表他的自覺出來了，是好事，可以陪他從基礎開始，一步一步把手練高。</p><p data-v-e369e728>應確保：陪孩子把他們目標切細，用小階梯的方式，一步一腳印，逐步實現目標，累積踏實的成就感。</p><p data-v-e369e728>應避免：過度否定孩子、用更大的目標來指責孩子為什麼達不到。</p><h3 data-v-e369e728>師生對應要訣：</h3><p data-v-e369e728>應確保：小階梯教學、明確診斷出學習的問題點加以支援、分享自己的習慣建立經驗。</p><p data-v-e369e728>應避免：放低目標、不具體的安慰、唬弄學生。</p><h2 data-v-e369e728>自主成熟期(一輩子)💪</h2><img src="'+d+'" data-v-e369e728><p data-v-e369e728>──第四階段之後，孩子對人對事的包容力都會增加，有自信、有光彩、講道理、守規距也知變通。</p><p data-v-e369e728>因為第四階段的美好，常讓人嚮往自己的孩子如果也能如此多好。</p><p data-v-e369e728>但是自主學習，是從學習自主開始的。</p><p data-v-e369e728>學習自主，不只是孩子的事，也是家長和所有協力的教師都要經歷的過程。</p><p data-v-e369e728>兩到四年的過程，造就一輩子的獨立自主，這樣想想，認真陪伴自己、陪伴孩子渡過散漫的解放期、討厭的自我中心期、挫折的眼高手低期，也就值得了吧！</p></div>',1);function o(a,e){const t=(0,n.g2)("vue-headful");return(0,n.uX)(),(0,n.CE)("div",s,[(0,n.bF)(t,{title:"學習自律四階段 - 自學地圖",description:"從他律到自主的過程，一般會經過解放散漫、自我中心、眼高手低和自主成熟這四個階段。"}),l])}var p=(0,n.pM)({name:"FourStages",data(){return{}}}),v=t(1241);const u=(0,v.A)(p,[["render",o],["__scopeId","data-v-e369e728"]]);var h=u},511:function(a,e,t){t.r(e),t.d(e,{default:function(){return u}});var n=t(6768),r=t.p+"img/wikipedia.c76f2874.png",i="data:image/png;base64,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",c=t.p+"img/freemath.e42862fc.png";const d={class:"outer"},s=(0,n.Fv)('<div class="ui segment container" data-v-71728859><h1 data-v-71728859>線上資源推薦🌐</h1><p data-v-71728859>這裡推薦三個優質的非營利教育網站，這些網站提供免費的學習資源，適合自學者、學生和教育工作者使用。</p><h2 data-v-71728859>維基百科🌍</h2><img src="'+r+'" alt="Wikipedia" data-v-71728859><p data-v-71728859>維基百科是世界上最大的免費百科全書，由志願者共同編輯維護，涵蓋了各種領域的知識，是一個極佳的學術資源。</p><a href="https://zh.wikipedia.org/zh-tw/Wikipedia:%E9%A6%96%E9%A1%B5" target="_blank" data-v-71728859>前往 ➡️ 維基百科</a><h2 data-v-71728859>Khan Academy📘</h2><img src="'+i+'" alt="Khan Academy" data-v-71728859><p data-v-71728859>Khan Academy 是一個非營利組織，提供從數學到科學等多種課程，完全免費使用。學生可以依照自己的進度學習，擁有豐富的教學影片和練習資源。</p><a href="https://zh.khanacademy.org/" target="_blank" data-v-71728859>前往 ➡️ Khan Academy</a><h2 data-v-71728859>自由數學📐</h2><img src="'+c+'" alt="自由數學" data-v-71728859><p data-v-71728859>自由數學是非營利組織「自主學習促進會」提供的開源數學學習平台，致力於推動自主學習與教學創新，資源完全免費。</p><a href="https://math.alearn.org.tw" target="_blank" data-v-71728859>前往 ➡️ 自由數學</a><div class="ui divider" data-v-71728859></div><p data-v-71728859>這些網站的資源完全免費，無論你是想自我提升還是協助學生，這些都是很好的選擇。</p></div>',1);function l(a,e){const t=(0,n.g2)("vue-headful");return(0,n.uX)(),(0,n.CE)("div",d,[(0,n.bF)(t,{title:"線上資源推薦",description:"推薦三個非營利且免費使用的教育資源網站。"}),s])}var o=(0,n.pM)({name:"ResourceRecommendation",data(){return{}}}),p=t(1241);const v=(0,p.A)(o,[["render",l],["__scopeId","data-v-71728859"]]);var u=v}}]);
//# sourceMappingURL=about.c2b4ca90.js.map