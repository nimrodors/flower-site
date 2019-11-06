/* global $, document, location */

var selectCollection = function () {
    var collectionName, div;
    div = document.getElementsByClassName('collection')[0];

    div.addEventListener('click', function (event) {
        try {
            collectionName = event.target.parentNode.id;
            sessionStorage.setItem('navCollectionName', collectionName);

            console.log('Maki Siker');
        } catch (error) {
            console.log(error + ' Hiba');
        }

    });
    return collectionName;
};

var getFirstId = function () {
    var firstId, div;

    div = document.getElementsByClassName('jewelry__row_first')[0];

    div.addEventListener('click', function (event) {
        try {
            firstId = event.target.id;
            sessionStorage.setItem('firstId', firstId);
            console.log(firstId);
        } catch (error) {
            console.log(error + ' Hiba');
        }

    });

};

var getSecondtId = function () {
    var secondId, div;

    div = document.getElementsByClassName('jewelry__row_second')[0];

    div.addEventListener('click', function (event) {
        try {
            secondId = event.target.id;
            sessionStorage.setItem('secondId', secondId);
            console.log(secondId);
        } catch (error) {
            console.log(error + ' Hiba');
        }

    });

};


var createObject = function (data) {

    var newObj;

    //Ez a rövidíett objektummá alakítás
    return newObj = JSON.parse(JSON.stringify(data));
};

var getJson = function () {

    var jsonOBJ, collectionName, navCollection;

    //A Navigációban lévő kollekciót itt kérem el
    navCollection = sessionStorage['navCollectionName'];
    console.log('Nav: ' + navCollection);

    //lent átadja Neki
    selectCollection();

    //Itt kérem el azt, hogy milyen kollekciót választottam ki
    collectionName = sessionStorage['collectionName'];

    //Ez a navigációt nézi, ha mind a kettőben van érték akkor kitörli a collectiont
    if (collectionName !== undefined && navCollection !== undefined) {
        sessionStorage.removeItem('collectionName');
        collectionName = undefined;
    }

    console.log(collectionName, navCollection);

    //Itt fogom leellenőrízni hogy van e ilyen kollekció, majd pedig átirányítom a megfelelő kollekcióba
    $(document).ready(function () {
        var jsonURL = "resources/js/jewelry.json";

        $.getJSON(jsonURL, function (json) {
            //Itt van a JSON tárolva
            jsonOBJ = createObject(json);
            //Itt adom át a frissítéshez szükséges értéket.
            navCollection = sessionStorage['navCollectionName'];

            if (collectionName !== undefined && navCollection !== undefined) {
                console.log('Kitöröltem!');
                navCollection = undefined;
            }

            console.log('Nav: ' + navCollection);
            console.log('Col: ' + collectionName);

            console.log(jsonOBJ);

            if (collectionName === 'ancient__treasure' || navCollection === 'ancient__treasure') {
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
                document.getElementById("fifth").src = jsonOBJ.collection[0].ancient__treasure[4].img[0].collection__picture;
                document.getElementById('jewelry__name_fifth').innerHTML = jsonOBJ.collection[0].ancient__treasure[4].name;
                document.getElementById('jewelry__price_fifth').innerHTML = jsonOBJ.collection[0].ancient__treasure[4].price;

                //6. Kép

                //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                document.getElementById("sixth").src = jsonOBJ.collection[0].ancient__treasure[5].img[0].collection__picture;
                document.getElementById('jewelry__name_sixth').innerHTML = jsonOBJ.collection[0].ancient__treasure[5].name;
                document.getElementById('jewelry__price_sixth').innerHTML = jsonOBJ.collection[0].ancient__treasure[5].price;

                //Amelyik Kollekciót nézi azt húzza alás. Mindegyik kollekciónak saját osztály neve, ezzel különítem el.
                document.querySelector('.current__page_ancient').style.borderBottom = '1px solid #cfcfcf';
            } else if (collectionName === 'feathers' || navCollection === 'feathers') {

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
                document.getElementById("fifth").src = jsonOBJ.collection[1].feathers[4].img[0].collection__picture;
                document.getElementById('jewelry__name_fifth').innerHTML = jsonOBJ.collection[1].feathers[4].name;
                document.getElementById('jewelry__price_fifth').innerHTML = jsonOBJ.collection[1].feathers[4].price;

                //6. Kép

                //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                document.getElementById("sixth").src = jsonOBJ.collection[1].feathers[5].img[0].collection__picture;
                document.getElementById('jewelry__name_sixth').innerHTML = jsonOBJ.collection[1].feathers[5].name;
                document.getElementById('jewelry__price_sixth').innerHTML = jsonOBJ.collection[1].feathers[5].price;

                //Amelyik Kollekciót nézi azt húzza alás. Mindegyik kollekciónak saját osztály neve, ezzel különítem el.
                document.querySelector('.current__page_feathers').style.borderBottom = '1px solid #cfcfcf';


            } else if (collectionName === 'leaves' || navCollection === 'leaves') {

                //Itt kérem el a JSON - ból az adatokat, NÉV ÁR, KÉP
                document.getElementById("first").src = jsonOBJ.collection[2].leaves[0].img[0].collection__picture;
                document.getElementById('jewelry__name_first').innerHTML = jsonOBJ.collection[2].leaves[0].name;
                document.getElementById('jewelry__price_first').innerHTML = jsonOBJ.collection[2].leaves[0].price;

                //2. Kép

                document.getElementById("second").src = jsonOBJ.collection[2].leaves[1].img[0].collection__picture;
                document.getElementById('jewelry__name_second').innerHTML = jsonOBJ.collection[2].leaves[1].name;
                document.getElementById('jewelry__price_second').innerHTML = jsonOBJ.collection[2].leaves[1].price;

                //3. Kép

                //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                document.getElementById("third").src = jsonOBJ.collection[2].leaves[2].img[0].collection__picture;
                document.getElementById('jewelry__name_third').innerHTML = jsonOBJ.collection[2].leaves[2].name;
                document.getElementById('jewelry__price_third').innerHTML = jsonOBJ.collection[2].leaves[2].price;

                //4. Kép

                //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                document.getElementById("fourth").src = jsonOBJ.collection[2].leaves[3].img[0].collection__picture;
                document.getElementById('jewelry__name_fourth').innerHTML = jsonOBJ.collection[2].leaves[3].name;
                document.getElementById('jewelry__price_fourth').innerHTML = jsonOBJ.collection[2].leaves[3].price;

                //5. Kép

                //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                document.getElementById("fifth").src = jsonOBJ.collection[2].leaves[4].img[0].collection__picture;
                document.getElementById('jewelry__name_fifth').innerHTML = jsonOBJ.collection[2].leaves[4].name;
                document.getElementById('jewelry__price_fifth').innerHTML = jsonOBJ.collection[2].leaves[4].price;

                //6. Kép

                //Amint beteszek még egy képet a collection__picture át kell alakítani tömbbé
                document.getElementById("sixth").src = jsonOBJ.collection[2].leaves[5].img[0].collection__picture;
                document.getElementById('jewelry__name_sixth').innerHTML = jsonOBJ.collection[2].leaves[5].name;
                document.getElementById('jewelry__price_sixth').innerHTML = jsonOBJ.collection[2].leaves[5].price;


                //Amelyik Kollekciót nézi azt húzza alás. Mindegyik kollekciónak saját osztály neve, ezzel különítem el.
                document.querySelector('.current__page_leaves').style.borderBottom = '1px solid #cfcfcf';

            } else if (collectionName === 'hungarian__motif' || navCollection === 'hungarian__motif') {
                //Itt kérem el a JSON - ból az adatokat, NÉV ÁR, KÉP
                document.getElementById("first").src = jsonOBJ.collection[3].hungarian_motif[0].img[0].collection__picture;
                document.getElementById('jewelry__name_first').innerHTML = jsonOBJ.collection[3].hungarian_motif[0].name;
                document.getElementById('jewelry__price_first').innerHTML = jsonOBJ.collection[3].hungarian_motif[0].price;

                //2. Kép
                document.getElementById("second").src = jsonOBJ.collection[3].hungarian_motif[1].img[0].collection__picture;
                document.getElementById('jewelry__name_second').innerHTML = jsonOBJ.collection[3].hungarian_motif[1].name;
                document.getElementById('jewelry__price_second').innerHTML = jsonOBJ.collection[3].hungarian_motif[1].price;

                //3. Kép
                document.getElementById("third").src = jsonOBJ.collection[3].hungarian_motif[2].img[0].collection__picture;
                document.getElementById('jewelry__name_third').innerHTML = jsonOBJ.collection[3].hungarian_motif[2].name;
                document.getElementById('jewelry__price_third').innerHTML = jsonOBJ.collection[3].hungarian_motif[2].price;

                //4. Kép
                document.getElementById("fourth").src = jsonOBJ.collection[3].hungarian_motif[3].img[0].collection__picture;
                document.getElementById('jewelry__name_fourth').innerHTML = jsonOBJ.collection[3].hungarian_motif[3].name;
                document.getElementById('jewelry__price_fourth').innerHTML = jsonOBJ.collection[3].hungarian_motif[3].price;


                //5. Kép
                document.getElementById("fifth").src = jsonOBJ.collection[3].hungarian_motif[4].img[0].collection__picture;
                document.getElementById('jewelry__name_fifth').innerHTML = jsonOBJ.collection[3].hungarian_motif[4].name;
                document.getElementById('jewelry__price_fifth').innerHTML = jsonOBJ.collection[3].hungarian_motif[4].price;

                //6. Kép
                document.getElementById("sixth").src = jsonOBJ.collection[3].hungarian_motif[5].img[0].collection__picture;
                document.getElementById('jewelry__name_sixth').innerHTML = jsonOBJ.collection[3].hungarian_motif[5].name;
                document.getElementById('jewelry__price_sixth').innerHTML = jsonOBJ.collection[3].hungarian_motif[5].price;

                //Amelyik Kollekciót nézi azt húzza alás. Mindegyik kollekciónak saját osztály neve, ezzel különítem el.
                document.querySelector('.current__page_hungarianMotifs').style.borderBottom = '1px solid #cfcfcf';
            } else if (collectionName === 'unique_jewelry' || navCollection === 'unique_jewelry') {
                //Itt kérem el a JSON - ból az adatokat, NÉV ÁR, KÉP
                document.getElementById("first").src = jsonOBJ.collection[4].unique_jewelry[0].img[0].collection__picture;
                document.getElementById('jewelry__name_first').innerHTML = jsonOBJ.collection[4].unique_jewelry[0].name;
                document.getElementById('jewelry__price_first').innerHTML = jsonOBJ.collection[4].unique_jewelry[0].price;

                //2. Kép
                document.getElementById("second").src = jsonOBJ.collection[4].unique_jewelry[1].img[0].collection__picture;
                document.getElementById('jewelry__name_second').innerHTML = jsonOBJ.collection[4].unique_jewelry[1].name;
                document.getElementById('jewelry__price_second').innerHTML = jsonOBJ.collection[4].unique_jewelry[1].price;

                //3. Kép
                document.getElementById("third").src = jsonOBJ.collection[4].unique_jewelry[2].img[0].collection__picture;
                document.getElementById('jewelry__name_third').innerHTML = jsonOBJ.collection[4].unique_jewelry[2].name;
                document.getElementById('jewelry__price_third').innerHTML = jsonOBJ.collection[4].unique_jewelry[2].price;

                //4. Kép
                document.getElementById("fourth").src = jsonOBJ.collection[4].unique_jewelry[3].img[0].collection__picture;
                document.getElementById('jewelry__name_fourth').innerHTML = jsonOBJ.collection[4].unique_jewelry[3].name;
                document.getElementById('jewelry__price_fourth').innerHTML = jsonOBJ.collection[4].unique_jewelry[3].price;

                //5. Kép
                document.getElementById("fifth").src = jsonOBJ.collection[4].unique_jewelry[4].img[0].collection__picture;
                document.getElementById('jewelry__name_fifth').innerHTML = jsonOBJ.collection[4].unique_jewelry[4].name;
                document.getElementById('jewelry__price_fifth').innerHTML = jsonOBJ.collection[4].unique_jewelry[4].price;

                //6. Kép
                document.getElementById("sixth").src = jsonOBJ.collection[4].unique_jewelry[5].img[0].collection__picture;
                document.getElementById('jewelry__name_sixth').innerHTML = jsonOBJ.collection[4].unique_jewelry[5].name;
                document.getElementById('jewelry__price_sixth').innerHTML = jsonOBJ.collection[4].unique_jewelry[5].price;

                //Amelyik Kollekciót nézi azt húzza alás. Mindegyik kollekciónak saját osztály neve, ezzel különítem el.
                document.querySelector('.current__page_unique_jewelry').style.borderBottom = '1px solid #cfcfcf';
            }
        });
    });
};

var removeID = function () {
    sessionStorage.removeItem('firstId');
    sessionStorage.removeItem('secondId');
};

getJson();
getFirstId();
getSecondtId();
removeID();
