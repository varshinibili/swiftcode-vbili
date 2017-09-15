package data;

public class Message {

    public String text;
    public FeedResponse feedRespbnse;
    public Sender sender;
    public enum Sender {
        BOT, USER
    }
}
