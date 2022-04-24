import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';



export default function UpdateCommandPage(props) {

    const params = useParams();
    const navigate = useNavigate();
    
    const inputHowTo = useRef();
    const inputPlatform = useRef();
    const inputCmd = useRef();
    //console.log(params);
    
    //const [ data, setData ] = useState({});

    useEffect(() => {
        const url = 'https://localhost:5001/api/commands/' + params.id;
        
        fetch(url)
        .then(response => {
            if (response.ok) return response.json()
        })
        .then(newdata => {
            inputHowTo.current.value = newdata.howTo;
            inputPlatform.current.value = newdata.platform;
            inputCmd.current.value = newdata.commandLine;
        }).catch (
            err => navigate('*')
        )
    }, [params, navigate])

    async function handlerSubmit (e) {
        e.preventDefault();

        const data = {
            howTo: inputHowTo.current.value,
            platform: inputPlatform.current.value,
            commandLine: inputCmd.current.value
        };

        //console.log(data)

        fetch('https://localhost:5001/api/commands/' + params.id, {
            method:"PUT",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response=> {
            if(response.ok){
            navigate("/");
            }
        })
    } 
    
    return (
        <section>
            <h1>Обновить Команду</h1>
            <form onSubmit={handlerSubmit} >
                <div className="mb-3">
                    <label htmlFor="inputHowTo" className="form-label">Описание Команды</label>
                    <input type="text"  className="form-control" required id="inputHowTo" aria-describedby="emailHelp" ref={inputHowTo}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPlatform" className="form-label">Платформа</label>
                    <input type="text"  className="form-control" required id="inputPlatform" aria-describedby="emailHelp" ref={inputPlatform}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputСmd" className="form-label">Сама Команда</label>
                    <input type="text" className="form-control" required id="inputCmd" aria-describedby="emailHelp" ref={inputCmd}/>
                </div>
                <button type="submit" className="btn btn-success">Изменить</button>
            </form>
        </section>
    )
}
