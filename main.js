const bjkk= document.querySelector;
function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();
}
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play();
}
function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();
}
function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play();
}
function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play();
}
function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play();
}
function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomClap;
document.querySelector('.tecla_clap').onclick = tocasomclap;
document.querySelector('.tecla_tim').onclick = tocaSomTim;
document.querySelector('.tecla_puff').onclick  = tocasomPuff;
document.querySelector('.tecla_splash').onclick = tocaSomSplash;
document.querySelector('.tecla_toim').onclick = tecla_Toim;
document.querySelector('.tecla_psh').onclick = tecla_Psh;
document.querySelector('.tecla_tic').onclick = tecla_Tic;
document.querySelector('.tecla_tom').onclick = tecla_Tom;



