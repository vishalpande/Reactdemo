function Para1()

{
   let time=new Date();
 console.log(time.toLocaleDateString);
    return  (
    <div>    
    <p>This is the current time:{time.toLocaleDateString()}-{''}{time.toLocaleTimeString()}</p>
    </div>
    )
}


export default Para1;