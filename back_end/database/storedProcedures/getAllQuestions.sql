create or alter procedure get_all_questions
	as
	begin
	select * from dbo.getQuestionTables()
	end
	go