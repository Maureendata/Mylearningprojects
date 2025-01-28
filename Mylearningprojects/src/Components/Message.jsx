// import Code from "./Code";
// import Learn from "./Learn";
function BtnEvent() {
  console.log("My button is being clicked");
}
export default function Message() {
  //   const display = true;
  //   const message=display ?  <Code/> :  <Learn/>
  //   return message;
  //   if (display) {
  //     return <Code/>;
  //   } else {
  //     return <Learn/>;
  //   }
  return (
    <div>
      <button onClick={BtnEvent}>Click here to get a message</button>
    </div>
  );
}
