import React from 'react';
import { Menu } from 'antd';
import { push } from 'react-router-redux';

export default ({ dispatch }) => {

  return (
    <Menu theme={'dark'}
      style={{ width: 256 }}
      mode="inline"
      defaultOpenKeys={['sub1']}
      defaultSelectedKeys={['01']}
      onClick={({ key }) => {
        dispatch(push(`/${key}`));
      }}>
      <Menu.SubMenu title={'基础知识'} key='sub1'>
        <Menu.Item key="01-01-01">初识React</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title={'生命周期'} key='sub2'>
        <Menu.Item key="02-01-01">组件装载</Menu.Item>
        <Menu.Item key="02-04-01">组件异常</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title={'state'} key='sub3'>
        <Menu.Item key="03-01-01" >Component state - Timer</Menu.Item>
        <Menu.Item key="03-01-02" >Component state - SetState</Menu.Item>
        <Menu.Item key="03-01-03" >Component state - SetStateCtrl</Menu.Item>
        <Menu.Item key="03-01-04" >Redux - Counter</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title={'一些高级用法'} key='sub5'>
        <Menu.Item key="05-02-01" >Synthetic and Dom event</Menu.Item>
        <Menu.Item key="05-03-01" >Refs and Dom</Menu.Item>
        <Menu.Item key="05-03-02" >Refs Callback</Menu.Item>
        <Menu.Item key="05-04-01" >Fragment</Menu.Item>
        <Menu.Item key="05-05-01" >Context</Menu.Item>
        <Menu.Item key="05-06-01" >HOC Multiplex</Menu.Item>
        <Menu.Item key="05-06-02" >HOC Inheritance Inversion</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title={'React 实例'} key='sub6'>
        <Menu.Item key="06-01-01" >List</Menu.Item>
        <Menu.Item key="06-01-02" >Form</Menu.Item>
        <Menu.Item key="06-01-03" >Form高级</Menu.Item>
        <Menu.Item key="06-01-04" >Tooltip</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}