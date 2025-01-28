
export default function Fruit({ name, price, color,soldout }) {
  return (
    <>
      <li> {name} {price} {color}{soldout?"Soldout":""}</li>
      
      </>
  );

}
