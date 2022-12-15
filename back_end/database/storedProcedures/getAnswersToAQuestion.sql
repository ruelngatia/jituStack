create or alter procedure getAnswersToQuestion
	@question_id int
	as
	begin
		select * from answers where question_id = @question_id 
	end
	go