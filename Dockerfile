FROM nginx:alpine

# Copy the build output
COPY dist /usr/share/nginx/html

# Custom nginx config to handle redirects if needed, 
# although Traefik usually handles www -> naked and http -> https.
# We'll stick to a simple config and let Traefik do the heavy lifting.

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
