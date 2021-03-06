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
       respond_to do |format|
        format.json  { render :json => @schedule_of_cash } 
      end
    else
        render json: {failed: "There was an error"}
      end 
    end

    def update
      @schedule_of_cash = ScheduleOfCash.find_by(params[:id])
      if @schedule_of_cash.update_attributes(schedule_of_cash_params)
        render json: {success: "Successfully updated"}
      else
        render json: {failure: "Could not updated for some reason"}
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

