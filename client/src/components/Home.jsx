import StoreItems from "./StoreItems"
import Filter  from "./Filter"

console.log("hola")


export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Filter />
      <StoreItems />
      
    </>
  )
}
export default Home;
