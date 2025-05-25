import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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

const Form = ({ showbtn, title, btnName }) => {
  return (
    <Dialog>
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("satyam");
          }}
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Amount
              </Label>
              <Input
                type="number"
                id="name"
                //   value="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Date
              </Label>
              <Input
                type="date"
                id="username"
                //   value="@peduarte"
                className="col-span-3"
              />
            </div>
            <Textarea placeholder="Description..." />
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

export default Form;
