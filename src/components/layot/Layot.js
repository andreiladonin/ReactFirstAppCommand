import { Link } from "react-router-dom";

export default function Layot(props) {
  return (
    <div>
        <header className="bg-warning mb-5">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link to='/' className="navbar-brand">Команды</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='/create' className="nav-link" >Добавить команду</Link>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <main className="container">{props.children}</main>
    </div>
  )
}
