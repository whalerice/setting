import { apis } from '@/lib/apis';
import { Button } from 'antd';
import { useCookies } from 'react-cookie';

export default function Logout() {
  const [cookies, removeCookie] = useCookies(['user']);

  const onLogout = async () => {
    await apis.user.logout({ user: { id: cookies.user.id } });
    removeCookie('user', null);
  };
  return <Button onClick={onLogout}>로그아웃</Button>;
}
