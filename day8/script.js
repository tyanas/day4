// alert('Привет!')

var colorArray = ['#5A9C6E', '#A8BF5A', '#FAC46E', '#FAD5BB', '#F2FEFF'];
var i = 0;

function changeColor() {
    document.body.style.background = colorArray[i];
    i++;
    if (i > colorArray.length - 1) {
        i = 0;
    }
}

// сгенерить разноцветные параграфы

function genPs() {
    console.log('tada!')
    var my_p;

    for (i = 0; i < colorArray.length; i++) {
        my_p = document.createElement('p');
        my_p.className = 'stretchy';
        my_p.style.backgroundColor = colorArray[i];
        document.body.append(my_p);
    }
}
