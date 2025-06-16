import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { updateTransaction } from "../utils/Apis";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EditForm = ({
  description,
  amount,
  date,
  showbtn,
  title,
  btnName,
  id,
  setExpData,
  category,
}) => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    amount: amount || "",
    date: date || "",
    category: category || "",
    description: description || "",
  });

  const changeHandler = async (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const changeCategoryHandler = (val) => {
    setFormData((prev) => ({ ...prev, category: val }));
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(formData);
    try {
      const res = await updateTransaction({ id, formData, token });
      console.log("Transaction updated", res);

      if (res._id) {
        setOpen(false);
        setExpData(formData);
      }
    } catch (err) {
      console.error("Error adding transaction:", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        <Button
          className="bg-black text-white cursor-pointer"
          variant="outline"
        >
          {showbtn}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <form onSubmit={updateHandler}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Amount
              </Label>
              <Input
                type="number"
                id="name"
                name="amount"
                value={formData.amount}
                onChange={changeHandler}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Date
              </Label>
              <Input
                type="date"
                name="date"
                id="username"
                value={formData.date}
                onChange={changeHandler}
                //   value="@peduarte"
                className="col-span-3"
              />
            </div>
            <Select name="category" onValueChange={changeCategoryHandler}>
              <SelectTrigger className="w-[200px] border border-black cursor-pointer">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="max-h-48 overflow-y-auto ">
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="Entertainment">Entertainment</SelectItem>
                <SelectItem value="Food">Food</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              name="description"
              value={formData.description}
              placeholder="Description..."
              onChange={changeHandler}
            />
          </div>
          <DialogFooter>
            <Button className="cursor-pointer" type="submit">
              {btnName}{" "}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditForm;
