create or alter procedure frequently_answered_question
	as
	begin
		select * from  dbo.getQuestionTables() order by answerCount asc
	end
	go