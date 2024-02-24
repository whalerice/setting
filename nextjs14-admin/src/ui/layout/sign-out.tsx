import { onSignOut } from '@/lib/actions';
import { Button } from 'antd';

export default function SignOut() {
  return <Button onClick={() => onSignOut()}>로그아웃</Button>;
}
