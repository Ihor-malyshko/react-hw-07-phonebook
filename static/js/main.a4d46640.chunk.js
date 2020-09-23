(this["webpackJsonpreact-hw-07-phonebook"]=this["webpackJsonpreact-hw-07-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={form:"ContactForm_form__jOUG4",field:"ContactForm_field__32mEq",input:"ContactForm_input__3GQZP",label:"ContactForm_label__1eBis",btn:"ContactForm_btn__8s8Ax"}},15:function(e,t,n){e.exports={taskList:"PhoneList_taskList__1UKhQ",btn:"PhoneList_btn__3gne2",enter:"PhoneList_enter__AINdH",enterActive:"PhoneList_enterActive__SriMv",exit:"PhoneList_exit__Q6TnI",exitActive:"PhoneList_exitActive__1WknN"}},16:function(e,t,n){e.exports={field:"Filter_field__3HFI4",input:"Filter_input__23cjG",label:"Filter_label__1Z0sK",enter:"Filter_enter__3FeHV",enterActive:"Filter_enterActive__1bBJX",exit:"Filter_exit__s5hOA",exitActive:"Filter_exitActive__2ajJj"}},21:function(e,t,n){e.exports={logo:"Logo_logo__30ctS",appear:"Logo_appear__3khVz",appearActive:"Logo_appearActive__3E2dN"}},22:function(e,t,n){e.exports={section:"Section_section__3hrN4",title:"Section_title__3tuRy"}},23:function(e,t,n){e.exports={alert:"Alert_alert__1BCgu",enter:"Alert_enter__3ddO2",enterActive:"Alert_enterActive__1vwvM",exit:"Alert_exit__1Niau",exitActive:"Alert_exitActive__2ulRR"}},24:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},30:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(11),o=n.n(i),l=n(6),s=n(4),u=n(5),m=n(8),b=n(7),p=n(43),_=function(e){return function(t){return function(n){Object(m.a)(r,n);var a=Object(b.a)(r);function r(){return Object(s.a)(this,r),a.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var n=void 0===this.props.isVisible||this.props.isVisible;return c.a.createElement(p.a,{appear:!0,in:n,timeout:500,classNames:e,unmountOnExit:!0},c.a.createElement(t,Object.assign({},this.props,this.state)))}}]),r}(r.Component)}},d=n(21),f=n.n(d),h=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("h2",{className:f.a.logo},"Phonebook")}}]),n}(r.Component),v=_(f.a)(h),O=n(22),j=n.n(O),E=function(e){var t=e.title,n=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:j.a.section},t&&c.a.createElement("h2",{className:j.a.title},t),n))},g=n(45),C=n(9),y=n(44),N={addContact:Object(C.b)("contact/addContact",(function(e){var t=e.name,n=e.number;return{payload:{contact:{id:Object(y.a)(),name:t,number:n}}}})),removeContact:Object(C.b)("contact/removeContact"),changeFilter:Object(C.b)("contact/changeFilter")},A=n(15),x=n.n(A),F={onRemoveContact:N.removeContact},k=Object(l.b)((function(e){return{contact:e.contact.items,filter:e.contact.filter}}),F)((function(e){var t=e.contact,n=e.filter,a=e.onRemoveContact,r=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(t,n);return c.a.createElement(g.a,{component:"ul",className:x.a.taskList},r.map((function(e){var t=e.id,n=e.name,r=e.number;return c.a.createElement(p.a,{key:t,timeout:250,classNames:x.a},c.a.createElement("li",{className:x.a.item},c.a.createElement("p",{style:{display:"inline-block",margin:"10px"}},n," - ",r),c.a.createElement("button",{type:"button",className:x.a.btn,onClick:function(){return a(t)}},"Del")))})))})),S=n(14),L=n(10),I=n.n(L),w=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleInputChange=function(t){e.setState(Object(S.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(e.state),e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return c.a.createElement("form",{onSubmit:this.handleSubmit,className:I.a.form},c.a.createElement("div",{className:I.a.field},c.a.createElement("input",{type:"text",value:t,onChange:this.handleInputChange,className:I.a.input,name:"name",id:"name",placeholder:" "}),c.a.createElement("label",{htmlFor:"name",className:I.a.label},"Name")),c.a.createElement("div",{className:I.a.field},c.a.createElement("input",{type:"tel",value:n,onChange:this.handleInputChange,className:I.a.input,name:"number",id:"tel",placeholder:" "}),c.a.createElement("label",{htmlFor:"tel",className:I.a.label},"Phone number")),c.a.createElement("button",{type:"submit",className:I.a.btn,disabled:""===t},"Add"))}}]),n}(r.Component),P={onAddContact:N.addContact},J=Object(l.b)(null,P)(w),R=n(16),V=n.n(R),B={onFilterChannge:N.changeFilter},H=Object(l.b)((function(e){return{filter:e.contact.filter}}),B)(_(V.a)((function(e){return c.a.createElement("div",{className:V.a.field},c.a.createElement("input",{type:"text",onChange:function(t){return e.onFilterChannge(t.target.value)},className:V.a.input,name:"filter",id:"filter",placeholder:" "}),c.a.createElement("label",{htmlFor:"filter",className:V.a.label},"Name Search"))}))),D=n(23),G=n.n(D),K=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:G.a.alert},"This name, already exist in contacts.")}}]),n}(r.Component),Q=_(G.a)(K),U=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={alert:!1},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.contacts!==this.props.contacts&&localStorage.setItem("contacts",JSON.stringify(this.props.contacts))}},{key:"render",value:function(){var e=this.state.alert,t=this.props.contacts;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement(E,null,c.a.createElement(Q,{isVisible:e}),c.a.createElement(J,null)),t&&c.a.createElement(E,{title:"Contacts"},c.a.createElement(H,{isVisible:t.length>1}),c.a.createElement(k,null)))}}]),n}(r.Component),M=Object(l.b)((function(e){return{contacts:e.contact.items}}),null)(U),T=n(27),Z=n(3),q=n(24),z=Object(C.c)(function(){var e=localStorage.getItem("contacts");return null===e?(localStorage.setItem("contacts",JSON.stringify(q)),q):JSON.parse(e)}(),(a={},Object(S.a)(a,N.addContact,(function(e,t){return e.some((function(e){return e.name===t.payload.name}))?e:[t.payload.contact].concat(Object(T.a)(e))})),Object(S.a)(a,N.removeContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),W=Object(C.c)("",Object(S.a)({},N.changeFilter,(function(e,t){return t.payload}))),X=Object(Z.c)({items:z,filter:W}),Y=Object(C.a)({reducer:{contact:X}});n(40);o.a.render(c.a.createElement(l.a,{store:Y},c.a.createElement(M,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a4d46640.chunk.js.map