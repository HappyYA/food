window.onload = function () {
    var num = 0;
    var num1 = 0;
    var cp = document.querySelector('.cp');
    var qc = document.querySelector('.qc');
    var  caipin = document.querySelector('.caiPin');
    var  allCity = document.querySelector('.allCity');
    cp.onclick = function () {
        if (num == 0){
            caipin.style.display = 'block';
            num = 1;
            allCity.style.display = 'none';
            num1 = 0;
        }else {
            caipin.style.display = 'none';
            num = 0;
            allCity.style.display = 'none';
            num1 = 0;
        }
    };
    qc.onclick = function () {
        if (num1 == 0){
            allCity.style.display = 'block';
            caipin.style.display = 'none';
            num = 0;
            num1 = 1;
        }else {
            allCity.style.display = 'none';
            num1 = 0;
            caipin.style.display = 'none';
            num = 0;
        }
    };

};
