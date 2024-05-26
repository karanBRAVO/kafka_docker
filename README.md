# KAFKA-DOCKER-NODEJS

In this project, I have created a simple setup codebase for the learners and developers so that they can easily get started and as quick as possible.

## What is Apache-Kafka ???

Apache Kafka is a distributed streaming platform designed for building real-time streaming data pipelines and applications. It provides a scalable, fault-tolerant infrastructure for handling high-volume data streams.

## Total API's

1. Producer API
2. Consumer API
3. Streaming API
4. Connector API

## System Requirements

- Docker

- NodeJs

## Usage

1. Clone the repository

    ```bash
    git clone https://github.com/karanBRAVO/kafka_docker.git
    ```

2. change the directory and install the dependencies

    ```bash
    cd kafka_docker && npm i
    ```

3. roll the containers

    ```bash
    docker-compose up -d
    ```

4. Producing messages into the topics

    ```bash
    node producer.js
    ```

5. Consuming messages from the topics

    ```bash
    node consumer.js
    ```

## Dependencies

- `kafkajs` -> for handling kafka related stuff.

- `readline-sync` -> for taking input via console

## Executables in Kafka

1. Enter into the docker container `broker`

    ```bash
    docker exec -it broker bash
    ```

2. Run the executables

    1. list topics

        ```bash
        kafka-topics --bootstrap-server localhost:9092 --list
        ```

    2. Alter partitions

        ```bash
        kafka-topics --bootstrap-server localhost:9092 --alter --topic my-topic --partitions new-partition-count
        ```

        **note:** replace `new-partition-count` with actual number of partitions you want (eg: 3) and `my-topic` with actual topic in which you want to create new partitions

    3. Increase the number of replicas

        ```bash
        kafka-topics --bootstrap-server localhost:9092 --alter --topic my-topic --replication-factor new-replication-factor
        ```

        **note:** replace `new-replication-factor` with actual number of replicas you want (eg: 3) and `my-topic` with actual topic in which you want to create new replicas

    4. describe the `consumer-groups`

        ```bash
        kafka-consumer-groups --bootstrap-server localhost:9092 --describe --group your-consumer-group
        ```

        **note:** replace `your-consumer-group` with the actual consumer group name you want to list

    5. list all the `consumer-groups`

        ```bash
        kafka-consumer-groups --bootstrap-server localhost:9092 --list
        ```
