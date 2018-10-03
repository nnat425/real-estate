  class ScheduleOfCashesController < ApplicationController

    # Current user was nil until I made the change reflected in the stackoverflow article
    # https://stackoverflow.com/questions/18423718/rails-devise-current-user-is-nil
    skip_before_action :verify_authenticity_token

  def index
    render json: current_user.schedule_of_cashes
  end 

  def create
    @schedule_of_cash = ScheduleOfCash.new(schedule_of_cash_params)
    @schedule_of_cash.user_id = current_user.id
    if @schedule_of_cash.save
        render json: {passed: "It was created!"}, status: 200
    else
      render json: {failed: "There was an error"}
    end 
  end

  def destroy
    ScheduleOfCash.destroy(params[:id])
  end 


private

  def schedule_of_cash_params
    params.require(:schedule_of_cash).permit(:type_of_app, :type_of_card, :type_of_acct, :account_balance)
  end

end 

