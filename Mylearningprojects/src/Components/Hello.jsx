// function displayWow(){
//   return <h2>Wow</h2>;
// }

function Hello({person}) {
  // destructuring
  // const {name,message}=props;
  return <h1>{person.message}{person.name}{person.seatNumbers}</h1>;
}
export default Hello;
