const { Kafka } = require("kafkajs");
const readlineSync = require("readline-sync");

const clientId = "client-id-1";
const brokers = ["localhost:9092"];

const kafka = new Kafka({ clientId, brokers });

async function main() {
  let group_id = readlineSync.question("Enter group id: ");

  const consumer = kafka.consumer({ groupId: group_id });

  await consumer.connect();

  process.on("SIGINT", async () => {
    await consumer.disconnect();
  });
  process.on("SIGTERM", async () => {
    await consumer.disconnect();
  });

  let topic_name = readlineSync.question("Enter topic name: ");

  await consumer.subscribe({
    topic: topic_name,
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        key: message.key.toString(),
        value: message.value.toString(),
        headers: message.headers,
      });
    },
  });
}

main();
