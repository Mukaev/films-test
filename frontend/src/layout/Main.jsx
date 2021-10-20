import React, { useState }  from 'react';
import axios from 'axios';

export default function Main() {

    const [post, setPost] = React.useState(null);

    const deleteFilm = (id) => axios.delete(`http://localhost:8080/${id}`).then((response) => {
      setPost(response);
    })
  
    const addFilm = (id) => axios.post(`http://localhost:8080//`).then((response) => {
      setPost(response);
    })

    return (<main className='conteiner content'>
        <div className="row grey grey darken-2">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Название Фильма" id="first_name" type="text" className="validate">
              </input>
        </div>
        <div className="input-field col s6">
          <input placeholder="Год выпуска" id="last_name" type="date" className="validate" >
              </input>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Фамилия Имя Отчество" id="first_name"  type="text" className="validate">
              </input>
        </div>
        </div>
        <div className="row">
        <div className="input-field col s6">
          <input placeholder="Продолжительность" id="first_name" type="text" className="validate">
            </input>
        </div>
        </div>
        <div className="input-field col s6">
          <input placeholder="Год выпуска" id="last_name" type="number" className="validate">
              </input>
        </div>
        <div className="input-field col s6">
          <input placeholder="Рейтинг" id="last_name" type="number" className="validate">
              </input>
        </div>
        <div>
            <a onClick={() => addFilm()} className="waves-effect waves-light btn">Добавление</a>
            <a onClick={() => deleteFilm(1)} className="waves-effect waves-light btn">Удаление</a>
        </div>


        {post}
      
    </form>
  </div>
</main>)
        
}