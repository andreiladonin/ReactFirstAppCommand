import { useEffect, useState } from "react"
import CommandItem from "../components/commands/CommandItem";

export default function Home() {

  const [dataCommands, setDataCommands ] = useState([]);

  useEffect(()=> {
    console.log('render');
    fetch("https://localhost:5001/api/commands")
    .then((response) => response.json() )
    .then(data => setDataCommands(data))

  }, [])
  if (dataCommands.length !== 0) {
      return (
        <section>
          <h1>Все команды</h1>
          {dataCommands.map(cmd => {
              return <CommandItem key={cmd.id}
                      id={cmd.id}
                      howTo={cmd.howTo}
                      platform={cmd.platform}
                      commandLine={cmd.commandLine}/>
          })}
        </section>
      )
  } else  {
    return (
        <section>
          <h1>Данных Нету</h1>
        </section>
    )
  }
}
