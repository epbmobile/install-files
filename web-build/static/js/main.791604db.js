(()=>{var e={834:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var n=r(5861),a=r(5671),s=r(3144),o=r(136),i=r(2963),l=r(1120),d=r(5004),u=r(3426),c=r(6792),f=r(5722),h=r(5222),m=r(8265),g=r(3051),p=r(519),y=r(4396),j=r.n(y),x=r(9385),v=r(5288),b=r(1054),S=r(6591),z=r(3287);r(2152).default.OS;const k={fragrance:{service:"https://www.epbrowser.com/gateway/",logo:r(5484),wall:r(2924),orgId:"160",locId:"160",theme:"rgba(253, 116, 34, 1)",theme1:"rgba(253, 116, 34, 0.1)",theme9:""}};var w=r(2629);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.default)(e);if(t){var a=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.default)(this,r)}}var T=function(e){(0,o.default)(r,e);var t=C(r);function r(e){var n;return(0,a.default)(this,r),(n=t.call(this,e)).state={loading:!1,name:"",gender:"F",countryCode:"65",phone:"",emailAddr:"",postalCode:"",address1:"",address2:"",address3:"",address4:"",birthday:"1964-05-08"},n}return(0,s.default)(r,[{key:"componentDidMount",value:function(){var e=(0,n.default)((function*(){var e=yield p.default.getItem("session");this.setState({session:e?JSON.parse(e):null})}));return function(){return e.apply(this,arguments)}}()},{key:"doPressGender",value:function(){this.setState({gender:"M"===this.state.gender?"F":"M"})}},{key:"doPostalCode",value:function(){var e=this,t=this.state.postalCode,r=k.fragrance.service+"epod/api/epbsggeo",n=new URLSearchParams;n.append("postal",t),fetch(r+="?"+n,{method:"GET"}).then((function(e){return e.json()})).then((function(t){null!=t&&t.address&&e.setState({address2:t.address||""})}))}},{key:"doSubmit",value:function(){var e=this,t=this.props,r=t.navigation,n=(t.route,this.state),a=n.name,s=n.gender,o=n.countryCode,i=n.phone,l=n.emailAddr,d=n.postalCode,u=n.address1,c=n.address2,f=(n.birthday,k.fragrance.service);this.setState({loading:!0},(function(){fetch(f+"epod/api/create-vip",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({orgId:k.fragrance.orgId,locId:k.fragrance.locId,userId:"",name:a,gender:s,phone:"+"+o+i,emailAddr:l,postalCode:d,address1:u,address2:c,dobDay:"8",dobMonth:"5",dobYear:"1954"})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({loading:!1},(function(){return r.navigate("Error",{message:t.message||"VIP creation successful. We will send a message shortly to confirm your registration."})}))}))}))}},{key:"render",value:function(){var e,t=this,r=this.props,n=(r.navigation,r.route,this.state),a=n.loading,s=(n.session,n.name),o=n.gender,i=n.countryCode,l=n.phone,d=n.emailAddr,u=n.postalCode,c=n.address1,f=n.address2,h=(n.address3,n.address4,n.birthday);return(0,w.jsxs)(x.default,{style:{backgroundColor:"white"},children:[(0,w.jsxs)(x.default,{style:{height:60,margin:10,flexDirection:"row"},children:[(0,w.jsx)(z.default,{style:{height:50,width:150},source:{uri:null==(e=k.fragrance)?void 0:e.logo},resizeMode:"contain"}),(0,w.jsx)(x.default,{style:{flex:1}})]}),(0,w.jsxs)(b.default,{style:{fontFamily:"demi",fontSize:20,marginHorizontal:10},children:["My Registration ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u4f1a\u5458\u767b\u8bb0"})]}),(0,w.jsx)(b.default,{style:{fontFamily:"regular",marginHorizontal:10},children:"Join us now for exclusive member deals and promos!"}),(0,w.jsxs)(x.default,{style:{margin:10},children:[(0,w.jsxs)(b.default,{style:{fontFamily:"demi",letterSpacing:1,fontSize:12,marginTop:5,textTransform:"uppercase"},children:["Name ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u59d3\u540d"})]}),(0,w.jsx)(S.default,{style:{marginTop:5,borderRadius:5,backgroundColor:k.fragrance.theme1,minHeight:50,padding:10,fontFamily:"demi",fontSize:16},blurOnSubmit:!0,selectTextOnFocus:!0,onChangeText:function(e){return t.setState({name:e})},value:s})]}),(0,w.jsxs)(x.default,{style:{flexDirection:"row"},children:[(0,w.jsxs)(x.default,{style:{margin:10,flex:1},children:[(0,w.jsxs)(b.default,{style:{fontFamily:"demi",letterSpacing:1,fontSize:12,marginTop:5,textTransform:"uppercase"},children:["Birthday ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u751f\u65e5"})]}),(0,w.jsx)(S.default,{style:{marginTop:5,borderRadius:5,backgroundColor:k.fragrance.theme1,minHeight:50,padding:10,fontFamily:"demi",fontSize:16},blurOnSubmit:!0,selectTextOnFocus:!0,onChangeText:function(e){return t.setState({birthday:e})},value:h})]}),(0,w.jsxs)(x.default,{style:{margin:10,flex:1},children:[(0,w.jsxs)(b.default,{style:{fontFamily:"demi",letterSpacing:1,fontSize:12,marginTop:5,textTransform:"uppercase"},children:["Gender ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u6027\u522b"})]}),(0,w.jsx)(v.default,{style:{marginTop:5,borderRadius:5,minHeight:50,padding:10,justifyContent:"center"},onPress:function(){return t.doPressGender()},children:(0,w.jsxs)(b.default,{children:[(0,w.jsxs)(b.default,{style:{fontFamily:"demi",fontSize:16,opacity:"M"===o?1:.2},children:["Male ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u516c"})]}),"\u2002/\u2002",(0,w.jsxs)(b.default,{style:{fontFamily:"demi",fontSize:16,opacity:"F"===o?1:.2},children:["Female ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u6bcd"})]})]})})]})]}),(0,w.jsxs)(x.default,{style:{margin:10},children:[(0,w.jsxs)(b.default,{style:{fontFamily:"demi",letterSpacing:1,fontSize:12,marginTop:5,textTransform:"uppercase"},children:["Email ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u7535\u90ae"})]}),(0,w.jsx)(S.default,{style:{marginTop:5,borderRadius:5,backgroundColor:k.fragrance.theme1,minHeight:50,padding:10,fontFamily:"demi",fontSize:16},blurOnSubmit:!0,selectTextOnFocus:!0,keyboardType:"email-address",onChangeText:function(e){return t.setState({emailAddr:e})},value:d})]}),(0,w.jsxs)(x.default,{style:{flexDirection:"row"},children:[(0,w.jsxs)(x.default,{style:{margin:10,flex:1},children:[(0,w.jsxs)(b.default,{style:{fontFamily:"demi",letterSpacing:1,fontSize:12,marginTop:5,textTransform:"uppercase"},children:["Phone ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u7535\u8bdd"})]}),(0,w.jsxs)(x.default,{style:{flexDirection:"row",width:"100%"},children:[(0,w.jsx)(x.default,{style:{width:50,marginRight:5},children:(0,w.jsx)(S.default,{style:{marginTop:5,borderRadius:5,backgroundColor:k.fragrance.theme1,minHeight:50,padding:10,fontFamily:"demi",fontSize:16,textAlign:"center"},blurOnSubmit:!0,selectTextOnFocus:!0,keyboardType:"number-pad",onChangeText:function(e){return t.setState({countryCode:e})},value:i})}),(0,w.jsx)(x.default,{style:{flex:1,marginLeft:5},children:(0,w.jsx)(S.default,{style:{marginTop:5,borderRadius:5,backgroundColor:k.fragrance.theme1,minHeight:50,padding:10,fontFamily:"demi",fontSize:16},blurOnSubmit:!0,selectTextOnFocus:!0,keyboardType:"number-pad",onChangeText:function(e){return t.setState({phone:e})},value:l})})]})]}),(0,w.jsxs)(x.default,{style:{margin:10,flex:1},children:[(0,w.jsxs)(b.default,{style:{fontFamily:"demi",letterSpacing:1,fontSize:12,marginTop:5,textTransform:"uppercase"},children:["Postal Code ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u90ae\u7f16"})]}),(0,w.jsx)(S.default,{style:{marginTop:5,borderRadius:5,backgroundColor:k.fragrance.theme1,minHeight:50,padding:10,fontFamily:"demi",fontSize:16},blurOnSubmit:!0,onBlur:function(){return t.doPostalCode()},selectTextOnFocus:!0,keyboardType:"number-pad",onChangeText:function(e){return t.setState({postalCode:e})},value:u})]})]}),(0,w.jsxs)(x.default,{style:{margin:10},children:[(0,w.jsxs)(b.default,{style:{fontFamily:"demi",letterSpacing:1,fontSize:12,marginTop:5,textTransform:"uppercase"},children:["Address ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u5730\u5740"})]}),(0,w.jsx)(S.default,{style:{marginTop:5,borderRadius:5,backgroundColor:k.fragrance.theme1,minHeight:50,padding:10,fontFamily:"demi",fontSize:16},blurOnSubmit:!0,selectTextOnFocus:!0,onChangeText:function(e){return t.setState({address1:e})},value:c,placeholder:"Unit No. \u95e8\u724c",placeholderTextColor:"rgba(0,0,0,0.2)"}),(0,w.jsx)(S.default,{style:{marginTop:5,borderRadius:5,backgroundColor:k.fragrance.theme1,minHeight:50,padding:10,fontFamily:"demi",fontSize:16},blurOnSubmit:!0,selectTextOnFocus:!0,onChangeText:function(e){return t.setState({address2:e})},value:f})]}),(0,w.jsx)(v.default,{style:{marginTop:30,marginHorizontal:10,height:50,backgroundColor:k.fragrance.theme,borderRadius:5,justifyContent:"center",alignItems:"center"},disabled:a,onPress:function(){return t.doSubmit()},children:(0,w.jsx)(b.default,{style:{fontFamily:"demi",fontSize:16,letterSpacing:1,color:"white",textTransform:"uppercase"},children:"Join Now \u52a0\u5165\u4f1a\u5458"})}),(0,w.jsx)(b.default,{style:{fontFamily:"regular",marginVertical:5,fontSize:10,marginHorizontal:10,textAlign:"center"},children:"\xa9 2023 Fragrance Foodstuff Pte Ltd"})]})}}]),r}(d.Component),F=(c.default.create({}),r(3645)),R=r(7375),O=r(5454);const I=r.p+"static/media/temp2.a8fe44860ceabfa0536d.jpg";function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.default)(e);if(t){var a=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.default)(this,r)}}var H=function(e){(0,o.default)(r,e);var t=P(r);function r(e){var n;return(0,a.default)(this,r),(n=t.call(this,e)).state={wabaVipInfo:null,wabaSvInfo:[]},n}return(0,s.default)(r,[{key:"componentDidMount",value:function(){var e=(0,n.default)((function*(){var e=this,t=this.props,r=t.navigation,n=t.route,a=yield p.default.getItem("session");this.setState({session:a?JSON.parse(a):null});yield f.default.getInitialURL();var s=k.fragrance.service+"epod/api/waba-info",o=new URLSearchParams;o.append("accessCode",n.params.access),fetch(s+="?"+o).then((function(e){return e.json()})).then((function(t){console.log(t),1===t.wabaVipInfo.length?e.setState({wabaVipInfo:t.wabaVipInfo,wabaSvInfo:t.wabaSvInfo}):r.navigate("Error")}))}));return function(){return e.apply(this,arguments)}}()},{key:"renderItem",value:function(e){var t=this.props.navigation;return(0,w.jsxs)(x.default,{style:{flex:.5,margin:5,marginVertical:10},children:[(0,w.jsxs)(x.default,{style:{alignItems:"flex-end"},children:[(0,w.jsx)(b.default,{style:{fontFamily:"demi",fontSize:18,textTransform:"capitalize"},children:e.svtypeName}),(0,w.jsxs)(b.default,{style:{fontFamily:"demi",fontSize:10,textAlign:"right"},children:["Valid till ",j()(e.expiryDate).format("ll")," ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u622a\u6b62\u65e5\u671f"})]})]}),(0,w.jsxs)(v.default,{style:{overflow:"hidden",marginVertical:5,width:"100%",aspectRatio:.67,borderRadius:10,backgroundColor:k.fragrance.theme},onPress:function(){return t.navigate("Voucher",{voucher:e})},children:[(0,w.jsx)(z.default,{style:{flex:1,borderRadius:10},source:I,resizeMode:"cover"}),(0,w.jsx)(x.default,{style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,w.jsx)(R.LinearGradient,{colors:["rgba(0,0,0,0.4)","transparent"],start:[1,0],end:[0,0],style:{flex:1}})}),(0,w.jsx)(x.default,{style:{position:"absolute",bottom:5,right:5,height:40,width:40,borderRadius:5,backgroundColor:"white",justifyContent:"center",alignItems:"center"},children:(0,w.jsx)(O.default,{size:32,value:e.md5Code,color:"black",logoSize:80})})]}),(0,w.jsx)(b.default,{style:{fontFamily:"regular",fontSize:10,fontStyle:"italic",textAlign:"right"},children:"*Terms and conditions apply."})]})}},{key:"render",value:function(){var e=this,t=this.props,r=(t.navigation,t.route,this.state),n=r.wabaVipInfo,a=r.wabaSvInfo;return n?(0,w.jsxs)(x.default,{style:{backgroundColor:"white"},children:[(0,w.jsx)(x.default,{style:{position:"absolute",backgroundColor:k.fragrance.theme,top:120,left:0,right:0,height:240,justifyContent:"flex-end"},children:(0,w.jsx)(b.default,{style:{fontFamily:"regular",marginVertical:5,fontSize:10,marginHorizontal:10,textAlign:"center"},children:"\xa9 2023 Fragrance Foodstuff Pte Ltd. All rights reserved."})}),(0,w.jsxs)(x.default,{style:{height:60,margin:10,flexDirection:"row"},children:[(0,w.jsx)(z.default,{style:{height:50,width:150},source:{uri:k.fragrance.logo},resizeMode:"contain"}),(0,w.jsxs)(x.default,{style:{flex:1,marginHorizontal:20,justifyContent:"center",alignItems:"flex-end"},children:[(0,w.jsxs)(b.default,{style:{fontFamily:"demi",fontSize:14,textTransform:"capitalize"},children:[n[0].name," ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:n[0].vipId})]}),(0,w.jsxs)(b.default,{style:{fontFamily:"regular",fontSize:10},children:["Available Points ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u53ef\u5151\u6362\u79ef\u5206"})," ",(0,w.jsx)(b.default,{style:{fontFamily:"demi"},children:Number(n[0].totalPoint||"0")})]})]})]}),(0,w.jsxs)(x.default,{style:{backgroundColor:k.fragrance.theme1,borderRadius:10,margin:10,height:240},children:[(0,w.jsx)(z.default,{style:{flex:1,borderRadius:10},source:{uri:k.fragrance.wall},resizeMode:"cover"}),(0,w.jsx)(x.default,{style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,w.jsx)(R.LinearGradient,{colors:["black",k.fragrance.theme],start:[0,0],end:[1,1],style:{flex:1,alignItems:"center",borderRadius:5,opacity:.8}})}),(0,w.jsx)(x.default,{style:{position:"absolute",bottom:10,right:10,height:100,width:100,borderRadius:5,backgroundColor:"white",justifyContent:"center",alignItems:"center"},children:(0,w.jsx)(O.default,{size:90,value:"F4B4F93C59B9783FC7DF3B989256E697",color:"black",logoSize:80})}),(0,w.jsxs)(x.default,{style:{position:"absolute",top:5,left:5,padding:20},children:[(0,w.jsx)(b.default,{style:{fontFamily:"demi",color:"white",fontSize:14,letterSpacing:1},children:n[0].vipId}),(0,w.jsx)(b.default,{style:{fontFamily:"demi",color:"white",fontSize:24,textTransform:"capitalize"},children:n[0].name})]}),(0,w.jsx)(x.default,{style:{position:"absolute",bottom:5,left:5,padding:20},children:(0,w.jsxs)(b.default,{style:{fontFamily:"demi",color:"white",fontSize:14,textTransform:"uppercase",letterSpacing:1},children:["CLASS ",n[0].classId]})})]}),(0,w.jsx)(x.default,{style:{margin:20}}),(0,w.jsxs)(b.default,{style:{fontFamily:"demi",fontSize:20,marginHorizontal:10},children:["My Vouchers ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u6211\u7684\u4f18\u60e0\u5238"})]}),(0,w.jsx)(b.default,{style:{fontFamily:"regular",marginHorizontal:10},children:"The perfect gift for any occasion."}),(0,w.jsx)(F.default,{style:{flex:1,padding:5},numColumns:2,data:a,showsVerticalScrollIndicator:!1,keyExtractor:function(e,t){return t.toString()},renderItem:function(t){var r=t.item;return e.renderItem(r)}})]}):null}}]),r}(d.Component);c.default.create({});function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.default)(e);if(t){var a=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.default)(this,r)}}var M=function(e){(0,o.default)(r,e);var t=A(r);function r(e){var n;return(0,a.default)(this,r),(n=t.call(this,e)).state={terms:[]},n}return(0,s.default)(r,[{key:"componentDidMount",value:function(){var e=(0,n.default)((function*(){var e=yield p.default.getItem("session");this.setState({session:e?JSON.parse(e):null})}));return function(){return e.apply(this,arguments)}}()},{key:"doPressTerms",value:function(){var e=this,t=this.props.route,r=(this.state.postalCode,k.fragrance.service+"epod/api/tc-list"),n=new URLSearchParams;n.append("tcId",t.params.voucher.tcId),fetch(r+="?"+n,{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({terms:t})}))}},{key:"render",value:function(){var e=this,t=this.props,r=t.navigation,n=t.route,a=this.state,s=(a.session,a.terms);return(0,w.jsxs)(x.default,{style:{backgroundColor:"white"},children:[(0,w.jsxs)(x.default,{style:{height:60,margin:10,flexDirection:"row"},children:[(0,w.jsx)(z.default,{style:{height:50,width:150},source:{uri:k.fragrance.logo},resizeMode:"contain"}),(0,w.jsx)(x.default,{style:{flex:1,marginHorizontal:20,justifyContent:"center",alignItems:"flex-end"}})]}),(0,w.jsx)(z.default,{style:{aspectRatio:.67,height:"auto",width:"100%"},source:I,resizeMode:"cover"}),(0,w.jsx)(x.default,{style:{alignItems:"center",justifyContent:"center"},children:(0,w.jsxs)(x.default,{style:{height:240,width:240,borderRadius:10,backgroundColor:"white",justifyContent:"center",alignItems:"center"},children:[(0,w.jsx)(b.default,{style:{fontFamily:"regular",fontSize:10,letterSpacing:.5,margin:5},children:n.params.voucher.svId}),(0,w.jsx)(O.default,{size:160,value:n.params.voucher.md5Code,color:"black"})]})}),(0,w.jsxs)(v.default,{style:{marginVertical:20},onPress:function(){return e.doPressTerms()},children:[(0,w.jsxs)(b.default,{style:{fontFamily:"demi",fontSize:20,marginHorizontal:10},children:["Terms & Conditions ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u901a\u7528\u6761\u6b3e"})]}),(0,w.jsx)(b.default,{style:{fontFamily:"regular",marginHorizontal:10},children:"View T&C."})]}),s&&s.map((function(e){return(0,w.jsxs)(b.default,{style:{fontFamily:"regular",marginHorizontal:10},children:[e.lineNo,". ",e.tcDesc]})})),(0,w.jsx)(x.default,{style:{margin:100}}),(0,w.jsxs)(x.default,{style:{position:"fixed",left:0,right:0,bottom:0,backgroundColor:"white"},children:[(0,w.jsx)(x.default,{style:{margin:20}}),(0,w.jsxs)(b.default,{style:{fontFamily:"demi",fontSize:20,marginHorizontal:10},children:[n.params.voucher.svtypeName," ",(0,w.jsx)(b.default,{style:{color:k.fragrance.theme},children:"\u6211\u7684\u4f18\u60e0\u5238"})]}),(0,w.jsxs)(b.default,{style:{fontFamily:"regular",marginHorizontal:10},children:["Valid till ",j()(n.params.voucher.expiryDate).format("ll"),"."]}),(0,w.jsx)(v.default,{style:{marginTop:10,marginHorizontal:10,height:50,backgroundColor:k.fragrance.theme,borderRadius:5,justifyContent:"center",alignItems:"center"},onPress:function(){return r.goBack()},children:(0,w.jsx)(b.default,{style:{fontFamily:"demi",fontSize:16,letterSpacing:1,color:"white",textTransform:"uppercase"},children:"Back \u8fd4\u56de"})}),(0,w.jsx)(b.default,{style:{fontFamily:"regular",marginVertical:5,fontSize:10,marginHorizontal:10,textAlign:"center"},children:"\xa9 2023 Fragrance Foodstuff Pte Ltd"})]})]})}}]),r}(d.Component);c.default.create({});function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.default)(e);if(t){var a=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.default)(this,r)}}var N=function(e){(0,o.default)(r,e);var t=V(r);function r(e){var n;return(0,a.default)(this,r),(n=t.call(this,e)).state={},n}return(0,s.default)(r,[{key:"componentDidMount",value:function(){var e=(0,n.default)((function*(){var e=yield p.default.getItem("session");this.setState({session:e?JSON.parse(e):null})}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,r=this.props,n=(r.navigation,r.route);this.state.session;return(0,w.jsxs)(x.default,{style:{flex:1},children:[(0,w.jsxs)(x.default,{style:{flex:1,backgroundColor:"white",alignItems:"center",justifyContent:"center"},children:[(0,w.jsx)(z.default,{style:{height:50,width:150},source:{uri:null==(e=k.fragrance)?void 0:e.logo},resizeMode:"contain"}),(0,w.jsx)(b.default,{style:{fontFamily:"demi",margin:20,textAlign:"center"},children:(null==(t=n.params)?void 0:t.message)||"Session expired or invalid link."})]}),(0,w.jsx)(b.default,{style:{fontFamily:"regular",marginVertical:5,fontSize:10,marginHorizontal:10,textAlign:"center"},children:"\xa9 2023 Fragrance Foodstuff Pte Ltd"})]})}}]),r}(d.Component);c.default.create({});function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.default)(e);if(t){var a=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.default)(this,r)}}var B=(0,m.default)(),L={config:{screens:{Register:{path:"waba-ext/register"},Vip:{path:"waba-ext/vip"},Voucher:{path:"waba-ext/voucher"},Error:{path:"*"}}}},E=function(e){(0,o.default)(i,e);var t=D(i);function i(){var e;(0,a.default)(this,i);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return(0,s.default)(i,[{key:"componentDidMount",value:function(){var e=(0,n.default)((function*(){var e,t;yield g.loadAsync({regular:r(5448),demi:r(2510),bold:r(763),light:r(3820)});var n=yield f.default.getInitialURL(),a=yield p.default.getItem("session");a&&(a=JSON.parse(a)),console.log("app mounted",n,null==(e=a)||null==(t=e.o)?void 0:t.openorder)}));return function(){return e.apply(this,arguments)}}()},{key:"didFocus",value:function(){var e=(0,n.default)((function*(){}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.error?(0,w.jsx)(N,{}):(0,w.jsxs)(h.default,{theme:{dark:!1,colors:{background:"white"}},linking:L,children:[(0,w.jsx)(u.default,{hidden:!0}),(0,w.jsxs)(B.Navigator,{screenOptions:{headerShown:!1,animation:"none",gestureEnabled:!1},children:[(0,w.jsx)(B.Screen,{name:"Register",component:T,options:T.navigationOptions}),(0,w.jsx)(B.Screen,{name:"Vip",component:H,options:H.navigationOptions}),(0,w.jsx)(B.Screen,{name:"Voucher",component:M,options:M.navigationOptions}),(0,w.jsx)(B.Screen,{name:"Error",component:N,options:N.navigationOptions})]})]})}}]),i}(d.Component);c.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},6700:(e,t,r)=>{var n={"./af":6735,"./af.js":6735,"./ar":9343,"./ar-dz":5300,"./ar-dz.js":5300,"./ar-kw":7947,"./ar-kw.js":7947,"./ar-ly":2882,"./ar-ly.js":2882,"./ar-ma":3030,"./ar-ma.js":3030,"./ar-sa":2971,"./ar-sa.js":2971,"./ar-tn":8662,"./ar-tn.js":8662,"./ar.js":9343,"./az":1672,"./az.js":1672,"./be":9027,"./be.js":9027,"./bg":9107,"./bg.js":9107,"./bm":8932,"./bm.js":8932,"./bn":6218,"./bn-bd":3617,"./bn-bd.js":3617,"./bn.js":6218,"./bo":4527,"./bo.js":4527,"./br":3345,"./br.js":3345,"./bs":7930,"./bs.js":7930,"./ca":454,"./ca.js":454,"./cs":3984,"./cs.js":3984,"./cv":4646,"./cv.js":4646,"./cy":1372,"./cy.js":1372,"./da":2978,"./da.js":2978,"./de":2193,"./de-at":6365,"./de-at.js":6365,"./de-ch":9737,"./de-ch.js":9737,"./de.js":2193,"./dv":872,"./dv.js":872,"./el":9534,"./el.js":9534,"./en-au":8450,"./en-au.js":8450,"./en-ca":6996,"./en-ca.js":6996,"./en-gb":3864,"./en-gb.js":3864,"./en-ie":9472,"./en-ie.js":9472,"./en-il":300,"./en-il.js":300,"./en-in":7078,"./en-in.js":7078,"./en-nz":472,"./en-nz.js":472,"./en-sg":8696,"./en-sg.js":8696,"./eo":3550,"./eo.js":3550,"./es":9311,"./es-do":3080,"./es-do.js":3080,"./es-mx":7334,"./es-mx.js":7334,"./es-us":4336,"./es-us.js":4336,"./es.js":9311,"./et":8067,"./et.js":8067,"./eu":8831,"./eu.js":8831,"./fa":7981,"./fa.js":7981,"./fi":7479,"./fi.js":7479,"./fil":757,"./fil.js":757,"./fo":9510,"./fo.js":9510,"./fr":8573,"./fr-ca":6805,"./fr-ca.js":6805,"./fr-ch":4170,"./fr-ch.js":4170,"./fr.js":8573,"./fy":926,"./fy.js":926,"./ga":203,"./ga.js":203,"./gd":2975,"./gd.js":2975,"./gl":6890,"./gl.js":6890,"./gom-deva":4234,"./gom-deva.js":4234,"./gom-latn":7577,"./gom-latn.js":7577,"./gu":5804,"./gu.js":5804,"./he":5377,"./he.js":5377,"./hi":9401,"./hi.js":9401,"./hr":2435,"./hr.js":2435,"./hu":2728,"./hu.js":2728,"./hy-am":8093,"./hy-am.js":8093,"./id":6666,"./id.js":6666,"./is":5187,"./is.js":5187,"./it":2667,"./it-ch":6334,"./it-ch.js":6334,"./it.js":2667,"./ja":2414,"./ja.js":2414,"./jv":9359,"./jv.js":9359,"./ka":8740,"./ka.js":8740,"./kk":9521,"./kk.js":9521,"./km":1679,"./km.js":1679,"./kn":8554,"./kn.js":8554,"./ko":686,"./ko.js":686,"./ku":5965,"./ku.js":5965,"./ky":4780,"./ky.js":4780,"./lb":6950,"./lb.js":6950,"./lo":9434,"./lo.js":9434,"./lt":3681,"./lt.js":3681,"./lv":2552,"./lv.js":2552,"./me":8473,"./me.js":8473,"./mi":862,"./mi.js":862,"./mk":1555,"./mk.js":1555,"./ml":3174,"./ml.js":3174,"./mn":6863,"./mn.js":6863,"./mr":566,"./mr.js":566,"./ms":2215,"./ms-my":4959,"./ms-my.js":4959,"./ms.js":2215,"./mt":8830,"./mt.js":8830,"./my":9336,"./my.js":9336,"./nb":1413,"./nb.js":1413,"./ne":4005,"./ne.js":4005,"./nl":2699,"./nl-be":2796,"./nl-be.js":2796,"./nl.js":2699,"./nn":9700,"./nn.js":9700,"./oc-lnc":9495,"./oc-lnc.js":9495,"./pa-in":1217,"./pa-in.js":1217,"./pl":8807,"./pl.js":8807,"./pt":9221,"./pt-br":9895,"./pt-br.js":9895,"./pt.js":9221,"./ro":9162,"./ro.js":9162,"./ru":7991,"./ru.js":7991,"./sd":4518,"./sd.js":4518,"./se":4197,"./se.js":4197,"./si":56,"./si.js":56,"./sk":7025,"./sk.js":7025,"./sl":69,"./sl.js":69,"./sq":1961,"./sq.js":1961,"./sr":5820,"./sr-cyrl":250,"./sr-cyrl.js":250,"./sr.js":5820,"./ss":7806,"./ss.js":7806,"./sv":2833,"./sv.js":2833,"./sw":9018,"./sw.js":9018,"./ta":1830,"./ta.js":1830,"./te":2102,"./te.js":2102,"./tet":8711,"./tet.js":8711,"./tg":2615,"./tg.js":2615,"./th":8373,"./th.js":8373,"./tk":3277,"./tk.js":3277,"./tl-ph":6249,"./tl-ph.js":6249,"./tlh":7413,"./tlh.js":7413,"./tr":6726,"./tr.js":6726,"./tzl":9131,"./tzl.js":9131,"./tzm":5683,"./tzm-latn":2174,"./tzm-latn.js":2174,"./tzm.js":5683,"./ug-cn":4984,"./ug-cn.js":4984,"./uk":3778,"./uk.js":3778,"./ur":2753,"./ur.js":2753,"./uz":4345,"./uz-latn":7383,"./uz-latn.js":7383,"./uz.js":4345,"./vi":8201,"./vi.js":8201,"./x-pseudo":7395,"./x-pseudo.js":7395,"./yo":3168,"./yo.js":3168,"./zh-cn":5680,"./zh-cn.js":5680,"./zh-hk":9536,"./zh-hk.js":9536,"./zh-mo":5088,"./zh-mo.js":5088,"./zh-tw":2867,"./zh-tw.js":2867};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=6700},763:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/AvenirNextLTPro-Bold.711a4eb654bf1139f123.otf"},2510:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/AvenirNextLTPro-Demi.2a0cec709a4166a967dc.otf"},3820:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/AvenirNextLTPro-It.3e062c6caf04ecafa42c.otf"},5448:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/AvenirNextLTPro-Regular.94f2f163d4b698242fef.otf"},5484:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/logo-fragrance.e88445ed568b0e9e081e.png"},2924:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/wall-fragrance.068925562c2f0ec1affd.jpg"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,s)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,a,s]=e[u],i=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,a,s]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="./",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,s,[o,i,l]=n,d=0;if(o.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var u=l(r)}for(t&&t(n);d<o.length;d++)s=o[d],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[872],(()=>r(6271)));n=r.O(n)})();
//# sourceMappingURL=main.791604db.js.map