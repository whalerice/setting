import ThemeSwitch from '@/components/theme-switch';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Home() {
  return (
    <>
      <Layout>
        <Layout.Header>
          <ThemeSwitch />
        </Layout.Header>
        <Layout.Content>
          <Link to={`/chat/${uuidv4()}`}>Go Chat</Link>
          <h1>Home</h1>
        </Layout.Content>
      </Layout>
    </>
  );
}

export default Home;
