import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateCommand() {

  const inputHowTo = useRef();
  const inputPlatform = useRef();
  const inputCmd = useRef();

  const navigate = useNavigate();

  function handlerSubmit(e) {
      e.preventDefault();

      const data = {
        howTo: inputHowTo.current.value,
        platform: inputPlatform.current.value,
        commandLine: inputCmd.current.value
      };


      console.log(data)

      fetch('https://localhost:5001/api/commands', {
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response=> {
        if(response.ok){
          alert("Команда добавлена");
          navigate("/");
        }
      })
  }

  return (
    <section>
      <h1 className="mb-5">Добавить команду</h1>
      <form onSubmit={handlerSubmit}>
          <div className="mb-3">
            <label htmlFor="inputHowTo" className="form-label">Описание Команды</label>
            <input type="text" className="form-control" required id="inputHowTo" aria-describedby="emailHelp" ref={inputHowTo}/>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPlatform" className="form-label">Платформа</label>
            <input type="text" className="form-control" required id="inputPlatform" aria-describedby="emailHelp" ref={inputPlatform}/>
          </div>
          <div className="mb-3">
            <label htmlFor="inputСmd" className="form-label">Сама Команда</label>
            <input type="text" className="form-control" required id="inputCmd" aria-describedby="emailHelp" ref={inputCmd}/>
          </div>
          <button type="submit" className="btn btn-primary">Добавить</button>
      </form>
    </section>
    

    
  )
}
