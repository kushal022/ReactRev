import React, { useMemo, useRef, useState } from "react";

//^1.---------- Expensive Calculation --------
export function ExpensiveCalc() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  //calc
  const expValue = useMemo(() => {
    console.log("Calculating...");
    let total=0;
    for (let i = 0; i < 1e7; i++) {
      total += i;
    }
    return total + count;
  }, [count]);

  //theme
  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    padding: "1rem",
    marginTop: "1rem",
  };

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setDark((d) => !d)}>Toggle Theme</button>
      <div style={themeStyles}>Result: {expValue}</div>
    </div>
  );
}

// The heavy loop runs only when count changes.
// Toggling the theme doesn't trigger recalculation, thanks to useMemo.

//^2.---------- Memoized Derived value: Filter Value --------
export function FilterList(){
 const [query, setQuery] = useState('');
 const items = ['apple','banana','grape','orange','kiwi']

 const filteredItems = useMemo(()=>{
    return items.filter(item=>
        item.toLowerCase().includes(query.toLocaleLowerCase())
    )
 },[query])

 return(
    <div>
        <input type="text"
            placeholder="search..."
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
        />
        <ul>
            {filteredItems.map(item=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
 )
}

//^3.---------- Memoizing Props for a React.memo Child  --------

export function Parent(){
    const [count, setCount] = useState(0);

    const items = useMemo(()=>['a','b','c','d','e'],[])

    return(
        <div>
            <button onClick={()=>setCount(c=>c+1)}>inc</button>
            <p>count: {count}</p>
            <p>List</p>
            <ListChild items={items}/>
        </div>
    )
}

const ListChild = React.memo(({items})=>{
    console.log('Child Render')
    return(
        <div>
            {items.map(item=>(
                <li key={item}>{item}</li>
            ))}
        </div>
    )
})

/*
^Why useMemo matters here:
If items is a new array on each render, the List child re-renders.
With useMemo, the array reference stays stable → React.memo prevents re-rendering.
*/

//^4.----------  Real-Time Product Search with useMemo()  --------

const PRODUCTS = Array.from(
    {length:1000},
    (_,i)=>`Product ${i+1}`
)

export function FilteredProduct(){
    const [query, setQuery] = useState('')

    const filterCount = useRef(0)

    const filteredProducts = useMemo(()=>{
        filterCount.current+=1;
        console.log('Filtering products')
        return PRODUCTS.filter(item=>
            item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
    },[query])

    return(
        <div>
            <input 
                placeholder="search.."
                value={query}
                onChange={e=>setQuery(e.target.value)}
                type="text" />
            <p>Filter function count: {filterCount.current}</p>
            <p>filtered {filteredProducts.length} out of {PRODUCTS.length}</p>
            <p>Product List</p>
            <ul>
                {
                    filteredProducts.map(product=>(
                        <li key={product} >{product}</li>
                    ))
                }
            </ul>
        </div>
    )
}
/*
^When NOT to Use useMemo
Don’t use it:

Just to avoid small calculations (e.g. string length, sums)

If the calculation is cheap — useMemo has its own cost

If you’re not seeing any performance issue

&| Hook          | Purpose                                |
| ------------- | -------------------------------------- |
| `useMemo`     | Caches the **result** of a calculation |
| `useCallback` | Caches the **function itself**         |


&| Situation                          | Use `useMemo`? |
| ---------------------------------- | -------------- |
| Heavy calculations                 | ✅ Yes          |
| Derived state from props           | ✅ Yes          |
| Static props for memoized children | ✅ Yes          |
| Cheap calculations                 | ❌ No           |


*/