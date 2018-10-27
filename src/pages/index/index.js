import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import A from '../../components/A/A'
import B from '../../components/B/B'

import './index.scss'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    add: dispatch.counter.add,
    minus: dispatch.counter.minus,
    asyncAdd: dispatch.counter.asyncAdd
  }
}
@connect(mapStateToProps, mapDispatchToProps)

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    x: [1, 2]
  }

  componentWillMount () {
    console.log('page willmount')
    setTimeout(() => {
      this.setState({
        x: [3, 4]
      })
    }, 2000);

  }

  componentDidMount () {
    console.log('page didmount')
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goto = () => {
    Taro.navigateTo({
      url: '/pages/index2/index?sd=1'
    })
  }

  render () {
    const { add, minus, asyncAdd, counter } = this.props
    return (
      <View className='index'>
        <Button className='add_btn' onClick={add}>+</Button>
        <Button className='dec_btn' onClick={minus}>-</Button>
        <Button className='dec_btn' onClick={asyncAdd}>async</Button>
        <View>{counter.num}</View>
        {this.state.x.map((item, index) => <A key={index} t={item} onClick={this.goto} />)}
        <B onClick={this.goto} />
        <B onClick={this.goto} />
        <Button onClick={this.goto}>走你</Button>
      </View>
    )
  }
}
