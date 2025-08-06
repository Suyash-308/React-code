function Todos(){
    const todos= [
    {
      "id": 1,
      "todo": "Do something nice for someone you care about",
      "completed": false,
      "userId": 152
    },
    {
      "id": 2,
      "todo": "Memorize a poem",
      "completed": true,
      "userId": 13
    },
    {
      "id": 3,
      "todo": "Watch a classic movie",
      "completed": true,
      "userId": 68
    },]

    return (
        <div>     
            {todos.map(todo=>{
            return <Card todoTittle={todo.todo} userId={todo.userId} />
        }) }
        </div>
 
    );
}

function Card(todoTittle,userId){
    return(
      <div>
        <h1>{todoTittle}</h1>
        <p>{userId}</p>
      </div>
    );
}

export default Todos;