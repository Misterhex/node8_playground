pipeline {
    agent { docker 'node:8.2.1' }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
