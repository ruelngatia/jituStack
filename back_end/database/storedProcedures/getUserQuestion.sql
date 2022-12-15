
create or alter procedure get_asked_question_by
	@user_id int
	as
	begin
		select * from  dbo.getQuestionTables()  where user_id = @user_id
	end
	go