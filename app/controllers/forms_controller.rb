class FormsController < ApplicationController
  
  def financial_statement
  	@applicant_cash_in_banks = current_user.schedule_of_cashes.where(type_of_app:"applicant").map(&:account_balance).inject(0,&:+)
  	@co_applicant_cash_in_banks = current_user.schedule_of_cashes.where(type_of_app:"co-applicant").map(&:account_balance).inject(0,&:+)
  end 

end
