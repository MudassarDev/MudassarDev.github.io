// Google Maps
 function initMap() {
                  var office = {lat: 30.209599, lng: 71.449949};
                  var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 18,
                    center: office
                  });
                  var marker = new google.maps.Marker({
                    position: office,
                    map: map,
                  });
                }