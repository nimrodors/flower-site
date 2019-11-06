/* global $, document, location */

var createObject = function (data) {

    var newObj;

    //Ez a rövidíett objektummá alakítás
    return newObj = JSON.parse(JSON.stringify(data));
};

var getsessionData = function () {
    var id = [];
    //Első sor a kollekcio.html - ben
    id[0] = sessionStorage['firstId'];
    //Második sor a kollekcio.html - ben
    id[1] = sessionStorage['secondId'];

    id[2] = sessionStorage['collectionName'];
    id[3] = sessionStorage['navCollectionName'];
    console.log(id);

    return id;
};

var removeID = function () {
    sessionStorage.removeItem('firstId');
    sessionStorage.removeItem('secondId');
};

function getJson() {
    var pictureName, jsonObj_ONE, imgOne;

    pictureName = sessionStorage['pictureName'];

    //Ez a főoldalról jön
    console.log(pictureName);

    $(document).ready(function () {
        var json_ONE_URL = "resources/js/main__page_jewlry.json";

        $.getJSON(json_ONE_URL, function (json) {
            //Itt Tárolom az első JSON Objektumot
            jsonObj_ONE = createObject(json);

            function getDescriptionTwoOrThree() {
                document.getElementById("description_two").innerHTML = jsonObj_ONE.description.two;
                document.getElementById("description_three").innerHTML = jsonObj_ONE.description.three;
            }

            //console.log(jsonObj_ONE);

            if (pictureName === 'first') {
                document.getElementById("picture__one").src = jsonObj_ONE.first.img[0].one;
                document.getElementById("popup__one").src = jsonObj_ONE.first.img[0].one;
                document.getElementById("popup__two").src = jsonObj_ONE.first.img[0].one;
                document.getElementById("popup__three").src = jsonObj_ONE.first.img[0].one;

                //Ékszer Adatok
                document.getElementById("jewelry__name").innerHTML = jsonObj_ONE.first.name;
                document.getElementById("jewelry__price").innerHTML = jsonObj_ONE.first.price;
                document.getElementById("description_one").innerHTML = jsonObj_ONE.first.description_1;

                getDescriptionTwoOrThree();


            } else if (pictureName === 'second') {
                document.getElementById("picture__one").src = jsonObj_ONE.second.img[0].one;
                document.getElementById("picture__two").src = jsonObj_ONE.second.img[0].two;
                document.getElementById("picture__three").src = jsonObj_ONE.second.img[0].three;

                //PopUp Ablak
                document.getElementById("popup__one").src = jsonObj_ONE.second.img[0].one;
                document.getElementById("popup__two").src = jsonObj_ONE.second.img[0].two;
                document.getElementById("popup__three").src = jsonObj_ONE.second.img[0].three;


                //Ékszer Adatok
                document.getElementById("jewelry__name").innerHTML = jsonObj_ONE.second.name;
                document.getElementById("jewelry__price").innerHTML = jsonObj_ONE.second.price;
                document.getElementById("description_one").innerHTML = jsonObj_ONE.second.description_1;

                getDescriptionTwoOrThree();

            } else if (pictureName === 'third') {
                document.getElementById("picture__one").src = jsonObj_ONE.third.img[0].one;
                document.getElementById("picture__two").src = jsonObj_ONE.third.img[0].two;
                document.getElementById("picture__three").src = jsonObj_ONE.third.img[0].three;

                //PopUp Ablak
                document.getElementById("popup__one").src = jsonObj_ONE.third.img[0].one;
                document.getElementById("popup__two").src = jsonObj_ONE.third.img[0].two;
                document.getElementById("popup__three").src = jsonObj_ONE.third.img[0].three;
                console.log(imgOne);

                //Ékszer Adatok
                document.getElementById("jewelry__name").innerHTML = jsonObj_ONE.third.name;
                document.getElementById("jewelry__price").innerHTML = jsonObj_ONE.third.price;
                document.getElementById("description_one").innerHTML = jsonObj_ONE.third.description_1;
                getDescriptionTwoOrThree();

            } else if (pictureName === 'fourth') {

                document.getElementById("picture__one").src = jsonObj_ONE.fourth.img[0].one;
                document.getElementById("picture__two").src = jsonObj_ONE.fourth.img[0].two;
                document.getElementById("picture__three").src = jsonObj_ONE.fourth.img[0].three;

                //PopUp Ablak
                document.getElementById("popup__one").src = jsonObj_ONE.fourth.img[0].one;
                document.getElementById("popup__two").src = jsonObj_ONE.fourth.img[0].two;
                document.getElementById("popup__three").src = jsonObj_ONE.fourth.img[0].three;


                //Ékszer Adatok
                document.getElementById("jewelry__name").innerHTML = jsonObj_ONE.fourth.name;
                document.getElementById("jewelry__price").innerHTML = jsonObj_ONE.fourth.price;
                document.getElementById("description_one").innerHTML = jsonObj_ONE.fourth.description_1;
                getDescriptionTwoOrThree();

            }
        });
    });
}

function getJewerly() {
    var numbColl, data, jsonOBJ, num, collection, stringCollection;

    data = getsessionData();

    numbColl = getData(data);

    //itt adom át hogy hányadik képről van szó
    num = getNumber(numbColl[0]);
    //num_2 = sessionStorage['num'];
    //console.log(num_2);

    collection = getCollection(numbColl[1]);
    //Itt adom át neki hogy melyik kollekciót jelenítse meg
    stringCollection = numbColl[1];
    console.log(collection, num);


    //Itt tárolódik, hogy hanyadik ékszer, e szerint fogom meghívni a Jsont. Itt tárolom, hogy melyik kollekció.
    console.log(numbColl);

    $(document).ready(function () {
        var jsonURL = "resources/js/jewelry.json";

        $.getJSON(jsonURL, function (json) {
            //Itt van a JSON tárolva
            jsonOBJ = createObject(json);

            function getDescriptionTwoOrThree() {
                document.getElementById("description_two").innerHTML = jsonOBJ.collection[0].description.two;
                document.getElementById("description_three").innerHTML = jsonOBJ.collection[0].description.three;
            }

            console.log(jsonOBJ);
            //Itt íratom ki a kiválasztott ékszert
            //Fő kép
            console.log(stringCollection);
            if (stringCollection === 'ancient__treasure') {
                
                document.getElementById("picture__one").src = jsonOBJ.collection[collection].ancient__treasure[num].img[0].collection__picture;
                document.getElementById("picture__two").src = jsonOBJ.collection[collection].ancient__treasure[num].img[0].second;
                document.getElementById("picture__three").src = jsonOBJ.collection[collection].ancient__treasure[num].img[0].third;

                document.getElementById("popup__one").src = jsonOBJ.collection[collection].ancient__treasure[num].img[0].collection__picture;
                document.getElementById("popup__two").src = document.getElementById("picture__two").src = jsonOBJ.collection[collection].ancient__treasure[num].img[0].second;
                document.getElementById("popup__three").src = jsonOBJ.collection[collection].ancient__treasure[num].img[0].third;

                document.getElementById("jewelry__name").innerHTML = jsonOBJ.collection[collection].ancient__treasure[num].name;
                document.getElementById("jewelry__price").innerHTML = jsonOBJ.collection[collection].ancient__treasure[num].price;
                document.getElementById("description_one").innerHTML = jsonOBJ.collection[collection].ancient__treasure[num].description_1;
                getDescriptionTwoOrThree();
                
            } else if (stringCollection === 'feathers') {
                
                document.getElementById("picture__one").src = jsonOBJ.collection[collection].feathers[num].img[0].collection__picture;
                document.getElementById("picture__two").src = jsonOBJ.collection[collection].feathers[num].img[0].second;
                document.getElementById("picture__three").src = jsonOBJ.collection[collection].feathers[num].img[0].third;

                document.getElementById("popup__one").src = jsonOBJ.collection[collection].feathers[num].img[0].collection__picture;
                document.getElementById("popup__two").src = document.getElementById("picture__two").src = jsonOBJ.collection[collection].feathers[num].img[0].second;
                document.getElementById("popup__three").src = jsonOBJ.collection[collection].feathers[num].img[0].third;

                document.getElementById("jewelry__name").innerHTML = jsonOBJ.collection[collection].feathers[num].name;
                document.getElementById("jewelry__price").innerHTML = jsonOBJ.collection[collection].feathers[num].price;
                document.getElementById("description_one").innerHTML = jsonOBJ.collection[collection].feathers[num].description_1;
                getDescriptionTwoOrThree();
                
            } else if (stringCollection === 'leaves') {
                
                document.getElementById("picture__one").src = jsonOBJ.collection[collection].leaves[num].img[0].collection__picture;
                document.getElementById("picture__two").src = jsonOBJ.collection[collection].leaves[num].img[0].second;
                document.getElementById("picture__three").src = jsonOBJ.collection[collection].leaves[num].img[0].third;

                document.getElementById("popup__one").src = jsonOBJ.collection[collection].leaves[num].img[0].collection__picture;
                document.getElementById("popup__two").src = document.getElementById("picture__two").src = jsonOBJ.collection[collection].leaves[num].img[0].second;
                document.getElementById("popup__three").src = jsonOBJ.collection[collection].leaves[num].img[0].third;

                document.getElementById("jewelry__name").innerHTML = jsonOBJ.collection[collection].leaves[num].name;
                document.getElementById("jewelry__price").innerHTML = jsonOBJ.collection[collection].leaves[num].price;
                document.getElementById("description_one").innerHTML = jsonOBJ.collection[collection].leaves[num].description_1;
                getDescriptionTwoOrThree();
                
            } else if (stringCollection === 'hungarian__motif') {
                collection = 3;
                document.getElementById("picture__one").src = jsonOBJ.collection[collection].hungarian_motif[num].img[0].collection__picture;
                document.getElementById("picture__two").src = jsonOBJ.collection[collection].hungarian_motif[num].img[0].second;
                document.getElementById("picture__three").src = jsonOBJ.collection[collection].hungarian_motif[num].img[0].third;

                document.getElementById("popup__one").src = jsonOBJ.collection[collection].hungarian_motif[num].img[0].collection__picture;
                document.getElementById("popup__two").src = document.getElementById("picture__two").src = jsonOBJ.collection[collection].hungarian_motif[num].img[0].second;
                document.getElementById("popup__three").src = jsonOBJ.collection[collection].hungarian_motif[num].img[0].third;

                document.getElementById("jewelry__name").innerHTML = jsonOBJ.collection[collection].hungarian_motif[num].name;
                document.getElementById("jewelry__price").innerHTML = jsonOBJ.collection[collection].hungarian_motif[num].price;
                document.getElementById("description_one").innerHTML = jsonOBJ.collection[collection].hungarian_motif[num].description_1;
                
                getDescriptionTwoOrThree();
            } else if (stringCollection === 'unique_jewelry') { 
                collection = 4;
                document.getElementById("picture__one").src = jsonOBJ.collection[collection].unique_jewelry[num].img[0].collection__picture;
                document.getElementById("picture__two").src = jsonOBJ.collection[collection].unique_jewelry[num].img[0].second;
                document.getElementById("picture__three").src = jsonOBJ.collection[collection].unique_jewelry[num].img[0].third;

                document.getElementById("popup__one").src = jsonOBJ.collection[collection].unique_jewelry[num].img[0].collection__picture;
                document.getElementById("popup__two").src = document.getElementById("picture__two").src = jsonOBJ.collection[collection].unique_jewelry[num].img[0].second;
                document.getElementById("popup__three").src = jsonOBJ.collection[collection].unique_jewelry[num].img[0].third;

                document.getElementById("jewelry__name").innerHTML = jsonOBJ.collection[collection].unique_jewelry[num].name;
                document.getElementById("jewelry__price").innerHTML = jsonOBJ.collection[collection].unique_jewelry[num].price;
                document.getElementById("description_one").innerHTML = jsonOBJ.collection[collection].unique_jewelry[num].description_1;
                getDescriptionTwoOrThree();
                
            }

        });
    });
}

function getData(data) {
    var numbColl = [];

    if (data[0] === undefined) {
        numbColl[0] = data[1];
    } else {
        numbColl[0] = data[0];
    }

    //Itt adom oda neki,hogy melyik sorszámú képet kell megjeleníeni
    sessionStorage.setItem('num', numbColl[0]);

    if (data[2] === undefined) {
        numbColl[1] = data[3];
    } else {
        numbColl[1] = data[2];
    }

    return numbColl;
}

function getNumber(num) {
    switch (num) {
        case 'first':
            return 0;
            break;
        case 'second':
            return 1;
            break;
        case 'third':
            return 2;
            break;
        case 'fourth':
            return 3;
            break;
        case 'fifth':
            return 4;
            break;
        case 'sixth':
            return 5;
            break;
        default:
    }
}

function getCollection(collection) {
    switch (collection) {
        case 'ancient__treasure':
            return 0;
            break;
        case 'feathers':
            return 1;
            break;
        case 'leaves':
            return 2;
            break;
        case 'unique_jewelry':
            return 3;
            break;
        case 'hungarian__motif':
            return 4;
            break;
        default:
    }
}


getJewerly();
getJson();
