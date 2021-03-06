class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index

    businesses = params[:bounds] ? Business.in_bounds(params[:bounds]) : Business.all
    if params[:category]
      businesses = businesses.where(category: params[:category])
    end
    @businesses = businesses.includes(:reviews)

    render :index
  end

  def show
    @business = Business.find(params[:id])
  end

  def create
    @business = Business.create!(business_params)
    render :show
  end

  private

  def business_params
    params.require(:business).permit(:lat, :lng, :body, :pic_url, :name, :category, :address, :phone, :bounds)
  end

end
