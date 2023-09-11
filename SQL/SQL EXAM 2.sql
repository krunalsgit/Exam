use KrunalDhote351

select * from Student

Country
State
City

Create Table UsersType2(
	UserTypeId int not null identity(101,1) primary key,
	UserTypeName varchar(200) Unique Not Null
)
Insert Into UsersType2 Values ('Manager'),('Waiter'),('Customer')

Alter Table UsersType2
	Add unique(UserTypeName)

Create Table Menu(
	MenuId int not null identity(101,1) primary key,
	MenuName varchar(100) unique,
	Rates decimal
)

Insert Into Menu Values('Gulab Jamun',55),('Butter Naan',65),('Tanduri Roti',20),('Butter Tanduri Roti',25),('Paneer Vharadi',225),('Paneer Tikka',225),('Jeera Rice',120),('Masala Papad',30)

Create Table Users2(
	UserID int not null identity(101,1) primary key,
	UserName varchar(100) unique,
	Email varchar(150) unique not null,
	ContactNo varchar(10) check(len(ContactNo)<11),
	Address varchar(500),
	UserType int foreign key references UsersType2(UserTypeId),
	CountryId int foreign key References Country(id),
	StateId int foreign key references state(id),
	CityId int foreign key references city(id)
)

Insert Into Users2 Values('Krunal Dhote','krunalgdhote09@gmail.com','9307871334','Amravati',101,101,101,101),('Piyush Kumar','piyush@gmail.com','9876543210','Gaya',103,101,102,102)

Insert Into Users2 Values('Shuvam Kunver','shuvam09@gmail.com','9300001334','Surat',101,101,101,101),('Bhaskar Rajale','Bhaskar@gmail.com','9876543210','Pune',103,101,102,102)

Insert Into Users2 Values('Ranu Kunver','ranuu@gmail.com','7700001334','Bhopal',103,101,103,103),('Shila Rajale','shilu@gmail.com','9876511110','Pune',102,101,102,102)

Insert Into Users2 Values('Raj Shaha','Raj@gmail.com','7700001114','Bhopal',103,101,103,103),('Sandeep Lodhi','Sandeep@gmail.com','8876511110','Ahmedabad',103,101,102,102)

Insert Into Users2 Values('Munni Prakash','mp@gmail.com','8886511110','Chapra',102,101,103,102)

create table Orders(
	OrderId int not null identity(101,1) primary key,
	CustomerId int foreign key references Users2(UserID),
	WaiterId int foreign key references Users2(UserID),
	Menus varchar(max),
	TotalBillAmount decimal,
	OrderDates Date
)

Insert into Orders Values
				(104,106,'Gulab Jamun,
				Butter Naan,
				Paneer Vharadi,
				Jeera Rice,
				Masala Papad',495,'2022-11-11'),
				(105,106,'Gulab Jamun,Masala Papad',
				85,'2023-12-28'
				)

Insert into Orders Values(104,109,'Butter Naan,Paneer Vharadi',290,'2023-01-09')
				


--1
	create or alter function GetMenuDetail()
	returns Table
	as
		return select MenuName,Rates from Menu;

SELECT * from dbo.GetMenuDetail()



--2
create or alter proc sp_GetCustomer
@from date=null,
@to date=null
as
begin
	if(@from is null and @to is null)
		select U.UserName,U.Address+','+C.CountryName+','+S.StateName+','+Ct.CityName AS Address,ISNULL(CAST(O.OrderId as Varchar),'Not Available'),ISNULL(CAST(O.TotalBillAmount as Varchar),'Not Available'),ISNULL(CAST(O.OrderDates as Varchar),'Not Available')
			from Orders O
			right join Users2 U on U.UserID=O.CustomerId
			join Country C on C.id=U.CountryId
			join State S on S.id=U.StateId
			join City Ct on Ct.id=U.CityId	
			where U.UserType=103
	else
		select U.UserName,U.Address+','+C.CountryName+','+S.StateName+','+Ct.CityName AS Address,O.OrderId,O.TotalBillAmount,O.OrderDates from Orders O
				right join Users2 U on U.UserID=O.CustomerId
				join Country C on C.id=U.CountryId
				join State S on S.id=U.StateId
				join City Ct on Ct.id=U.CityId	
					where O.OrderDates>@from and O.OrderDates<@to
end

exec sp_GetCustomer '2022-08-08','2022-12-08'



--3

create or alter proc sp_GetCustomerByName
@name varchar(200)=null
as
begin
	if(@name is null)
		select O.OrderId,U.UserName,O.TotalBillAmount,O.OrderDates,u2.UserName from Users2 U
			join Orders O on O.CustomerId=U.UserID
			join Users2 u2 on u2.UserID=O.WaiterId
				Where U.UserType=103
	else
		select O.OrderId,U.UserName,O.TotalBillAmount,O.OrderDates,u2.UserName from Users2 U
			join Orders O on O.CustomerId=U.UserID
			join Users2 u2 on u2.UserID=O.WaiterId
				Where U.UserType=103 and U.UserName=@name
end

exec sp_GetCustomerByName
exec sp_GetCustomerByName 'Ranu Kunver'


--4

create or alter function GetCustomerMenues(@name varchar(200))
	returns table
	as
		return select U.UserName,O.Menus from Orders o 
				join Users2 U on U.UserID=O.CustomerId
				where U.UserName=@name


create or alter proc sp_GetCustomerMenues
@name varchar(200)
as
begin
	declare @num int
	set @num=(select count(*) from dbo.GetCustomerMenues(@name))

	if(@num>0)
		select * from dbo.GetCustomerMenues(@name)
	else
		print('No Customer Found')
end

exec sp_GetCustomerMenues 'Ranu Kunver'
exec sp_GetCustomerMenues 'Krunal Dhote'



select * from Users2
select * from UsersType2
select * from Country
select * from State
select * from City
select * from Menu
select * from Orders
