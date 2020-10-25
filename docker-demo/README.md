Create a Docker account in hub.docker.com.<br/>
Create a new repository in Docker hub.<br/>
Create a new Spring-Boot project and include Spring-Boot MVC and Spring REST dependencies.<br/>
Create a new REST controller say TestController.java.<br/>
Create a method with @GetMapping annotation that returns some text.<br/>
Use Maven build to build the project.<br/>
Maven build generated a jar in target folder. eg. docker-demo.jar.<br/>
Create a file called Dockerfile without any extensions. Enter the required configurations in this file.<br/>
Open terminal and log in into docker using docker login command.<br/>
docker images command lists all the images available.<br/>
Navigate to the project location ie. to the path where your Dockerfile is present.<br/>
Tag the jar file using docker tag project_name docker_id/repo_name.<br/>
Push the docker image using docker push docker_id/repo_name command.<br/>
The image can be viewed in docker hub.<br/>
Pull and run the image using docker run -p 8080:8080 docker_id/repo_name command. This runs the docker image in 8080 port.<br/>
Open the browser and type localhost:8080/test-docker. Here /test-docker is the path configured in TestController.java.<br/>
<br/>
Steps to setup kubernetes:-<br/>
Create a yaml file and type in the configurations required.<br/>
Create a kubernetes cluster.<br/>
Open the kubernetes terminal in the browser.<br/>
A command pops up. Just press enter.<br/>
Upload the yaml file.<br/>
Run kubectl apply -f docker-k8s-demo.yaml. This will create the pods(containers).<br/>
Click on workload option in the left to view pod details.<br/>
Click on expose button to expose the project as a service.<br/>
Enter the target port number. eg. 8080.<br/>
A URL will be provided which can be entered in the browser to access the microservice.<br/>
Delete the cluster once you are done.<br/>
