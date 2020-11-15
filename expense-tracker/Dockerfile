FROM java:8

EXPOSE 8080

ADD target/expense-tracker.jar expense-tracker.jar

ENTRYPOINT ["java","-jar","expense-tracker.jar"]