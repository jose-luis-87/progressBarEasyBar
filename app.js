//progressBar

var progressNodos = {
    selector: '#progressNodos',
    value: 0, //valor dinámico progressbar
    maxValue: 10,
    backgroundImage: 'img/progress_bg.png',
    barImage: 'img/progress_img.png'
}

initialiseEasybar(progressNodos);

document.getElementById("progressText").innerHTML = progressNodos.value + "/10 VISITAS";
//popUp
var popup = document.getElementById('popup'),
    msjTip = document.getElementById('msjtip');

$(document).ready(function() {
    if (progressNodos.value === 3) {
        msjTip.classList.add('active')
        msjTip.innerHTML = 'Te faltan 7 visitas para completar el reto'
        setTimeout("msjTip.classList.remove('active');", 5000);
    } else {
        if (progressNodos.value === 5) {
            msjTip.classList.add('active')
            msjTip.innerHTML = 'Te faltan 5 visitas para completar el reto'
            setTimeout("msjTip.classList.remove('active');", 5000);
        } else {
            if (progressNodos.value === 7) {
                msjTip.classList.add('active')
                msjTip.innerHTML = 'Te faltan 3 visitas para completar el reto'
                setTimeout("msjTip.classList.remove('active');", 5000);
            } else {
                if (progressNodos.value === 9) {
                    msjTip.classList.add('active')
                    msjTip.innerHTML = 'Te faltan 1 visita para completar el reto'
                    setTimeout("msjTip.classList.remove('active');", 5000);
                } else {
                    if (progressNodos.value === 10) {
                        setTimeout("popup.classList.add('active');", 3000);
                    }
                }

            }
        }
    }
})