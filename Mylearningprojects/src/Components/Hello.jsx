// const name = "Rob";
// function displayMessage() {
//   return "Hello " + name + ".This is the react app";
// }
function Hello({message,name}) {
  //   return <h1>Hello React.This is the first app {name}</h1>;
  // return <h1>This is my first component message {displayMessage()}</h1>;
  return (<h1>{message} {name}</h1>);
}
export default Hello;
