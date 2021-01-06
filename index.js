var minuteLived = document.querySelector('.heading5');
var zodiacv = document.querySelector("#zodiac");
var youtubediv = document.querySelector(".youtube-div");
var gifydiv = document.querySelector(".gify-div");
var trackinfo = document.querySelector(".track");
var artist = document.querySelector(".artist")
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
        if (inputdate == "Invalid Date") {
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
     minuteLived.textContent = "you have lived " + minutesyoulived + " minutes"; 
    var  zodiac= ["Aries","Taurus", 'Gemini',"Cancer", 'Leo',"Virgo", 'Libra',"Scorpius", 'Sagittarius',"Capricornus", 'Aquarius','Pisces'];
     if ((inputmonth == 1 && inputday >= 19) || (inputmonth == 2 && inputday <= 18)) {
         //Aquarius
         console.log("your zodiac is", zodiac[10])  
         const image = document.createElement('img')
         image.src  = './zodiacicons/aquarius.png'
         zodiacv.textContent = zodiac[10];
         zodiacv.appendChild(image);  
     }
   else if ((inputmonth == 2 && inputday >= 19) || (inputmonth == 3 && inputday <= 20)) {
       //pisces
       console.log("your zodiac is", zodiac[11]);
       zodiacv.textContent = zodiac[11]; 
       const image = document.createElement('img')
         image.src  = './zodiacicons/pisces.png'
         zodiacv.appendChild(image); 
   }
   else if ((inputmonth == 3 && inputday >= 21) || (inputmonth == 4 && inputday <= 19)) {
       //Aries
       console.log('your zodiac is ', zodiac[0]) ;
       zodiacv.textContent = zodiac[0];  
       const image = document.createElement('img')
         image.src  = './zodiacicons/aries.png'
         zodiacv.appendChild(image);
   }
   else if ((inputmonth == 4 && inputday >= 20) || (inputmonth == 5 && inputday <= 20)) {
       //Taurus
       console.log("your zodiac ia ", zodiac[1])
       zodiac.textContent = zodiac[1];
       const image = document.createElement('img')
         image.src  = './zodiacicons/taurus.png'
         zodiacv.appendChild(image);
       
   }
   else if ((inputmonth == 5 && inputday >= 21) || (inputmonth == 6 && inputday <= 20)) {
       //gemini
       console.log("your zodiac is ", zodiac[2]);
       zodiacv.textContent = zodiac[2];
       const image = document.createElement('img')
         image.src  = './zodiacicons/gemini.png'
         zodiacv.appendChild(image);
   }
   else if ((inputmonth == 6 && inputday >= 22) || (inputmonth == 7 && inputday <= 22)) {
       //Cancer
       console.log("your zodiac is ", zodiac[3]);  
       zodiacv.textContent = zodiac[3];
       const image = document.createElement('img')
         image.src  = './zodiacicons/cancer.png'
         zodiacv.appendChild(image);
   }
   else if ((inputmonth == 7 && inputday >= 23) || (inputmonth == 8 && inputday <= 22)) {
       //Leo
       console.log("your zodiac is", zodiac[4])
       zodiacv.textContent = zodiac[4];
       const image = document.createElement('img')
         image.src  = './zodiacicons/leo.png'
         zodiacv.appendChild(image);
   }
   else if ((inputmonth == 8 && inputday >= 23) || (inputmonth == 9 && inputday <= 22)) {
       //Virgo
       console.log("your zodiac is ", zodiac[5]) 
       zodiacv.textContent = zodiac[5];
       const image = document.createElement('img')
         image.src  = './zodiacicons/virgo.png'
         zodiacv.appendChild(image);
   }
   else if ((inputmonth == 9 && inputday >= 23) || (inputmonth == 10 && inputday <= 23)) {
       //Libra 
       console.log("your zodiac is ", zodiac[6])
       zodiacv.textContent = zodiac[6];
       const image = document.createElement('img')
         image.src  = './zodiacicons/libra.png'
         zodiacv.appendChild(image);
   }
   else if ((inputmonth == 10 && inputday >= 24) || (inputmonth == 11 && inputday <= 21)) {
       //Scorpius
       console.log("your zodiac is ", zodiac[7])
       zodiacv.textContent = zodiac[7];
       const image = document.createElement('img')
         image.src  = './zodiacicons/scorpio.png'
         zodiacv.appendChild(image);
   }
   else if ((inputmonth == 11 && inputday >= 22) || (inputmonth == 12 && inputday <= 21)) {
       //Sagittarius
       console.log("your zodiac is ", zodiac[8])
       zodiacv.textContent = zodiac[8];
       const image = document.createElement('img')
         image.src  = './zodiacicons/sagittarius.png'

         zodiacv.appendChild(image);
       
   }
   else if ((inputmonth == 12 && inputday >= 22) || (inputmonth == 1 && inputday <= 19)) {
      //Capricornius
      console.log("your zodiac is ", zodiac[9]) 
      zodiacv.textContent = zodiac[9];
      const image = document.createElement('img')
         image.src  = './zodiacicons/capricorn.png'
         zodiacv.appendChild(image);
   }
  });

function apicall() {
  var inputvalue = $("#input").val(); 
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "a23b713ff9mshc20756353bc1f49p17a981jsn336d01178ed0");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch("https://billboard-api2.p.rapidapi.com/hot-100?date="+inputvalue+"&range=1-10&x-rapidapi-key=a23b713ff9mshc20756353bc1f49p17a981jsn336d01178ed0", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console logging data and grabbing th artist and songs title form data and passing that data to other function.
            console.log(result);
           
            var title = result['content']['1']['title'];
            console.log(title);
            var h3 = document.createElement('h3');
            h3.textContent= title;
            trackinfo.append(h3);
            var artists = result['content']['1']['artist'];
            console.log(artists);
            artist.textContent = artists;
            var weeks = result['content']['1']['weeks at no.1'];
            console.log("this song stay no.1 for " + weeks + ' weeks');
            trackinfo.textContent = "this song stay no.1 for "+ weeks + "weeks";
            //you can append this weeks and artist as a artist and song information
            youtubesearch();
            function youtubesearch() {
                var myHeaders = new Headers();
                myHeaders.append("x-rapidapi-key", " 936158cc87mshd1a476eec07db95p17f6cbjsnea52f1179891");
                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };
                fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + title + artists, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        var embedlink = result['items']['1']['link'];
                        var iframe = document.createElement("iframe");
                        iframe.setAttribute("style","height=100%");
                        iframe.setAttribute("style","width=100%");
                        console.log(result);
                          var res = embedlink.split("=");
                          var embeddedUrl = "https://www.youtube.com/embed/"+res[1];
                          iframe.src = embeddedUrl;
                          youtubediv.append(iframe);  
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
                        for (var i = 0; i < 4; i++) {
                            var iframe = document.createElement('iframe');
                           
                           var embedUrl = response['data'][i]['embed_url'];
                            iframe.src = embedUrl;
                            iframe.setAttribute('style',"height=350px")
                            iframe.setAttribute('style',"width=350px")
                            var div = document.createElement('div');
                            div.append(iframe);
                            gifydiv.appendChild(div);
                        }
                        console.log(response);
                    })
            }
        })
        .catch(error => console.log('error', error));
};
