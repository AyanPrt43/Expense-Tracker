document.addEventListener("DOMContentLoaded", () => {
    let Desc = document.querySelector('.NewDescription');
    let Amt = document.querySelector('.NewAmount');
    let TypeSelect = document.getElementById("TypeSelect");
    let AddTransaction = document.querySelector('.AddTransaction');
    let SalExp = document.getElementById("SalExp");
    let Total_Balance = document.querySelector('.Total_Balance');
    let Total_Expense = document.getElementById("TotalExpense");
    let Total_Income = document.getElementById("TotalIncome");
    let Transactions = document.querySelector('.Transactions');
    let Empty = document.querySelector('.Empty');
    let ThemeToggle = document.querySelector(".ThemeToggle");

    ThemeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");

        if(document.documentElement.classList.contains("dark")){
            ThemeToggle.src = "icons/dark.png";
        }else{
            ThemeToggle.src = "icons/2.png";
        }
    });

    let Balance = Number(Total_Balance.textContent);
    console.log(Total_Income.textContent);
    console.log(Total_Expense.textContent);

    let data = {};

    function FetchData(){
        let Description = Desc.value;
        let Amount = Amt.value;
        let Type = TypeSelect.value;
        let Sal_Exp = SalExp.value;

        data.Description = Description;
        data.Amount = Amount;
        data.Type = Type;
        data.What = Sal_Exp;

        return data;
    }


    AddTransaction.addEventListener("click", () => {
        let DisplayData = FetchData();
        Empty.classList.add("hidden");
        console.log(DisplayData);
        UpdateValues();
        Desc.value = "";
        Amt.value = ""
        TypeSelect.value = "none";



        let div = document.createElement('div');


        // div.setAttribute("style", "height:25%; width:100%");
        div.className = "w-full";
        Transactions.appendChild(div);

        function Recieved(){

            div.innerHTML = `<div class="LogDiv flex justify-between items-center mt-4">
                        <p class="Empty hidden">No Transactions Yet!!!</p>

                    <div class="flex items-center w-[65%] gap-5">
                        <div class="Catogory_Image">
                            <img src="icons/${data.Type}.png" alt="" class="inline h-[60px] w-[63px]">
                        </div>
                        <div class="flex flex-col">
                            <p class="Catogory font-bold">${data.Type}</p>
                            <p class="type text-gray-500">${data.Description}</p>
                        </div>
                    </div>

                    <div class="Ayan flex justify-between w-[35%] items-center">
                        <div class="Amount w-[250px] flex items-center"><p class="AmountAdded font-bold text-green-500">+₹${data.Amount}.00</p></div>
                        <div class="Income_Expense w-[15%]"><p class="text-green-500 bg-green-100 w-[100%] inline p-2 rounded-md border border-green-100">Income</p></div>
                        <div class="DeleteButton w-[20%] flex justify-center items-center ">
                            <img src="icons/Delete.png" alt="" class="inline h-[30px] w-[30px] cursor-pointer">
                        </div>
                    </div>
                </div>
                    <div class="ShadowLine h-[1px] w-full bg-gray-300 mt-[14px]"></div>
                </div>`

        }


        function Spent(){
            div.innerHTML = `<div class="LogDiv flex justify-between items-center mt-4">
                        <p class="Empty hidden">No Transactions Yet!!!</p>

                    <div class="flex items-center w-[65%] gap-5">
                        <div class="Catogory_Image">
                            <img src="icons/${data.Type}.png" alt="" class="inline h-[60px] w-[63px]">
                        </div>
                        <div class="flex flex-col">
                            <p class="Catogory font-bold">${data.Type}</p>
                            <p class="type text-gray-500">${data.Description}</p>
                        </div>
                    </div>

                    <div class="Ayan flex justify-between w-[35%] items-center">
                        <div class="Amount w-[250px] flex items-center"><p class="AmountAdded font-bold text-red-500">-₹${data.Amount}</p></div>
                        <div class="Income_Expense w-[15%]"><p class="text-red-500 bg-red-100 w-[100%] inline p-2 rounded-md border border-red-100">Expense</p></div>
                        <div class="DeleteButton w-[20%] flex justify-center items-center ">
                            <img src="icons/Delete.png" alt="" class="inline h-[30px] w-[30px] cursor-pointer">
                        </div>
                    </div>
                </div>
                    <div class="ShadowLine h-[1px] w-full bg-gray-300 mt-[14px]"></div>
                </div>`

        }

        if(data.What === "recieved"){
            Recieved();
        }

        if(data.What === "spent"){
            Spent();
        }
 
    });


    function UpdateValues(){
        let amt = Number(data.Amount);

        if(data.What === "recieved"){
            let CurrentIncome = Number(Total_Income.textContent);
            CurrentIncome = CurrentIncome + amt;
            Total_Income.textContent = CurrentIncome;
            Balance = Balance + amt;
            Total_Balance.textContent ="₹" + Balance;
        }else{
            if(Balance < amt){
                alert("Insufficient Balance!!!");
                return
            }else{
                let CurrentExpense = Number(Total_Expense.textContent);
                CurrentExpense = CurrentExpense + amt;

                Total_Expense.textContent = CurrentExpense;

                Balance = Balance - amt;
                Total_Balance.textContent = "₹" + Balance;
            }
        }
    }
});