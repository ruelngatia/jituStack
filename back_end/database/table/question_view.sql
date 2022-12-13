create table
	question_views(
		question_view_id int identity not null primary key,
		querstion_id int not null foreign key references questions(questions_id),
		user_id int not null foreign key references users(user_id),
		view_date date
	)