<<<<<<< HEAD

import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 100 },
    { name: "Pineapple", price: 200 },
    { name: "Mango", price: 600 },
=======
import Fruit from "./Fruit";
export default function Fruits() {
  const fruits = [
    { Name: "Apple", Color: "red", Price: 2 ,Soldout:false},
    { Name: "Orange", Color: "orange", Price: 20,Soldout:true },
    { Name: "Pineapple", Color: "yellow", Price: 30,Soldout:false },
>>>>>>> 07140931c97b8ebf92e3b9d0d4bb27fa506c240e
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
<<<<<<< HEAD
          <Fruit key={fruit.name} name={fruit.name}  price={fruit.price}/>
=======
          <Fruit
            key={fruit.Name}
            name={fruit.Name}
            color={fruit.Color}
            price={fruit.Price}
            soldout={fruit.Soldout}
          />
>>>>>>> 07140931c97b8ebf92e3b9d0d4bb27fa506c240e
        ))}
      </ul>
    </div>
  );
}
