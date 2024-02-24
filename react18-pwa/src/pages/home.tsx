import ThemeSwitch from '@/components/theme-switch';
import { apis } from '@/lib/apis';
import { useGenreQuery, useMoviesDataQuery } from '@/query/movie';
import { Tag, Button, Layout, Space, Typography } from 'antd';
import { Suspense, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
const { CheckableTag } = Tag;

function Home() {
  const [_, setCookie, removeCookie] = useCookies();
  const rootData = useRouteLoaderData('root');
  const { genre }: any = useLoaderData();
  const [isUser, setIsUser] = useState<boolean>(rootData ? true : false);

  const [selectedTags, setSelectedTags] = useState<string[]>(['']);

  const handleChange = (tag: string, checked: boolean) => {
    console.log(tag);
    console.log(checked);

    // const nextSelectedTags = checked
    //   ? [...selectedTags, tag]
    //   : selectedTags.filter((t) => t !== tag);
    // console.log('You are interested in: ', nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
  };

  const onGuest = async () => {
    console.log(isUser);
    if (!isUser) {
      const guest = await apis.auth.guest();
      if (guest.success) {
        setIsUser(true);
        setCookie('session', guest.guest_session_id);
      }
    }
    removeCookie('session');
    setIsUser(isUser ? false : true);
  };

  const moviesData = useMoviesDataQuery();
  console.log(moviesData[1].data);

  const getGenreName = (ids: any[]) => {
    const name = ids.map((e) => {
      return genre.filter((g: any) => e === g.id)[0];
    });
    return name;
  };

  return (
    <>
      <Layout>
        <Layout.Header>
          <ThemeSwitch />
          <Button onClick={onGuest}>
            {isUser ? '로그아웃' : '게스트 로그인'}
          </Button>
        </Layout.Header>
        <Layout.Content>
          <Suspense fallback={<>...Loading</>}>
            {genre?.map((e: any) => {
              return (
                <CheckableTag
                  key={e.id}
                  checked={selectedTags.includes(e.id)}
                  onChange={(checked) => handleChange(e, checked)}
                >
                  {e.name}
                </CheckableTag>
              );
            })}
          </Suspense>
          <br />
          <Typography.Title level={3}>Now Playing</Typography.Title>
          <Suspense fallback={<>...Loading</>}>
            {moviesData[0].data?.results?.map((e: any) => {
              return (
                <div key={e.id}>
                  <img
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${e.poster_path}`}
                    alt={e.original_title}
                    width={100}
                  />
                  {e.title} - 장르 :{' '}
                  <Space>
                    {getGenreName(e.genre_ids).map((genre: any) => {
                      return <span key={genre.id}>{genre.name},</span>;
                    })}
                  </Space>
                  {e.adult}
                  {/* {e.poster_path} */}
                </div>
              );
            })}
          </Suspense>
          <br />
          <Typography.Title level={3}>Popular</Typography.Title>
          <Suspense fallback={<>...Loading</>}>
            {moviesData[1].data?.results?.map((e: any) => {
              return (
                <div key={e.id}>
                  <img
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${e.poster_path}`}
                    alt={e.original_title}
                    width={100}
                  />
                  {e.title} - 장르 :{' '}
                  <Space>
                    {getGenreName(e.genre_ids).map((genre: any) => {
                      return <span key={genre.id}>{genre.name},</span>;
                    })}
                  </Space>
                  {e.adult}
                  {/* {e.poster_path} */}
                </div>
              );
            })}
          </Suspense>
        </Layout.Content>
      </Layout>
    </>
  );
}

export default Home;
