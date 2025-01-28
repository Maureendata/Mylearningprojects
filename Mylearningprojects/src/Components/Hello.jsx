// function displayWow(){
//   return <h2>Wow</h2>;
// }
<<<<<<< HEAD
function Hello({person}) {
  //   return <h1>Hello React.This is the first app {name}</h1>;
  // return <h1>This is my first component message {displayMessage()}</h1>;
  return (<h1>{person.message} {person.name}{person.numbers}</h1>);
=======

function Hello({person}) {
  // destructuring
  // const {name,message}=props;
  return <h1>{person.message}{person.name}{person.seatNumbers}</h1>;
>>>>>>> 07140931c97b8ebf92e3b9d0d4bb27fa506c240e
}
export default Hello;
