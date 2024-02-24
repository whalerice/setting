'use client';

import '@/styles/login.scss';
import { Card, Layout } from 'antd';

import LoginForm from '@/ui/login-form';

export default function Page() {
  return (
    <Layout className="login-area">
      <Card title="Login" className="login-card">
        <LoginForm />
      </Card>
    </Layout>
  );
}
