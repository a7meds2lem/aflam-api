var myHttp = new XMLHttpRequest();
var theMovies = [];
var api = [
    `https://api.themoviedb.org/3/movie/now_playing?api_key=ffc4bef798e3632bbb516fb3d3d0c3b2&language=en-US&page=1`,
    `https://api.themoviedb.org/3/movie/popular?api_key=ffc4bef798e3632bbb516fb3d3d0c3b2&language=en-US&page=1`,
    `https://api.themoviedb.org/3/movie/top_rated?api_key=ffc4bef798e3632bbb516fb3d3d0c3b2&language=en-US&page=1`,
    `https://api.themoviedb.org/3/trending/all/day?api_key=ffc4bef798e3632bbb516fb3d3d0c3b2`,
    `https://api.themoviedb.org/3/movie/upcoming?api_key=ffc4bef798e3632bbb516fb3d3d0c3b2&language=en-US&page=1`,
];
// // *****************************************************************
{
// {// for(var i=0 ; i<api.length ; i++){
// //     $('.list li').eq[i].click()
// // }

// // if(  myHttp.open('GET',api[0]) = false){
// //     myHttp.open('GET',api[0]);
// //     display()
// // }
// // else{
// // var i=0;
// // display();
// // $('.list li').eq(0).click(function(){
// //     alert('............')
// // })

// // $('.list li').click(function(){
// //     for(var i=0 ; i<api.length ; i++){
// //         $('.list li').eq(i).click(function(){
// //             myHttp.open('GET',api[i]);
// //             alert()
// //         })
// //     }
// // })
// // for(var i=0 ; i<4 ; i++){
// //     // $('.list li').eq(i).addClass(api[i])
// //     $('.in li').eq(i).click(function(){
// //         myHttp.open('GET',api[i]);
// //         display(theMovies);
// //         console.log(i)
// //     })
// // }
// // $('.list a').eq(i).click(function(){
// //     alert(i)
// // })

// // for(var i=0 ; i<api.length ; i++){

// //         // myHttp.open('GET',api[i]);
// //         // display(theMovies)
// // }

// // $('.list li').click(function(){
// //   let classe= $(this).class();
// //   alert(classe)
// // })
// // for(var x=0 ; x<3 ; x++){
// }

}
// **************************************************************************
myHttp.open("GET", api[0]);
display(theMovies);

$(".list .item1").click(function () {
    myHttp.open("GET", api[0]);
    display(theMovies);
});
$(".list .item2").click(function () {
    myHttp.open("GET", api[1]);
    display(theMovies);
});
$(".list .item3").click(function () {
    myHttp.open("GET", api[2]);
    display(theMovies);
});
$(".list .item4").click(function () {
    myHttp.open("GET", api[3]);
    display(theMovies);
});
$(".list .item5").click(function () {
    myHttp.open("GET", api[4]);
    display(theMovies);
});

function display() {
    // myHttp.open('GET',api[0]);
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4) {
            theMovies = JSON.parse(myHttp.response).results;
            // console.log(typeof(theMovies));
            // console.log( 'the movies' + theMovies);
            displayMovies(theMovies);
        }
    });
}
// ************************************************************
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
{// {// async function getType(type){
// //     var response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=ffc4bef798e3632bbb516fb3d3d0c3b2&language=en-US&page=1`)
// //    var finalResult = await response.json();
// //    theMovies = finalResult.results
// //    console.log(theMovies)
// //    displayMovies(theMovies)
// // }

// //  ( async function(){
// //    await getType('now_playing')
// //  }
// //  )();

// //  var liList=['now_playing','popular','top_rated','trending','upcoming']

// // var li1 =document.getElementsByClassName('item1');
// // for(var i=0 ; i<liList.length ; i++){
// //     $('.in li').eq(i).text(liList[i])

// // }
// // $('.in li').eq(0).click(
// //   $('.in li').eq(0).text()
// // )}
}
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

function displayMovies(list) {
    box = ``;
    for (var i = 0; i < list.length; i++) {
        box += `  
          <div class="col-md-4 m-auto mt-5">
                            <div class="parent">
                        <img class="w-100 img-fluid rounded" src='https://image.tmdb.org/t/p/w500${list[i].poster_path}' alt="" srcset="">
                         <div class="layer w-100 h-100">
                    <div class="caption">
                    <h2>${list[i].title}</h2>
                 <div class="overView">   <p >${list[i].overview}</p></div>
                    <h3>Rate : ${list[i].vote_average}</h3>
                    <h3>${list[i].release_date}</h3>
                    </div>
                                </div>
                                </div>
                                    </div>
          `;
        // console.log('here')
    }
    document.getElementById("mainRow").innerHTML = box;
}

function searchFilm(searchTerm) {
    // console.log(searchTerm);
    var searchResult = [];
    for (var i = 0; i < theMovies.length; i++) {
        if (theMovies[i].title.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
            console.log(theMovies[i].title)
            searchResult.push(theMovies[i]);

        }
    }
    displayMovies(searchResult)
    //  console.log(searchResult)
}
{
// for (var i = 0; i < api.length; i++) {
//     myHttp.open("GET", api[i]);

// async function getType(type){
//     // var movieSearch=[]
//         var response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=ffc4bef798e3632bbb516fb3d3d0c3b2&language=en-US&page=1`)
//        var finalResult = await response.json();
//       var movieSearch =Array.from(finalResult.results)
//        console.log( movieSearch)
//     }

    // (async function(){
    //     await getType('trending')
    // })()
    // sleep()
    //  async function sleep(){
    //     for(var i=0 ;i<liList.length ; i++){
    //    await getType(`${liList[i]}`)
    //    console.log('hello.................  ')
    // }
    //  }
}
    
     var liList=['now_playing','popular','top_rated','trending','upcoming']


{// function searchAll(text) {
//         console.log(text)

//         for (var i = 0; i < movieSearch.length; i++) {
//             if (movieSearch[i].title.toLowerCase().includes(searchTerm.toLowerCase()) == true) {

//                 console.log(movieSearch[i].title)
//             }
//         }
//     }

// searchAll('m')
// searchFilm("e");

// // var searchResult = [];

// console.log('o')
//    searchResult.push(theMovies);
//    console.log(searchResult);
//    displayMovies(searchResult);
}


$(".side .nav .icon i").click(function () {
    let currentWidth = $(".list").outerWidth();
    console.log(currentWidth)
    if ($(".side").css("left") != "0px")
    {
        $(".side").animate({ left: "0px" }, 1000);
        $('.icon i').removeClass(' fa-arrow-right-arrow-left')
        $('.icon i').addClass('fa-xmark');
    }
    else {
        $(".side").animate({ left: -currentWidth }, 1000);
        $('.icon i').removeClass('fa-xmark')
        $('.icon i').addClass(' fa-arrow-right-arrow-left');
    }
});


