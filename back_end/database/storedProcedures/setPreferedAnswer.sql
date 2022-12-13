create or alter procedure set_prefered_answer
	@answer_id int
	as
	begin
	update answers set vote = 1
	end
	go