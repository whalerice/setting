import { ConfigProvider } from 'antd';
import {
  legacyLogicalPropertiesTransformer,
  px2remTransformer,
  StyleProvider,
} from '@ant-design/cssinjs';
import { themeAntModes, themeConfig } from '@/lib/theme-config';
import ko from 'antd/locale/ko_KR';

import { useCookies } from 'react-cookie';
import '@/scss/index.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const prefix: string = 'qt';
const px2rem = px2remTransformer({
  rootValue: 10, // 10px = 1rem;
});
function RootLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const { pathname } = location;
  const [cookies, setCookie] = useCookies(['theme-mode', 'user']);

  useEffect(() => {
    if (!cookies['theme-mode']) {
      setCookie('theme-mode', 'light');
      document.body.classList.add(`light-mode`);
    }

    if (cookies['user'] && pathname === '/login') {
      navigate('/');
    } else if (!cookies['user'] && pathname !== '/login') {
      navigate('/login');
    }
  }, [cookies['user']]);

  return (
    <StyleProvider
      transformers={[legacyLogicalPropertiesTransformer, px2rem]}
      hashPriority="high"
      autoClear
    >
      <ConfigProvider
        theme={{
          algorithm: themeAntModes[cookies['theme-mode']],
          ...themeConfig,
        }}
        prefixCls={prefix}
        iconPrefixCls={prefix}
        locale={ko}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
}
export default RootLayout;
