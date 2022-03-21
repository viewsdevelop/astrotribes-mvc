class ApplicationController < ActionController::API
    # Add this line to set the Content-Type header for all responses
    # set :default_content_type, 'application/json'
    
    # skip_before_action :verify_authenticity_token

    def respond
        message = { "body": "Hello, Doug!" }
        render json: message
    end
end
