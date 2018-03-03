FROM mhart/alpine-node:8
ENV API_URL http://95.213.236.60:8082

ARG SSH_PRIVATE_KEY
# Copy over private key, and set permissions
RUN echo "ssh key: ${SSH_PRIVATE_KEY}" && \
# Make ssh dir
    mkdir -p /root/.ssh && \
    echo "${SSH_PRIVATE_KEY}" > /root/.ssh/id_rsa && \
    chmod 400 /root/.ssh/id_rsa && \
# Create known_hosts
    touch /root/.ssh/known_hosts && \
# Add bitbuckets key
    apk add --no-cache git openssh-client && \
#RUN echo "Host bitbucket.org\n\tStrictHostKeyChecking no\n" >> /root/.ssh/config
    ssh-keyscan bitbucket.org >> ~/.ssh/known_hosts && \
# Process
    git clone git@bitbucket.org:dzaycevteam/web.git app && \
    cd app && \
    yarn install && \
    yarn run build --production && \
    yarn global add serve && \
    rm -rf node_modules && \
    rm -rf public && \
    rm -rf src && \
# Remove ssh key from image
    rm /root/.ssh/id_rsa
# Port
EXPOSE 80
# defined in package.json
CMD ["serve", "-p 80", "-s", "./build"]
