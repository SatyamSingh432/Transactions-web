import React, { useState } from "react";
import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TransactionList from "../components/TransactionList";
import BarCharts from "../components/BarCharts";
import Form from "../components/Form";
import SelectMonth from "../components/SelectMonth";
import { getTransactions, verifyToken } from "../utils/Apis";
import PieChartFig from "../components/PieChartFig";
import Indicator from "../components/Indicator";
import ExpensesCard from "../components/ExpensesCard";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
const Welcome = () => {
  const [expData, setExpData] = useState({
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const [pieChartData, setPieChartData] = useState([
    { category: "travel", value: 0 },
    { category: "Food", value: 0 },
    { category: "Entertainment", value: 0 },
  ]);

  const [month, setMonth] = useState("");
  const [deleteMsg, setDeleteMsg] = useState("");
  const [fullData, setFullData] = useState([]);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const res = await verifyToken(token);
        if (!res.valid) {
          localStorage.removeItem("token");
          navigate("/");
        }
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    async function transactionDataList() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await getTransactions(token);
          setFullData(res);
        } catch (error) {
          console.error("Failed to fetch transactions:", error);
        }
      }
    }
    transactionDataList();
  }, [listData]);

  useEffect(() => {
    async function transactionDataList() {
      const token = localStorage.getItem("token");
      try {
        const res = await getTransactions(token, month);
        setListData(res);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      }
    }
    transactionDataList();
  }, [expData, month, deleteMsg]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="inline-block w-12 h-12 border-4 border-black border-b-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="bg-white  w-screen p-6">
          <div className="flex justify-between">
            <h1 className="text-2xl pb-4">Expense Tracker</h1>
            <Button className="cursor-pointer" onClick={logoutHandler}>
              Logout
            </Button>
          </div>
          <div className="w-full grid lg:grid-cols-[1.3fr_1.9fr_.8fr] gap-x-0 justify-center sm:grid-cols-1 sm:gap-x-2 md:grid-cols-[2fr_2fr] rounded-lg">
            <ExpensesCard pieChartData={pieChartData} />
            <div className="h-[200px] rounded-lg border-1 shadow-md">
              <BarCharts listData={fullData} />
            </div>

            <div className="pb-2 flex flex-col md:col-span-2 lg:col-span-1 items-center">
              <PieChartFig
                pieChartData={pieChartData}
                setPieChartData={setPieChartData}
                fullData={fullData}
              />
              <Indicator />
            </div>
          </div>
          <div className="py-1 bg-white border shadow-md py-2.5 flex justify-center items-center rounded-lg">
            <Form
              expData={expData}
              setExpData={setExpData}
              showbtn="+ Add Expense"
              title="Save Transaction"
              btnName="Save"
            />
          </div>
          <h1 className="text-2xl pb-4 pt-4">Transactions</h1>
          <div className="grid lg:grid-cols-[1fr_3fr] md:grid-cols-1 gap-4">
            <div className="bg-white rounded-lg flex flex-col gap-2 p-4  shadow-md border">
              <h1 className="text-xl font-semibold">Recent Transactions</h1>
              {fullData.slice(0, 5).map((ele, index) => {
                return (
                  <div key={index} className="border-2 rounded-sm p-1">
                    {index + 1}. You spent{" "}
                    <span className="font-semibold">{ele.amount}</span> $ on{" "}
                    {ele.category}
                  </div>
                );
              })}
            </div>
            <div className="bg-white rounded-lg border flex shadow-md flex-col gap-4 p-4 ">
              <div className="w-full flex justify-end">
                <SelectMonth setMonth={setMonth} className="bg-white-500 " />
              </div>

              <ScrollArea className="h-50  rounded-md border ">
                {listData.map((ele) => {
                  return (
                    <TransactionList
                      key={ele._id}
                      amount={ele.amount}
                      date={new Date(ele.date).toISOString().split("T")[0]}
                      description={ele.description}
                      id={ele._id}
                      category={ele.category}
                      setDeleteMsg={setDeleteMsg}
                      setExpData={setExpData}
                    />
                  );
                })}
              </ScrollArea>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
