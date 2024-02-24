import { useEffect, useState } from 'react';
import { Button, Switch } from 'antd';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
// import { changeTheme } from '@/lib/actions';
import { setCookie } from 'cookies-next';
import { CustomIcons } from '@/lib/icons';

type themeType = {
  [key: string]: React.ReactNode;
};
const themeKey: themeType = {
  dark: <CustomIcons name="moon" />,
  light: <CustomIcons name="" />,
};

const ThemeSwitch = ({ theme }: any) => {
  const onClick = () => {
    setCookie('theme-mode', theme === 'dark' ? 'light' : 'dark');
    location.reload();
  };

  return (
    <>
      <Button
        onClick={onClick}
        icon={<CustomIcons name={theme} />}
        shape="circle"
      />
    </>
  );
};

export default ThemeSwitch;
