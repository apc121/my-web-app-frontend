pipeline {
    agent any
    environment {
        AWS_ACCESS_KEY_ID = 'AKIA6ODUZQ3Y7FT2ANU7'
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
   }
    stages {
        stage('Build') {
            steps {
                // Your build steps here
                sh 'npm install'
                sh 'npm run build'
            }
        }

            steps {
                stage('Deploy to S3') {
            steps {
                withCredentials([string(credentialsId: 'your-aws-access-key-id', variable: 'AWS_ACCESS_KEY_ID'),
                                 string(credentialsId: 'your-aws-secret-access-key', variable: 'AWS_SECRET_ACCESS_KEY')]) {
                    s3Upload(bucket: 'my-web1-app-bucket', includePathPattern: '**/*', workingDir: 'dist/')
                }
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
