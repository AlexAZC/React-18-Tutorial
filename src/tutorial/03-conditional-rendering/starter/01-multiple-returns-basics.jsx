import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading,setIsLoading] = useState(false)

  let conditional = (isLoading ? "W8 pls loading" : "Ready to work")
  return <h2>{conditional}</h2>;
};
export default MultipleReturnsBasics;
