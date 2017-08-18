var config = {
  apiKey: "AIzaSyAVYROy14AZ6SVFN3Lo0yx_-fkXfZ0KYtY",
  authDomain: "mudassar-developers.firebaseapp.com",
  databaseURL: "https://mudassar-developers.firebaseio.com",
  projectId: "mudassar-developers",
  storageBucket: "mudassar-developers.appspot.com",
  messagingSenderId: "860276395972"
};
firebase.initializeApp(config);

function populateListings(thisIsSaleType, putChildData, IDofSection){
  var column13 = document.createElement('div');
  column13.className = 'column-1_3 column_padding_bottom';
  document.getElementById(IDofSection).appendChild(column13);

  //Element's onclick behaviour
  column13.onclick = function(){
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    var htmloflisting = this.innerHTML;
    document.getElementById('clickedListing').innerHTML = htmloflisting;
    var propertyItem = document.getElementById('clickedListing').firstChild.firstChild;
    propertyItem.removeChild(document.getElementById('clickedListing').firstChild.firstChild.firstChild);
    return false;
  }

    //Second div having class sc_property_item
    var scProperty = document.createElement('div');
    scProperty.className = 'sc_property_item';
    column13.appendChild(scProperty);

    //Details
    var info = document.createElement('div');
    info.className = 'sc_property_info';
    scProperty.appendChild(info);

    //Description
    var description = document.createElement('div');
    description.className = 'sc_property_description';
    info.appendChild(description);
    description.innerText = putChildData.type;

    //Not empty div
    var empty = document.createElement('div');
    empty.className = 'sc_listing_content';
    info.appendChild(empty);

    //icon
    var icon = document.createElement('div');
    icon.className = 'sc_property_icon';
    empty.appendChild(icon);

    //Icon Location
    var iconLocation = document.createElement('span');
    iconLocation.className = 'icon-location';
    icon.appendChild(iconLocation);

    //Title
    var title = document.createElement('div');
    title.className = 'sc_property_title';
    empty.appendChild(title);

    //Address1
    var address1 = document.createElement('div');
    address1.className = 'sc_property_title_address_1';
    title.appendChild(address1);
    address1.innerText = putChildData.name;

    //link
    var address1Link = document.createElement('a');
    address1Link.href = 'property_detail.html';
    address1.appendChild(address1Link);

    //Address 2
    var address2 = document.createElement('div');
    address2.className = 'sc_property_title_address_2';
    title.appendChild(address2);
    address2.innerText = putChildData.address;

    //Price Box
    var priceBox = document.createElement('div');
    priceBox.className = 'property_price_box';
    info.appendChild(priceBox);

    //Price Unit
    var unitTag = document.createElement('span');
    unitTag.className = 'property_price_box_sign';
    priceBox.appendChild(unitTag);
    unitTag.innerText = "PKR";

    //Price Amount
    var amount = document.createElement('span');
    amount.className = 'property_price_box_price';
    priceBox.appendChild(amount);
    // Price in the Price Box (From Database)
    amount.innerText = putChildData.price;

    //Line
    var line = document.createElement('div');
    line.className = 'cL';
    empty.appendChild(address2);

    //Info List
    var infoList = document.createElement('div');
    infoList.className = 'sc_property_info_list';
    scProperty.appendChild(infoList);

    //Area
    var areaIcon = document.createElement('span');
    areaIcon.className = 'icon-building113';
    infoList.appendChild(areaIcon);
    areaIcon.innerText = putChildData.area;
}

function showsalelistings(saletype, sectionid){
  if (saletype == 'featured'){
      var query = firebase.database().ref('featured');
      query.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {   
        var childData = childSnapshot.val();
        var queryAgain = firebase.database().ref(childData);
        queryAgain.once("value")
        .then(function(snapshot) {
          var childData = snapshot.val();
          populateListings(saletype, childData, sectionid);
          });
      });
  });
}else{
    var query = firebase.database().ref(saletype);
    query.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        populateListings(saletype, childData, sectionid);

      });
    });
  }
}

//Modal Behaviuor
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Google Maps


function initMap() {
// Office Location Map
    var office = {lat: 30.209599, lng: 71.449949};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: office
    });
// Office Location Map Marker
    var marker = new google.maps.Marker({
      position: office,
      map: map
    });

//Listings Map
    var listingsMap = new google.maps.Map(document.getElementById('listingsMap'), {
      zoom: 14,
      center: {lat: 30.209599, lng: 71.449949}
    });

    function insertListings(propertyPinType){
    //Listing Markers
    var markers = [];
    if(propertyPinType == 'bungalowForSale'){
            var query = firebase.database().ref(propertyPinType);
            query.once("value")
              .then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  var childData = childSnapshot.val();
                  var position = childData.location;
                  var price = childData.price;
                  var title = childData.name;
                  var address = childData.address;
                  var area = childData.area;
                  var listingmarker = new google.maps.Marker({
                                    position: position,
                                    map: listingsMap,
                                    price: price,
                                    title: title,
                                    address: address,
                                    area: area,
                                    icon: 'images/bungalow-icon.png'
                                  });
                  markers.push(listingmarker);
                  listingmarker.addListener('click', function() {
                  populateInfoWindow(this, infowindow);
                });
              });
            });

            var infowindow = new google.maps.InfoWindow();

            function populateInfoWindow(listingmarker, infowindow){
              var contentString = '<div style = "background-color: rgba(239, 89, 90, 0.9);'+
                                  'display: inline-block;'+
                                  'padding: 0.1em 0.5em 0.1em 0.5em;'+
                                  'color: white;'+
                                  'font-size: 1.6em;'+
                                  'position: relative;">'+
                                    listingmarker.price+
                                  '</div>'+
                                  '<div style = "padding-left: 15px;">'+
                                  '<h1 id = "info_window_title" style = "font-size: 2.2em;'+
                                   'font-weight:bold; text-align: center; padding-bottom: 5px;">'+
                                    listingmarker.title+
                                  '</h1>'+
                                  '<div style = "font-size: 1.3em;'+
                                  'padding-bottom: 3px; padding-top: 3px;'+
                                  'border-bottom: 1px solid; border-top: 1px solid;">'+
                                  '<span class="icon-location" style = "padding-right: 4px;"></span>'+
                                    listingmarker.address+
                                  '</div>'+
                                  '<h3 style = "font-size: 1.3em; text-align: center;'+
                                  '">'+
                                  '<span class="icon-building113" style = "padding-right: 4px; color: #7b81b7"></span>'+
                                  listingmarker.area+
                                  '</h3>'+
                                  '</div>';
              infowindow.marker = listingmarker;
              infowindow.setContent(contentString);
              infowindow.open(listingsMap, listingmarker);

              //Modal Behaviuor
              document.getElementById('info_window_title').onclick = function(){
              var modal = document.getElementById('myModal_2');
              modal.style.display = "block";
              var span = document.getElementsByClassName("close")[0];
              // When the user clicks on <span> (x), close the modal
              span.onclick = function() {
                  modal.style.display = "none";
              }
              window.onclick = function(event) {
                  if (event.target == modal) {
                      modal.style.display = "none";
                  }
              }
              return false;
              }

          }
      } else if (propertyPinType == 'houseForSale'){
            var query = firebase.database().ref(propertyPinType);
            query.once("value")
              .then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  var childData = childSnapshot.val();
                  var position = childData.location;
                  var price = childData.price;
                  var title = childData.name;
                  var address = childData.address;
                  var area = childData.area;
                  var listingmarker = new google.maps.Marker({
                                    position: position,
                                    map: listingsMap,
                                    price: price,
                                    title: title,
                                    address: address,
                                    area: area,
                                    icon: 'images/house-icon.png'
                                  });
                  markers.push(listingmarker);
                  listingmarker.addListener('click', function() {
                  populateInfoWindow(this, infowindow);
                });
              });
            });

            var infowindow = new google.maps.InfoWindow();

            function populateInfoWindow(listingmarker, infowindow){
              var contentString = '<div style = "background-color: rgba(239, 89, 90, 0.9);'+
                                  'display: inline-block;'+
                                  'padding: 0.1em 0.5em 0.1em 0.5em;'+
                                  'color: white;'+
                                  'font-size: 1.6em;'+
                                  'position: relative;">'+
                                    listingmarker.price+
                                  '</div>'+
                                  '<div style = "padding-left: 15px;">'+
                                  '<h1 id = "info_window_title" style = "font-size: 2.2em;'+
                                   'font-weight:bold; text-align: center; padding-bottom: 5px;">'+
                                    listingmarker.title+
                                  '</h1>'+
                                  '<div style = "font-size: 1.3em;'+
                                  'padding-bottom: 3px; padding-top: 3px;'+
                                  'border-bottom: 1px solid; border-top: 1px solid;">'+
                                  '<span class="icon-location" style = "padding-right: 4px;"></span>'+
                                    listingmarker.address+
                                  '</div>'+
                                  '<h3 style = "font-size: 1.3em; text-align: center;'+
                                  '">'+
                                  '<span class="icon-building113" style = "padding-right: 4px; color: #7b81b7"></span>'+
                                  listingmarker.area+
                                  '</h3>'+
                                  '</div>';
              infowindow.marker = listingmarker;
              infowindow.setContent(contentString);
              infowindow.open(listingsMap, listingmarker);

              //Modal Behaviuor
              document.getElementById('info_window_title').onclick = function(){
              var modal = document.getElementById('myModal_2');
              modal.style.display = "block";
              var span = document.getElementsByClassName("close")[0];
              // When the user clicks on <span> (x), close the modal
              span.onclick = function() {
                  modal.style.display = "none";
              }
              window.onclick = function(event) {
                  if (event.target == modal) {
                      modal.style.display = "none";
                  }
              }
              return false;
              }
          }
      } else if (propertyPinType == 'onRent'){
            var query = firebase.database().ref(propertyPinType);
            query.once("value")
              .then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  var childData = childSnapshot.val();
                  var position = childData.location;
                  var price = childData.price;
                  var title = childData.name;
                  var address = childData.address;
                  var area = childData.area;
                  var listingmarker = new google.maps.Marker({
                                    position: position,
                                    map: listingsMap,
                                    price: price,
                                    title: title,
                                    address: address,
                                    area: area,
                                    icon: 'images/rent-icon.png'
                                  });
                  markers.push(listingmarker);
                  listingmarker.addListener('click', function() {
                  populateInfoWindow(this, infowindow);
                });
              });
            });

            var infowindow = new google.maps.InfoWindow();

            function populateInfoWindow(listingmarker, infowindow){
              var contentString = '<div style = "background-color: rgba(239, 89, 90, 0.9);'+
                                  'display: inline-block;'+
                                  'padding: 0.1em 0.5em 0.1em 0.5em;'+
                                  'color: white;'+
                                  'font-size: 1.6em;'+
                                  'position: relative;">'+
                                    listingmarker.price+
                                  '</div>'+
                                  '<div style = "padding-left: 15px;">'+
                                  '<h1 id = "info_window_title" style = "font-size: 2.2em;'+
                                   'font-weight:bold; text-align: center; padding-bottom: 5px;">'+
                                    listingmarker.title+
                                  '</h1>'+
                                  '<div style = "font-size: 1.3em;'+
                                  'padding-bottom: 3px; padding-top: 3px;'+
                                  'border-bottom: 1px solid; border-top: 1px solid;">'+
                                  '<span class="icon-location" style = "padding-right: 4px;"></span>'+
                                    listingmarker.address+
                                  '</div>'+
                                  '<h3 style = "font-size: 1.3em; text-align: center;'+
                                  '">'+
                                  '<span class="icon-building113" style = "padding-right: 4px; color: #7b81b7"></span>'+
                                  listingmarker.area+
                                  '</h3>'+
                                  '</div>';
              infowindow.marker = listingmarker;
              infowindow.setContent(contentString);
              infowindow.open(listingsMap, listingmarker);

              //Modal Behaviuor
              document.getElementById('info_window_title').onclick = function(){
              var modal = document.getElementById('myModal_2');
              modal.style.display = "block";
              var span = document.getElementsByClassName("close")[0];
              // When the user clicks on <span> (x), close the modal
              span.onclick = function() {
                  modal.style.display = "none";
              }
              window.onclick = function(event) {
                  if (event.target == modal) {
                      modal.style.display = "none";
                  }
              }
              return false;
              }
          }    
      } else if (propertyPinType == 'plotForSale'){
            var query = firebase.database().ref(propertyPinType);
            query.once("value")
              .then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  var childData = childSnapshot.val();
                  var position = childData.location;
                  var price = childData.price;
                  var title = childData.name;
                  var address = childData.address;
                  var area = childData.area;
                  var listingmarker = new google.maps.Marker({
                                    position: position,
                                    map: listingsMap,
                                    price: price,
                                    title: title,
                                    address: address,
                                    area: area,
                                    icon: 'images/plot-icon.png'
                                  });
                  markers.push(listingmarker);
                  listingmarker.addListener('click', function() {
                  populateInfoWindow(this, infowindow);
                });
              });
            });

            var infowindow = new google.maps.InfoWindow();

            function populateInfoWindow(listingmarker, infowindow){
              var contentString = '<div style = "background-color: rgba(239, 89, 90, 0.9);'+
                                  'display: inline-block;'+
                                  'padding: 0.1em 0.5em 0.1em 0.5em;'+
                                  'color: white;'+
                                  'font-size: 1.6em;'+
                                  'position: relative;">'+
                                    listingmarker.price+
                                  '</div>'+
                                  '<div style = "padding-left: 15px;">'+
                                  '<h1 id = "info_window_title" style = "font-size: 2.2em;'+
                                   'font-weight:bold; text-align: center; padding-bottom: 5px;">'+
                                    listingmarker.title+
                                  '</h1>'+
                                  '<div style = "font-size: 1.3em;'+
                                  'padding-bottom: 3px; padding-top: 3px;'+
                                  'border-bottom: 1px solid; border-top: 1px solid;">'+
                                  '<span class="icon-location" style = "padding-right: 4px;"></span>'+
                                    listingmarker.address+
                                  '</div>'+
                                  '<h3 style = "font-size: 1.3em; text-align: center;'+
                                  '">'+
                                  '<span class="icon-building113" style = "padding-right: 4px; color: #7b81b7"></span>'+
                                  listingmarker.area+
                                  '</h3>'+
                                  '</div>';
              infowindow.marker = listingmarker;
              infowindow.setContent(contentString);
              infowindow.open(listingsMap, listingmarker);

              //Modal Behaviuor
              document.getElementById('info_window_title').onclick = function(){
              var modal = document.getElementById('myModal_2');
              modal.style.display = "block";
              var span = document.getElementsByClassName("close")[0];
              // When the user clicks on <span> (x), close the modal
              span.onclick = function() {
                  modal.style.display = "none";
              }
              window.onclick = function(event) {
                  if (event.target == modal) {
                      modal.style.display = "none";
                  }
              }
              return false;
              }
          }    
      } else if (propertyPinType == 'shopForSale') {
            var query = firebase.database().ref(propertyPinType);
            query.once("value")
              .then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  var childData = childSnapshot.val();
                  var position = childData.location;
                  var price = childData.price;
                  var title = childData.name;
                  var address = childData.address;
                  var area = childData.area;
                  var listingmarker = new google.maps.Marker({
                                    position: position,
                                    map: listingsMap,
                                    price: price,
                                    title: title,
                                    address: address,
                                    area: area,
                                    icon: 'images/shop-icon.png'
                                  });
                  markers.push(listingmarker);
                  listingmarker.addListener('click', function() {
                  populateInfoWindow(this, infowindow);
                });
              });
            });

            var infowindow = new google.maps.InfoWindow();

            function populateInfoWindow(listingmarker, infowindow){
              var contentString = '<div style = "background-color: rgba(239, 89, 90, 0.9);'+
                                  'display: inline-block;'+
                                  'padding: 0.1em 0.5em 0.1em 0.5em;'+
                                  'color: white;'+
                                  'font-size: 1.6em;'+
                                  'position: relative;">'+
                                    listingmarker.price+
                                  '</div>'+
                                  '<div style = "padding-left: 15px;">'+
                                  '<h1 id = "info_window_title" style = "font-size: 2.2em;'+
                                   'font-weight:bold; text-align: center; padding-bottom: 5px;">'+
                                    listingmarker.title+
                                  '</h1>'+
                                  '<div style = "font-size: 1.3em;'+
                                  'padding-bottom: 3px; padding-top: 3px;'+
                                  'border-bottom: 1px solid; border-top: 1px solid;">'+
                                  '<span class="icon-location" style = "padding-right: 4px;"></span>'+
                                    listingmarker.address+
                                  '</div>'+
                                  '<h3 style = "font-size: 1.3em; text-align: center;'+
                                  '">'+
                                  '<span class="icon-building113" style = "padding-right: 4px; color: #7b81b7"></span>'+
                                  listingmarker.area+
                                  '</h3>'+
                                  '</div>';
              infowindow.marker = listingmarker;
              infowindow.setContent(contentString);
              infowindow.open(listingsMap, listingmarker);

              //Modal Behaviuor
              document.getElementById('info_window_title').onclick = function(){
              var modal = document.getElementById('myModal_2');
              modal.style.display = "block";
              var span = document.getElementsByClassName("close")[0];
              // When the user clicks on <span> (x), close the modal
              span.onclick = function() {
                  modal.style.display = "none";
              }
              window.onclick = function(event) {
                  if (event.target == modal) {
                      modal.style.display = "none";
                  }
              }
              return false;
              }
          }
        }            
      //Change infowindow background style
      google.maps.event.addListener(infowindow, 'domready', function() {
      var iwOuter = $('.gm-style-iw');
      var iwBackground = iwOuter.prev();
      iwBackground.children(':nth-child(2)').css({'display' : 'none'});
      iwBackground.children(':nth-child(4)').css({'display' : 'none'});
      });
  }

      insertListings('bungalowForSale');
      insertListings('houseForSale');
      insertListings('onRent');
      insertListings('plotForSale');
      insertListings('shopForSale');

}


//Load Listing Elements
window.onload = function(){
  showsalelistings('featured', 'featured_listings_column');
}
