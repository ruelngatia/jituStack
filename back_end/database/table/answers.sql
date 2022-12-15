create table 
	answers(
		answer_id int identity primary key not null, 
		question_id int not null foreign key references questions(questions_id), 
		user_id int not null foreign key references users(user_id),
		answer text not null ,
		dislikes int,
		likes int,
		vote binary
		)

alter table answers drop column likes
alter table answers drop column dislikes
alter table  answers alter column vote bit
