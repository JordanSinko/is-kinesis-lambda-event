const isKinesisLambdaEvent = require("..");

test("given a kinesis event; then it should return true", () => {
  const actual = isKinesisLambdaEvent({
    Records: [
      {
        kinesis: {
          partitionKey: "partitionKey-03",
          kinesisSchemaVersion: "1.0",
          data: "SGVsbG8sIHRoaXMgaXMgYSB0ZXN0IDEyMy4=",
          sequenceNumber: "49545115243490985018280067714973144582180062593244200961",
          approximateArrivalTimestamp: 1428537600
        },
        eventSource: "aws:kinesis",
        eventID: "shardId-000000000000:49545115243490985018280067714973144582180062593244200961",
        invokeIdentityArn: "arn:aws:iam::EXAMPLE",
        eventVersion: "1.0",
        eventName: "aws:kinesis:record",
        eventSourceARN: "arn:aws:kinesis:EXAMPLE",
        awsRegion: "us-east-1"
      }
    ]
  });
  expect(actual).toBeTruthy();
});

test("given a non kinesis event; then it should return false", () => {
  const actual = isKinesisLambdaEvent({ phrase: "Hello from Kinesis!" });
  expect(actual).toBeFalsy();
});
