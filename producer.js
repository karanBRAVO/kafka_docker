const { Kafka, Partitioners } = require("kafkajs");
const readlineSync = require("readline-sync");

const clientId = "client-id-1";
const brokers = ["localhost:9092"];

const kafka = new Kafka({ clientId, brokers });

async function main() {
  const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner,
  });

  await producer.connect();

  let topic_name = readlineSync.question("Enter topic name: ");
  let msg = readlineSync.question("Enter your message: ");

  await producer.send({
    topic: topic_name,
    messages: [{ key: `key-${Math.random()}`, value: `[MSG] ${msg}` }],
  });

  await producer.disconnect();
}

main();
