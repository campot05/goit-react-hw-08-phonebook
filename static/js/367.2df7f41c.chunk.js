"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[367],{5367:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(7762),r=n(4942),s=n(1413),c=n(9439),o=n(2791),i="ContactForm_contactForm__y0Rca",l="ContactForm_btn__wll+u",u="ContactForm_input__Bl93P",m=n(1686),d=n(9434),f=n(5036),_=n(3329);var h=function(){var e=(0,o.useState)({name:"",number:""}),t=(0,c.Z)(e,2),n=t[0],h=t[1],b=(0,d.I0)(),p=(0,d.v9)((function(e){return e.contacts.contacts.items}));(0,o.useEffect)((function(){b((0,f.yF)())}),[b]);var x=function(e){var t=e.target,a=t.name,c=t.value;h((0,s.Z)((0,s.Z)({},n),{},(0,r.Z)({},a,c)))},v=function(){h({name:"",number:""})};return(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,r=(0,a.Z)(p);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(n.name.toLocaleLowerCase()===s.name.toLocaleLowerCase())return m.Notify.failure("".concat(n.name," is already in contacts."))}}catch(c){r.e(c)}finally{r.f()}b((0,f.uK)(n)),v()},className:i,children:[(0,_.jsxs)("label",{children:["Name ",(0,_.jsx)("br",{}),(0,_.jsx)("input",{className:u,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n.name,onChange:x})]}),(0,_.jsx)("br",{}),(0,_.jsxs)("label",{children:["Number ",(0,_.jsx)("br",{}),(0,_.jsx)("input",{className:u,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:n.number,onChange:x})]}),(0,_.jsx)("br",{}),(0,_.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})},b="ContactList_btn__6Piat",p="ContactList_name__UCkFW",x="ContactList_list__csErn",v=function(){var e=(0,d.I0)(),t=(0,d.v9)((function(e){return e.contacts.contacts.items})),n=(0,d.v9)((function(e){return e.contacts.filter})),a=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase().trim())}));return(0,_.jsx)("ul",{className:x,children:a.map((function(t){var n=t.id,a=t.name,r=t.number;return(0,_.jsxs)("li",{className:p,children:[a,": ",r,(0,_.jsx)("button",{className:b,onClick:function(){return e((0,f.GK)(n))},children:"Delete"})]},n)}))})},j="Filter_filter__vxThR",C="Filter_input__N7T3z",N=n(9652),y=function(){var e=(0,d.I0)();return(0,_.jsx)("div",{className:j,children:(0,_.jsxs)("label",{children:["Find contacts by name",(0,_.jsx)("input",{className:C,onChange:function(t){return e((0,N.W1)(t.target.value))}})]})})},L="Contacts_container__TJkHA";function w(){return(0,_.jsxs)("div",{className:L,children:[(0,_.jsx)(h,{}),(0,_.jsx)(y,{}),(0,_.jsx)(v,{})]})}}}]);
//# sourceMappingURL=367.2df7f41c.chunk.js.map