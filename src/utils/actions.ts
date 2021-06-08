import AWS from "aws-sdk";
import { getUser } from "./methods";

export const uploadToS3 = async (file: File) => {
  const config = {
    bucketName: `test-design`,
    region: "ap-south-1",
    accessKeyId: "AKIA47WXKUSTPAJY7XCN",
    secretAccessKey: "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",
  };

  AWS.config.update({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    region: config.region,
  });

  const s3 = new AWS.S3();

  try {
    const params = {
      Bucket: config.bucketName,
      Key: file.name,
      ContentType: file.type,
      Body: file,
      ACL: "public-read",
    };

    const res = await s3.putObject(params).promise();

    console.log(res);
    return res;
  } catch (exception) {
    console.log(exception);
    return exception;
  }
};

type actionTypes = "site_admin";

export const validateUserRoles = (action: actionTypes) => {
  const roles = getUser()?.roles ?? "";

  switch (action) {
    case "site_admin":
      return (
        roles.indexOf("site_admin") > -1 || roles.indexOf("superadmin") > -1
      );
    default:
      return true;
  }
};
