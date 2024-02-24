'use client';

import { Card, Col, Row, Skeleton, Table } from 'antd';
import type { TableProps } from 'antd';

export function CardSkeleton() {
  return (
    <Card cover={<Skeleton.Image active />}>
      <Skeleton active />
    </Card>
  );
}

export function TicketListSkeleton() {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < 19; i++) {
      const key = i;
      result.push(key);
    }
    return result;
  };
  return (
    <Row gutter={[16, 16]}>
      {rendering().map((key) => {
        return (
          <Col key={key} xs={24} sm={12} md={8} lg={6} xxl={4}>
            <CardSkeleton />
          </Col>
        );
      })}
    </Row>
  );
}

// interface DataType {
//   key: number;
//   name: string;
// }

export function DataTableSkeleton() {
  const columns: TableProps<any>['columns'] = [
    {
      title: (
        <Skeleton
          active
          paragraph={false}
          title={{ width: Math.floor(Math.random() * 100) }}
        />
      ),
      render: () => (
        <Skeleton
          active
          paragraph={{ rows: 1, width: Math.floor(Math.random() * 100) }}
          title={false}
        />
      ),
    },
    {
      title: (
        <Skeleton
          active
          paragraph={false}
          title={{ width: Math.floor(Math.random() * 100) }}
        />
      ),
      render: () => (
        <Skeleton
          active
          paragraph={{ rows: 1, width: Math.floor(Math.random() * 100) }}
          title={false}
        />
      ),
    },
  ];

  const data: any[] = [
    {
      key: 1,
      name: 'xx',
      age: 'd',
    },
  ];
  return <Table columns={columns} dataSource={data} />;
}
