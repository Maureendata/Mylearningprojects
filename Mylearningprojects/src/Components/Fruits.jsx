import Fruit from "./Components/Fruit";
export default function Fruits() {
  const fruits = [
    { Name: "Apple", Color: "red", Price: 2 ,Soldout:false},
    { Name: "Orange", Color: "orange", Price: 20,Soldout:true },
    { Name: "Pineapple", Color: "yellow", Price: 30,Soldout:false }

  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.Name}
            name={fruit.Name}
            color={fruit.Color}
            price={fruit.Price}
            soldout={fruit.Soldout}
          />

        ))}
      </ul>
    </div>
  );
}
