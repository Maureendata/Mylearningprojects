
import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 100 },
    { name: "Pineapple", price: 200 },
    { name: "Mango", price: 600 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name}  price={fruit.price}/>
        ))}
      </ul>
    </div>
  );
}
