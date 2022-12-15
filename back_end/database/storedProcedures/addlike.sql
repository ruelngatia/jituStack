create or alter procedure addlike 
	@user_id int,
	@answer_id int
	as 
	begin
		if (
			exists((select dbo.check_existing_like(@user_id,@answer_id)  where  dbo.check_existing_like(@user_id,@answer_id) != 1))
		and
			exists((select dbo.check_existing_dislike(@user_id,@answer_id)  where dbo.check_existing_dislike(@user_id,@answer_id) != 1))
			)

			insert into likes(answer_id,user_id,liking) values (@user_id,@answer_id,1)
		else if (exists(select dbo.check_existing_dislike(@user_id,@answer_id)  where dbo.check_existing_dislike(@user_id,@answer_id) = 1))
			update likes set liking = 1 , dislikes = 0 where user_id = @user_id and answer_id = @answer_id		
	end
	go
		