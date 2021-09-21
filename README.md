"# docker-template"

# Run Development

docker-compose -f docker-compose-dev.yml up --build

# Run Staging

docker-compose -f docker-compose-staging.yml up --build

# Run production

docker-compose -f docker-compose.yml up --build

# Composer

docker-compose -f docker-compose-dev.yml run --rm composer ----- --ignore-platform-reqs

Public Key: ----------- Private Key: ----------

# Clear out volumes

docker system prune -a --volumes

# Get the log information about a container/image

docker logs <id>

# SSH into docker container

docker exec -it <name> ash

# Disable Elastic Search

php -d memory_limit=-1 bin/magento module:disable
{Magento_Elasticsearch,Magento_InventoryElasticsearch,Magento_Elasticsearch6,Magento_Elasticsearch7}

# Add alternate to Elastic Search

composer config repositories.swissup composer https://docs.swissuplabs.com/packages/
composer require swissup/module-search-mysql-legacy --prefer-source --ignore-platform-reqs php -d memory_limit=-1
bin/magento module:enable Swissup_SearchMysqlLegacy Swissup_Core

# Disable Two FactorAuth

php -d memory_limit=-1 bin/magento module:disable Magento_TwoFactorAuth php -d memory_limit=-1 bin/magento cache:flush

# Standard Magento CLI commands

php -d memory_limit=-1 bin/magento setup:upgrade php -d memory_limit=-1 bin/magento setup:di:compile php -d
memory_limit=-1 bin/magento indexer:reindex catalogsearch_fulltext

# Additional Commands

Sample Data: php -d memory_limit=-1 bin/magento sampledata:deploy Disable 2Factor: php -d memory_limit=-1 bin/magento
module:disable Magento_TwoFactorAuth Disable Elasticsearch: php -d memory_limit=-1 bin/magento config:set
catalog/search/engine none Change BaseUrl: php -d memory_limit=-1 bin/magento setup:store-config:set
--base-url="http://magento-blinds.local/"  
Change Secure BaseUrl: php -d memory_limit=-1 bin/magento setup:store-config:set
--base-url-secure="https://46b90d815995.ngrok.io/"  
Flush Cache Storage: php -d memory_limit=-1 bin/magento cache:clean Flush Magento cache: php -d memory_limit=-1
bin/magento cache:flush Flush Both: php -d memory_limit=-1 bin/magento cache:clean && php -d memory_limit=-1 bin/magento
cache:flush Re-index: php -d memory_limit=-1 bin/magento indexer:reindex Show Mode: php -d memory_limit=-1 bin/magento
deploy:mode:show Set Developer Mode: php -d memory_limit=-1 bin/magento deploy:mode:set developer Check Modules: php -d
memory_limit=-1 bin/magento module:status Add template CSS and JS: php -d memory_limit=-1 bin/magento setup:
static-content:deploy -f

php -d memory_limit=-1 bin/magento setup:install \
--cleanup-database \
--admin-firstname= \
--admin-lastname= \
--admin-email= \
--admin-user=\
--admin-password='' \
--base-url=http://magento-dev.local \
--base-url-secure=https://magento-dev.local \
--backend-frontname=admin \
--db-host=mysql \
--db-name=magento \
--db-user=magento_user \
--db-password=password \
--use-rewrites=1 \
--language=en_US \
--currency=USD \
--timezone=America/New_York \
--use-secure-admin=1 \
--admin-use-security-key=1 \
--session-save=files \
--elasticsearch-host=elasticsearch \
--elasticsearch-port=9200 \
--use-sample-data

php -d memory_limit=-1 bin/magento admin:user:create --admin-user= --admin-password= --admin-email= --admin-firstname=
--admin-lastname=

# ENV SETUP

SITE=magento
FRONTEND_PORT=80
FRONTEND_SSL_PORT=443
FRONTEND_SSH_PORT=23
MYSQL_PORT=3307
PHP_PORT=9000
REDIS_PORT=6380
REDIS_SESSION_PORT=6381
MYSQL_DATABASE=magento
MYSQL_USER=magento_user
MYSQL_PASSWORD=password
MYSQL_ROOT_PASSWORD=secret_password
SERVICE_TAGS=dev
SERVICE_NAME=mysql
WEB_ALIAS_DOMAIN=magento-dev.local
WEB_DOCUMENT_ROOT="/app/pub"
PHP_DATE_TIMEZONE=EST
PHP_DISPLAY_ERRORS=1
PHP_MEMORY_LIMIT=2048M
PHP_MAX_EXECUTION_TIME=36000
PHP_POST_MAX_SIZE=500M
PHP_UPLOAD_MAX_FILESIZE=1024M
MAILHOG_PORT=1026
MAILHOG_SSL_PORT=8026
ELASTICSEARCH_PORT=9201
