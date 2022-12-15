create or alter procedure addAnswer
	@question_id int,
	@user_id int,
	@answer text
	as
	begin
		insert into answers(question_id,user_id,answer) values (@question_id,@user_id,@answer)
	end
	go