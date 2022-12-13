create or alter procedure addComment
	@user_id int,
	@answer_id int,
	@comment text
	as
	begin
		insert into comments(user_id,answer_id,comment,date_commented) values (@user_id,@answer_id,@comment,GETDATE())
	end
	go