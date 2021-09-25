const APIURL =
    // "https://imdb-api.com/en/API/Top250Movies/k_mgn5sdzj";
    "https://imdb-api.com/en/API/Top250Movies/k_sptjjxpn";

    // initially get fav movies
    getTopMovies(APIURL);
    getPopularMovies(APIURL);
    getsuggested(APIURL);
    getRecommended(APIURL);
// ******************************Top Picks For You*****************************************************
async function getTopMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

//  console.log(respData.items);}

showTopMovies(respData.items.slice(0,4));
}
  
function showTopMovies(movies) {

  movies.forEach((movie) => {
      const { fullTitle , title , year , image , imDbRating } = movie;


      //console.log(`LE FILM EST : ${title} ${imDbRating}`); 
      $("#listefilm").append(`<!-- slide item 1 -->
      <li class="slide-item">
        <div class="block-images position-relative">
          <div class="img-box">
            <img src="${image}" class="img-fluid" alt="" />
          </div>
          <div class="block-description">
            <h6 class="iq-title">
              <a href="#"> ${title} </a>
            </h6>
            <div class="movie-time d-flex align-items-center my-2">
              <div class="badge badge-secondary p-1 mr-2">${imDbRating}</div>
              <span class="text-white"> ${year}</span>
            </div>
            <div class="hover-buttons">
              <span class="btn btn-hover iq-button">
                <i class="fa fa-play mr-1"></i>
                Play Now
              </span>
            </div>
          </div>
         
        </div>
      </li>`)


  });
      
}
// ******************************Popular Movies*********************************************************
async function getPopularMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

//  console.log(respData.items);}

showPopularMovies(respData.items.slice(5,9));
}
  
function showPopularMovies(movies) {

  movies.forEach((movie) => {
      const { fullTitle , title , year , image , imDbRating } = movie;

      $("#listePopularMovies").append(`<!-- slide item 1 -->
      <li class="slide-item">
        <div class="block-images position-relative">
          <div class="img-box">
            <img src="${image}" class="img-fluid" alt="" />
          </div>
          <div class="block-description">
            <h6 class="iq-title">
              <a href="#"> ${title} </a>
            </h6>
            <div class="movie-time d-flex align-items-center my-2">
              <div class="badge badge-secondary p-1 mr-2">${imDbRating}</div>
              <span class="text-white">${year}</span>
            </div>
            <div class="hover-buttons">
              <span class="btn btn-hover iq-button">
                <i class="fa fa-play mr-1"></i>
                Play Now
              </span>
            </div>
          </div>
        </div>
      </li>`)


  });
      
}
// ******************************Suggested Sports*********************************************************
async function getsuggested(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

//  console.log(respData.items);}

showsuggested(respData.items.slice(10,14));
}
  
function showsuggested(movies) {

  movies.forEach((movie) => {
      const { fullTitle , title , year , image , imDbRating } = movie;

      $("#listsuggested").append(`<li class="slide-item">
      <div class="block-images position-relative">
        <div class="img-box">
          <img src="${image}" class="img-fluid" alt="" />
        </div>
        <div class="block-description">
          <h6 class="iq-title">
            <a href="#"> ${title} </a>
          </h6>
          <div class="movie-time d-flex align-items-center my-2">
            <div class="badge badge-secondary p-1 mr-2">${imDbRating}</div>
            <span class="text-white">${year}</span>
          </div>
          <div class="hover-buttons">
            <span class="btn btn-hover iq-button">
              <i class="fa fa-play mr-1"></i>
              Play Now
            </span>
          </div>
        </div>
        `)


  });
      
}
// ******************************Recommended For You*********************************************************
async function getRecommended(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

//  console.log(respData.items);}

showRecommended(respData.items.slice(20,24));
}
    
function showRecommended(movies) {

  movies.forEach((movie) => {
      const { fullTitle , title , year , image , imDbRating } = movie;

      $("#listeRecommended").append(`<li class="slide-item">
      <div class="block-images position-relative">
        <div class="img-box">
          <img src="${image}" class="img-fluid" alt="" />
        </div>
        <div class="block-description">
          <h6 class="iq-title">
            <a href="#">The Martian</a>
          </h6>
          <div class="movie-time d-flex align-items-center my-2">
            <div class="badge badge-secondary p-1 mr-2">${imDbRating}</div>
            <span class="text-white">${year}</span>
          </div>
          <div class="hover-buttons">
            <span class="btn btn-hover iq-button">
              <i class="fa fa-play mr-1"></i>
              Play Now
            </span>
          </div>
        </div>
      </div>
    </li>`)


  });
      
}




