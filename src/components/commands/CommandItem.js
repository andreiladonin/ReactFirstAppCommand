import { Link } from "react-router-dom";

export default function CommandItem(props) {
  async function handlerDeleteClick() {
    const url = 'https://localhost:5001/api/commands/' + props.id;

    ///console.log(url)
    const request = await fetch(url, {
      method: "DELETE"
    })
    if (request.ok) {
      window.location.reload();
    }
  }
  return (
    <div className="border border-warning mb-4 mt-4 p-2">
        <h3>Описание: {props.howTo}</h3>
        <h5>Платформа: {props.platform}</h5>
        <p>Команда: {props.commandLine}</p>
        <button className="btn btn-danger" onClick={handlerDeleteClick}>Удалить</button>
        <Link to={
          {
            pathname: '/update/'+ props.id
          }
        } className="btn btn-success">Редактировать</Link>
    </div>
  )
}
