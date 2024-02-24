import LoginForm from '@/components/login-form';

import { Card, Layout } from 'antd';
import '@/scss/login.scss';
import { apis } from '@/lib/apis';
import { useEffect } from 'react';

const test = async () => {
  try {
    const res = await apis.app.health();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

function Login() {
  useEffect(() => {
    test();
  });

  return (
    <Layout className="login-area">
      <Card title="Login" className="login-card">
        <LoginForm />
      </Card>
    </Layout>
  );
}

export default Login;
