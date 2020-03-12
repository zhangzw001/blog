From hub.boqii.com/bq/centos:v6.9.1

ENV PHP_DIR /usr/local/php
ENV WORK_DIR_tar /usr/loca/src/
ENV PHP_VERSION 5.2.17
ENV PHP_EXT_CURL curl-7.20.0
# php 及扩展 包
copy tar ${WORK_DIR_tar}

run cd ${WORK_DIR_tar} \
        && ls *gz|xargs -i tar -xf {} \
	&& cd ${PHP_EXT_CURL} \
                && ./configure --prefix=/usr/local/curl \
                && make \
                && make install \
   && cd ${WORK_DIR_tar} \
	&& cd php-${PHP_VERSION} \
	&& ln -s /usr/lib64/libpng.so /usr/lib/ \
	&& ln -s /usr/lib64/libjpeg.so /usr/lib/ \
	&& ln -s /usr/lib64/mysql/libmysqlclient.so.16.0.0 /usr/lib/libmysqlclient.so \
        && ./configure \
            --prefix=${PHP_DIR} \
            --with-config-file-path=${PHP_DIR}/etc \
            --with-mysql \
            --with-mysqli \
            --with-openssl \
            --enable-fastcgi \
            --enable-fpm \
            --enable-mbstring \
            --enable-bcmath \
            --with-freetype-dir \
            --with-jpeg-dir \
            --with-png-dir \
            --with-zlib-dir \
            --with-libxml-dir=/usr \
            --enable-xml \
            --with-mhash \
            --with-mcrypt \
            --enable-pcntl \
            --enable-sockets \
            --with-bz2 \
            --with-curl=/usr/local/curl \
            --with-curlwrappers \
            --enable-mbregex \
            --with-gd \
            --enable-gd-native-ttf \
            --enable-zip \
            --enable-soap \
            --with-iconv \
            --enable-pdo \
	&& make \
	&& make install \
    && cd ${WORK_DIR_tar} \
        && cd ImageMagick-6.9.0-4 \
                && ./configure --prefix=/usr/local/imagemagick \
                && make \
                && make install \
        && cd ${WORK_DIR_tar} \
        && cd imagick-3.0.1 \
                && ln -s /usr/local/imagemagick/include/ImageMagick-6 /usr/local/imagemagick/include/ImageMagick \
                && ${PHP_DIR}/bin/phpize \
                && ./configure --with-php-config=${PHP_DIR}/bin/php-config --with-imagick=/usr/local/imagemagick \
                && make \
                && make install \
    && cd ${WORK_DIR_tar} \
        && unzip phpredis-2.2.2.zip \
        && cd phpredis-2.2.2 \
                && ${PHP_DIR}/bin/phpize \
                && ./configure --with-php-config=${PHP_DIR}/bin/php-config \
                && make \
                && make install \
    && cd ${WORK_DIR_tar} \
        && cd zendopcache-7.0.5 \
                && ${PHP_DIR}/bin/phpize \
                && ./configure --with-php-config=${PHP_DIR}/bin/php-config \
                && make \
                && make install \
    && groupadd -r www \
    && useradd -M -s /sbin/nologin -r -g www www \
    && cd ${WORK_DIR_tar} \
   && \cp -r ${WORK_DIR_tar}/php-fpm.conf ${PHP_DIR}/etc/ \
   && \cp -r ${WORK_DIR_tar}/php.ini ${PHP_DIR}/etc/ \
   && rm -rf ${WORK_DIR_tar}  

copy supervisord-fpm.conf /etc/supervisord.conf
copy start.sh /root/start.sh

ENTRYPOINT ["/bin/sh", "/root/start.sh"]
