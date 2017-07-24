pipeline {
    
    docker.image('openjdk:8').inside {
    
    withEnv([
        'npm_config_cache=npm-cache',
        'HOME=.',
        ]) {
                
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
    }
}
