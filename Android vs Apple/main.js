// Apple vs Android

// Event Listener
document.getElementById('android').addEventListener('click', android);
document.getElementById('apple').addEventListener('click', apple);

// Event Functions
function android() {
    document.getElementById('banner').src = 'media/Android-Logo.jpg';
    document.getElementById('explore').innerHTML = 'Android Home';
    document.getElementById('explore').style.backgroundColor = '#a4c93b';
    document.getElementById('explorelink').href = 'https://www.android.com/';
    document.getElementById('body').style.backgroundColor = '#a4c93b';
}

function apple() {
    document.getElementById('banner').src = 'media/Apple-Logo.jpg';
    document.getElementById('explore').innerHTML = 'Apple Home';
    document.getElementById('explore').style.backgroundColor = '#b6bcca';
    document.getElementById('explorelink').href = 'https://www.apple.com/';
    document.getElementById('body').style.backgroundColor = '#b6bcca';
}
