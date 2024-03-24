import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigation = useNavigate(); 
    const [roomCode,setRoomCode] = useState("");
    const handleFormSubmit = (ev) =>{
        ev.preventDefault();
        navigation(`/room/${roomCode}`);
    }
  return (
    <div className='home-page'>
        <form onSubmit={handleFormSubmit}>
             <div>
                <input type="text" value={roomCode} onChange={e=>setRoomCode(e.target.value)} required placeholder='Enter room code' />
                <button>Join Room</button>
             </div>
        </form>
    </div>
  )
}

export default Home