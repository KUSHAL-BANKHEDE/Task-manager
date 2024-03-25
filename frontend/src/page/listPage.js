import React ,{useState} from 'react'
import { CreateList } from '../component/creatListe';
import { Lists } from '../component/list';

const ListPage = () => {

    const[lists, setLists] = useState([]);
  fetch("/api/lists")
  .then(async function(res){
    const json = await res.json();
    setLists(json.lists);
  })

  return (
    <div>
      <CreateList/>
      <Lists lists = {lists}></Lists>
    </div>
  )
}

export default ListPage
