import React,{useState,useEffect} from 'react'
import './feed.css'
import firebase from 'firebase';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import Post from './Post';
import { db} from './firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';


function Feed() {
    const user=useSelector(selectUser);
    const[input,setInput]=useState("");
    const[posts,setPosts]=useState([]);
    const sendPost=e=>
    {
        e.preventDefault();//prevents the default behaviour(to refresh on enter)
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message:input,
            photoUrl:user.photoUrl || '',
           timestamp:firebase.firestore.FieldValue.serverTimestamp(),

        });
        setInput("");
    };
    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot=>(
          setPosts(snapshot.docs.map(doc=>(
              {
                  id:doc.id,
                  data:doc.data(),
              }
          )))     
        ))
      },[]);
    return (
        <div className="feed">
            
        <div className="feed__inputContainer">
            <div className="feed__input">
            <CreateIcon/>
            <form>
            <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder="start a post"/>
            <button onClick={sendPost} type="submit">Send</button>
            </form>
            </div>
            
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photos" color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title="video" color="#E7A33E"/>
                <InputOption Icon={EventIcon} title="Event" color="#C0CBCD"/>
              
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                
            </div>
        </div>
       {/* posts */}
            <FlipMove>
            {
            posts.map(({id,data:{name,description,message,photoUrl}})=>(<Post
                key={id} name={name} description={description} message={message} photoUrl={photoUrl} />))
            }

            {/* <Post name="Sushrith Bondugula" description="this is a test"
            message="Wow this worked"/> */}
</FlipMove>
            </div>
            
    )
}

export default Feed;
