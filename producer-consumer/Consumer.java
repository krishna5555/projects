public class Consumer implements Runnable{

    Q q;

    public Consumer(Q q){
        this.q = q;
    }

    public void run(){
        while(true){
            try {
                q.get(); //get num value in Q
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}