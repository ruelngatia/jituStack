create table 
	comments(comment_id int identity primary key not null,
		user_id int not null foreign key references users(user_id),
		answer_id int foreign key references answers(answer_id),
		comment text not null,
		date_commented date
	)
