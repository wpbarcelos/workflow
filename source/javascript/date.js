/**
 * Mostra a Data
 */

;(function(){
    'use strict';

    var dateContainer = document.getElementById('containerDate');
    var dateInfo = (function(){
        var today = new Date()
            ,month = parseInt( today.getMonth()+1).length < 2 ? parseInt( today.getMonth()+1): '0' +
                    parseInt( today.getMonth()+1)
            , date = today.getDate() + '/' + month +'/' + today.getFullYear();
            console.log(' a data que irá retornar é: '+ date);

            return date;
    })();

    dateContainer.appendChild(document.createTextNode(dateInfo));
})();