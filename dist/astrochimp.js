var e=0;module.exports=function(n,t){if(!n||!t)throw new Error("astrochimp requires both a URL and a data object");return function(r,o){var c=document.createElement("script"),u="__astrochimp"+e++;function i(){window[u]=function(){},document.head.removeChild(c)}return c.src=(n+"&"+function(e){for(var n=Object.keys(e),t=[],r=0;r<n.length;r++)t.push(key+"="+e[key]);return encodeURI(t.join("&"))}(t)+"&c="+u).replace(/post\?u=/,"post-json?u="),window[u]=function(e){if(/[0-9]\s-/.test(e.msg)||"error"===e.result)return o(e);r(e),i()},document.head.appendChild(c),function(){i()}}};
//# sourceMappingURL=astrochimp.js.map