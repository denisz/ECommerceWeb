FROM mhart/alpine-node:8

# Create app directory
RUN mkdir -p /src/app
WORKDIR /src/app

# Bundle app source
COPY package.json /src/app/
ADD public /src/app/public
ADD src /src/app/src

ENV API_URL http://95.213.236.60:8082

# Build
RUN yarn install && \
    yarn run build --production && \
    yarn global add serve && \
    rm -rf node_modules && \
    rm -rf public && \
    rm -rf src

EXPOSE 80

# defined in package.json
CMD ["serve", "-p 80", "-s", "./build"]
