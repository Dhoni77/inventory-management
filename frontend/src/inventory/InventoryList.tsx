import { getItems } from "@/api/items/get";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { IInventory } from "@/models/IInventory";
import { useEffect, useState } from "react";

interface IState {
  loading: boolean;
  items: IInventory[];
}

export function InventoryList() {
  const [state, setState] = useState<IState>({
    loading: true,
    items: [],
  });

  useEffect(() => {
    getItems()
      .then((data) => setState({ loading: false, items: data }))
      .catch(() => setState({ loading: false, items: [] }));
  }, []);

  return (
    <>
      {state.loading && (
        <Skeleton>
          <div className="text-lg font-sans text-green-600 bg-zinc-200 rounded">
            Loading items...
          </div>
        </Skeleton>
      )}
      {!state.loading && state.items?.length > 0 && (
        <Table className="border-collapse w-full">
          <TableCaption className="text-center bg-blue-400 text-white py-2">
            Inventory Details
          </TableCaption>
          <TableHeader className="bg-yellow-500 text-white">
            <TableRow>
              <TableHead className="px-4 py-2 text-zinc-100">Name</TableHead>
              <TableHead className="px-4 py-2 text-zinc-100">
                Category
              </TableHead>
              <TableHead className="px-4 py-2 text-zinc-100">Price</TableHead>
              <TableHead className="px-4 py-2 text-zinc-100">
                Quantity
              </TableHead>
              <TableHead className="px-4 py-2 text-zinc-100">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-gray-200">
            {state.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="px-4 py-2 text-left">
                  {item.name}
                </TableCell>
                <TableCell className="px-4 py-2 text-left">
                  {item.category}
                </TableCell>
                <TableCell className="px-4 py-2 text-left">
                  {item.price}
                </TableCell>
                <TableCell className="px-4 py-2 text-left">
                  {item.quantity}
                </TableCell>
                <TableCell className="px-4 py-2 text-left">
                  {item.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {!state.loading && !state.items.length && (
        <div>
          <Label className="text-red-500">No Items found.</Label>
        </div>
      )}
    </>
  );
}
