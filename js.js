window.document.onload = function () {
   

}
function preencher(dados){
    document.getElementById('login').innerHTML = dados.login;
    document.getElementById('imagem').innerHTML = "<img src='"+dados.avatar_url+"'>";
    document.getElementById('following').innerHTML = dados.following;
    document.getElementById('followers').innerHTML = dados.followers;
    
}
 function pegardados(){

    let nome = document.getElementById('usuario').value
    fetch('https://api.github.com/users/'+nome)
    .then(response => response.json())
    .then(dados => preencher(dados))

}
