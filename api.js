/**
 * Created by Administrator on 2015-10-20.
 */
process.on('message',function(msg){
    msg.hello=msg.hello.toUpperCase();
    process.send(msg);
});