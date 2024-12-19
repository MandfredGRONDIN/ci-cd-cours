IMAGE_NAME = node-app
NETWORK_NAME = mynetwork
MYSQL_CONTAINER = mysql-container
NODE_CONTAINER = node-container
MYSQL_PASSWORD = password
MYSQL_ROOT_PASSWORD = password
MYSQL_DATABASE = testdb
PORT = 3000

$(NETWORK_NAME):
	docker network inspect $(NETWORK_NAME) >/dev/null 2>&1 || docker network create $(NETWORK_NAME)

build: $(NETWORK_NAME)
	docker build -t $(IMAGE_NAME) .

mysql:
	docker run -d --name $(MYSQL_CONTAINER) --network $(NETWORK_NAME) \
		-e MYSQL_ROOT_PASSWORD=$(MYSQL_ROOT_PASSWORD) \
		-e MYSQL_DATABASE=$(MYSQL_DATABASE) \
		-v $(PWD)/init.sql:/docker-entrypoint-initdb.d/init.sql \
		mysql:8.0

node:
	@sleep 15 && docker run -d --name $(NODE_CONTAINER) --network $(NETWORK_NAME) -p $(PORT):3000 $(IMAGE_NAME)

run: mysql node

clean:
	docker stop $(NODE_CONTAINER) $(MYSQL_CONTAINER)
	docker rm $(NODE_CONTAINER) $(MYSQL_CONTAINER)
	docker network rm $(NETWORK_NAME)
