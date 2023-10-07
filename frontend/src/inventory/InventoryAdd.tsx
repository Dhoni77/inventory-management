import { addItem } from "@/api/items/post";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { IInventory } from "@/models/IInventory";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

interface Props {
  refresh: () => void;
}

export function InventoryAdd({ refresh }: Props) {
  const [formValues, setFormValues] = useState<IInventory>({} as IInventory);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    setTimeout(() => {
      formRef.current?.reset();
      setFormValues({} as IInventory);
      setLoading(false);
    }, 1000);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    addItem({ ...formValues, id: nanoid() })
      .then(() => {
        toast("Item added successfully", {
          duration: 2000,
          icon: "👍",
          position: "top-right",
        });
        resetForm();
        refresh();
      })
      .catch(() => {
        toast("Adding item failed", {
          duration: 2000,
          icon: "❌",
          position: "top-right",
        });
        resetForm();
      });
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="mt-5 text-zinc-500">
            Add Item
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter the item details</DialogTitle>
          </DialogHeader>
          <div>
            <form
              onSubmit={onSubmitHandler}
              id="add-item"
              ref={formRef}
              className="grid gap-4 py-4"
            >
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  className="col-span-3"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Input
                  id="category"
                  name="category"
                  placeholder="Enter category"
                  className="col-span-3"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  id="price"
                  name="price"
                  placeholder="Enter price"
                  className="col-span-3"
                  type="number"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quantity" className="text-right">
                  Quantity
                </Label>
                <Input
                  id="quantity"
                  name="quantity"
                  placeholder="Enter quantity"
                  className="col-span-3"
                  type="number"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter grocery description"
                  className="col-span-3"
                  defaultValue={""}
                  onChange={onChangeHandler}
                ></Textarea>
              </div>
            </form>
          </div>
          <DialogFooter>
            {loading ? (
              <Skeleton>
                <Button>Submitting...</Button>
              </Skeleton>
            ) : (
              <Button form="add-item" type="submit">
                Add
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
