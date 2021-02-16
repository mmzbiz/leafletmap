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

    function keydown(event) {


        switch (event.keyCode) {
            //left
            case 37:
                map.panBy([-50, 0]);
                break;

                //up
            case 38:
                map.panBy([0, -50]);
                break;

                //right
            case 39:
                map.panBy([50, 0]);
                break;

                //down
            case 40:
                map.panBy([0, 50]);
                break;
            default:
                alert(event.keyCode);
                break;
        }
    }
}