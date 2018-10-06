class FormsController < ApplicationController
  
  def financial_statement
  	@test = current_user.schedule_of_cashes.first.account_balance
  end 

end
