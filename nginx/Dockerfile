# Use the official NGINX image as the base image
FROM nginx:alpine

# Copy the custom nginx.conf file to the NGINX configuration directory
COPY nginx.conf /etc/nginx/nginx.conf

# Expose ports 80 (HTTP) and 443 (HTTPS)
EXPOSE 80 443

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]
