Due to the unavailability of an AWS account to perform tests on EKS, ECR and IaC deployments (Terraform/CDK) I tested it locally on my minikube cluster, with a Jenkins server running on a VM.
I made an assumption that here we are more interested in just deploying the application using CI/CD, not managing the infrastructure to execute it (k8s cluster, VPC components, etc), which simplifies the whole solution of this test.

There is no actual unit test developed here, due to some lack of my Nodejs dev skills, even though they are callable in the pipeline. 

I opted not to use a Kubernetes plugin for Jenkins, due to some difficulty in finding a reliable and secure one (Kubernetes Deploy plugin is deprecated for some time). In order to use something more reliable long-term, I designed the deployments to use 'kubectl' or 'helm'. 

In a deployment on EKS we would need to refresh the EKS token to access the target cluster with 'aws eks get-token'. This would also require the proper AWS CLI credentials configured in the Jenkins host.

In order to further improve security to the EKS cluster, the assumed IAM Role in the target AWS Account should restrict the assuming Principals in its Assume Role Policy, restricting access to the Jenkins node and privileged users only. This reduces the exposure surface to any potential compromise of the kubeconfig and AWS credentials. Access to the Jenkins server should also be hardned. 

You can see the commented line in Jenkinsfile:

    // DOCKER_IMAGE_NAME = 'frfavoreto/server-app'

    this is from my tests pushing the image to DockerHub instead of ECR. The image is still publicly available at docker.io/frfavoreto/server-app:latest

There is of course a lot to improve, but as explained above I tried to simplify it and focus on the essentials. Hope this is fine!

Best regards
