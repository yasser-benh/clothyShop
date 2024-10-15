import { useEffect, useReducer } from "react";
import ProductsDetails from "./productsDetails";
export default function Products({type}) {
    
    
  const initialState = {
    allProducts: [],
    status: "null",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "getAllProducts":
        return { allProducts: action.payload, status: "FullFeild" };
      default:
        return;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log (data)
      dispatch({ type: "getAllProducts", payload:data });
    }
    fetchData();
  }, []);
 
  return (<>
            
    {type == 'all' ? (
      <>
        {state.allProducts.map((Product) => (
          <ProductsDetails details={Product}/>
        ))}
      </>
    ) : (
      state.allProducts
        .filter((product) => product.category === type)
        .map((fProduct) => <ProductsDetails details={fProduct} />)
    )}
</>)
   
  
}
