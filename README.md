# react-manuscript

## 前提

  假设对javaScript CSS HTML有一定的了解。
  
  并且对babel也有一定的了解。

  对webpack、node、npm(yarn)等也有一些了解。

## 目录

* 基础知识

  * [初识React](./books/chapter01/01.md)

  * [React 特性](./books/chapter01/02.md)

  * [React Initial Project](./books/chapter01/03.md)

  * [生态组件](./books/chapter01/04.md)

* 组件生命周期
  
  * 装载

    * constructor()
    * static getDerivedStateFromProps()
    * render()
    * componentDidMount()

  * 更新

    * static getDerivedStateFromProps()
    * shouldComponentUpdate()
    * render()
    * getSnapshotBeforeUpdate()
    * componentDidUpdate()
  
  * 卸载

    * componentWillUnmount()

  * 异常处理
    
    * componentDidCatch()

* 组件其他方法

  * 其他API

    * setState()
    * forceUpdate()

  * 类属性

    * defaultProps
    * displayName

  * 实例属性 

    * props
    * state 

* state

  * [Component state](./books/chapter03/01.md)

  * [React-Redux](./books/chapter03/02.md)

  * [React-Router](./books/chapter03/03.md)

  * React-saga