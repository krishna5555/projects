package snippet;

public class Snippet {
	Create a Docker account in hub.docker.com.
	Create a new repository in Docker hub.
	Create a new Spring-Boot project and include Spring-Boot MVC and Spring REST dependencies.
	Create a new REST controller say TestController.java.
	Create a method with @GetMapping annotation that returns some text.
	Use Maven build to build the project.
	Maven build generated a jar in target folder. eg. docker-demo.jar.
	Create a file called Dockerfile without any extensions. Enter the required configurations in this file.
	Open terminal and log in into docker using docker login command.
	docker images command lists all the images available.
	Navigate to the project location ie. to the path where your Dockerfile is present.
	Tag the jar file using docker tag project_name docker_id/repo_name.
	Push the docker image using docker push docker_id/repo_name command.
	The image can be viewed in docker hub.
	Pull and run the image using docker run -p 8080:8080 docker_id/repo_name command. This runs the docker image in 8080 port.
	Open the browser and type localhost:8080/test-docker. Here /test-docker is the path configured in TestController.java.
	
	Steps to setup kubernetes:-
	Create a yaml file and type in the configurations required.
	Create a kubernetes cluster.
	Open the kubernetes terminal in the browser.
	A command pops up. Just press enter.
	Upload the yaml file.
	Run kubectl apply -f docker-k8s-demo.yaml. This will create the pods(containers).
	Click on workload option in the left to view pod details.
	Click on expose button to expose the project as a service.
	Enter the target port number. eg. 8080.
	A URL will be provided which can be entered in the browser to access the microservice.
	Delete the cluster once you are done.
}

