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

### 4. Set Bucket Permissions for Public Access

1. In the **Permissions** tab of your S3 bucket, scroll down to the **Object ownership** section.
2. Click on **Edit**.
3. Enable **ACL (Access Control List)**.
4. Check the acknowledgment box.
5. After enabling ACL, select all the contents in your S3 bucket.
6. Click on **Actions** and choose **Make public using ACL**.
7. Scroll up to the **Block public access** section in the same **Permissions** tab.
8. Click on **Edit**.
9. Disable **Block all public access** by unchecking the box. (Make sure you're aware of the risks associated with this action).
10. Click **Save changes** to apply the permissions.

### 5. Access Your Static Website

1. After enabling static website hosting, go to all the files uploaded in your bucket.
2. Go to the `index.html` file in your S3 bucket, and find the **object URL** for the file you want to host.
3. Copy the **object URL** and paste it in your browser to view your static website.

For example, here's a link to a static web application hosted on an S3 bucket:
[Static Website Hosted on S3](https://hostingweb.s3.ap-south-1.amazonaws.com/web.html)

### 6. (Optional) Set Up a Custom Domain

To use a custom domain (e.g., `www.example.com`), you need to:

1. Create a CNAME record in your domain’s DNS settings that points to the S3 website endpoint.
2. If using HTTPS, consider using AWS CloudFront for SSL.

## Troubleshooting

- Ensure the **Index document** and **Error document** are set correctly.
- Double-check the S3 bucket permissions to ensure it's publicly accessible.

## Conclusion

Your static website is now live on AWS S3.
