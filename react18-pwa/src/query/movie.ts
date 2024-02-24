import { apis } from '@/lib/apis';
import { useQueries, useQuery } from '@tanstack/react-query';

export const useGenreQuery = () => {
  return useQuery({
    queryKey: ['genreMovieList'],
    queryFn: async () => await apis.genre.movieList(),
    retry: 1, //에러시 몇시시도할것인지?
    gcTime: 5000, //5초주기로 캐시가 비워짐(gcTime은 v5에서만 사용. 하위버전은 cacheTime이라고함)
    staleTime: 10000, //staleTime이 아무리 길어도 캐시가 비워지면 다시호출(staleTime < gcTime)캐시가더오래살아있어야의미가있다.
    // refetchInterval:3000, api를 3000초마다 호출
    // refetchOnMount:false 컴포넌트 들어갈때마다(true) api부를건지 한번만부를건지(false) 기본값은 true
    // refetchOnWindowFocus:true window에 포커스시 api호출(유저는 항상 fresh한 데이터를 볼수있음)
    // enabled: false //처음부터 api호출 못하게함(false) 사용예)키워드검색시 data api호출(true,false고정이아니라 다양한조건을 넣어줄수있다.)기본값은 true
  });
};

export const useMoviesDataQuery = () => {
  return useQueries({
    queries: [
      {
        queryKey: ['nowPlaying'],
        queryFn: async () => await apis.movie.nowPlaying(),
      },
      {
        queryKey: ['popular'],
        queryFn: async () => await apis.movie.popular(),
      },
    ],
  });
};
// export const moviesData = useQueries({
//   queries: [
//     {
//       queryKey: ['nowPlaying'],
//       queryFn: async () => await apis.movie.nowPlaying(),
//     },
//     {
//       queryKey: ['popular'],
//       queryFn: async () => await apis.movie.popular(),
//     },
//   ],
// });
