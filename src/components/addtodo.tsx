import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos"
const AddTodo = () => {
    const [todo, setTodo] = useState("")
    const {handleAddTodo}= useTodos()

    const handleChange = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo)
        setTodo("")
    }
    return (
        <div>
            <form onSubmit={handleChange}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodo
