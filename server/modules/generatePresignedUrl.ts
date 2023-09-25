import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { PutObjectCommand, S3Client, S3ClientConfig } from '@aws-sdk/client-s3';
import { NextFunction, Request, Response } from 'express';

export const generateUrl = async (req: Request, res: Response, next: NextFunction) => {
  const s3Configuration: S3ClientConfig = {
    credentials: {
      accessKeyId: process.env.ACCESS_KEY!,
      secretAccessKey: process.env.SECRET_KEY!,
    },
    region: process.env.REGION,
  };

  const s3 = new S3Client(s3Configuration);

  const Key = `${res.locals.userId}/${res.locals.song.albumId}/${res.locals.song.id}`;

  const s3Params = {
    Bucket: process.env.BUCKET_NAME,
    Key,
    ContentType: 'audio/mpeg',
  };

  res.locals.UploadUrl = await await getSignedUrl(s3, new PutObjectCommand(s3Params), {
    expiresIn: 60,
  });

  next();
};
