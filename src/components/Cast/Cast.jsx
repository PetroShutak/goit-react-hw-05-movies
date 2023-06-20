// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchMovieCredits } from 'utils/api';

// const Cast = () => {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     const fetchMovieData = async () => {
//       if (!movieId) return;

//       try {
//         const movieData = await fetchMovieCredits(movieId);
//         setCast(movieData.cast);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMovieData();
//   }, [movieId]);

//   return (
//     <div>
//       <h1>Cast</h1>
//       {cast.map((actor) => (
//         <div key={actor.id}>{actor.name}</div>
//       ))}
//     </div>
//   );
// };
 
// export default Cast;