'use client';

import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

export async function fetchData() {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const data: DataType[] = [];
    for (let i = 0; i < 20; i++) {
      const el: DataType = {
        key: i,
        name: Math.random().toString(36).substr(2, 11),
        age: Math.floor(Math.random() * 100),
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      };
      data.push(el);
    }
    return {
      data,
    };
  } catch (error) {
    throw error;
  }
}

export default async function DataTable() {
  const { data } = await fetchData();

  return <Table columns={columns} dataSource={data} />;
}
