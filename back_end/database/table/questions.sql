create table
	questions(
	questions_id int identity primary key not null, 
	user_id int not null foreign key references users(user_id), 
	question_title varchar(255) not null,
	date_asked date not null, question text not null
	);
alter table questions add  question_delete binary
alter table questions alter column question_delete bit 
alter table questions add question_title varchar(255) not null