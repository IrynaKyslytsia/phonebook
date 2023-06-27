"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[978],{2978:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(9439),r=n(2791),s=n(4270),c=n(9434),o=function(e){return e.contacts},i=function(e){return e.filter.value},l=n(3634),u="ContactForm_form__dhl+T",d="ContactForm_title__jZguf",m="ContactForm_label__-cVXI",_="ContactForm_input__Bl93P",f="ContactForm_button__eSwX9",h=n(184),x=function(e){var t=e.onSave,n=(0,c.I0)(),a=(0,c.v9)(o);return(0,h.jsxs)("form",{className:u,onSubmit:function(e){e.preventDefault();var r=e.target,s=r.elements.name.value,c=r.elements.number.value;a.items.find((function(e){return e.name===s}))?alert("".concat(s," is already in contacts.")):(n((0,l.uK)({name:s,number:c})),r.reset(),t())},children:[(0,h.jsx)("h2",{className:d,children:"Add new contact!"}),(0,h.jsxs)("label",{className:m,children:["Name",(0,h.jsx)("input",{className:_,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("label",{className:m,children:["Number",(0,h.jsx)("input",{className:_,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{className:f,type:"submit",children:"Add contact"})]})},v="ContactListItem_wrapper__bo93v",b="ContactListItem_text__QXs1+",p="ContactListItem_button__SG6H2",j=n(8185),C=function(e){var t=e.name,n=e.number,a=e.id,r=(0,c.I0)();return(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)(j.RPM,{}),(0,h.jsxs)("p",{className:b,children:[t,": ",n]}),(0,h.jsx)("button",{className:p,type:"submit",onClick:function(){r((0,l.GK)(a))},children:"Delete"})]})},N="ContactList_list__csErn",w=function(){var e=function(e,t){var n=t.toLowerCase();return e.items.filter((function(e){return e.name.toLowerCase().includes(n)}))}((0,c.v9)(o),(0,c.v9)(i));return(0,h.jsx)("ul",{className:N,children:e.map((function(e){var t=e.name,n=e.number,a=e.id;return(0,h.jsx)("li",{children:(0,h.jsx)(C,{name:t,number:n,id:a})},a)}))})},k=n(4808),y="Filter_label__vEd1E",g="Filter_input__N7T3z",F=function(){var e=(0,c.I0)();return(0,h.jsxs)("label",{className:y,children:["Find contacts by name",(0,h.jsx)("input",{className:g,type:"text",onChange:function(t){var n;n=t.currentTarget.value,e((0,k.T)(n))}})]})},I=n(4164),A="Modal_backdrop__xTnIT",E="Modal_content__gGb69",L=document.querySelector("#modal-root"),T=function(e){var t=e.onClose,n=e.children;(0,r.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}));var a=function(e){"Escape"===e.code&&t()};return(0,I.createPortal)((0,h.jsx)("div",{className:A,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,h.jsx)("div",{className:E,children:n})}),L)},S="AddButton_button__-Kw2e",z=function(e){var t=e.onClick;return(0,h.jsx)("button",{className:S,type:"button",onClick:t,"aria-label":"Add contact",children:(0,h.jsx)(j.IaE,{fill:"white"})})},Z=function(){var e=(0,c.v9)(o),t=(0,c.I0)(),n=(0,r.useState)(!1),i=(0,a.Z)(n,2),u=i[0],d=i[1],m=function(){return d((function(e){return!e}))};return(0,r.useEffect)((function(){t((0,l.K2)())}),[t]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.q,{children:(0,h.jsx)("title",{children:"Your contacts"})}),(0,h.jsx)(z,{onClick:m}),(0,h.jsx)(F,{}),e.items.length>0?(0,h.jsx)(w,{}):(0,h.jsx)("div",{children:"There are no contacts..."}),u&&(0,h.jsx)(T,{onClose:m,children:(0,h.jsx)(x,{onSave:m})})]})}}}]);
//# sourceMappingURL=978.96a00374.chunk.js.map