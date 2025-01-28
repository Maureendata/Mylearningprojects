<<<<<<< HEAD
export default function Fruit({ name, price }) {
  return (
    <li>
      {name}
      {price}
    </li>
  );
=======
export default function Fruit({ name, price, color,soldout }) {
  return (
    <>
      <li> {name} {price} {color}{soldout?"Soldout":""}</li>
      
      </>
  );

>>>>>>> 07140931c97b8ebf92e3b9d0d4bb27fa506c240e
}
