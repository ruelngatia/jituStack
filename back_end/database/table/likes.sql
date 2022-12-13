create table
	likes(
		like_id int identity not null primary key,
		answer_id int not null foreign key references answers(answer_id),
		user_id int not null foreign key references users(user_id)
	);

alter table likes add liking bit
alter table likes add dislikes bit 
