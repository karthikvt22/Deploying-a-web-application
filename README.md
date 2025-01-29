# Hosting a Static Website on Amazon S3

This guide will walk you through the steps to host a static website using an Amazon S3 bucket.

## Prerequisites

1. **AWS Account**: Ensure you have an active AWS account. If not, sign up [here](https://aws.amazon.com/).
2. **AWS CLI**: Install and configure the [AWS CLI](https://aws.amazon.com/cli/) for easy interaction with AWS services.
3. **S3 Bucket**: You must have an S3 bucket ready to use.

## Steps

### 1. Create an S3 Bucket

1. Go to the AWS S3 console: [S3 Console](https://console.aws.amazon.com/s3/).
2. Click on **Create bucket**.
3. Provide a unique name for your bucket. Make sure it follows the S3 bucket naming conventions.
4. Choose a region.
5. Leave the default options for now and click on **Create bucket**.

### 2. Upload Your Website Files

1. Navigate to your S3 bucket in the AWS Management Console.
2. Click **Upload**.
3. Select the HTML, CSS, JavaScript, and any other files needed for your website.
4. Click **Next** and set any permissions as needed.
5. Click **Upload** to upload the files to the S3 bucket.

### 3. Enable Static Website Hosting

1. In the S3 bucket settings, go to the **Properties** tab.
2. Scroll down to the **Static website hosting** section.
3. Select **Use this bucket to host a website**.
4. Set the **Index document** (typically `index.html`) and **Error document** (optional, typically `error.html`).
5. Click **Save changes**.

### 4. Set Bucket Policy for Public Access

To allow public access to the files, you need to set the appropriate permissions.

1. Go to the **Permissions** tab in your S3 bucket.
2. Click on **Bucket policy**.
3. Add the following policy to allow public access to all files:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
       }
     ]
   }
