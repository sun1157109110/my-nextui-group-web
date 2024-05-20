"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(99);
  }, []);

 
  console.log(count, "@");

  return (
    <Button
      radius="full"
      className="shrink-0"
      onPress={() => setCount(count + 1)}
    >
      Count is {count}
    </Button>
  );
};
