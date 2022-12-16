create or alter procedure get_unanswered_questions 
	as
	begin
		select * from dbo.getQuestionTables() where answerCount is null
	end
	go