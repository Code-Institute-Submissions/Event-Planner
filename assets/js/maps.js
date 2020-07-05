/*calls map function*/
function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });
/* variable label identifiers for map*/
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
/*marker cluster for maps function with image path*/
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath:'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }
/*custom locations for dublin events as per index.html*/
            var locations = [{
                lat: 53.347306, 
                lng: -6.228974
            }, { 
                lat: 53.342080, 
                lng: -6.277470
            }, { 
                lat: 53.3356307, 
                lng: -6.2567806
            }];