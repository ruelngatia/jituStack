
create table 
	users(user_id int identity primary key not null, username varchar(255) unique not null, email varchar(255) unique not null, password varchar(255) not null, profile_image varchar(255));

