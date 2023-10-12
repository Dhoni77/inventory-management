import { addDiscount } from "@/api/discounts/post";
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
import { IDiscount } from "@/models/IDiscount";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

interface Props {
  refresh: () => void;
}

export function DiscountAdd({ refresh }: Props) {
  const [formValues, setFormValues] = useState<IDiscount>({} as IDiscount);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    setTimeout(() => {
      formRef.current?.reset();
      setFormValues({} as IDiscount);
      setLoading(false);
    }, 1000);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    addDiscount({ ...formValues, id: nanoid() })
      .then(() => {
        toast("Discount added successfully", {
          duration: 2000,
          icon: "👍",
          position: "top-right",
        });
        resetForm();
        refresh();
      })
      .catch(() => {
        toast("Adding discount failed", {
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
            Add Discount
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
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Input
                  id="category"
                  name="category"
                  placeholder="Enter name"
                  className="col-span-3"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="discountedPrice" className="text-right">
                  Discount %
                </Label>
                <Input
                  id="discountedPrice"
                  name="discountedPrice"
                  placeholder="Enter discount percent"
                  className="col-span-3"
                  type="number"
                  onChange={onChangeHandler}
                  required
                />
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
