bthtml= document.getElementById("btnHtmlCss");
btjava= document.getElementById("btnJavascript");
btphp= document.getElementById("btnPhpMysql");
btpyton= document.getElementById("btnPython");
btreact= document.getElementById("btnReact");

divhtml = document.getElementById("htmlcss")
divjava = document.getElementById("javascript")
divphp = document.getElementById("phpmysql")
divpython = document.getElementById("python")
divreact = document.getElementById("react")

function exibirocultardiv(campoid) {
divhtml.style.display ="none"
divjava.style.display ="none"
divphp.style.display ="none"
divpython.style.display ="none"
divreact.style.display ="none"

campoid.style.display="block"

}


bthtml.addEventListener('click',function() {

    exibirocultardiv(divhtml)

})
btjava.addEventListener('click',function() {

    exibirocultardiv(divjava)

})