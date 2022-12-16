create or alter procedure get_featured_questions 
	@user_id int
	as
	begin
		
		with ans as(
			select question_id,user_id from answers where user_id = 2
		)
		select q.questions_id,q.user_id,q.username,q.profile_image,q.date_asked,q.question_title,q.question,q.viewCount,q.answerCount from dbo.getQuestionTables() as q
		inner join ans
		on ans.question_id = q.questions_id

	end
	go