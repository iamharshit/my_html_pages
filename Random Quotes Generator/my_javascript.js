var quote="";
 
$(document).ready(function() {
     $("#getMessage").on("click", function(){
      $(".message").html(msgfun());
     });
   });

$(document).ready(function() {
     $("#tweetbutton").on("click", function(){
      $("#tweetbutton").attr("href",        
        "https://twitter.com/intent/tweet?text="+quote+"#A_QUOTE");
     });
   });

function msgfun(){
  var ourArray = ["It comes down to one simple thing : How bad do you want it ? ",
                  " I am made entirely of flaws, stiched together with good intentions.",
                  "Sometimes you need to fall before you can fly.",
                 "A smooth sea never made a skillful sailor",
                 "You dont always need a plan bro . Sometimes you just need balls. ",
                 "No one is  coming to save you. This life of yours is 100% your responsibility.",
                 " If you aren't willing to fight for what you believe in,  then dont even enter the ring.", 
                 "To live is the rarest thing in the world. Most people just exist.",
                  "If you haven't found it yet, keep looking "];
  var index=Math.floor(Math.random()*ourArray.length);
  var str=ourArray[index];
  quote=str+"#A_QUOTE";
  return str;
}
