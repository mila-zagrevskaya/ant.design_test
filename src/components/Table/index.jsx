import React from 'react';

import { Table } from 'antd';

import { HEAD_OF_TABLE } from 'constants/tableColumns';

export const Tables = () => {
  const dataTable = [];
  for (let i = 0; i < 100; i++) {
    dataTable.push({
      key: i,
      name: 'John Brown',
      age: i + 1,
      street: 'Lake Park',
      building: 'C',
      number: 2035,
      companyAddress: 'Lake Street 42',
      companyName: 'SoftLake Co',
      gender: 'M',
    });
  }

  return (
    <div className="section-container">
      <h2 className="title-2">Table</h2>
      <Table
        columns={HEAD_OF_TABLE}
        dataSource={dataTable.length ? dataTable : null}
        bordered
        size="middle"
        scroll={{ x: 'calc(700px + 50%)', y: 440 }}
      />
    </div>
  );
};
