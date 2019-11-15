(this["webpackJsonprpg-quest-pt3"]=this["webpackJsonprpg-quest-pt3"]||[]).push([[0],{34:function(e,t,n){},50:function(e,t,n){e.exports=n(71)},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(26),l=n.n(o),i=n(11),c=n(4),s=n(19),u=n(27),m=n(28),d=n(30),p=n(29),g=n(31),h=function(e){var t=e.title,n=e.titlePadding,r=e.fontSize,o=e.colEnd,l=e.colStart,i=void 0===l?1:l;return a.a.createElement("div",{className:"box-header"},a.a.createElement("h1",{className:"title-header",style:{padding:n,gridColumnStart:i,gridColumnEnd:o,fontSize:r}},t))},f=function(e){var t=e.sectionHeader,n=e.imgSrc,r=e.imgAlt,o=e.headerDisplay,l=e.direction,i=void 0===l?"left":l;return a.a.createElement("div",{className:"box-sidebar box-sidebar-"+i},a.a.createElement("div",{className:"container sidebar"},a.a.createElement("div",{className:"section-header",style:{display:o}},t),a.a.createElement("img",{src:n,alt:r,className:"img-fluid"})))},b=function(e){var t=e.linkRoute,n=e.linkName,r=e.margin,o=e.backgroundSize,l=e.backgroundImage,i=e.fontSize,s=e.padding,u=e.lineHeight,m=e.handleClick;return a.a.createElement("div",{className:"box-btn",style:{margin:r,backgroundImage:l}},a.a.createElement("div",{className:"container btn-container",style:{backgroundSize:o}},a.a.createElement(c.b,{to:t,className:"action-btn",onClick:m,style:{lineHeight:u,userSelect:"none",MozUserSelect:"none",fontSize:i,padding:s}},n)))},E=function(e){var t=e.message,n=e.boardTitle,r=void 0===n?"Message Board":n,o=e.margin,l=void 0===o?"1em":o,i=e.padding,c=void 0===i?".3em":i;return a.a.createElement("div",{className:"box_message-board",style:{gridColumnStart:2,gridColumnEnd:4,padding:c,margin:l,marginTop:0,background:"#896C42",color:"#f7f7f7 ",border:".25em solid #563E26"}},a.a.createElement("div",{className:"message-board",style:{width:"100%",textAlign:"center"}},a.a.createElement("h3",{style:{fontWeight:400,letterSpacing:"5px",fontSize:"1.5em",lineHeight:"1.5em"}},r),a.a.createElement("p",{style:{letterSpacing:"1.5px"}},t)))},y=function(){var e=function(){var e=document.getElementById("title_music");e.paused?e.play():e.pause()};return a.a.createElement("div",{style:{position:"absolute",top:0,right:0,padding:".3em",margin:".3em"}},a.a.createElement("input",{id:"music-input",type:"checkbox",onChange:e}),a.a.createElement("span",{style:{color:"white",paddingLeft:".3em",userSelect:"none"},onClick:function(){document.getElementById("music-input").checked^=1,e()}},"Mute"))},v=function(e){var t=e.playerName,n=e.playerLevel,r=e.playerXP,o=e.playerGold,l=e.playerHP;return a.a.createElement("div",{className:"top-inventory",style:{position:"absolute",top:"1em",left:"1em",width:"10em",height:"auto"}},a.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%",border:"1px solid red",color:"white",background:"#333",padding:".2em .3em .2em .3em"}},a.a.createElement("div",{style:{textAlign:"center"}},t),a.a.createElement("div",null,"lvl: ",a.a.createElement("span",{style:{float:"right"}},n)),a.a.createElement("div",null,"xp: ",a.a.createElement("span",{style:{float:"right"}},r)),a.a.createElement("div",null,"gold: ",a.a.createElement("span",{style:{float:"right"}},o)),a.a.createElement("div",null,"health: ",a.a.createElement("span",{style:{float:"right"}},l))))},O=n(9),w=n(10);function S(){var e=Object(O.a)(["\n  display: grid;\n  grid-template-rows: 20% 1fr 1fr 1fr;\n  width: 100%;\n  height: 100%;\n"]);return S=function(){return e},e}function k(){var e=Object(O.a)(["\n  width: 100vw;\n  height: 75vw;\n  background: pink;\n  max-height: 100vh;\n  max-width: 133.33vh;\n  margin: 0 auto;\n  position: absolute;\n  top: 0; bottom: 0;\n  left: 0; right: 0;\n  background-image: url('/images/bg-screen.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return k=function(){return e},e}var A=w.a.main(k()),D=w.a.div(S()),j=n(13),R=n(18),N=n.n(R);R.initializeApp({apiKey:"AIzaSyCUWGVSSzUCADbCMiNHoD4bKKXhWSo4eXw",authDomain:"rpg-quest-4174a.firebaseapp.com",databaseURL:"https://rpg-quest-4174a.firebaseio.com",projectId:"rpg-quest-4174a",storageBucket:"rpg-quest-4174a.appspot.com",messagingSenderId:"925619050657",appId:"1:925619050657:web:756f37fd629f3fd61238e0",measurementId:"G-38VGXRHC25"}),R.auth().setPersistence(R.auth.Auth.Persistence.SESSION);var x=R.firestore(),T=R.auth();function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I={name:"",xp:null,level:null,gold:null,hp:null,damage:null,loading:!1,errors:null},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROFILE_DATA":return P({},e,{name:t.profileData.name,xp:t.profileData.xp,level:t.profileData.level,gold:t.profileData.gold,hp:t.profileData.hp,damage:t.profileData.damage,loading:!1,errors:null});case"DAMAGE_PLAYER":return P({},e,{hp:e.hp-t.damage});case"ADD_REWARD":return P({},e,{xp:e.xp+t.xpReward,gold:e.gold+t.goldReward});case"LOADING_PROFILE":return P({},e,{loading:!0});case"SET_PROFILE_ERRORS":return P({},e,{loading:!1,errors:t.err});default:return e}},C=(n(34),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.profile.xp||this.props.profile.gold||this.props.profile.hp||this.props.profile.level||this.props.getProfileData()}},{key:"render",value:function(){var e=this.props.profile,t=e.name,n=e.xp,r=e.level,o=e.gold,l=e.hp;return a.a.createElement(D,{className:"home-grid"},a.a.createElement(y,null),a.a.createElement(v,{playerName:t,playerXP:n,playerLevel:r,playerGold:o,playerHP:l}),a.a.createElement(h,{title:"RPGQuest"}),a.a.createElement(f,{headerDisplay:"none",imgSrc:"/images/player-m-02.png",imgAlt:"A brave warrior"}),a.a.createElement(b,{linkName:"Battle",linkRoute:"/battle",margin:"1em 0 0 1em",lineHeight:L,backgroundImage:U}),a.a.createElement(b,{linkName:"Character",linkRoute:"/character",margin:"1em 1em 0 0",lineHeight:L,backgroundImage:U}),a.a.createElement(b,{linkName:"Shop",linkRoute:"/shop",margin:"0 0 1em 1em",lineHeight:L,backgroundImage:U}),a.a.createElement(b,{linkName:"Castle",linkRoute:"/castle",margin:"0 1em 1em 0",lineHeight:L,backgroundImage:U}),a.a.createElement(E,{message:"Battle Monsters to start earning gold and xp!"}))}}]),t}(a.a.Component)),z=Object(i.b)((function(e){return{profile:e.user.profile}}),{getProfileData:function(){return function(e){console.log("called get profile data action"),e({type:"LOADING_PROFILE"}),x.doc("profiles/".concat(T.currentUser.uid)).onSnapshot((function(t){console.log("doc snapshot from thunk:",t);var n={name:t.data().username,xp:t.data().xp,level:t.data().level,gold:t.data().gold,hp:t.data().hp,damage:t.data().damage};e({type:"SET_PROFILE_DATA",profileData:n})}),(function(t){console.log(t),e({type:"SET_PROFILE_ERRORS",err:t})}))}}})(C),L="4.5em",U="url(/images/minecraft-wood.jpeg)",B=n(15),M=function(e){var t=e.buttonName,n=e.handleOnClick,r=e.screenLink;return a.a.createElement("div",{className:"box_message-btn",onClick:n,style:{padding:".5em",margin:"1em",marginTop:0,background:"#896C42",border:".25em solid #563E26",cursor:"var(--cursor-pointer)"}},a.a.createElement("div",{className:"message-btn",style:{width:"100%",textAlign:"center"}},a.a.createElement(c.b,{to:"/".concat(r),style:{letterSpacing:"3px",color:"#f7f7f7",cursor:"var(--cursor-pointer)"}},t)))},G=function(e){var t=e.toggleScreen,n=e.handleId,r=a.a.useState(!1),o=Object(B.a)(r,2),l=o[0],i=(o[1],a.a.useState("")),c=Object(B.a)(i,2),s=c[0],u=c[1],m=function(){};return a.a.createElement("div",{className:"title-screen",style:{position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",zIndex:1e3}},a.a.createElement("div",{className:"screen-overlay",onClick:function(){document.querySelector(".screen-overlay").style.display="none",document.querySelector(".title-screen-ui").style.zIndex="1",m()},style:{display:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,.5)",width:"100%",height:"100%",cursor:"pointer",color:"rgba(255,255,255,.8)",fontSize:"3em",zIndex:999}},a.a.createElement("img",{src:"/images/play.png",alt:"click to play game",style:{display:"block",margin:"0 auto",height:"7em",opacity:".9",paddingTop:"23.5%"}}),a.a.createElement("div",{style:{position:"absolute",bottom:"2.2em",left:"50%",transform:"translateX(-50%)"}},"Click Anywhere")),a.a.createElement("div",{className:"title-screen-ui",onClick:m,style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:-1,display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}},a.a.createElement(h,{title:"RPG Quest",fontSize:"3em",style:{display:"absolute",top:"1em"}}),l?a.a.createElement("div",{className:"login-input"},a.a.createElement("input",{onInput:function(e){return u(e.target.value)},value:s,type:"text",placeholder:"enter your login id"}),a.a.createElement("button",{onClick:function(){n(s),t("home")}},"Submit")):a.a.createElement("div",null,a.a.createElement(M,{screenLink:"home",buttonName:"Start Game"}),a.a.createElement(M,{screenLink:"login",buttonName:"Login",handleOnClick:function(){}}),a.a.createElement(M,{screenLink:"signup",buttonName:"Create Account"}))))},W=n(21),F=function(e){return Object(W.a)(e),a.a.createElement(D,{className:"castle-grid",style:{color:"white",textAlign:"center",fontSize:"2em"}},"Castle Screen",a.a.createElement("br",null),a.a.createElement(c.b,{to:"/home",style:{color:"white"}},"Back"))};function X(){var e=Object(O.a)(["\n  height: 5em;\n  width: 5em;\n  color: red;\n  background: #333;\n  border-radius: 100%;\n  border: 3px solid gold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n"]);return X=function(){return e},e}function q(){var e=Object(O.a)(["\n  background: blue;\n  height: .8em;\n  width: 10em;\n  &.HUD-left {\n    border-bottom-right-radius: 5px;\n  }\n  &.HUD-right {\n    border-bottom-left-radius: 5px;\n    text-align: right;\n  }\n"]);return q=function(){return e},e}function V(){var e=Object(O.a)(["\n  background: #DC0000;\n  height: .8em;\n  width: ",";\n  &.HUD-left {\n    border-top-right-radius: 5px;\n  }\n  &.HUD-right {\n    border-top-left-radius: 5px;\n    text-align: right;\n    align-self: right;\n  }\n"]);return V=function(){return e},e}function Y(){var e=Object(O.a)(["\n  height: .8em;\n  width: 10em;\n  border-top-right-radius: 5px;\n  border: 1px solid gold;\n"]);return Y=function(){return e},e}function K(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  $.HUD-left {\n    margin-left: -.14em;\n  }\n  &.HUD-right {\n    margin-right: -.14em;\n    text-align: right;\n  }\n"]);return K=function(){return e},e}function J(){var e=Object(O.a)(["\n  position: absolute;\n  top: .5em;\n  display: flex;\n  align-items: center;\n  &.HUD-left {\n    left: 1em;\n  }\n  &.HUD-right {\n    right: 1em;\n    flex-direction: row-reverse;\n    text-align: right;\n  }\n"]);return J=function(){return e},e}var Q=w.a.div(J()),$=w.a.div(K()),Z=w.a.div(Y()),ee=w.a.div(V(),(function(e){return e.HUDRatio})),te=w.a.div(q()),ne=w.a.span(X()),re=function(e){var t=e.direction,n=e.HUDRatio;return a.a.createElement(Q,{className:t},a.a.createElement(ne,null,"Face"),a.a.createElement($,{className:t},a.a.createElement(Z,null,a.a.createElement(ee,{HUDRatio:n})),a.a.createElement(Z,null,a.a.createElement(te,null))))};function ae(){var e=Object(O.a)(["\n  padding-top: 1.7em;\n  margin-top: 1.2em;\n  border-top-right-radius: 2em;\n  border-top-left-radius: 2em;\n  background: rgba(0,0,0,.6);\n  border: 3px solid red;\n  grid-row-start: 2;\n  grid-row-end: 4;\n"]);return ae=function(){return e},e}function oe(){var e=Object(O.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: black;\n  color: white;\n  font-size: 42px;\n"]);return oe=function(){return e},e}var le=w.a.div(oe()),ie=w.a.div(ae());function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=function(e){return function(t){console.log("end battle called"),e?(console.log("player won"),x.doc("profiles/".concat(T.currentUser.uid)).update({xp:N.a.firestore.FieldValue.increment(15),gold:N.a.firestore.FieldValue.increment(25)}),t({type:"ADD_REWARD",xpReward:15,goldReward:25,otherReward:null})):(console.log("player lost"),t({type:"ADD_TO_DEATHS"})),t({type:"CLEAR_BATTLE"})}},me={loading:!1,active:!1,round:0,monsterName:"",monsterHealth:null,monsterDamage:null,xpReward:null,goldReward:null,otherReward:null,errors:null},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_ROUND":return se({},e,{round:e.round+1});case"DAMAGE_MONSTER":return se({},e,{monsterHealth:e.monsterHealth-t.damage});case"LOADING_BATTLE":return se({},e,{loading:!0});case"SET_BATTLE":return se({},e,{monsterName:t.monsterName,monsterHealth:t.monsterHealth,monsterDamage:t.monsterDamage,xpReward:t.xpReward,goldReward:t.goldReward,otherReward:t.otherReward,errors:null,active:!0,loading:!1});case"CLEAR_BATTLE":return me;case"SET_BATTLE_ERROR":return se({},e,{loading:!1,errors:t.err});default:return e}},pe=function(e){return e.user.profile.hp>0},ge=function(e){return e.battle.monsterHealth>0},he=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleAttack=function(){console.log("damage called"),n.setState({playersTurn:!1}),n.props.startPlayerTurn(),n.props.monsterIsAlive?setTimeout((function(){n.props.startMonsterTurn(),n.props.playerIsAlive?n.toggleBattleMenu():(console.log("player has been defeated"),n.setState({winner:!0}),n.props.endBattle(!1))}),1e3):(console.log("monster has been defeated"),n.setState({winner:!0}),n.props.endBattle(!0))},n.toggleBattleMenu=function(){n.setState({playersTurn:!0},(function(){return n.render()}))},n.handleUseItem=function(){return console.log("item used")},n.handleSelectInventory=function(){return console.log("inventory item selected")},n.state={winner:!1,whoWon:"",playersTurn:!0,playerHUDRatio:"".concat(n.props.player.hp/100*10,"em"),monsterHUDRatio:"".concat(n.props.monsterHealth/100*10,"em")},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.startBattle()}},{key:"componentDidUpdate",value:function(e){e.player.hp!==this.props.player.hp&&this.setState({playerHUDRatio:"".concat(this.props.player.hp/100*10,"em")}),e.monsterHealth!==this.props.monsterHealth&&this.setState({monsterHUDRatio:"".concat(this.props.monsterHealth/100*10,"em")})}},{key:"render",value:function(){var e=this.props.battle,t=e.loading;e.monsterDamage,e.xpReward,e.goldReward,e.otherReward;return a.a.createElement(D,{className:"battle-grid"},a.a.createElement(re,{direction:"HUD-left",HUDRatio:this.state.playerHUDRatio}),a.a.createElement(re,{direction:"HUD-right",HUDRatio:this.state.monsterHUDRatio}),a.a.createElement(h,{title:"Battle",colStart:2,colEnd:3}),t&&a.a.createElement(le,{className:"loadingScreen"},"Loading Battle..."),a.a.createElement(f,{headerDisplay:"none",imgSrc:"/images/player-m-02.png",imgAlt:"A brave warrior"}),a.a.createElement(f,{headerDisplay:"none",imgSrc:"/images/monster-01.png",imgAlt:"A frightening monster",direction:"right"}),this.state.playersTurn&&!this.state.winner&&a.a.createElement(ie,null,a.a.createElement(b,{linkName:"Attack",handleClick:this.handleAttack,lineHeight:be,backgroundSize:Ee,margin:ye}),a.a.createElement(b,{linkName:"Items",handleClick:this.handleUseItem,lineHeight:be,backgroundSize:Ee,margin:ye}),a.a.createElement(b,{linkName:"Weapons",handleClick:this.handleSelectInventory,lineHeight:be,backgroundSize:Ee,margin:ye}),a.a.createElement(b,{linkName:"Pets",handleClick:this.handleSelectInventory,lineHeight:be,backgroundSize:Ee,margin:ye}),a.a.createElement(b,{linkName:"Flee",linkRoute:"/home",lineHeight:be,backgroundSize:Ee,margin:"0"})),this.state.winner&&a.a.createElement("div",{style:{paddingTop:"1.7em",borderTopRightRadius:"2em",borderTopLeftRadius:"2em",background:"rgba(0,0,0,.6)",border:"3px solid red"}},a.a.createElement("div",{style:{height:"6em",width:"100%",background:"beige"}},this.props.playerIsAlive?a.a.createElement("div",null,"You Won!",a.a.createElement("p",null,"+",this.props.xpReward," xp"),a.a.createElement("p",null,"+",this.props.goldReward," gold")):"You Lost!"),a.a.createElement(b,{linkName:"Go Back",linkRoute:"/home",lineHeight:be,backgroundSize:Ee,margin:ye})))}}]),t}(a.a.Component),fe=Object(i.b)((function(e){return{player:e.user.profile,battle:e.battle,xpReward:e.battle.xpReward,goldReward:e.battle.goldReward,playerIsAlive:pe(e),monsterIsAlive:ge(e)}}),{startBattle:function(){return function(e,t){console.log("start battle called"),e({type:"LOADING_BATTLE"}),x.collection("monsters").get().then((function(n){var r=n.docs.length,a=Math.floor(Math.random()*r),o=n.docs[a];console.log("monster selected:",o.data());var l=t().user.profile.level;l<1&&(l=1),e({type:"SET_BATTLE",monsterName:o.data().name,monsterHealth:o.data().baseHealth*l,monsterDamage:o.data().baseDamage*l,xpReward:15,goldReward:25,otherReward:null})})).catch((function(t){e({type:"SET_BATTLE_ERROR"}),console.log(t)}))}},startPlayerTurn:function(){return function(e,t){console.log("round started"),console.log("player attacks"),e({type:"DAMAGE_MONSTER",damage:t().user.profile.damage}),t().battle.monsterHealth<1&&(console.log("player wins"),ue(!0))}},startMonsterTurn:function(){return function(e,t){console.log("monster attacks"),e({type:"DAMAGE_PLAYER",damage:t().battle.monsterDamage}),t().battle.playerHealth<1?(console.log("monster wins"),ue(!1)):e({type:"INCREMENT_ROUND"})}},endBattle:ue})(he),be="2em",Ee="100% 120%",ye="0 0 .5em 0",ve=function(e){return Object(W.a)(e),a.a.createElement("div",{className:"grid shop-grid",style:{color:"white",textAlign:"center",fontSize:"2em"}},a.a.createElement("div",{className:"header-row"},a.a.createElement(c.b,{to:"/home",style:{color:"white"}},"Back")),a.a.createElement("div",{className:"box-inventory",style:{color:"white",background:"#333",border:"1px solid gold"}},"Inventory",a.a.createElement("div",null,"header-tab, add tabs here")),a.a.createElement("div",{className:"horiz-btn-box",style:{display:"flex",flexDirection:"row",justifyContent:"space-around",gridRowStart:3,gridRowEnd:4,gridColumnStart:2,gridColumnEnd:14,margin:".6em"}},a.a.createElement(b,{padding:".3em 1.2em",backgroundSize:"100% 100%",fontSize:".8em",linkName:"Weapons"}),a.a.createElement(b,{padding:".3em 1.2em",backgroundSize:"100% 100%",fontSize:".8em",linkName:"Items"}),a.a.createElement(b,{padding:".3em 1.2em",backgroundSize:"100% 100%",fontSize:".8em",linkName:"Armor"}),a.a.createElement(b,{padding:".3em 1.2em",backgroundSize:"100% 100%",fontSize:".8em",linkName:"Pets"}),a.a.createElement(b,{padding:".3em 1.2em",backgroundSize:"100% 100%",fontSize:".8em",linkName:"Misc"})))},Oe=function(e){return Object(W.a)(e),a.a.createElement(D,{className:"profile-grid"},a.a.createElement("div",{style:{position:"absolute",top:0,right:0,color:"white",padding:".2em",margin:".2em"}},a.a.createElement(c.b,{to:"/home",style:{color:"white"}},"Back")),a.a.createElement(h,{title:"Character"}),a.a.createElement(f,{headerDisplay:"none",direction:"center",imgSrc:"/images/player-m-02.png",imgAlt:"A brave warrior"}),a.a.createElement("div",null,a.a.createElement(b,{lineHeight:we,backgroundSize:Se,margin:ke,linkName:"Strength"}),a.a.createElement(b,{lineHeight:we,backgroundSize:Se,margin:ke,linkName:"Dexterity"}),a.a.createElement(b,{lineHeight:we,backgroundSize:Se,margin:ke,linkName:"Intelligence"}),a.a.createElement(b,{lineHeight:we,backgroundSize:Se,margin:ke,linkName:"Charisma"}),a.a.createElement(b,{lineHeight:we,backgroundSize:Se,margin:ke,linkName:"Luck"})),a.a.createElement("div",{style:{width:"100%",height:"100%"}},a.a.createElement(E,{boardTitle:"Stats",margin:"0",padding:"0",message:"Strength: Dexterity: Intelligence: Charisma: __Luck__: "})))},we="2em",Se="100% 200%",ke="0 0 .5em 0";function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var je={isAuth:!1,token:null,loadingAuth:!1,errors:null},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATE":return De({},e,{isAuth:!0,loadingAuth:!1,errors:null});case"UNAUTHENTICATE":return De({},e,{isAuth:!1,loadingAuth:!1,errors:null});case"LOADING_AUTH":return De({},e,{loadingAuth:!0});case"SET_AUTH_ERROR":return De({},e,{errors:t.err,loadingAuth:!1});default:return e}},Ne=Object(i.b)((function(e){return{isAuth:e.user.auth.isAuth,loadingAuth:e.user.auth.loadingAuth,errors:e.user.auth.errors}}),{attemptLogin:function(e,t){return function(n){n({type:"LOADING_AUTH"}),console.log("attempt login"),T.signInWithEmailAndPassword(e,t).then((function(e){console.log("user signed up:",e),n({type:"AUTHENTICATE"})})).catch((function(e){console.log("error signing in:",e),n({type:"SET_AUTH_ERROR",err:e})}))}}})((function(e){var t=e.isAuth,n=e.loadingAuth,o=e.errors,l=e.attemptLogin,i=Object(r.useState)(""),c=Object(B.a)(i,2),u=c[0],m=c[1],d=Object(r.useState)(""),p=Object(B.a)(d,2),g=p[0],f=p[1];return t?a.a.createElement(s.a,{to:"/home"}):a.a.createElement("div",null,a.a.createElement(h,{title:"Login",fontSize:"32"}),a.a.createElement("form",{style:xe,onSubmit:function(e){e.preventDefault(),l(u,g)}},o&&a.a.createElement("div",{style:{color:"red",fontSize:"26px"}},a.a.createElement("p",null,"An error occured while logging in:"),a.a.createElement("p",null,o.message)),a.a.createElement("div",{className:"formItem"},a.a.createElement("input",{type:"text",id:"username",value:u,placeholder:"Email...",onChange:function(e){return m(e.target.value)}})),a.a.createElement("div",{className:"formItem"},a.a.createElement("input",{type:"password",id:"password",value:g,placeholder:"*******",onChange:function(e){return f(e.target.value)}})),n?a.a.createElement("button",null,"Loading..."):a.a.createElement("button",{type:"submit"},"Login")))})),xe={},Te=Object(i.b)((function(e){return{auth:e.user.auth}}),{attemptSignup:function(e,t,n){return function(r){r({type:"LOADING_AUTH"}),console.log("attempt signup"),T.createUserWithEmailAndPassword(t,n).then((function(t){console.log("user account created:",t),r({type:"AUTHENTICATE"}),x.doc("/profiles/".concat(t.user.uid)).set({username:e,hp:50,damage:8,xp:0,level:1,gold:0,castle:!1,maxItems:5}).catch((function(e){return console.log(e)}))})).catch((function(e){console.log("signup error:",e),r({type:"SET_AUTH_ERROR",err:e})}))}}})((function(e){var t=e.auth,n=e.attemptSignup,o=Object(r.useState)(""),l=Object(B.a)(o,2),i=l[0],c=l[1],u=Object(r.useState)(""),m=Object(B.a)(u,2),d=m[0],p=m[1],g=Object(r.useState)(""),f=Object(B.a)(g,2),b=f[0],E=f[1];return t.isAuth?a.a.createElement(s.a,{to:"/home"}):a.a.createElement("div",null,a.a.createElement(h,{title:"Signup",fontSize:"32"}),a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("submitting signup form"),n(i,d,b)}},t.errors&&a.a.createElement("div",{style:{color:"red",fontSize:"26"}},a.a.createElement("p",null,"An error occurred when signing up"),a.a.createElement("p",null,t.errors.message)),a.a.createElement("div",{className:"formItem"},a.a.createElement("input",{type:"text",name:"username",value:i,placeholder:"Username",onChange:function(e){return c(e.target.value)}})),a.a.createElement("div",{className:"formItem"},a.a.createElement("input",{type:"email",name:"email",value:d,placeholder:"Email",onChange:function(e){return p(e.target.value)}})),a.a.createElement("div",{className:"formItem"},a.a.createElement("input",{type:"password",name:"password",value:b,placeholder:"*********",onChange:function(e){return E(e.target.value)}})),t.loadingAuth?a.a.createElement("button",null,"Loading..."):a.a.createElement("button",{type:"submit"},"Signup")))})),He=n(47),Pe=Object(i.b)((function(e){return{isAuth:e.user.auth.isAuth}}))((function(e){var t=e.component,n=e.isAuth,r=Object(He.a)(e,["component","isAuth"]);return a.a.createElement(s.b,Object.assign({},r,{render:function(e){return n?a.a.createElement(t,e):a.a.createElement("div",null,a.a.createElement("div",null,"Error, you aren't logged in yet"),a.a.createElement(c.b,{to:"/"},"Go Back"))}}))})),Ie=function(){return a.a.createElement(c.a,null,a.a.createElement(A,null,a.a.createElement("audio",{id:"title_music",src:"/music/castle-in-the-sky-remix.mp3",autoPlay:!0,loop:!0}),a.a.createElement(s.d,null,a.a.createElement(s.b,{path:"/login",component:Ne}),a.a.createElement(s.b,{path:"/signup",component:Te}),a.a.createElement(Pe,{path:"/home",component:z}),a.a.createElement(Pe,{path:"/battle",component:fe}),a.a.createElement(Pe,{path:"/character",component:Oe}),a.a.createElement(Pe,{path:"/shop",component:ve}),a.a.createElement(Pe,{path:"/castle",component:F}),a.a.createElement(s.b,{exact:!0,path:"/",component:G}),a.a.createElement(s.b,{path:"/",render:function(){return a.a.createElement(s.a,{to:"/"})}}))))},_e=n(14),Ce=n(46);function ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ze(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ze(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ue={totalDeaths:null},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_DEATHS":return Le({},e,{totalDeaths:e.totalDeaths+1});default:return e}},Me=Object(_e.c)({auth:Re,profile:_,stats:Be});function Ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function We(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ge(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ge(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Fe={battleActive:!1,loading:!1,errors:null},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_GAME":return We({},e,{loading:!0});case"SET_GAME_ERR":return We({},e,{loading:!1,errors:t.err});default:return e}},qe=Object(_e.c)({user:Me,battle:de,game:Xe}),Ve=function(){return Object(_e.e)(qe,Object(_e.d)(Object(_e.a)(Ce.a),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__():function(e){return e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(70);var Ye=Ve();l.a.render(a.a.createElement((function(){return a.a.createElement(i.a,{store:Ye},a.a.createElement(Ie,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.abdb266c.chunk.js.map