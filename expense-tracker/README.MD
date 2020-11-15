**Expense Tracker**

**Functionality:**
Expense tracker app can be used to:
* Manage expenses and income
* Manage bill reports
* View Expense reports
* Delete expense reports

**Tech Stack used:**
* Spring-Boot (Used Spring REST)
* Spring Data-JPA
* React JS (Extensively used state management, React hooks such as useState() and useEffect())
* Docker [Docker image URL](https://hub.docker.com/layers/krishna5555/expense-tracker/latest/images/sha256-3c36108b21b760c386c6824ff3e1deefb474cc1df7f0998b4d6cdbb6645d81e0?context=repo&tab=layers)
* Kubernetes

**Below image is a high level overview of the application:**
![image](https://user-images.githubusercontent.com/25320977/99179952-2661bc00-2748-11eb-9fa1-2203e2110d02.png)

**Flow from end user's point of view**:
* User opens the Expense tracker website which is a React app.
* User enters all the mandatory fields and then clicks on submit. I have added required validations to check if the user has entered all the fields.
* The submit request is sent to the API exposed by kubernetes.
* Kubernetes master which acts as a load balancer forwards the request to a node.
* Each worker node has multiple pods with the docker container.
* The application’s backend logic(Spring-Boot project) resides in the docker container.
* All the backend-logic to add, modify, delete, view the expenses are written in Java(Spring-Boot app).
* Once the response is ready, it is sent back to the React app and shown to the user.

**Below are some of the screenshots of the project:**
**Expense Tracker Dashboard:**
![image](https://user-images.githubusercontent.com/25320977/99179960-311c5100-2748-11eb-9dee-aa17b72e833b.png)

**Kubernetes cluster:**
![image](https://user-images.githubusercontent.com/25320977/99179969-3e394000-2748-11eb-9c48-c06d7203570a.png)

**Kubernetes workload:**
![image](https://user-images.githubusercontent.com/25320977/99179979-4e511f80-2748-11eb-86b5-2ad868cad6fa.png)
