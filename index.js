var minuteLived = document.querySelector('.heading5');
var zodiacv = document.querySelector("#zodiac");
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
// $(document).ready(function () {
//     var myHeaders = new Headers();
//     myHeaders.append("x-rapidapi-key", "936158cc87mshd1a476eec07db95p17f6cbjsnea52f1179891");
//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//     };
//     fetch("https://billboard-api2.p.rapidapi.com/hot-100?date=2019-05-11&range=1-10&x-rapidapi-key=936158cc87mshd1a476eec07db95p17f6cbjsnea52f1179891", requestOptions)
//         .then(response => response.json())
//         .then(result => {
//             console.log(result);
//             var title = result['content']['1']['title'];
//             console.log(title);
//             var artists = JSON.stringify(result['content']['1']['artist']);
//             console.log(artists);
//             var artist = artists['0'];
//             console.log(artist);
//             var weeks = result['content']['1']['weeks at no.1'];
//             console.log("this song stay no.1 for " + weeks + ' weeks');
//             youtubesearch()
//             function youtubesearch() {
//                 var myHeaders = new Headers();
//                 myHeaders.append("x-rapidapi-key", " 936158cc87mshd1a476eec07db95p17f6cbjsnea52f1179891");
//                 var requestOptions = {
//                     method: 'GET',
//                     headers: myHeaders,
//                     redirect: 'follow'
//                 };
//                 fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + title + artists, requestOptions)
//                     .then(response => response.json())
//                     .then(result => {
//                         var link = result['items']['1']['link'];
//                         console.log(result)
//                     })
//                     .catch(error => console.log('error', error))
//             }
//             gifysearch()
//             function gifysearch() {
//                 var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + title + "&api_key=dc6zaTOxFJmzC&limit=10";
//                 $.ajax({
//                     method: "GET",
//                     url: queryURL,
//                 })
//                     .then(function (response) {
//                         for (var i = 0; i < 3; i++) {
//                             var embedUrl = response['data'][i]['embed_url'];
//                         }
//                         console.log(response);
//                     })
//             }
//         })
//         .catch(error => console.log('error', error));
// });

// //this only when page load we need to run this by click event.
// $(document).ready(function () {
//     var myHeaders = new Headers();
//     myHeaders.append("x-rapidapi-key", "936158cc87mshd1a476eec07db95p17f6cbjsnea52f1179891");
//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//     };
//     fetch("https://billboard-api2.p.rapidapi.com/hot-100?date=2019-05-11&range=1-10&x-rapidapi-key=936158cc87mshd1a476eec07db95p17f6cbjsnea52f1179891", requestOptions)
//         .then(response => response.json())
//         .then(result => {
//             //console logging data and grabbing th artist and songs title form data and passing that data to other function.
//             console.log(result);
//             var title = result['content']['1']['title'];
//             console.log(title);
//             var artists = JSON.stringify(result['content']['1']['artist']);
//             console.log(artists);
//             //var artist = artists['0'];
//             //comented out because I was trying to get out only one artist but it shows the first letter 
//             console.log(artist);
//             var weeks = result['content']['1']['weeks at no.1'];
//             console.log("this song stay no.1 for " + weeks + ' weeks');
//             //you can append this weeks and artist as a artist and song information
//             youtubesearch()
//             function youtubesearch() {
//                 var myHeaders = new Headers();
//                 myHeaders.append("x-rapidapi-key", " 936158cc87mshd1a476eec07db95p17f6cbjsnea52f1179891");
//                 var requestOptions = {
//                     method: 'GET',
//                     headers: myHeaders,
//                     redirect: 'follow'
//                 };
//                 fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + title + artists, requestOptions)
//                     .then(response => response.json())
//                     .then(result => {
//                         var link = result['items']['1']['link'];
//                         //document.getElementById('header').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='640' height='390' src=" + link + "frameborder='0' allowFullScreen></iframe>"
//                         //just change the id and you willbe done and change width and height according to the size of appending div.
//                         // and uncomment (comented out to run the function without any error)
//                         // you need to put that link to dom element by creating source that can handle url and play.
//                         console.log(result)
//                     })
//                     .catch(error => console.log('error', error))
//             }
//             gifysearch()
//             function gifysearch() {
//                 var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + title + "&api_key=dc6zaTOxFJmzC&limit=10";
//                 $.ajax({
//                     method: "GET",
//                     url: queryURL,
//                 })
//                     //forever loop to grab 4 gify images and append to the html
//                     .then(function (response) {
//                         for (var i = 0; i < 4; i++) {
//                             var fig = document.createElement('figure');
//                             var img = document.createElement('img');
//                             var fc = document.createElement('figcaption');
//                             var embedUrl = response['data'][i]['embed_url'];
//                             img.src = embedUrl;
//                             img.alt = response['data'][i]['title'];
//                             fc.textContent = response['data'][i]['title'];
//                             fig.appendChild(img);
//                             fig.appendChild(fc);
//                             var div = document.createElement('div');
//                             div.append(fig);
//                             //you need to append that div to the html element.
//                         }
//                         console.log(response);
//                     })
//             }
//         })
//         .catch(error => console.log('error', error));
// });
// //this is the expression for minutes you lived but need to grab that input value year month and day and subtract respectively with the curreent year month and day
// //and parsefloat that value to chage to number and pass that value as year month and day
// //   var year = parseFloat(yearvalue);
// //   var month = parseFloat(monthvalue);
// //   var day = parseFloat(dayvalue);
// //   var monthsYouLived =(yer*12)+month;
// //   var dayYouLived = (monthsYouLived * 30)+ day;
// //   var minutesYouLived = (dayYouLived) * 24 * 60;
// // comented out for now