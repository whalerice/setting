import { authenticate } from '@/lib/actions';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const { Text } = Typography;
export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const status = useFormStatus();
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);

  useEffect(() => {
    setClientReady(true);
  }, []);
  return (
    <>
      <Form form={form} name="login" onFinish={dispatch}>
        <Form.Item
          name="loginId"
          rules={[{ required: true, message: '아이디를 입력하세요.' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="ID" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력하세요.' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              size="large"
              block
              type="primary"
              htmlType="submit"
              loading={status.pending}
              disabled={
                !clientReady ||
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              로그인 {status.pending}
            </Button>
          )}
        </Form.Item>
      </Form>
      <div className="error-area">
        <Text type="danger">{errorMessage}</Text>
      </div>
    </>
  );
}
