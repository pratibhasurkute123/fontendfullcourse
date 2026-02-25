import React from 'react'

function Home(props) {
    const name = props.name
    const Todo = props.Todo
  return (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dolor. Unde consequuntur consectetur pariatur magni sequi iure similique aperiam velit culpa? Sint dolorem, doloremque delectus quas eos perferendis tempore rerum! -{name}</p>

        <ul>
            {Todo.map((index)=>(
                <li>{index.title}</li>
                
            ))
            }
        </ul>
        
    </div>
  )
}

export default Home