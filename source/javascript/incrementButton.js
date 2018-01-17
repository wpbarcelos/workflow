/**
 * increment Button
 */

;(function(){
    'use strict';

    var botao   = document.getElementById('incrementButton')
    , container = document.querySelector('.buttonsContainer__result .js-result')
    , count     = 0 ;
    var showQuant = function(n){
        console.log('showQuant chamado recebendo', n);
        container.firstChild.nodeValue = n;
    }
    showQuant(count);

    botao.addEventListener('click',function(e){
        showQuant(++count);
    })
})();