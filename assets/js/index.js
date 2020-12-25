console.log("app is connected");
$(document).ready(function () {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "936158cc87mshd1a476eec07db95p17f6cbjsnea52f1179891");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch("https://billboard-api2.p.rapidapi.com/hot-100?date=2019-05-11&range=1-10&x-rapidapi-key=936158cc87mshd1a476eec07db95p17f6cbjsnea52f1179891", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            var title = result['content']['1']['title'];
            console.log(title);
            var artists = JSON.stringify(result['content']['1']['artist']);
            console.log(artists);
            var artist = artists['0'];
            console.log(artist);
            var weeks = result['content']['1']['weeks at no.1'];
            console.log("this song stay no.1 for " + weeks + ' weeks');
            youtubesearch()
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
                        var link = result['items']['1']['link'];
                        console.log(result)
                    })
                    .catch(error => console.log('error', error))
            }
            gifysearch()
            function gifysearch() {
                var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + title + "&api_key=dc6zaTOxFJmzC&limit=10";
                $.ajax({
                    method: "GET",
                    url: queryURL,
                })
                    .then(function (response) {
                        for (var i = 0; i < 3; index++) {
                            var embedUrl = response['data'][i]['embed_url'];
                        }
                        console.log(response);
                    })
            }
        })
        .catch(error => console.log('error', error));
});

//this only when page load we need to run this by click event.
$(document).ready(function () {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "936158cc87mshd1a476eec07db95p17f6cbjsnea52f1179891");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch("https://billboard-api2.p.rapidapi.com/hot-100?date=2019-05-11&range=1-10&x-rapidapi-key=936158cc87mshd1a476eec07db95p17f6cbjsnea52f1179891", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console logging data and grabbing th artist and songs title form data and passing that data to other function.
            console.log(result);
            var title = result['content']['1']['title'];
            console.log(title);
            var artists = JSON.stringify(result['content']['1']['artist']);
            console.log(artists);
            //var artist = artists['0'];
            //comented out because I was trying to get out only one artist but it shows the first letter 
            console.log(artist);
            var weeks = result['content']['1']['weeks at no.1'];
            console.log("this song stay no.1 for " + weeks + ' weeks');
            //you can append this weeks and artist as a artist and song information
            youtubesearch()
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
                        var link = result['items']['1']['link'];
                        //document.getElementById('header').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='640' height='390' src=" + link + "frameborder='0' allowFullScreen></iframe>"
                        //just change the id and you willbe done and change width and height according to the size of appending div.
                        // and uncomment (comented out to run the function without any error)
                        // you need to put that link to dom element by creating source that can handle url and play.
                        console.log(result)
                    })
                    .catch(error => console.log('error', error))
            }
            gifysearch()
            function gifysearch() {
                var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + title + "&api_key=dc6zaTOxFJmzC&limit=10";
                $.ajax({
                    method: "GET",
                    url: queryURL,
                })
                    //forever loop to grab 4 gify images and append to the html
                    .then(function (response) {
                        for (var i = 0; i < 4; i++) {
                            var fig = document.createElement('figure');
                            var img = document.createElement('img');
                            var fc = document.createElement('figcaption');
                            var embedUrl = response['data'][i]['embed_url'];
                            img.src = embedUrl;
                            img.alt = response['data'][i]['title'];
                            fc.textContent = response['data'][i]['title'];
                            fig.appendChild(img);
                            fig.appendChild(fc);
                            var div = document.createElement('div');
                            div.append(fig);
                            //you need to append that div to the html element.
                        }
                        console.log(response);
                    })
            }
        })
        .catch(error => console.log('error', error));
});
//this is the expression for minutes you lived but need to grab that input value year month and day and subtract respectively with the curreent year month and day
//and parsefloat that value to chage to number and pass that value as year month and day
//   var year = parseFloat(yearvalue);
//   var month = parseFloat(monthvalue);
//   var day = parseFloat(dayvalue);
//   var monthsYouLived =(yer*12)+month;
//   var dayYouLived = (monthsYouLived * 30)+ day;
//   var minutesYouLived = (dayYouLived) * 24 * 60;
// comented out for now