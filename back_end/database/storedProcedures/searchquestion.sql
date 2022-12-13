create or alter procedure search_question 
	@question varchar(255)
	as
	begin
	select * from dbo.getQuestionTables() where question_title like '%' + @question +'%';
	end
	go