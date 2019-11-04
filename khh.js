select * from customers
where customerid = 1;

select * from customers
where city = 'Berlin';

select * from customers
where city like  'B%';

select * from customers
where city like 'B%' and customerid < 10;

select * from customers
where city like 'B%' or customerid >= 10;

select * from customers
where city like 'B%' and customerid >= 10
order by city desc;

select * from customers
where city like 'B%' and customerid >= 10
order by city desc
limit 5;

insert into shippers (shippername, phone)
values ('UPS', '(919) 234-1234');

update shippers
set phone = '1234567890', shippername = 'UPS unlimited'
where shipperid = 4;
