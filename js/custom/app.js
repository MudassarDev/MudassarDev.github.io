// Initialize Firebase
var config = {
  apiKey: "AIzaSyAVYROy14AZ6SVFN3Lo0yx_-fkXfZ0KYtY",
  authDomain: "mudassar-developers.firebaseapp.com",
  databaseURL: "https://mudassar-developers.firebaseio.com",
  projectId: "mudassar-developers",
  storageBucket: "mudassar-developers.appspot.com",
  messagingSenderId: "860276395972"
};
firebase.initializeApp(config);

//Property Display
// Listing Classes Array
var classes = ['property_price_box_price', 
    'sc_property_description',
    'sc_property_title_address_2',
    'icon-building113',
    'icon-bed',
    'icon-bath',
    'icon-warehouse'];
// Featured Property 1 Database Reference
    featured1DB = firebase.database().ref("featured/property1");

// Featured Property 1 Setting Values

    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    featured1DB.once("value", snapshot => document.getElementById('featuredProp1')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);


// Featured Property 2 Database Reference
    featured2DB = firebase.database().ref("featured/property2");

// Featured Property 2 Setting Values
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    featured2DB.once("value", snapshot => document.getElementById('featuredProp2')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

// Featured Property 3 Database Reference
    featured3DB = firebase.database().ref("featured/property3");

// Featured Property 3 Setting Values
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByTagName('img')[0]
                  .src = snapshot.val().image);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByTagName('a')[1]
                  .innerText = snapshot.val().name);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[0])[0]
                  .innerText = snapshot.val().price);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[1])[0]
                  .innerText = snapshot.val().type);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[2])[0]
                  .innerText = snapshot.val().address);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[3])[0]
                  .innerText = snapshot.val().area);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[4])[0]
                  .innerText = snapshot.val().bedrooms);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[5])[0]
                  .innerText = snapshot.val().washrooms);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByClassName(classes[6])[0]
                  .innerText = snapshot.val().workshop);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByTagName('a')[0]
                  .href = snapshot.val().link);
    featured3DB.once("value", snapshot => document.getElementById('featuredProp3')
                  .getElementsByTagName('a')[1]
                  .href = snapshot.val().link);

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