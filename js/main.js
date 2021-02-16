newFunction();

function newFunction() {

    var url = new URL(window.location.href);
    var params = url.searchParams;
    mapboxgl.accessToken = 'pk.eyJ1IjoibW16MDIiLCJhIjoiY2pxNjU3NGZvMDYxeTQyb3g0bjFidTR6aCJ9.Y7yyJIqNyCjHwe_VD8JbHg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40],
        zoom: 9
    });

    document.onkeydown = keydown;

    function easing(t) {
        return t * (2 - t);
    }

    function keydown(event) {

        event.preventDefault();
        if (event.keyCode === 37) { //left
            map.panBy([-100, 0], {
                easing: easing
            });
        } else if (event.keyCode === 38) { //up
            map.panBy([0, -100], {
                easing: easing
            });
        } else if (event.keyCode === 39) { //right
            map.panBy([100, 0], {
                easing: easing
            });
        } else if (event.keyCode === 40) { //down
            map.panBy([0, 100], {
                easing: easing
            });
        } else {
            alert(event.keyCode);
        }
    }
}