import React from 'react';
import { Menu } from 'antd';
import {push} from 'react-router-redux';
import {setPath} from '../actions/MeunAction';

export default ({dispatch}) => {

  return(
    <Menu theme={'dark'}
                style={{ width: 256 }}
                mode="inline"
                defaultOpenKeys={['sub1']}
                defaultSelectedKeys={['01']}
                onClick={({key}) => {
                  dispatch(setPath({path: `/${key}`}))
                  dispatch(push(`/${key}`));
                }}>
                <Menu.SubMenu title={'基础知识'} key='sub1'>
                  <Menu.Item key="01-01-01">初识React</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu title={'state'} key='sub2'>
                  <Menu.Item key="02-01-01" >Component state - Timer</Menu.Item>
                  <Menu.Item key="02-01-02" >Component state - SetState</Menu.Item>
                  <Menu.Item key="02-01-03" >Component state - SetStateCtrl</Menu.Item>
                  <Menu.Item key="02-01-04" >Redux - Counter</Menu.Item>
                </Menu.SubMenu>
              </Menu>
  );
}