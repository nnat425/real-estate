  class ScheduleOfStocksController < ApplicationController

    # Current user was nil until I made the change reflected in the stackoverflow article
    # https://stackoverflow.com/questions/18423718/rails-devise-current-user-is-nil
    skip_before_action :verify_authenticity_token

    def index
      render json: current_user.schedule_of_stockes
    end 

    def create
      @schedule_of_stock = ScheduleOfStock.new(schedule_of_stock_params)
      @schedule_of_stock.user_id = current_user.id
      if @schedule_of_stock.save
       respond_to do |format|
        format.json  { render :json => @schedule_of_stock } 
      end
    else
        render json: {failed: "There was an error"}
      end 
    end

    def update
      @schedule_of_stock = ScheduleOfCash.find_by(params[:id])
      if @schedule_of_stock.update_attributes(schedule_of_stock_params)
        render json: {success: "Successfully updated"}
      else
        render json: {failure: "Could not updated for some reason"}
    end 
  end

    def destroy
      ScheduleOfCash.destroy(params[:id])
    end 


    private

    def schedule_of_stock_params
      params.require(:schedule_of_stock).permit(:amt_of_shares, :description_of_share, :marketable_value)
    end

  end 

