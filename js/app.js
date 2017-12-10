import "./../scss/style.scss";

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM');

    let cookieBtn = document.getElementById('cookieClick');
    let cookieCount = 0;
    let autoClick = 0;
    let farms = 0;

    let update = () => {
        document.getElementById('text').value = cookieCount;
        document.title = cookieCount + 'Cookies';
        document.getElementById('amountAutoClickers').innerHTML = 'You own  ' + autoClick + '  Auto Clickers';
        document.getElementById('costAutoClick').innerHTML = 'Auto Click Cost  ' + ( (autoClick + 1) * 12 ) + ' Cookies';
    }

    cookieBtn.addEventListener('click', add  => {
        cookieCount += 1;
        update();
    })

    let saveBtn = document.getElementById('save');
    let loadBtn = document.getElementById('load');

    saveBtn.addEventListener('click', save => {
        localStorage.setItem('cookieCount', cookieCount);
        localStorage.setItem('autoClickers', autoClick)
    });

    loadBtn.addEventListener('click', load => {
        cookieCount = localStorage.getItem('cookieCount');
        cookieCount = parseInt(cookieCount);
        autoClick = localStorage.getItem('autoClickers');
        autoClick = parseInt(autoClick);
        update();
    });



    setInterval(timer => {
        cookieCount = cookieCount + autoClick;
        update();
    }, 1000);




    let buyAutoClick = () => {
        if(cookieCount >= ((autoClick + 1) * 12 )) {
            cookieCount -= ( (autoClick + 1) * 12 );
            autoClick += 1;
            update();
        }
    }


    let autoClickBtn = document.getElementById('autoClicker');
    autoClickBtn.addEventListener('click', buyAutoClick)


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




});