import { InventoryAdd } from "./inventory/InventoryAdd";
import { InventoryList } from "./inventory/InventoryList";

function App() {
  return (
    <>
      <div>
        <div className="mb-5 text-zinc-500">Inventory Management</div>
        <InventoryList></InventoryList>
        <InventoryAdd></InventoryAdd>
      </div>
    </>
  );
}

export default App;
