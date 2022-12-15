create or alter procedure loginUser 
	@username varchar(255)
	as 
	begin
		select user_id, username,profile_image,password from users where username = @username 
	end
	go