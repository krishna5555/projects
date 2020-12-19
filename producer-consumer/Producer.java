public class Producer implements Runnable{

    Q q;
    int num;

    public Producer(Q q){
        this.q = q;
    }

    public void run(){
        while(true){
            try {
                q.put(num); //update the num value in Q
                Thread.sleep(500);
                num++;
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}