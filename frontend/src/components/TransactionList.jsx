import React from "react";
import { Button } from "./ui/button";
import EditForm from "./EditForm";
import { deleteTransaction } from "../utils/Apis";
const TransactionList = ({
  amount,
  date,
  description,
  id,
  setDeleteMsg,
  setExpData,
  category = "",
}) => {
  const deleteHandler = async () => {
    console.log("dsad");
    try {
      const res = await deleteTransaction(id);
      setDeleteMsg(res);
    } catch (error) {
      console.error(`error found during delete ${error}`);
    }
  };
  return (
    <div className="grid  xl:grid-cols-[1fr_2fr_0.5fr] lg:grid-cols-[1fr_3fr] px-4 py-1 text-xs lg:gap-y-1 md:gap-y-2 ">
      <div className="rounded-lg grid  justify-start gap-1  ">
        <div>
          <span className="text-sm font-semibold ">Amount:</span>{" "}
          {`${amount} $`}
        </div>
        <div>
          <span className="text-sm font-semibold">Date:</span>
          {`${date}`}
        </div>
        <div>
          <span className="text-sm font-semibold">Category:</span>
          {`${category}`}
        </div>
      </div>
      <div className="flex sm:col-span-2 md:col-span-1">
        <span className="text-sm font-semibold pr-2">Decription:</span>{" "}
        {`${description}`}
      </div>
      <div className="flex justify-center  gap-4 items-center sm:col-span-3 md:col-span-2 lg:col-span-1 pb-1">
        {/* <Button className="text-sm  ">EDIT</Button>
         */}
        <EditForm
          id={id}
          amount={amount}
          date={date}
          description={description}
          showbtn="EDIT"
          title="Edit Transaction"
          btnName="Save Changes"
          setExpData={setExpData}
          category={category}
        />
        <Button className="text-sm cursor-pointer " onClick={deleteHandler}>
          DELETE
        </Button>
      </div>
      <hr className="col-span-3  border-gray-400 md:col-span-2  lg:col-span-3" />
    </div>
  );
};

export default TransactionList;
