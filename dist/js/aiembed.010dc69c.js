"use strict";(self["webpackChunkstart_learn"]=self["webpackChunkstart_learn"]||[]).push([[272],{3177:function(e,s,n){n.r(s),n.d(s,{default:function(){return w}});var a=n(6768),l=n(5130),o=n(4232),t=n(3153),i=n(5466);const u={class:"hello"},d={class:"ui container"},r={class:"ui input"},c={class:"result"},k={key:0},g={key:1},h={class:"ui buttons"};function b(e,s,n,b,L,p){return(0,a.uX)(),(0,a.CE)("div",u,[(0,a.Lk)("div",d,[e.showLineQRCode?((0,a.uX)(),(0,a.CE)("img",{key:1,class:"clickable",id:"logo",alt:"Logo",src:i,onClick:s[1]||(s[1]=s=>e.showLineQRCode=!1)})):((0,a.uX)(),(0,a.CE)("img",{key:0,class:"clickable",id:"logo",alt:"Logo",src:t,onClick:s[0]||(s[0]=s=>e.showLineQRCode=!0)})),s[12]||(s[12]=(0,a.Lk)("h2",{class:"center aligned ui header"},[(0,a.eW)("自學AI"),(0,a.Lk)("div",{class:"center aligned ui sub header"},"以自學問答集為基礎，提供更即時的回答"),(0,a.Lk)("div",{class:"center aligned ui sub header"},[(0,a.Lk)("a",{href:"https://lin.ee/CashU46",target:"_blank",rel:"noopener noreferrer"},"將自學AI加入LINE好友")])],-1)),(0,a.Lk)("div",r,[(0,a.bo)((0,a.Lk)("input",{autofocus:"",type:"text",placeholder:"問AI關於自學的任何問題...","onUpdate:modelValue":s[2]||(s[2]=s=>e.message=s),onKeyup:s[3]||(s[3]=(0,l.jR)(((...s)=>e.sendMessage&&e.sendMessage(...s)),["enter"]))},null,544),[[l.Jo,e.message]]),(0,a.Lk)("button",{class:"ui primary button",onClick:s[4]||(s[4]=(...s)=>e.sendMessage&&e.sendMessage(...s))},"送出")]),(0,a.Lk)("div",c,[""===e.result&&""!==e.message&&e.isLoading?((0,a.uX)(),(0,a.CE)("p",k,"載入中，請稍候...")):""!==e.result?((0,a.uX)(),(0,a.CE)("div",g,[(0,a.Lk)("p",null,(0,o.v_)(e.parseResult(e.result)),1),s[9]||(s[9]=(0,a.Lk)("br",null,null,-1)),s[10]||(s[10]=(0,a.Lk)("br",null,null,-1)),s[11]||(s[11]=(0,a.Lk)("p",null,"您覺得這個回答怎麼樣呢？",-1)),(0,a.Lk)("div",h,[(0,a.Lk)("button",{class:"ui green button",onClick:s[5]||(s[5]=s=>e.sendFeedback("good"))},s[7]||(s[7]=[(0,a.Lk)("i",{class:"thumbs up icon"},null,-1),(0,a.eW)("很棒")])),(0,a.Lk)("button",{class:"ui red button",onClick:s[6]||(s[6]=s=>e.sendFeedback("bad"))},s[8]||(s[8]=[(0,a.Lk)("i",{class:"thumbs down icon"},null,-1),(0,a.eW)("不佳")]))])])):(0,a.Q3)("",!0)])])])}n(4114);var L=n(4373),p=(0,a.pM)({name:"AIEmbedView",data(){return{showLineQRCode:!1,message:"",result:"",isLoading:!1}},methods:{sendMessage(){this.isLoading=!0,this.result="",console.log(this.message),this.message.endsWith("？")||(this.message+="？"),L.A.get("https://members-backend.alearn13994229.workers.dev/ai/"+this.message,{headers:{"Content-Type":"application/json"}}).then((e=>{console.log(e),this.result=e.data,this.isLoading=!1}))},parseResult(e){return"。"===e?"請說得詳細一點":e},sendFeedback(e){console.log(e),"good"===e?(console.log("good"),window.alert("感謝您的回饋！")):"bad"===e&&(console.log("bad"),window.confirm("請告訴我們哪裡做得不好，我們會努力改進！")?this.$router.push("/feedback"):window.alert("感謝您的回饋！"))}}}),m=n(1241);const C=(0,m.A)(p,[["render",b],["__scopeId","data-v-3af76489"]]);var w=C}}]);
//# sourceMappingURL=aiembed.010dc69c.js.map