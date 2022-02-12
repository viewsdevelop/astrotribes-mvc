class ApplicationController < ActionController::API
    # Add this line to set the Content-Type header for all responses
    # set :default_content_type, 'application/json'
    
    def respond
        message = { "body": "Hello from the Back End!" }
        render json: message
    end
end
