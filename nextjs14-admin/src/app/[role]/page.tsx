'use client';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Input, Select, Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;

export default function Page() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Avatar size={64} icon={<UserOutlined />} />
      <Title>대시보드</Title>
      <Input placeholder="test" />
      <p>test</p>
      <Text>Ant Design (default)</Text>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam
        iste, rem aut dicta a eveniet fugit, quaerat itaque beatae quidem, quo
        numquam consequuntur tenetur vel deserunt ipsam nulla ut!
      </Paragraph>
      <Button type="primary">Primary Button</Button>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
    </>
  );
}
