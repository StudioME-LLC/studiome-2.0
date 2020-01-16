(this["webpackJsonpstudiome-2.0"]=this["webpackJsonpstudiome-2.0"]||[]).push([[8],{192:function(e,t,n){"use strict";n.r(t);var a=n(11),s=n(36),r=n(37),c=n(39),i=n(38),l=n(40),o=n(0),u=n.n(o);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=u.a.createElement("title",null,"circle-left"),_=u.a.createElement("path",{d:"M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"}),h=u.a.createElement("path",{d:"M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"}),f=function(e){var t=e.svgRef,n=e.title,a=m(e,["svgRef","title"]);return u.a.createElement("svg",p({width:32,height:32,viewBox:"0 0 32 32",ref:t},a),void 0===n?d:n?u.a.createElement("title",null,n):null,_,h)},q=u.a.forwardRef((function(e,t){return u.a.createElement(f,p({svgRef:t},e))})),b=(n.p,n(21));n.d(t,"default",(function(){return k}));var k=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={products:[],selected:!1,selectedProduct:null,isLoading:!0},n.onProductSelect=function(e){n.setState(Object(a.a)({},n.state,{selected:!n.state.selected,index:e,selectedProduct:n.state.products[e]})),window.scroll({top:0})},n.onPreviousButton=function(){n.setState(Object(a.a)({},n.state,{selectedProduct:n.state.products[n.state.index-1],index:n.state.index-1}))},n.onNextButton=function(){n.setState(Object(a.a)({},n.state,{selectedProduct:n.state.products[n.state.index+1],index:n.state.index+1}))},n.onBackButton=function(){n.setState(Object(a.a)({},n.state,{selected:!n.state.selected})),window.scroll({top:0})},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){window.scroll({top:0})}},{key:"componentDidMount",value:function(){var e=this;return fetch(this.props.link).then((function(e){return e.json()})).then((function(t){for(var n=t.acf.product_blocks,s=[],r=0;r<n.length;r++)s.push(n[r]);e.setState(Object(a.a)({},e.state,{products:s,isLoading:!1}))}))}},{key:"render",value:function(){var e=this,t=u.a.createElement("div",{style:{gridColumn:"1 / -1"}},u.a.createElement(b.a,null));return this.state.isLoading||(t=this.state.products.map((function(t,n){return u.a.createElement("div",{className:"equipment__component",onClick:e.onProductSelect.bind(e,n),key:n},u.a.createElement("div",{className:"equipment__component-photo",style:{backgroundImage:"url(".concat(t.photo,")")},alt:"Equipment-Photo"}),u.a.createElement("h1",{className:"equipment__component-heading"},t.title))}))),this.state.selected&&(t=u.a.createElement("div",{className:"equipment__container-2"},u.a.createElement("div",{className:"equipment__selected-button",onClick:this.onBackButton},u.a.createElement(q,{className:"equipment__back-icon"}),u.a.createElement("p",{className:"equipment__back-text"},"Back")),this.state.index>0?u.a.createElement("button",{className:"equipment__previous",onClick:this.onPreviousButton},"\u2190 ",this.state.products[this.state.index-1].title.slice(0,15),"..."):null,this.state.index+1!==this.state.products.length?u.a.createElement("button",{className:"equipment__next",onClick:this.onNextButton},this.state.products[this.state.index+1].title.slice(0,15),"... \u2192"):null,u.a.createElement("h1",{className:"equipment__selected-heading"},this.state.selectedProduct.title),u.a.createElement("div",{className:"equipment__selected-photo",style:{backgroundImage:"url(".concat(this.state.selectedProduct.photo,")")},alt:"Selected-Photo"}),u.a.createElement("div",{className:"equipment__selected-description",dangerouslySetInnerHTML:{__html:this.state.selectedProduct.description}}),u.a.createElement("div",{className:"equipment__prices-container"},u.a.createElement("h3",{className:"equipment__prices-heading-1"},"In-Studio"),u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.selectedProduct.rental_links[0].link,className:"equipment__prices equipment__prices--1"},u.a.createElement("button",{className:"equipment__button"},this.state.selectedProduct.rental_links[0].dayhour)),u.a.createElement("p",{className:"equipment__prices-price equipment__prices-price--1"},this.state.selectedProduct.rental_links[0].cost),u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.selectedProduct.rental_links[1].link,className:"equipment__prices equipment__prices--2"},u.a.createElement("button",{className:"equipment__button"},this.state.selectedProduct.rental_links[1].dayhour)),u.a.createElement("p",{className:"equipment__prices-price equipment__prices-price--2"},this.state.selectedProduct.rental_links[1].cost),u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.selectedProduct.rental_links[2].link,className:"equipment__prices equipment__prices--3"},u.a.createElement("button",{className:"equipment__button"},this.state.selectedProduct.rental_links[2].dayhour)),u.a.createElement("p",{className:"equipment__prices-price equipment__prices-price--3"},this.state.selectedProduct.rental_links[2].cost),u.a.createElement("h3",{className:"equipment__prices-heading-2"},"Off-Site"),u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.selectedProduct.rental_links[3].link,className:"equipment__prices equipment__prices--4"},u.a.createElement("button",{className:"equipment__button"},this.state.selectedProduct.rental_links[3].dayhour)),u.a.createElement("p",{className:"equipment__prices-price equipment__prices-price--4"},this.state.selectedProduct.rental_links[3].cost),u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.selectedProduct.rental_links[4].link,className:"equipment__prices equipment__prices--5"},u.a.createElement("button",{className:"equipment__button"},this.state.selectedProduct.rental_links[4].dayhour)),u.a.createElement("p",{className:"equipment__prices-price equipment__prices-price--5"},this.state.selectedProduct.rental_links[4].cost),u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.selectedProduct.rental_links[5].link,className:"equipment__prices equipment__prices--6"},u.a.createElement("button",{className:"equipment__button"},this.state.selectedProduct.rental_links[5].dayhour)),u.a.createElement("p",{className:"equipment__prices-price equipment__prices-price--6"},this.state.selectedProduct.rental_links[5].cost)))),u.a.createElement("div",{className:"equipment"},u.a.createElement("div",{className:"equipment__banner"}),u.a.createElement("div",{className:"equipment__banner-container"},u.a.createElement("h1",{className:"equipment__heading"},this.props.title),u.a.createElement("div",{className:"equipment__border"})),u.a.createElement("div",{className:"equipment__container"},t))}}]),t}(o.Component)}}]);
//# sourceMappingURL=8.f41f4f3c.chunk.js.map