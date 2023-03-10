FROM node:16

RUN apt-get update
RUN apt-get -y install libxpm4 libxrender1 libgtk2.0-0 libnss3 libgconf-2-4
RUN apt-get -y install xvfb gtk2-engines-pixbuf
RUN apt-get -y install xfonts-cyrillic xfonts-100dpi xfonts-75dpi xfonts-base xfonts-scalable

env CHROME_VERSION=110.0.5481.177-1

RUN wget --no-verbose -O /tmp/chrome.deb https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}_amd64.deb 
RUN apt install -y /tmp/chrome.deb
RUN rm /tmp/chrome.deb
RUN /opt/google/chrome/chrome --version

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
COPY . /usr/src/app

# https://github.com/npm/cli/issues/4896#issuecomment-1130222470
RUN git config --system url."https://github".insteadOf "git://github"
# https://github.com/lovell/sharp/issues/3207#issuecomment-1111837010
ENV npm_config_platform=linux
ENV npm_config_arch=x64

#ENV_VAR_HERE

RUN npm uninstall chromedriver
RUN npm install chromedriver --detect_chromedriver_version
RUN npm install
RUN cat package.json
RUN npm run start
RUN echo "completed"