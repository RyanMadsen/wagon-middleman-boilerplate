!function(e,n,t){if(t in n&&n[t]){var i,a=e.location,f=/^(a|html)$/i;e.addEventListener("click",function(e){for(i=e.target;!f.test(i.nodeName);)i=i.parentNode;"href"in i&&(i.href.indexOf("http")||~i.href.indexOf(a.host))&&(e.preventDefault(),a.href=i.href)},!1)}}(document,window.navigator,"standalone");