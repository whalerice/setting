import { Badge, Select, Space, Typography } from 'antd';
import { useState } from 'react';
const { Text } = Typography;

function CounselorStatus({ status }: { status: string }) {
  const [value, setValue] = useState<string>(status);

  const onChange = (value: any) => {
    console.log(value);
  };

  return (
    <Select
      onChange={onChange}
      labelInValue
      defaultValue={value}
      style={{ width: 120 }}
      options={[
        {
          value: 'ACTIVE',
          label: (
            <Space>
              <Badge status="success" />
              <Text type="success">온라인</Text>
            </Space>
          ),
        },
        {
          value: 'OFFLINE',
          label: (
            <Space>
              <Badge status="error" />
              <Text type="danger">오프라인</Text>
            </Space>
          ),
        },
        {
          value: 'AWAY',
          label: (
            <Space>
              <Badge status="warning" />
              <Text type="warning">자리비움</Text>
            </Space>
          ),
        },
      ]}
    />
  );
}
export default CounselorStatus;
