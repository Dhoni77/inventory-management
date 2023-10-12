import { getDiscounts } from "@/api/discounts/get";
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
import { useEffect, useState } from "react";
import { IDiscount } from "@/models/IDiscount";
import { DiscountAdd } from "./DiscountAdd";

interface IState {
  loading: boolean;
  items: IDiscount[];
}

export function DiscountList() {
  const [state, setState] = useState<IState>({
    loading: true,
    items: [],
  });

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getDiscounts()
      .then((data) => setState({ loading: false, items: data }))
      .catch(() => setState({ loading: false, items: [] }));
  }, [refresh]);

  const handleRefresh = () => setRefresh((prev) => !prev);

  return (
    <>
      {state.loading && (
        <Skeleton>
          <div className="text-lg font-sans text-green-600 bg-zinc-200 rounded">
            Loading discounts...
          </div>
        </Skeleton>
      )}
      {!state.loading && state.items?.length > 0 && (
        <Table className="border-collapse w-full">
          <TableCaption className="text-center bg-blue-400 text-white py-2">
            Discount Details
          </TableCaption>
          <TableHeader className="bg-yellow-500 text-white">
            <TableRow>
              <TableHead className="px-4 py-2 text-zinc-100">
                Category
              </TableHead>
              <TableHead className="px-4 py-2 text-zinc-100">
                Discount %
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-gray-200">
            {state.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="px-4 py-2 text-left">
                  {item.category}
                </TableCell>
                <TableCell className="px-4 py-2 text-left">
                  {`${item.discountedPrice} %`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {!state.loading && !state.items.length && (
        <div>
          <Label className="text-red-500">No Discounts found.</Label>
        </div>
      )}
      <DiscountAdd refresh={handleRefresh}></DiscountAdd>
    </>
  );
}
