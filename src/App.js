import React from 'react'


// class组件
// class App extends React.PureComponent {
//   constructor(props) {
//     super(props)
//     this.state = {
//       n: 1
//     }
//   }
//   onClick = () => {//不能写成onClick(){},因为这样写this指向window
//     this.setState((state) => ({
//       n: state.n + 1
//     })
//     )
//   }
//   render() {
//     console.log('render了一次');
//     return (
//       <div>App
//         <div>
//           {this.state.n}
//           <button onClick={this.onClick}>+1</button>
//         </div>
//       </div>
//     )
//   }
// }

// 函数组件,消除了this
const App = (props) => {
  const [n, setN] = React.useState(0)
  const onClick = () => {
    setN(n + 1)
  }
  return (
    <div>{n}
      <button onClick={onClick}>+1</button></div>
  )
}
export default App
