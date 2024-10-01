import useNowPlayingMovies from '../customHooks/useNowPlayingMovies copy';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        MainContainer
        - VideoBackground
        - VideoTitle
        SecondaryContainer
        - MovieList * n
        - cards * n
       */}
    </div>
  )
}

export default Browse;
