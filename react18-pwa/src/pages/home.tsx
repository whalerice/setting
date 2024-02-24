import ThemeSwitch from '@/components/theme-switch';
import { apis } from '@/lib/apis';
import { queryClient } from '@/lib/query-client';
import { useGenreQuery, useMoviesDataQuery } from '@/query/movie';
import {
  useIsFetching,
  useMutation,
  useMutationState,
  useQueries,
  useQuery,
} from '@tanstack/react-query';
// import { apis } from '@/lib/apis';
import { Button, Layout, Typography } from 'antd';
import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const genreMovieList = useGenreQuery();
  const moviesData = useMoviesDataQuery();

  console.log(genreMovieList.isSuccess);
  console.log(moviesData[0].data);
  console.log(moviesData[1].data);

  useState(() => {});

  return (
    <>
      <Layout>
        <Layout.Header>
          <ThemeSwitch />
        </Layout.Header>
        <Layout.Content>
          <Link to={`/chat/${uuidv4()}`}>Go Chat</Link>
          <h1>Home</h1>
          <Suspense fallback={<>...Loading</>}>
            {/* {genreMovieList?.data?.map((e: any) => {
              // onClick={() => onClick(e.id)}
              return <Button key={e.id}>{e.name}</Button>;
            })} */}
          </Suspense>
          <br />
          <Typography.Title level={3}>Now Playing</Typography.Title>
          <Suspense fallback={<>...Loading</>}>
            {/* {nowPlaying.data.results?.map((e: any) => {
              return <div>{e.title}</div>;
            })} */}
          </Suspense>
          <br />
          <Typography.Title level={3}>Popular</Typography.Title>
          <Suspense fallback={<>...Loading</>}>
            {/* {popular.data.results?.map((e: any) => {
              return <div>{e.title}</div>;
            })} */}
          </Suspense>
        </Layout.Content>
      </Layout>
    </>
  );
}

export default Home;
