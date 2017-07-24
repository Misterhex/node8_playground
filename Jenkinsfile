pipeline {
    agent { 
        docker {
            image 'node:8.2.1'
            args  '-e HOME=. -e npm_config_cache=npm-cache'
        }
    }
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
