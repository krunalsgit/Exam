--use KrunalDhote351

create table t1_Customer(
	CustomerId int NOT NULL Identity(101,1),
	Name VARCHAR(50),
	UserName VARCHAR(30) UNIQUE,
	Password VARCHAR(20),
	Email VARCHAR(30) UNIQUE,
	DOB DATE,
	Address VARCHAR(100),
	ContactNo CHAR(10)
)

create table t1_Salesman(
	SalesmanId int NOT NULL Identity(101,1),
	Name VARCHAR(50),
	UserName VARCHAR(30) UNIQUE,
	Password VARCHAR(20),
	Email VARCHAR(30) UNIQUE,
	DOB DATE,
	Address VARCHAR(100),
	ContactNo CHAR(10)
)

create table t1_Category(
	CategoryId int NOT NULL Identity(101,1),
	Name VARCHAR(50)
)

create table t1_Items(
	ItemId int NOT NULL Identity(101,1),
	Name VARCHAR(50),
	Category int,
	Rate Decimal,
	DOM Date,
	DOE Date,
)

create table t1_ModeOfPayment(
	MOPId int NOT NULL Identity(101,1),
	Name VARCHAR(50)
)

create Table t1_Orders(
	OrderId INT NOT NULL Identity(101,1),
	OrderNo Int Unique Identity(1,1),
	Customer int,
	OrderQty int,
	Bill_Amount decimal,
	DOD DATE,
	Salesman int,
	DeliveryAddress VARCHAR(100),
	City Varchar(30),
	ContactNo char(10),
	MOP int,
	OrderStatus Bit Default 0
)


create Table t1_OrderDetails(
	OrderDetailId INT NOT NULL Identity(101,1),
	OrderId int,
	ItemId int,
	OrderQty int,
	OrderAmount decimal
)

drop table t1_Customer        
drop table t1_Salesman		  
drop table t1_Category		  
drop table t1_Items			  
drop table t1_ModeOfPayment	  
drop table t1_Orders		  
drop table t1_OrderDetails	  

--1. After Creating Table , need to update All table with Primary Key , Clustor Key  and Add Identity [5]
alter table t1_Customer 
	ADD primary key(CustomerId)
alter table t1_Salesman 
	ADD primary key(SalesmanId)
alter table t1_Category 
	ADD primary key(CategoryId)
alter table t1_Items 
	ADD primary key(ItemId)
alter table t1_ModeOfPayment 
	ADD primary key(MOPId)
alter table t1_Orders 
	ADD primary key(OrderId)
alter table t1_OrderDetails 
	ADD primary key(OrderDetailId)

alter table t1_Items 
	ADD foreign key(Category) References t1_Category(CategoryId)
alter table t1_Orders 
	--ADD foreign key(Customer) References t1_Customer(CustomerId)
	--ADD foreign key(Salesman) References t1_Salesman(SalesmanId)
	ADD foreign key(MOP) References t1_ModeOfPayment(MOPId)
alter table t1_OrderDetails 
	--ADD foreign key(OrderId) References t1_Orders(OrderId)
	ADD foreign key(ItemId) References t1_Items(ItemId)



--2. Create  a Parameterized Store Procedure to Insert/Update Data in each of tables listed above. 
--(If Primary key of that table is passed then Update else Insert) [8]
--E.g : SP_AddEditCustomer (By using this procedure I will be able to insert or update data)


--(1)
alter proc spInsertCustomer
	@Name VARCHAR(50),
	@UserName VARCHAR(30),
	@Password VARCHAR(20),
	@Email VARCHAR(30),
	@DOB DATE,
	@Address VARCHAR(100),
	@ContactNo CHAR(10),
	@id int=NULL
as
begin
	if @id is Null
		begin
			INSERT INTO t1_Customer(Name,UserName,Password,Email,DOB,Address,ContactNo)
			Values(@Name,@UserName,@Password,@Email,@DOB,@Address,@ContactNo)	
		end
	else
		begin
			Update t1_Customer Set Name=@Name,UserName=@UserName,Password=@Password,Email=@Email,DOB=@DOB,Address=@Address,ContactNo=@ContactNo
				WHERE CustomerId=@id
		end
end	

--(2)
alter proc spInsertSalesman
	@Name VARCHAR(50),
	@UserName VARCHAR(30),
	@Password VARCHAR(20),
	@Email VARCHAR(30),
	@DOB DATE,
	@Address VARCHAR(100),
	@ContactNo CHAR(10),
	@id int=NULL
as
begin
	if @id is Null
		begin
			INSERT INTO t1_Salesman(Name,UserName,Password,Email,DOB,Address,ContactNo)
			Values(@Name,@UserName,@Password,@Email,@DOB,@Address,@ContactNo)	
		end
	else
		begin
			Update t1_Salesman Set Name=@Name,UserName=@UserName,Password=@Password,Email=@Email,DOB=@DOB,Address=@Address,ContactNo=@ContactNo
				WHERE SalesmanId=@id
		end
end	

--(3)
alter proc spInsertCategory
	@Name VARCHAR(50),
	@id int=NULL
as
begin
	if @id is Null
		begin
			INSERT INTO t1_Category(Name)
			Values(@Name)
		end
	else
		begin
			Update t1_Category Set Name=@Name
				WHERE CategoryId=@id
		end
end	

--(4)
alter proc spInsertItem  
	@Name VARCHAR(50),	   
	@Category int,			    
	@Rate Decimal,
	@DOM Date,
	@DOE Date=NULL,
	@id int=NULL
as
begin
	if @id is Null
		begin
			INSERT INTO t1_Items(Name,Category,Rate,DOM,DOE)
			Values(@Name,@Category,@Rate,@DOM,@DOE)	
		end
	else
		begin
			Update t1_Items Set Name=@Name,Category=@Category,Rate=@Rate,DOM=@DOM,DOE=@DOE
				WHERE ItemId=@id
		end
end	

--(5)
alter proc spInsertMOP
	@Name VARCHAR(50),
	@id int=NULL
as
begin
	if @id is Null
		begin
			INSERT INTO t1_ModeOfPayment(Name)
			Values(@Name)					
		end
	else
		begin
			Update t1_ModeOfPayment Set Name=@Name
				WHERE MOPId=@id
		end
end	

--(6)
alter proc spInsertOrder
	@customer int,
	@salesman int,
	@DeliveryAdd varchar(200),
	@city varchar(30),
	@MOP int,
	@ordStatus Bit=0,
	@contactNo char(10)=NULL,
	@id int=NULL
as
begin
	declare @date date = getdate()
	declare @DOD Date = dateadd(day,4,@date)  --Delivery After & Days From Order Date
	--declare @let int
	if @contactNo is NULL
		begin
			set @contactNo=(SELECT ContactNo FROM t1_Customer WHERE CustomerID=@customer)
		end
	if @id is Null
		begin
		declare @orderNo int=(Select count(OrderId) from t1_Orders)+1
		INSERT INTO t1_Orders(OrderNo,Customer,DOD,Salesman,DeliveryAddress,City,ContactNo,MOP,OrderStatus)
			VALUES(@orderNo,@customer,@DOD,@salesman,@DeliveryAdd,@city,@contactNo,@MOP,@ordStatus);
			--Set @let=@@IDENTITY
			--Exec spInsertOrderDetails @let,101,2

		end
	else
		begin
			Update t1_Orders Set Customer=@customer,Salesman=@salesman,DOD=@DOD,DeliveryAddress=@DeliveryAdd,City=@city,MOP=@MOP,OrderStatus=@ordStatus,ContactNo=@ContactNo
				WHERE OrderID=@id
		end
end


--(7)
alter proc spInsertOrderDetails
	@OrderId int,
	@ItemId int,
	@orderQty int,
	@id int=NULL
as
begin
	declare @orderAmt decimal
	set @orderAmt=@orderQty*(select Rate From t1_Items Where ItemId=@ItemId)
	declare @totalQty int
	declare @totalAmt decimal
	if @id is Null
		begin
			Insert Into t1_OrderDetails(OrderId,ItemId,OrderQty,OrderAmount)
				Values(@OrderId,@ItemId,@orderQty,@orderAmt)

			Update t1_Orders Set OrderQty=dbo.totalQty(@OrderId),Bill_Amount=dbo.totalAmt(@OrderId) Where OrderId=@OrderId
		end
	else
		begin
			Update t1_OrderDetails Set OrderId=@OrderId,ItemId=@ItemId,OrderQty=@orderQty,OrderAmount=@orderAmt
			WHERE OrderDetailId=@id


			Update t1_Orders Set OrderQty=dbo.totalQty(@OrderId),Bill_Amount=dbo.totalAmt(@OrderId) Where OrderId=@OrderId
		end
end

EXEC spInsertCustomer 'Shuvam Kunwer','Shuvam@09','Sit@123#','Shuvam.d@shaligraminfotech.com','2001-06-18','Ahmedabad','9811113213'
EXEC spInsertCustomer 'Krunal Dhote','krunal@09','Sit@321#','krunal.d@shaligraminfotech.in','2001-10-09','Amravati','9307871334',104

EXEC spInsertSalesman 'Sandeep Lodhi','sandy@13','Sit@321#','sandeep.d@shaligraminfotech.com','2001-04-13','Bhpal','9765432210'
EXEC spInsertSalesman 'Sandeep Lodhi','sandii@13','Sit@321#','sandeep.d@shaligraminfotech.com','2001-04-13','Bhpal','9765432210',101

EXEC spInsertCategory 'Vehical'
EXEC spInsertCategory 'Electronic',101

EXEC spInsertItem 'Spoon',104,18,'2022-01-12'
EXEC spInsertItem 'Realme 3',101,8999,'2019-01-12',NULL,103

EXEC spInsertMOP 'Debit Card'
EXEC spInsertMOP 'UPI',102

EXEC spInsertOrder 113,101,'Shaligram Infotech','Ahmedabad',104

EXEC spInsertOrderDetails 102,104,1,102
EXEC spInsertOrderDetails 116,106,1

select * from  t1_Customer       
select * from  t1_Salesman		 
select * from  t1_Category		 
select * from  t1_Items			 
select * from  t1_ModeOfPayment	 
select * from  t1_Orders		 
select * from  t1_OrderDetails	

--3. Create  a Parameterized Store Procedure to retrive all the OrderDetails as per Customer 
--(If CustomerId not passed then retrive all the orders) ( Make sure to Add Everything in Single Procedure) [8]
	--Information I want : 
		--CustomerName
		--ItemName
		--Item Rate
		--Qty
		--OrderAmount (Qty * ItemRate)

	CREATE PROC SpRetrive
	@id int = Null
	As
	Begin
		if @id is Null
			Select C.Name as CustomerName,I.Name as ItemName,I.Rate,OD.OrderQty,OD.OrderAmount From t1_Customer C 
			JOIN t1_Orders O On  O.Customer=C.CustomerId
			JOIN t1_OrderDetails OD On OD.OrderId=O.OrderId
			JOIN t1_Items I On I.ItemId=OD.ItemId
		else
			Select C.Name as CustomerName,I.Name as ItemName,I.Rate,OD.OrderQty,OD.OrderAmount From t1_Customer C 
			JOIN t1_Orders O On  O.Customer=C.CustomerId
			JOIN t1_OrderDetails OD On OD.OrderId=O.OrderId
			JOIN t1_Items I On I.ItemId=OD.ItemId
			Where CustomerId=@id
	End

	EXEC SpRetrive 104



--4. Create a User Defined Function that will retrive TotalOrderAmount from the OrderDetails Table as per Customer. [8]
	--I just want total amount as per customerid I Passed.

	Alter Function retriveOrder(@id int)
	Returns Int
	As
	Begin
		Declare @totalOrderAmount decimal
		Set @totalOrderAmount=(Select SUM(OD.OrderAmount) As TotalOrderAmount From    t1_Orders O 
			JOIN t1_OrderDetails OD On O.orderId=OD.OrderID
			JOIN t1_Customer C On C.CustomerID=O.Customer
			Where CustomerId=@id)
		Return @totalOrderAmount
	End

	Select dbo.retriveOrder(106)

--5. Create a prameterized Store Procedure to retrive all the Order Information as per Customer. 
  --(If CustomerId not passed then retrive all the orders) [8]
	--Information I want : 
		--CustomerName
		--OrderNo
		--OrderQty (Total Qty of all the Items) (Using Function)
		--OrderAmount (Total Amount of Order) (Using Function)
		--SalesmanName
		--Address
		--City
		--ContactNo
		--MOP Name
		--DOD

		Create or alter Proc spRetriveAllOrder
		@id int=Null
		As
		Begin
			if @id is Null
				Select C.Name,O.OrderNO,dbo.totalQty(O.OrderID) as OrderQty,dbo.totalAmt(O.OrderID) as OrderAmt,S.Name,O.DeliveryAddress,O.City,O.ContactNo,M.MOPId,O.DOD From t1_Orders O
					Join t1_Customer C On C.CustomerId=O.Customer
					Join t1_Salesman S On S.SalesmanId=O.Salesman
					Join t1_ModeOfPayment M On M.MOPId=O.Mop
			else
				Select C.Name,O.OrderNO,dbo.totalQty(O.OrderID) as OrderQty,dbo.totalAmt(O.OrderID) as OrderAmt,S.Name,O.DeliveryAddress,O.City,O.ContactNo,M.MOPId,O.DOD From t1_Orders O
					Join t1_Customer C On C.CustomerId=O.Customer
					Join t1_Salesman S On S.SalesmanId=O.Salesman
					Join t1_ModeOfPayment M On M.MOPId=O.Mop
					where C.customerId=@id
		End

		--Function For Order Quantity
		Create Function totalQty(@id int)
		returns int
		begin
			declare @totalQty int
			set @totalQty=(select sum(OrderQty) From t1_OrderDetails Where OrderId=@id)
			return @totalQty
		end
	
		--Function For Order Amount
		Create or alter Function totalAmt(@id int)
		returns decimal
		begin
			declare @totalAmt decimal
			set @totalAmt=(select sum(OrderAmount) From t1_OrderDetails Where OrderId=@id)
			return @totalAmt
		end

		Exec spRetriveAllOrder
--6. Create a Parameterized Store Procedure to Cancel Order as per OrderNo (If I pass wrong orderno then message should be there) [8]
		Create or alter Proc CancelOrder 
			@ordNo int
		As 
		Begin
			if @ordNo in (Select OrderNo From t1_Orders)
				Update t1_Orders Set OrderStatus=1 Where OrderNo=@ordNo
			else 
				Print 'Wrong Order Number Inserted'
		End
		CancelOrder 11


--7. Create a Parameterized Store Procedure for Login as per Customer/Salesman EmailId and Password.  [10]
 --(If credentials matched then show "Login Successfull" then "Invalid User Input" , If EmailId  is not having in the Table then Create Emaild with Password(Random)).
	Create Proc LoginCustomer
	@email varchar(30),
	@password varchar(15)
	As
	Begin
		If (Select CustomerId From t1_Customer Where Email=@email)=(Select CustomerId From t1_Customer Where Password=@password)
			Print 'Login Successfull'
		Else 
			Print 'Invalid User Input'
	End

	EXEC LoginCustomer 'krunal.d@shaligraminfotech.in','Sit@321#'

	Create Proc LoginSalesman
	@email varchar(30),
	@password varchar(15)
	As
	Begin
		If (Select SalesmanId From t1_Salesman Where Email=@email)=(Select SalesmanId From t1_Salesman Where Password=@password)
			Print 'Login Successfull'
		Else 
			Print 'Invalid User Input'
	End

	EXEC LoginSalesman 'sandeep.d@shaligraminfotech.com','Sit@321#'

		
		Declare @name Varchar(50)
		Declare @pass varchar(10)
		set @pass=(SELECT Floor(RAND()*(88)+11))
		Declare @i int=1
		Declare @j int=(SELECT Cast(RAND()*(8-3)+5 as int))
		while @i<@j
		begin
			Declare @add char(1)=(SELECT char(Floor(RAND()*(122-97+1)+97)))
			Set @name=concat(@name,@add)
			Set @i=@i + 1
		end
		declare @email varchar(50)=concat(@name,@pass,'@gmail.com')
		declare @password varchar(20)=concat(@name,'@#',@pass)
		select @email
		select @password


--8. Create a Parameterized Store Procedure for Delete Customer from the UserName	[5]
	--All the orders linked to that customer should also be deleted.
	Create Or Alter Proc DeleteCustomer
	@userName Varchar(30)
	as
	begin
		declare @customerId int= (Select CustomerId From t1_Customer Where UserName=@userName)

		Delete From t1_OrderDetails Where OrderId in (Select OrderId From t1_Orders Where Customer=@customerId)
		Delete From t1_Orders Where Customer=@customerId
		Delete From t1_Customer Where UserName=@userName
	end
	Exec DeleteCustomer 'Kunal@09'

--9. Create a OrderDetails using OrderId of Order in a Single Store Procedure. [10]
	Create OR Alter Proc CreateOrderDetail
	@orderId int
	as
	begin
		--declare @till int=(select top 1 orderId From t1_Orders Order By orderId DESC) 
		declare @itemId int=(SELECT Top 1 ItemId FROM t1_Items order by NEWID())
		declare @qty int=(SELECT Cast(RAND()*(10-5)+1  AS INT)) 
		EXEC spInsertOrderDetails @orderId,@itemId,@qty
	end

	EXEC CreateOrderDetail 105


--10. Every Data suppose to be Dynamic (no any Hard Coded) [Addition 25 points] 
 --[ Example : Name would be Dynamic , amount would be Dyanmic , Date Would be Dynamic , OrderNo  would be Dynamic , etc... ]

		 --Random Name
	Create Function RandomName()
	returns varchar(10)
	Begin
		Declare @name Varchar(50)
		Declare @i int=1
		Declare @j int=(SELECT Cast(RAND()*(8-3)+5 as int))
		while @i<@j
		begin
			Declare @add char(1)=(SELECT char(Floor(RAND()*(122-97+1)+97)))
			Set @name=concat(@name,@add)
			Set @i=@i + 1
		end
		select @name
		return @name 
	End


	create function fn()
	returns int
	begin
		declare @num int=rand()*(10-3)+5
		return @num
	end



select * from  t1_Customer       
select * from  t1_Salesman		 
select * from  t1_Category		 
select * from  t1_Items			 
select * from  t1_ModeOfPayment	 
select * from  t1_Orders		 
select * from  t1_OrderDetails	 


select distinct Name From abc 
Where Name not in (select Name from abc where orderstatus=1)

	create or alter view abc as
	select distinct c.Name, o.orderstatus from t1_orders o
	join t1_orderdetails od on o.orderId=od.OrderId
	join t1_items I on I.itemId=od.ItemId
	join t1_Category c on c.categoryId=I.category


--Cancle Ordered Customer By Category Name
create or alter proc CancleOrderedCustomerByCategoryName 'Vehical'
@category varchar(50)
as
begin
	declare @i int=(select count(CustomerName) from cancelCategoryCustomer where Category=@category and canceled=1)
	if @i<1
		Print 'No Data Found'
	Else
		select distinct CustomerName from cancelCategoryCustomer  where Category=@category and canceled=1
end

create or alter view cancelCategoryCustomer
as
select distinct C.Name as CustomerName,ct.Name as Category,o.orderStatus as canceled  from t1_OrderDetails od 
	join t1_orders o on o.orderId=od.orderid
	join t1_items i on i.itemid=od.itemid
	join t1_category ct on i.category=ct.CategoryId
	join t1_Customer c on c.customerId=O.customer



