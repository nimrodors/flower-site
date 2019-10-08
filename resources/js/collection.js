/* global $, document, location */

var UIController = (function () {

    var DOMString = {
        ancientTreasures: 'ancient__treasure',
        feathers: 'feathers',
        leaves: 'leaves',
        fantasyCreatures: 'fantasy__creatures',
        hungarianMotifs: 'hungarian__motifs',

    };

    return {
        createObject: function (data) {
            var newObj;
            //stringify = JSON.stringify(data);
            //localStorage.setItem('test', stringify);
            //tempObj = localStorage.getItem('test');

            //Ez a rövidíett objektummá alakítás
            return newObj = JSON.parse(JSON.stringify(data));
        },

        getJson: function () {
            var jsonOBJ, DOM, cName, collectionName;
            DOM = UIController.getDOMStrings();

            //Itt kérem el azt, hogy milyen kollekciót választottam ki
            cName = localStorage['collectionName'];
            //localStorage.removeItem('collectionName');
            collectionName = cName;

            console.log(collectionName);

            //Itt fogom leellenőrízni hogy van e ilyen kollekció, majd pedig átirányítom a megfelelő kollekcióba
            $(document).ready(function () {
                var jsonURL = "resources/js/jewelry.json";

                $.getJSON(jsonURL, function (json) {
                    //Itt van a JSON tárolva
                    jsonOBJ = UIController.createObject(json);
                    console.log(jsonOBJ);
                    //Ha levelet nézünk meg
                    if (collectionName === 'ancient__treasure') {
                        //Itt kérem el a JSON - ból az adatokat, NÉV ÁR, KÉP
                        document.getElementById("first").src = jsonOBJ.collection[0].ancient__treasure[0].img[0].collection__picture;
                        document.getElementById('jewelry__name_first').innerHTML = jsonOBJ.collection[0].ancient__treasure[0].name;
                        document.getElementById('jewelry__price_first').innerHTML = jsonOBJ.collection[0].ancient__treasure[0].price;
                        
                        //2. Kép
                        
                        document.getElementById("second").src = jsonOBJ.collection[0].ancient__treasure[1].img[0].collection__picture;
                        document.getElementById('jewelry__name_second').innerHTML = jsonOBJ.collection[0].ancient__treasure[1].name;
                        document.getElementById('jewelry__price_second').innerHTML = jsonOBJ.collection[0].ancient__treasure[1].price;
                        
                        //3. Kép
                        
                        //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                        document.getElementById("third").src = jsonOBJ.collection[0].ancient__treasure[2].img[0].collection__picture;
                        document.getElementById('jewelry__name_third').innerHTML = jsonOBJ.collection[0].ancient__treasure[2].name;
                        document.getElementById('jewelry__price_third').innerHTML = jsonOBJ.collection[0].ancient__treasure[2].price;
                        
                        //4. Kép
                        
                        //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                        document.getElementById("fourth").src = jsonOBJ.collection[0].ancient__treasure[3].img[0].collection__picture;
                        document.getElementById('jewelry__name_fourth').innerHTML = jsonOBJ.collection[0].ancient__treasure[3].name;
                        document.getElementById('jewelry__price_fourth').innerHTML = jsonOBJ.collection[0].ancient__treasure[3].price;
                        
                        //5. Kép
                        
                        //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                        document.getElementById("fith").src = jsonOBJ.collection[0].ancient__treasure[4].img[0].collection__picture;
                        document.getElementById('jewelry__name_fith').innerHTML = jsonOBJ.collection[0].ancient__treasure[4].name;
                        document.getElementById('jewelry__price_fith').innerHTML = jsonOBJ.collection[0].ancient__treasure[4].price;
                        
                        //6. Kép
                        
                        //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                        document.getElementById("sixth").src = jsonOBJ.collection[0].ancient__treasure[5].img[0].collection__picture;
                        document.getElementById('jewelry__name_sixth').innerHTML = jsonOBJ.collection[0].ancient__treasure[5].name;
                        document.getElementById('jewelry__price_sixth').innerHTML = jsonOBJ.collection[0].ancient__treasure[5].price;
                        
                        //Amelyik Kollekciót nézi azt húzza alás. Mindegyik kollekciónak saját osztály neve, ezzel különítem el.
                        document.querySelector('.current__page_ancient').style.borderBottom = '1px solid #cfcfcf';
                    } else if (collectionName === 'feathers') {

                        //Itt kérem el a JSON - ból az adatokat, NÉV ÁR, KÉP
                        document.getElementById("first").src = jsonOBJ.collection[1].feathers[0].img[0].collection__picture;
                        document.getElementById('jewelry__name_first').innerHTML = jsonOBJ.collection[1].feathers[0].name;
                        document.getElementById('jewelry__price_first').innerHTML = jsonOBJ.collection[1].feathers[0].price;
                        
                        //2. Kép
                        
                        document.getElementById("second").src = jsonOBJ.collection[1].feathers[1].img[0].collection__picture;
                        document.getElementById('jewelry__name_second').innerHTML = jsonOBJ.collection[1].feathers[1].name;
                        document.getElementById('jewelry__price_second').innerHTML = jsonOBJ.collection[1].feathers[1].price;
                        
                        //3. Kép
                        
                        //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                        document.getElementById("third").src = jsonOBJ.collection[1].feathers[2].img[0].collection__picture;
                        document.getElementById('jewelry__name_third').innerHTML = jsonOBJ.collection[1].feathers[2].name;
                        document.getElementById('jewelry__price_third').innerHTML = jsonOBJ.collection[1].feathers[2].price;
                        
                        //4. Kép
                        
                        //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                        document.getElementById("fourth").src = jsonOBJ.collection[1].feathers[3].img[0].collection__picture;
                        document.getElementById('jewelry__name_fourth').innerHTML = jsonOBJ.collection[1].feathers[3].name;
                        document.getElementById('jewelry__price_fourth').innerHTML = jsonOBJ.collection[1].feathers[3].price;
                        
                        //5. Kép
                        
                        //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                        document.getElementById("fith").src = jsonOBJ.collection[1].feathers[4].img[0].collection__picture;
                        document.getElementById('jewelry__name_fith').innerHTML = jsonOBJ.collection[1].feathers[4].name;
                        document.getElementById('jewelry__price_fith').innerHTML = jsonOBJ.collection[1].feathers[4].price;
                        
                        //6. Kép
                        
                        //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                        document.getElementById("sixth").src = jsonOBJ.collection[1].feathers[5].img[0].collection__picture;
                        document.getElementById('jewelry__name_sixth').innerHTML = jsonOBJ.collection[1].feathers[5].name;
                        document.getElementById('jewelry__price_sixth').innerHTML = jsonOBJ.collection[1].feathers[5].price;
                        
                        //Amelyik Kollekciót nézi azt húzza alás. Mindegyik kollekciónak saját osztály neve, ezzel különítem el.
                        document.querySelector('.current__page_feathers').style.borderBottom = '1px solid #cfcfcf';


                    } else if (collectionName === 'leaves') {
                        document.querySelector('.current__page_leaves').style.borderBottom = '1px solid #cfcfcf';

                    } else if (collectionName === 'fantasy__creatures') {
                        document.querySelector('.current__page_fantasyCreatures').style.borderBottom = '1px solid #cfcfcf';

                    } else if (collectionName === 'hungarian__motif') {
                        document.querySelector('.current__page_hungarianMotifs').style.borderBottom = '1px solid #cfcfcf';
                    }
                });
            });
        },

        getDOMStrings: function () {
            return DOMString;
        }
    };

})();

var controller = (function (UICtrl) {

    var setupJson = function () {
        var jsonOBJ;
        jsonOBJ = UICtrl.getJson();
    };

    return {
        init: function () {
            setupJson();
            //Itt kérem el hogy melyik linket haszánlta és majd ide kell visszatérjen
        }
    };


})(UIController);

controller.init();
