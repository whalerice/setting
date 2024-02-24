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

const prefix: string = 'qt';
const px2rem = px2remTransformer({
  rootValue: 10, // 10px = 1rem;
});
function RootLayout({ children }: { children: React.ReactNode }) {
  const [cookies] = useCookies(['theme-mode', 'session']);

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
