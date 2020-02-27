(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"3cde":function(e,t,n){},"3ff7":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-card",{staticStyle:{"margin-bottom":"20px"},attrs:{flat:"",bordered:"",dense:""}},[n("q-item",[e.teamNumber in e.getTeamAvatars?n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",[n("img",{attrs:{src:e.getTeamAvatars[e.teamNumber]}})])],1):e._e(),n("q-item-section",[n("q-item-label",[n("router-link",{attrs:{to:"/team/"+e.teamNumber,exact:""}},[e._v(e._s(e.getShortTeamInfoDict[e.teamNumber].nickname))])],1),n("q-item-label",{attrs:{caption:""}},[e._v("\n                FRC "+e._s(e.teamNumber)+"\n            ")]),Object.keys(e.teamRankingsDict).includes(""+e.teamNumber)?n("q-item-label",[e._v("\n                Rank #"+e._s(e.teamRankingsDict[e.teamNumber])+", Score: "+e._s(e.getShortTeamInfoDict[e.teamNumber].ranking.scalar.toFixed(2))+"\n            ")]):e._e()],1)],1),n("q-card-actions",[e.teamIsLiked?n("q-btn",{attrs:{flat:"",round:"",color:"red",icon:"favorite"},on:{click:function(t){e.isProbablySignedIn?e.unlikeTeam({teamNumber:e.teamNumber}):e.$emit("promptlogin")}}}):e._e(),e.teamIsLiked?e._e():n("q-btn",{attrs:{round:"",icon:"favorite",flat:"",color:"black"},on:{click:function(t){e.isProbablySignedIn?e.likeTeam({teamNumber:e.teamNumber}):e.$emit("promptlogin")}}}),n("span",{attrs:{flat:"",color:"primary"}},[e._v("\n            "+e._s(e.getShortTeamInfoDict[e.teamNumber].likes)+"\n        ")])],1)],1)},r=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("6762"),n("2fdb"),n("c47a")),c=n.n(i),o=n("2f62");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={name:"TeamAsCard",props:["teamNumber"],methods:l({},Object(o["b"])(["likeTeam","unlikeTeam"])),computed:l({},Object(o["c"])(["getShortTeamInfoDict","getTeamAvatars","isProbablySignedIn","getTeamLikes","teamRankingsDict"]),{teamIsLiked:function(){return this.getTeamLikes.includes(this.teamNumber)}})},u=m,d=n("2877"),p=n("eebe"),b=n.n(p),f=n("f09f"),v=n("66e5"),h=n("4074"),g=n("cb32"),_=n("0170"),k=n("4b7e"),y=n("9c40"),q=Object(d["a"])(u,a,r,!1,null,"1c9f8e3f",null);t["a"]=q.exports;b()(q,"components",{QCard:f["a"],QItem:v["a"],QItemSection:h["a"],QAvatar:g["a"],QItemLabel:_["a"],QCardActions:k["a"],QBtn:y["a"]})},"41e7":function(e,t,n){},4336:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",[void 0!==this.protagonist?n("q-item-section",{attrs:{avatar:""}},[null===e.match.actual_time?n("q-avatar",{attrs:{color:"purple","text-color":"white"}},[e._v("\n            "+e._s("Tie"===e.matchOutcome?"T":"Victory"===e.matchOutcome?"W":"L")+"\n        ")]):n("q-avatar",{attrs:{color:"Tie"===e.matchOutcome?"grey":"Victory"===e.matchOutcome?"blue":"red","text-color":"white"}},[e._v("\n            "+e._s("Tie"===e.matchOutcome?"T":"Victory"===e.matchOutcome?"W":"L")+"\n        ")])],1):e._e(),n("q-item-section",[n("q-item",[n("q-item-section",[n("q-item-label",[n("router-link",{attrs:{to:"/event/"+e.match.event_key}},[e._v(e._s(e.getShortEventInfoDict[e.match.event_key].name))]),e._v(" - "+e._s(e.match.comp_level)+e._s(e.match.set_number)+"m"+e._s(e.match.match_number)+"\n                    ("),n("a",{attrs:{href:"https://www.thebluealliance.com/match/"+e.match.key,target:"_blank"}},[e._v("view on TBA")]),e._v(")\n                ")],1)],1)],1),n("q-item",[e.$q.screen.gt.xs?n("q-item-section",[n("q-list",[n("q-item",[n("q-item-section",[n("q-item-label",[null!=e.match.actual_time?n("b",[e._v("\n                                    "+e._s("red"===e.match.winning_alliance?"Victory":"Defeat"))]):n("b",[e._v("Predicting..")]),e._v("\n                                (Red Alliance)\n                                ("),n("b",[e._v(e._s((e.sumPreRankingsRed/e.sumPreRankings).toLocaleString("en",{style:"percent"})))]),e._v(")\n                            ")])],1)],1),n("TeamAsCard",{attrs:{"team-number":parseInt(e.match.alliances.red.team_keys[0].replace("frc",""))},on:{promptlogin:function(t){return e.$emit("promptlogin")}}}),n("TeamAsCard",{attrs:{"team-number":parseInt(e.match.alliances.red.team_keys[1].replace("frc",""))},on:{promptlogin:function(t){return e.$emit("promptlogin")}}}),n("TeamAsCard",{attrs:{"team-number":parseInt(e.match.alliances.red.team_keys[2].replace("frc",""))},on:{promptlogin:function(t){return e.$emit("promptlogin")}}})],1)],1):e._e(),e.$q.screen.gt.xs?n("q-item-section",[n("q-list",[n("q-item",[n("q-item-section",[n("q-item-label",[null!=e.match.actual_time?n("b",[e._v("\n                                    "+e._s("blue"===e.match.winning_alliance?"Victory":"Defeat"))]):n("b",[e._v("Predicting..")]),e._v("\n                                (Blue Alliance)\n                                ("),n("b",[e._v(e._s((e.sumPreRankingsBlue/e.sumPreRankings).toLocaleString("en",{style:"percent"})))]),e._v(")\n                            ")])],1)],1),n("TeamAsCard",{attrs:{"team-number":parseInt(e.match.alliances.blue.team_keys[0].replace("frc",""))},on:{promptlogin:function(t){return e.$emit("promptlogin")}}}),n("TeamAsCard",{attrs:{"team-number":parseInt(e.match.alliances.blue.team_keys[1].replace("frc",""))},on:{promptlogin:function(t){return e.$emit("promptlogin")}}}),n("TeamAsCard",{attrs:{"team-number":parseInt(e.match.alliances.blue.team_keys[2].replace("frc",""))},on:{promptlogin:function(t){return e.$emit("promptlogin")}}})],1)],1):e._e(),e.$q.screen.gt.xs?e._e():n("q-item-section",[n("q-list",[n("q-item",[n("q-item-section",[n("q-item-label",[null!=e.match.actual_time?n("b",[e._v("\n                                    "+e._s("red"===e.match.winning_alliance?"Victory":"Defeat"))]):n("b",[e._v("Predicting..")]),e._v("\n                                (Red Alliance)\n                                ("),n("b",[e._v(e._s((e.sumPreRankingsRed/e.sumPreRankings).toLocaleString("en",{style:"percent"})))]),e._v(")\n                            ")])],1)],1),n("TeamAsCard",{attrs:{"team-number":parseInt(e.match.alliances.red.team_keys[0].replace("frc",""))},on:{promptlogin:function(t){return e.$emit("promptlogin")}}}),n("TeamAsCard",{attrs:{"team-number":parseInt(e.match.alliances.red.team_keys[1].replace("frc",""))},on:{promptlogin:function(t){return e.$emit("promptlogin")}}}),n("TeamAsCard",{attrs:{"team-number":parseInt(e.match.alliances.red.team_keys[2].replace("frc",""))},on:{promptlogin:function(t){return e.$emit("promptlogin")}}})],1),n("q-list",[n("q-item",[n("q-item-section",[n("q-item-label",[null!=e.match.actual_time?n("b",[e._v("\n                                    "+e._s("blue"===e.match.winning_alliance?"Victory":"Defeat"))]):n("b",[e._v("Predicting..")]),e._v("\n                                (Blue Alliance)\n                                ("),n("b",[e._v(e._s((e.sumPreRankingsBlue/e.sumPreRankings).toLocaleString("en",{style:"percent"})))]),e._v(")\n                            ")])],1)],1),n("TeamAsCard",{attrs:{"team-number":parseInt(e.match.alliances.blue.team_keys[0].replace("frc",""))},on:{promptlogin:function(t){return e.$emit("promptlogin")}}}),n("TeamAsCard",{attrs:{"team-number":parseInt(e.match.alliances.blue.team_keys[1].replace("frc",""))},on:{promptlogin:function(t){return e.$emit("promptlogin")}}}),n("TeamAsCard",{attrs:{"team-number":parseInt(e.match.alliances.blue.team_keys[2].replace("frc",""))},on:{promptlogin:function(t){return e.$emit("promptlogin")}}})],1)],1)],1)],1)],1)},r=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("6762"),n("2fdb"),n("a481"),n("4917"),n("c47a")),c=n.n(i),o=n("2f62"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{attrs:{active:e.active,"active-class":"active-team-link",to:"/team/"+e.data.team,exact:""}},[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",{attrs:{square:"",color:e.alliance}},[n("img",{attrs:{src:e.getAvatar(e.data.team)}})])],1),n("q-item-section",[n("q-item-label",[e._v("\n      "+e._s(e.data.team)+"\n      "),"currentRank"in e.data?n("span",[e._v("\n        ("+e._s(e.data.currentRank)+")\n      ")]):n("span",[e._v("\n      "+e._s(e.data.newRank!==e.data.oldRank?"("+e.data.newRank+" from "+e.data.oldRank+")":"("+e.data.newRank+")")+"\n      ")])])],1)],1)},l=[],m={name:"NewTeamEntry",props:["active","team_number","alliance"]},u=m,d=n("2877"),p=n("eebe"),b=n.n(p),f=n("66e5"),v=n("4074"),h=n("cb32"),g=n("0170"),_=Object(d["a"])(u,s,l,!1,null,"13bcb59e",null),k=_.exports;b()(_,"components",{QItem:f["a"],QItemSection:v["a"],QAvatar:h["a"],QItemLabel:g["a"]});var y=n("3ff7");function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={name:"NewMatch",components:{TeamAsCard:y["a"],NewTeamEntry:k},props:["match","protagonist"],computed:O({},Object(o["c"])(["getShortEventInfoDict","getShortTeamInfoDict"]),{sumPreRankingsRed:function(){var e=this;return null!==this.match.actual_time&&"matchRankings"in e.match?this.match.alliances.red.team_keys.map((function(t){var n=e.match.matchRankings.preRankings[t],a=n.mu,r=n.sigma;return a-3*r})).reduce((function(e,t){return e+t})):this.match.alliances.red.team_keys.map((function(t){return"ranking"in e.getShortTeamInfoDict[parseInt(t.replace("frc",""))]?e.getShortTeamInfoDict[parseInt(t.replace("frc",""))].ranking.scalar:0})).reduce((function(e,t){return e+t}))},sumPreRankingsBlue:function(){var e=this;return null!==this.match.actual_time&&"matchRankings"in e.match?this.match.alliances.blue.team_keys.map((function(t){var n=e.match.matchRankings.preRankings[t],a=n.mu,r=n.sigma;return a-3*r})).reduce((function(e,t){return e+t})):this.match.alliances.blue.team_keys.map((function(t){return"ranking"in e.getShortTeamInfoDict[parseInt(t.replace("frc",""))]?e.getShortTeamInfoDict[parseInt(t.replace("frc",""))].ranking.scalar:0})).reduce((function(e,t){return e+t}))},sumPreRankings:function(){return this.sumPreRankingsRed+this.sumPreRankingsBlue},matchOutcome:function(){if(void 0===this.protagonist)return"Tie";var e=null;return this.match.alliances.red.team_keys.includes("frc".concat(this.protagonist))&&(e="red"),this.match.alliances.blue.team_keys.includes("frc".concat(this.protagonist))&&(e="blue"),null!==this.match.actual_time?""===this.match.winning_alliance?"Tie":this.match.winning_alliance===e?"Victory":"Defeat":"red"===e?this.sumPreRankingsRed>this.sumPreRankingsBlue?"Victory":"Defeat":this.sumPreRankingsRed>this.sumPreRankingsBlue?"Defeat":"Victory"}})},I=C,w=(n("da86"),n("1c1c")),P=Object(d["a"])(I,a,r,!1,null,"1510d46f",null);t["a"]=P.exports;b()(P,"components",{QItem:f["a"],QItemSection:v["a"],QAvatar:h["a"],QItemLabel:g["a"],QList:w["a"]})},"4ec6":function(e,t,n){},"5d9d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-dialog",{model:{value:e.vmodel,callback:function(t){e.vmodel=t},expression:"vmodel"}},[n("q-card",[n("q-card-section",[n("div",{staticClass:"text-p"},[e._v("Hi, in order to prevent abuse, District One Stats (DOS) uses one-time passwords for account management. "),n("b",[e._v("We don't ask for an email, a username, nor a password.")]),e._v(" That means you don't need to remember yet another password, and also means that you don't have to give up additional identifiable information. Whenever you want to log in, a 6-digit code will be sent to your phone number.")])]),n("q-card-section",[n("div",{staticClass:"text-p"},[e._v("Anyone signing up must be over the age of 13. If someone is found in violation of this, their account will be deleted and their phone number blacklisted from the site.")])]),n("q-card-section",[e.enterCodeMode?[n("div",{staticClass:"col-12 row justify-center"},[n("q-input",{attrs:{max:6,mask:"######",label:"Verification Code","fill-mask":"#"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),n("q-btn",{attrs:{label:"submit",color:e.code.includes("#")?"black":"primary",disable:e.code.includes("#")},on:{click:e.checkCode}})],1),n("div",{staticClass:"col-12",staticStyle:{"margin-top":"20px"}},[n("p",{staticClass:"text-center"},[e._v("We sent a code to +"+e._s(e.dialCode)+" "+e._s(e.tel)+".")])]),n("div",{staticClass:"col-12"},[n("p",{staticClass:"text-center"},[n("span",{staticClass:"fake-link",on:{click:e.changeNumber}},[e._v("Wrong number?")]),e._v(" | "),n("span",{staticClass:"fake-link",on:{click:e.resendCode}},[e._v("Resend code")])])])]:[n("VueTelInput",{ref:"telInput",attrs:{preferredCountries:["US","CA","VN","AU","CN","TH","GB"]},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}}),n("div",{staticClass:"col-12 row justify-center",staticStyle:{"margin-top":"30px"}},[n("q-btn",{attrs:{label:"Send Verification Code",color:e.tel.length<10?"black":"primary",disable:e.tel.length<10},on:{click:e.requestCode}})],1)]],2),n("q-card-section",[n("a",{attrs:{href:"https://github.com/JCharante/district-one/blob/master/privacy-policy.md"}},[e._v("Read our privacy policy. By entering your phone number to log in or create an account, you are agreeing to it.")])])],1)],1)},r=[],i=n("f62e"),c=n("2a19"),o={name:"LogInModal",components:{VueTelInput:i["a"]},data:function(){return{vmodel:!1,tel:"",dialCode:0,enterCodeMode:!1,code:""}},methods:{show:function(){this.vmodel=!0},changeNumber:function(){this.enterCodeMode=!1},requestCode:function(){this.dialCode=this.$refs.telInput.activeCountry.dialCode,this.enterCodeMode=!0,this.sendVerificationRequest()},resendCode:function(){this.sendVerificationRequest()},sendVerificationRequest:function(){this.$axios.post("/",{requestType:"sendSMS",dialCode:this.dialCode,phoneNumber:this.tel}).then((function(e){console.log(e)}))},checkCode:function(){var e=this;this.$axios.post("/",{requestType:"checkCode",dialCode:this.dialCode,phoneNumber:this.tel,code:this.code}).then((function(t){e.$store.dispatch("setSessionKey",t.data),e.$store.dispatch("checkIfSessionKeyValid",t.data),console.log(t),c["a"].create({message:"You have logged in!",timeout:2e3,color:"green",position:"top"}),e.vmodel=!1}))}}},s=o,l=(n("c481"),n("2877")),m=n("eebe"),u=n.n(m),d=n("24e8"),p=n("f09f"),b=n("a370"),f=n("9c40"),v=n("27f9"),h=Object(l["a"])(s,a,r,!1,null,"77183da7",null);t["a"]=h.exports;u()(h,"components",{QDialog:d["a"],QCard:p["a"],QCardSection:b["a"],QBtn:f["a"],QInput:v["a"]})},a576:function(e,t,n){"use strict";var a=n("4ec6"),r=n.n(a);r.a},c481:function(e,t,n){"use strict";var a=n("41e7"),r=n.n(a);r.a},da86:function(e,t,n){"use strict";var a=n("3cde"),r=n.n(a);r.a},f9219:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",[n("q-list",{attrs:{dense:""}},[n("q-item",[n("q-item-section",{attrs:{avatar:""}},[null!==e.event.week?n("q-avatar",{attrs:{color:"white","text-color":"gray","font-size":"0.9rem"}},[n("span",{},[e._v("W"+e._s(e.event.week))])]):e._e()],1),n("q-item-section",[n("q-item-label",[n("router-link",{attrs:{exact:"",to:"/event/"+(e.event.eventCode||e.event.key)}},[e._v("\n                        "+e._s(e.event.short_name)+"\n                    ")])],1),e.event.district?n("q-item-label",{attrs:{caption:""}},[e._v("\n                    "+e._s(e.event.district.display_name)+"\n                ")]):e._e()],1),n("q-item-section",[e.event.likes>=2?n("q-item-label",{attrs:{caption:""}},[e._v("\n                    Favorited by "+e._s(e.event.likes)+" people.\n                ")]):e._e(),1===e.event.likes?n("q-item-label",{attrs:{caption:""}},[e._v("\n                    Favorited by a single person.\n                ")]):e._e(),0===e.event.likes?n("q-item-label",{attrs:{caption:""}},[e._v("\n                    Not favorited by anyone yet.\n                ")]):e._e()],1),n("q-item-section",[n("div",{staticClass:"q-pa-md q-gutter-sm"},[e.eventIsLiked?n("q-btn",{attrs:{round:"",icon:"favorite",size:"xs",color:"primary"},on:{click:function(t){e.isProbablySignedIn?e.unlikeEvent({eventCode:e.event.eventCode||e.event.key}):e.$emit("promptlogin")}}}):e._e(),e.eventIsLiked?e._e():n("q-btn",{attrs:{round:"",outline:"",icon:"favorite",size:"xs",color:"primary"},on:{click:function(t){e.isProbablySignedIn?e.likeEvent({eventCode:e.event.eventCode||e.event.key}):e.$emit("promptlogin")}}})],1)])],1)],1)],1)},r=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("6762"),n("2fdb"),n("c47a")),c=n.n(i),o=n("2f62");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={name:"EventShortInfo",props:["event"],methods:l({},Object(o["b"])(["likeEvent","unlikeEvent"])),computed:l({},Object(o["c"])(["getEventLikes","isProbablySignedIn"]),{eventIsLiked:function(){return this.getEventLikes.includes(this.event.eventCode)||this.getEventLikes.includes(this.event.key)}})},u=m,d=(n("a576"),n("2877")),p=n("eebe"),b=n.n(p),f=n("66e5"),v=n("1c1c"),h=n("4074"),g=n("cb32"),_=n("0170"),k=n("9c40"),y=Object(d["a"])(u,a,r,!1,null,"75e2c530",null);t["a"]=y.exports;b()(y,"components",{QItem:f["a"],QList:v["a"],QItemSection:h["a"],QAvatar:g["a"],QItemLabel:_["a"],QBtn:k["a"]})}}]);