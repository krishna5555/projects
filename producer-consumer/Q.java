public class Q{

    int num; //value that the producer and consumer are changing
    boolean valueSet = false; //flag for producer and consumer

    public synchronized void put(int num) throws InterruptedException {
        while(valueSet)
            wait(); //wait till the consumer thread notifies
        System.out.println("Producing "+num);
        this.num = num;
        valueSet = true;
        notify(); //notify the consumer thread
    }

    public synchronized void get() throws InterruptedException {
        while(!valueSet)
            wait(); //wait till the producer thread notifies
        System.out.println("Consuming "+num);
        valueSet = false;
        notify(); //notify the producer thread
    }
}