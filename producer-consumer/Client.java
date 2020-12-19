public class Client{

    public static void main(String args[]) {

        //Create a Q object
        Q q = new Q();

        //setting up producer
        Producer producer = new Producer(q);
        Thread producerThread = new Thread(producer);

        //setting up consumer
        Consumer consumer = new Consumer(q);
        Thread consumerThread = new Thread(consumer);

        //start both the producer and consumer threads
        producerThread.start();
        consumerThread.start();
    }
}