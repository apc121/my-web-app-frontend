pipeline {
  agent any

  environment {
    NODE_HOME = tool name: 'nodejs'
    PATH = "${env.NODE_HOME}/bin:${env.PATH}"
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/apc121/my-web-app-frontend.git'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        withAWS(credentials: 'aws-id', region:'ap-south-1') {
          s3Upload(bucket:'my-web1-app-bucket', workingDir: 'dist/', includePathPattern: '**/*')
        }
      }
    }
  }

  post {
    success {
      echo 'Frontend deployment successful!'
    }
    failure {
      echo 'Frontend deployment failed!'
    }
  }
}
