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
        document.getElementById('text').value = cookieCount;
        document.title = cookieCount + 'Cookies';

        document.getElementById('amountCoursors').innerHTML =  coursor ;
        document.getElementById('costCoursor').innerHTML = 'Cost  ' + ( (coursor + 1) * 10 ) + ' Cookies';

        document.getElementById('amountGrandmas').innerHTML = 'You has  ' + grandma + '  Grandmas';
        document.getElementById('costGrandma').innerHTML = 'Grandma Cost  ' + ( (grandma + 1) * 12 ) + ' Cookies';

        document.getElementById('amountFarms').innerHTML = 'You own  ' + farms + 'Farms';
        document.getElementById('costFarm').innerHTML = 'Farm Cost ' + ( (farms + 1) * 15 ) + ' Cookies'

        document.getElementById('amountBakery').innerHTML = 'You own  ' + bakery + ' Bakeries';
        document.getElementById('costBakery').innerHTML = 'Bakery Cost ' + ( (bakery + 1) * 30 ) + ' Cookies'

        document.getElementById('amountMines').innerHTML = 'You own  ' + mine + ' Mines';
        document.getElementById('costMine').innerHTML = 'Mine Cost ' + ( (mine + 1) * 100 ) + ' Cookies'

        document.getElementById('cookiesPerSec').innerHTML =
            'You producing ' + ( (  (coursor * 0.1 ) + ( grandma ) + ( farms * 8 ) + ( bakery * 47 ) + ( mine * 260 ) ) * multi  )  + ' Cookies per/s'
    }


    cookieBtn.addEventListener('click', add  => {
        cookieCount += 1;
        update();
    })

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