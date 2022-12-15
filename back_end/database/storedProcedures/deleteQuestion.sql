create or alter procedure delete_question
	@question_id int
	as
	begin
		update questions set question_delete = 1 where questions_id = @question_id
	end
	go