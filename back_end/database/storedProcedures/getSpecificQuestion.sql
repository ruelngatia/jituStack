create or alter procedure get_question
	@question_id int
	as
	begin	
		select * from dbo.getQuestionTables() where questions_id = @question_id 
	end
	go