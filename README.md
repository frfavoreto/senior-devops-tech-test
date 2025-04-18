GENERAL INFO:

To deploy this application you need to have:

- An available EKS Cluster, acessible via kubectl
- A Jenkins server with:
    - nodejs and npm installed
    - docker installed and relevant user permissions given (sudo usermod -aG docker jenkins)
    - kubectl and helm
    - kubeconfig file at /var/lib/jenkins/.kube/config (as per 'KUBECONFIG' variable in Jenkinsfile)
    - AWS Credentials plugin
- Configure your AWS Credentials and replace AWS_REGION and ECR_REPO values on Jenkinsfile

Configure your Jenkins server to use 'jenkins/Jenkinsfile'

There are 2 ways to deploy this application from Jenkins Pipeline (choose which one you prefer by editing the Jenkinsfile):

    1 - Directly via 'kubectl apply', from the manifests in k8s/ directory;
    2 - Via Helm Chart in helm-chart/server-app-cartrawler directory


The application will be deployed and exposed via a Kubernetes Service type NodePort
