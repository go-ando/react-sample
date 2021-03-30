import fruits from "../data.json";
export const List = () => {
  const fruitList = fruits;
  return (
    <ul>
      {fruitList.map((fruit) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
};
