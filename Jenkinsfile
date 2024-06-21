pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Your build steps here
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy to S3') {
            steps {
                script {
                    // Define your AWS credentials and region
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-id']]) {
                        // Use the s3Upload step to upload files to S3 bucket
                        s3Upload(bucket: 'my-web1-app-bucket', includePathPattern: '**/*', workingDir: 'dist/')
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment to S3 successful!'
        }
        failure {
            echo 'Deployment to S3 failed!'
        }
    }
}
