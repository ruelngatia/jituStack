 create or alter function check_existing_dislike (@user_id int, @answer_id int)
	returns bit
	as
	begin
	 return (select count(like_id) from likes where user_id = @user_id and answer_id = @answer_id and dislikes = 1)
 end