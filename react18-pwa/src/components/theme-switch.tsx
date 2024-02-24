import { useEffect, useState } from 'react';
import { Button } from 'antd';

import { CustomIcons } from '@/lib/icons';
import { useCookies } from 'react-cookie';

const ThemeSwitch = () => {
  const [cookies, setCookie] = useCookies(['theme-mode']);

  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    setTheme(cookies['theme-mode']);
  });

  const onClick = () => {
    const value = theme === 'dark' ? 'light' : 'dark';
    setTheme(value);
    setCookie('theme-mode', value);
    document.body.classList.remove(`${theme}-mode`);
    document.body.classList.add(`${value}-mode`);
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
