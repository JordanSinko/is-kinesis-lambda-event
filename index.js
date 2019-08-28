module.exports = function(event) {
  return (
    event &&
    event.Records &&
    event.Records[0] &&
    event.Records[0].eventSource === "aws:kinesis" &&
    event.Records[0].kinesis &&
    event.Records[0].eventID &&
    event.Records[0].invokeIdentityArn &&
    event.Records[0].eventVersion &&
    event.Records[0].eventName &&
    event.Records[0].eventSourceARN &&
    event.Records[0].awsRegion &&
    event.Records[0].kinesis.partitionKey &&
    event.Records[0].kinesis.kinesisSchemaVersion &&
    event.Records[0].kinesis.data &&
    event.Records[0].kinesis.sequenceNumber &&
    event.Records[0].kinesis.approximateArrivalTimestamp
  );
};
