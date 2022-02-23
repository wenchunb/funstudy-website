import React, { memo } from 'react';

import { Tabs } from 'antd';

import {DataWrapper} from './style';
// import PDF from 'react-pdf-js'
export default memo(function Data() {
  
  const { TabPane } = Tabs;
  const changeTab = (key) => {
    console.log(key)
  }
  
  return (
    <DataWrapper>
      <Tabs defaultActiveKey="1" onChange={changeTab}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </DataWrapper>
  );
});
