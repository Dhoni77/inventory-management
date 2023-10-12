import { DiscountList } from "./inventory/DiscountList";
import { InventoryList } from "./inventory/InventoryList";

function App() {
  return (
    <>
      <div>
        <div className="mb-5 text-zinc-500">Inventory Management</div>
        <InventoryList></InventoryList>
        <DiscountList></DiscountList>
      </div>
    </>
  );
}

export default App;
