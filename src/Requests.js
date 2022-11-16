const key = "bf06ec49b7f9c8f88c0667644fe7a97b";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/550?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/movie/550?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/550?api_key=${key}&language=en-US&page=1`,
};

export default requests