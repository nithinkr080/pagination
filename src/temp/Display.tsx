import { useEffect, useState } from "react";
import Pagination from "../Pagination";

interface MyObject {
  id: number;
  name: string;
  description: string;
}

const arrayOfObjects: MyObject[] = [];
const itemsPerPage = 10;
for (let i = 0; i < 100; i++) {
  const obj = {
    id: i + 1,
    name: `Object ${i + 1}`,
    description: `This is object number ${i + 1}`,
  };
  arrayOfObjects.push(obj);
}

const totalItems = arrayOfObjects?.length;

function Display() {
  const [finalArray, setFinalArray] = useState<MyObject[]>([]);

  const onPageChange = (pageNumber: number) => {
    const element = itemsPerPage * (pageNumber - 1);
    const temp = [];
    for (let i = element; i < element + itemsPerPage; i++) {
      temp.push(arrayOfObjects[i]);
    }

    setFinalArray(temp);
  };

  useEffect(() => {
    onPageChange(1);
  }, []);

  return (
    <>
      {finalArray?.map((ob) => (
        <h1 key={ob.id}>{ob?.name}</h1>
      ))}
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
        themeColor="#330963"
        breakLabel="..."
      />
    </>
  );
}

export default Display;
