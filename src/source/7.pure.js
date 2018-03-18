//纯函数
/**
 * 1.相同的输入一定会返回相同的输出
 **/
let sum  = (a,b)=>a+b;
let getData = a=>a+Math.random();//不是纯函数

//永远 不能修改传进去的值
function withDraw(account,amount){
    account.balance -= amount;
}
let account = {balance:200};
withDraw(account,100);
console.log(account);