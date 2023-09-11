
use KrunalDhote351

--First Name
--Last Name
--Email 
--Password (Characters should not be visible)
--Date of birth (Date Picker)
--Address
--Country
--State (Dependable drop down based on country selection) (Data should be from Database)
--City (Dependable drop down based on state and country selection) (Data should be from Database)
--Profile photo (Image upload path should be stored in database)
--Attachment (Multiple documents upload)
--Gender (Radio Button)
--Hobbies (Check box and multi selection)

Create Table ExamMVC(
    Id int not null identity(1,1) primary key,
                    FirstName varchar(100),
                    LastName varchar(100),
                    Email varchar(100), 
                    Password varchar(20),
                    DateOfBirth Date,
                    Address varchar(500),
                    Country int references Country(id),
                    State int references State(id),
                    City int references City(id),
                    ProfilePhoto varchar(1000),
                    Documents varchar(1000),
                    Gender varchar(20),
                    Hobbies varchar(100)
)
insert into ExamMVC values('Krunal','Dhote','krunal.d@shaligraminfotech.com','Krunal@09','2001-10-09','Amravatri',101,114,101,'Content/Documents/Naman.jpeg','Content/Documents/MVC Test on 01072023.txt','Male','Cricket,Singing')
select * from Exammvc 



Select o.value Hobbie from Exammvc v
cross apply string_split (v.Hobbies,',') o
where v.Id= 3
