'use client';

import Navigation from '@/ui/layout/navigation';
import ThemeSwitch from '@/ui/layout/theme-switch';
import UserInfo from '@/ui/layout/user-info';
import SignOut from '@/ui/layout/sign-out';
import CounselorStatus from '@/ui/layout/counselor-status';

// import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { theme, Button, Layout, Space } from 'antd';
// import { menuInfo } from '@/lib/constants';

const { Header, Content, Sider } = Layout;

const MainLayout = ({
  children,
  themeMode,
  role,
  user,
}: {
  children: React.ReactNode;
  themeMode: any;
  role: string;
  user: any;
}) => {
  const pathname = usePathname();
  const { token } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed} theme={themeMode}>
        <div style={{ height: token.Layout?.headerHeight }} className="logo">
          <Link href="/" scroll={false}>
            logo
          </Link>
          {/* <Image src="/next.svg" width={100} height={30} alt="test" /> */}
        </div>
        <Navigation theme={themeMode} role={role} />
      </Sider>
      {/* style={{ marginLeft: collapsed ? '8rem' : '20rem' }} */}
      <Layout className={clsx('container', themeMode)}>
        <Header>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="btn-collapse"
          />
          <Space align="center">
            {user.type !== 'SUPER' && <CounselorStatus status={user.status} />}
            <UserInfo user={user} />
            <ThemeSwitch theme={themeMode} />
            <SignOut />
          </Space>
        </Header>
        <Content>
          <div className="page-title">{pathname}</div>
          {/* <div className="page-title">{menuInfo[pathname].pageTitle}</div> */}
          {children}
        </Content>
      </Layout>
    </>
  );
};

export default MainLayout;
