var temperature;
//getting longitude and lattitude
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    
   $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    
    var info= "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude+"&appid=c0e3edce6ffc915f02a5b8fb4a16b818";
      
     $.getJSON(info, function(data) {        
         temperature=data.main.temp-273;
        $("#tempdisplay").html(temperature.toFixed(0));
        
        var mycity=data.name;
        var mycountry=data.sys.country;
        var mylocation=mycity+","+mycountry;
        $("#cityname").html(mylocation);
        
        var myweather=data.weather[0].main;
        $("#currentweather").html(myweather);
       
        // sending image link
       
        if(myweather=="Clear"){    
          imgurl= "http://pvshop.eu/public/assets/images/free_images/sun.png";
         }
       else if(myweather=="Clouds"){    
          imgurl= "http://pvshop.eu/public/assets/images/free_images/sun.png";
         }
        else{                                
          imgurl= "http://www.keenthemes.com/preview/conquer/assets/plugins/jcrop/demos/demo_files/image1.jpg";
        
         }
    //   document.getElementById("myImage");
      document.getElementById("myimg").src = imgurl;
       
       $(document).ready(function() {
      $("#getMessage").on("click", function(){
         $(".this").html(togglefun(temperature));
        });
     });
       
    });        
  });
}


//button function
var status ="C";  
function togglefun(x){
  var ans;
  if(status=="C"){
  ans=(x*9/5)+32;
    status="F";
  }
  else if(status=="F"){
    ans=temperature;
    status="C";
  } 
  return ans.toFixed(0);
}