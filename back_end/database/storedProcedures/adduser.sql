create or alter procedure addUser
	@username varchar(255), @email varchar(255), @password varchar(255)
	as
	begin
		insert into users(username,email,password) values (@username , @email , @password)
	end
	go
	