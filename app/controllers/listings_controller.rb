class ListingsController < ApplicationController

def index
    render json: Listing.all
  end

  def create
    listing = Listing.create(listing_params)
    render json: listing
  end

  def destroy
    Listing.destroy(params[:id])
  end

  def update
    listing = Listing.find(params[:id])
    listing.update_attributes(listing_params)
    render json: listing
  end

  private

  def listing_params
    params.require(:listing).permit(:id, :address, :number_of_bedsrooms, :minimum_price, :maximum_price)
  end

end
