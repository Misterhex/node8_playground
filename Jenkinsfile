pipeline {
    agent {
        dockerfile {
            filename "node:8.2.1"
            args "-e npm_config_cache=npm-cache -e HOME=."
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
