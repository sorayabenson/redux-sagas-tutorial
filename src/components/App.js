import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users'

// function* testing() {
//   while(true){
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// }


function App(props) {
  // const iterator = testing();
  // console.log(iterator.next())
  // console.log(iterator.next())
  // console.log(iterator.next())
  // console.log(iterator.next())

  props.getUsersRequest();

  return (
    <div className="App">
      <h1>oh hey cutie</h1>
    </div>
  );
}

export default connect(null, {
  // map dispatch to props
  getUsersRequest
})(App);
