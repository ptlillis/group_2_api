var player = document.querySelector(".player");
var birthdayimage = document.querySelector('.birthday-image');
var gifydiv = document.querySelector(".gify-div");
var trackinfo = document.querySelector(".track");
var artist = document.querySelector(".artist-info")
var zodiacimage = document.querySelector('.zodiac-image');
var zodiacCardTitle = document.querySelector('.zodiac-card-title')
var thirdrow = document.querySelector('.third-row');
var lastrow = document.querySelector(".last-row");
var song = document.querySelector('.song')
var input = document.querySelector('#input');
var error = document.querySelector('.error');

console.log("app is connected")
$(document).ready(function () {
    // setting up the max date input to limit the input value
    // credit stackoverflow.
    document.getElementById('input').max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
});

  $('.search-button').on('click', (e)=>{
        e.preventDefault();
        //converting input value to separate date month and year value
        var inputdate = new Date($('#input').val());
        var inputvalue = $("#input").val();
        console.log(inputvalue);
        console.log(inputdate);
        error.textContent = "";
        if (inputdate == "Invalid Date") {
            error.textContent="Please enter your date of birth";
            return;
        }
        apicall();
        var inputyear = inputdate.getFullYear();
        console.log(inputyear);
        
        var inputday = inputdate.getDate()+1;
        console.log(inputday);
        var inputmonth = inputdate.getMonth() + 1;
        console.log(inputmonth);
        
        //bringing in current date as year month and day
        var dDate = new Date();
        var dyear = dDate.getFullYear();
        console.log(dyear);
        var dmonth = dDate.getMonth()+1;
        console.log(dmonth);
        var dday= dDate.getDate();
        console.log(dday);
        var dhours = dDate.getHours()
        var hoursvalue = dhours*60
        // subtracting year month and day for calculation 
        var monthvalue = Math.abs(dmonth - inputmonth);
        console.log(monthvalue);
        var yearvalue = Math.abs(dyear-inputyear);
        console.log(yearvalue);
        var dayvalue = Math.abs(inputday-dday);
        console.log(dayvalue);
        
        //yer*12=month,+month,*30=days,+day*24*60 (conversion)
     var minutesyoulived =(((((yearvalue*12)+ monthvalue)*30) + dayvalue)*1440)+hoursvalue;
     console.log(minutesyoulived);
     
     document.querySelector('.minutes').textContent = minutesyoulived;

    var  zodiac= ["Aries","Taurus", 'Gemini',"Cancer", 'Leo',"Virgo", 'Libra',"Scorpius", 'Sagittarius',"Capricornus", 'Aquarius','Pisces'];
     if ((inputmonth == 1 && inputday >= 19) || (inputmonth == 2 && inputday <= 18)) {
         //Aquarius
         console.log("your zodiac is", zodiac[10])  
          zodiacimage.src = "./zodiacicons/aquarius.png"
          zodiacCardTitle.textContent = zodiac[10];
     }
   else if ((inputmonth == 2 && inputday >= 19) || (inputmonth == 3 && inputday <= 20)) {
       //pisces
       console.log("your zodiac is", zodiac[11]);
       zodiacv.textContent = zodiac[11]; 
       zodiacimage.src = "./zodiacicons/pisces.png"
          zodiacCardTitle.textContent = zodiac[11]; 
   }
   else if ((inputmonth == 3 && inputday >= 21) || (inputmonth == 4 && inputday <= 19)) {
       //Aries
       console.log('your zodiac is ', zodiac[0]) ;
       //zodiacv.textContent = zodiac[0];  
       zodiacimage.src = "./zodiacicons/aries.png"
          zodiacCardTitle.textContent = zodiac[0];;
   }
   else if ((inputmonth == 4 && inputday >= 20) || (inputmonth == 5 && inputday <= 20)) {
       //Taurus
       console.log("your zodiac ia ", zodiac[1])
       zodiacimage.src = "./zodiacicons/taurus.png"
        zodiacCardTitle.textContent = zodiac[1];
       
   }
   else if ((inputmonth == 5 && inputday >= 21) || (inputmonth == 6 && inputday <= 20)) {
       //gemini
       console.log("your zodiac is ", zodiac[2]);
       //zodiacv.textContent = zodiac[2];
        zodiacimage.src = "./zodiacicons/gemini.png"
        zodiacCardTitle.textContent = zodiac[2];
   }
   else if ((inputmonth == 6 && inputday >= 22) || (inputmonth == 7 && inputday <= 22)) {
       //Cancer
       console.log("your zodiac is ", zodiac[3]);  
       //zodiacv.textContent = zodiac[3];
        zodiacimage.src = "./zodiacicons/cancer.png"
        zodiacCardTitle.textContent = zodiac[3];
   }
   else if ((inputmonth == 7 && inputday >= 23) || (inputmonth == 8 && inputday <= 22)) {
       //Leo
       console.log("your zodiac is", zodiac[4])
       //zodiacv.textContent = zodiac[4];
       zodiacimage.src = "./zodiacicons/leo.png"
          zodiacCardTitle.textContent = zodiac[4];
   }
   else if ((inputmonth == 8 && inputday >= 23) || (inputmonth == 9 && inputday <= 22)) {
       //Virgo
       console.log("your zodiac is ", zodiac[5]) 
       zodiacimage.src = "./zodiacicons/virgo.png"
       zodiacCardTitle.textContent = zodiac[5];
   }
   else if ((inputmonth == 9 && inputday >= 23) || (inputmonth == 10 && inputday <= 23)) {
       //Libra 
       console.log("your zodiac is ", zodiac[6])
       zodiacimage.src = "./zodiacicons/libra.png"
          zodiacCardTitle.textContent = zodiac[6];
   }
   else if ((inputmonth == 10 && inputday >= 24) || (inputmonth == 11 && inputday <= 21)) {
       //Scorpius
       console.log("your zodiac is ", zodiac[7])
       zodiacimage.src = "./zodiacicons/scorpio.png"
          zodiacCardTitle.textContent = zodiac[7];
   }
   else if ((inputmonth == 11 && inputday >= 22) || (inputmonth == 12 && inputday <= 21)) {
       //Sagittarius
       console.log("your zodiac is ", zodiac[8])
       zodiacimage.src = "./zodiacicons/sagittarius.png"
       zodiacCardTitle.textContent = zodiac[8];
       
   }
   else if ((inputmonth == 12 && inputday >= 22) || (inputmonth == 1 && inputday <= 19)) {
      //Capricornius
      console.log("your zodiac is ", zodiac[9]) 
      zodiacimage.src = "./zodiacicons/capricorn.png"
          zodiacCardTitle.textContent = zodiac[9];

   }
   thirdrow.classList.remove("hide")
   lastrow.classList.remove("hide")
   

  });



function apicall() {
  var inputvalue = $("#input").val();
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "b0174852bfmsh60c6cac6744b4fep1544d2jsn6df30f1a7489");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch("https://billboard-api2.p.rapidapi.com/hot-100?date="+inputvalue+"&range=1-10&x-rapidapi-key=b0174852bfmsh60c6cac6744b4fep1544d2jsn6df30f1a7489", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console logging data and grabbing th artist and songs title form data and passing that data to other function.
            console.log(result);
           
            var title = result['content']['1']['title'];
            console.log(title);
            var artists = result['content']['1']['artist'];
            console.log(artists);
            artist.textContent = artists;
            var weeks = result['content']['1']['weeks at no.1'];
            console.log("This song stay no.1 for " + weeks + ' weeks');
            song.textContent = title
            trackinfo.textContent = "This song stay no.1 for "+ weeks + " weeks";
            //you can append this weeks and artist as a artist and song information
            youtubesearch();
            function youtubesearch() {
                var myHeaders = new Headers();
                myHeaders.append("x-rapidapi-key", " b0174852bfmsh60c6cac6744b4fep1544d2jsn6df30f1a7489");
                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };
                fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + title + artists, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        var embedlink = result['items']['1']['link'];
                        console.log(result);
                        birthdayimage.classList.add("hide")
                          var res = embedlink.split("=");
                          var embeddedUrl = "https://www.youtube.com/embed/"+res[1];
                          player.src = embeddedUrl;
                         
                    })
                    .catch(error => console.log('error', error));
                   
            }
            gifysearch();
            function gifysearch() {
                var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + artists + "&api_key=dc6zaTOxFJmzC&limit=4";
                $.ajax({
                    method: "GET",
                    url: queryURL,
                })
                    //forever loop to grab 4 gify images and append to the html
                    .then(function (response) {
                        $('.gify-div').empty();
                        for (var i = 0; i < 4; i++) {
                            var iframe = document.createElement('iframe');
                           
                           var embedUrl = response['data'][i]['embed_url'];
                            iframe.src = embedUrl;
                            iframe.setAttribute('style',"height=350px")
                            iframe.setAttribute('style',"width=350px")
                            var div = document.createElement('div');
                            div.classList.add("card-panel")
                            div.append(iframe);
                            var gifytitle = response['data'][i]['title']
                            div.append(gifytitle)
                            gifydiv.appendChild(div);
                        }
                        console.log(response);
                    })
            }
        })
        .catch(error => console.log('error', error));
        inputvalue = "" 
};
