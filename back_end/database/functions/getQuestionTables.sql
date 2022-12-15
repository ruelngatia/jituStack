
 create or alter function getQuestionTables()
	returns table
	as 
	return
		with viewCount as
	(
		select question_views.question_id , count(question_views.user_id) as viewCount
		from question_views
		group by question_views.question_id
	),
	an as(
		select question_id ,count(user_id) as answerCount from answers
		group by question_id
		
	),
	Qusers as(
		select user_id,username,profile_image  from users
	)
	 select questions.questions_id,questions.user_id,Qusers.username,Qusers.profile_image,date_asked,question_title,question,viewCount,answerCount from questions
		left outer join viewCount
		on questions.questions_id = viewCount.question_id
		left outer join an
		on an.question_id = questions.questions_id
		inner join Qusers
		on Qusers.user_id = questions.user_id 
		where questions.question_delete is null;
