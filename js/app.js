import "./../scss/style.scss";
// import producers from './producers.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM');

    let cookieBtn = document.getElementById('cookieClick');
    let cookieCount = 0;
    let coursor = 0;
    let grandma = 0;
    let farms = 0;
    let multi = 1;
    let bakery = 0;
    let mine = 0;

    let update = () => {
        document.getElementById('text').innerText = cookieCount;
        document.title = cookieCount + 'Cookies';

        document.getElementById('amountCoursors').innerHTML =  coursor ;
        document.getElementById('costCoursor').innerHTML = 'Cost  ' + ( (coursor + 1) * 10 ) + ' Cookies';

        document.getElementById('amountGrandmas').innerHTML = grandma;
        document.getElementById('costGrandma').innerHTML = 'Cost  ' + ( (grandma + 1) * 12 ) + ' Cookies';

        document.getElementById('amountFarms').innerHTML = farms ;
        document.getElementById('costFarm').innerHTML = 'Cost ' + ( (farms + 1) * 15 ) + ' Cookies'

        document.getElementById('amountBakery').innerHTML =  bakery ;
        document.getElementById('costBakery').innerHTML = 'Cost ' + ( (bakery + 1) * 30 ) + ' Cookies'

        document.getElementById('amountMines').innerHTML =  mine;
        document.getElementById('costMine').innerHTML = 'Cost ' + ( (mine + 1) * 100 ) + ' Cookies'

        document.getElementById('cookiesPerSec').innerHTML =
            'You producing ' + ( (  (coursor * 0.1 ) + ( grandma ) + ( farms * 8 ) + ( bakery * 47 ) + ( mine * 260 ) ) * multi  )  + ' Cookies per/s'
    }


    cookieBtn.addEventListener('click', add  => {
        cookieCount += 1;
        update();
    })


//     //IndexedDB way - learning in progress
// //
//
// // This works on all devices/browsers, and uses IndexedDBShim as a final fallback
//     var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
//
// // Open (or create) the database
//     var open = indexedDB.open("MyDatabase", 1);
//
// // Create the schema
//     open.onupgradeneeded = function() {
//         var db = open.result;
//         var store = db.createObjectStore("MyObjectStore", {keyPath: "gameState"});
//         // var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
//     };
//
//     open.onsuccess = function() {
//         // Start a new transaction
//         var db = open.result;
//         var tx = db.transaction("MyObjectStore", "readwrite");
//         var store = tx.objectStore("MyObjectStore");
//         // var index = store.index("gameStateIndex");
//
//         // Add some data
//         // store.put({id: 12345, name: {first: "John", last: "Doe"}, age: 42});
//         // store.put({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});
//
//         store.put({
//             // gameStateIndex: 1,
//             cookieCount: cookieCount,
//             coursor: coursor,
//             grandmas: grandma,
//             farms: farms,
//             bakeries: bakery,
//             mines: mine
//         });
//
//         // Query the data
//         // var getJohn = store.get(1);
//         var getCookie = store.get(["cookieCount"]);
//
//         // getJohn.onsuccess = function() {
//         //     console.log(getCookie.result);
//         // };
//
//         getCookie.onsuccess = function() {
//             console.log(getCookie.result.cookieCount);
//         };
//
//         // Close the db when the transaction is done
//         tx.oncomplete = function() {
//             db.close();
//         };
//     }




Local Storage way - works
    let saveBtn = document.getElementById('save');
    let loadBtn = document.getElementById('load');

    saveBtn.addEventListener('click', save => {

        localStorage.setItem('cookieCount', cookieCount);
        localStorage.setItem('coursors', coursor);
        localStorage.setItem('grandmas', grandma);
        localStorage.setItem('farms', farms);
        localStorage.setItem('bakeries', bakery);
        localStorage.setItem('mines', mine);
    });

    loadBtn.addEventListener('click', load => {

        cookieCount = localStorage.getItem('cookieCount');
        cookieCount = parseInt(cookieCount);

        coursor = localStorage.getItem('coursors');
        coursor = parseInt(coursor);

        grandma = localStorage.getItem('grandmas');
        grandma = parseInt(grandma);

        farms = localStorage.getItem('farms');
        farms = parseInt(farms);

        bakery = localStorage.getItem('bakeries');
        bakery = parseInt(bakery);

        mine = localStorage.getItem('mines');
        mine = parseInt(mine);

        update();
    });



    setInterval(timer => {
        cookieCount = cookieCount + coursor
    }, 10000)

    setInterval(produce => {
        cookieCount = cookieCount + grandma;
        cookieCount += (farms * 8);
        cookieCount += (bakery * 47);
        cookieCount += (mine * 260);
        update();
    }, 1000);


    //Coursor
    let buyCoursor = () => {
        if(cookieCount >= ((coursor + 1) * 10 )) {
            cookieCount -= ( (coursor + 1) * 10 );
            coursor += 1;
            update();
        }
    }

    let coursorBtn = document.getElementById('coursor');
    coursorBtn.addEventListener('click', buyCoursor)


    //Grandma
    let buyGrandma = () => {
        if(cookieCount >= ((grandma + 1) * 12 )) {
            cookieCount -= ( (grandma + 1) * 12 );
            grandma += 1;
            update();
        }
    }

    let grandmaBtn = document.getElementById('grandma');
    grandmaBtn.addEventListener('click', buyGrandma)


    // Farm

    let buyFarm = () => {
        if(cookieCount >= ( (farms + 1) * 15) ){
            cookieCount -= (farms + 1) * 15;
            farms += 1
            update();
        }
    }

    let farmBtn = document.getElementById('farm');
    farmBtn.addEventListener('click', buyFarm);


    //Bakery

    let buyBakery = () => {
        if(cookieCount > ( (bakery + 1) * 30) ){
            cookieCount -= (bakery + 1) * 30;
            bakery += 1 ;
            update();
        }
    }

    let bakeryBtn = document.getElementById('bakery');
    bakeryBtn.addEventListener('click', buyBakery);


    //Mine

    let buyMine = () => {
        if(cookieCount > ( (mine + 1) * 100) ){
            cookieCount -= (mine + 1) * 100;
            mine += 1 ;
            update();
        }
    }

    let mineBtn = document.getElementById('mine');
    mineBtn.addEventListener('click', buyMine);


});