import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal';
import axios from 'axios';

const Index = () => {
    const [tags, setTags] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:5050/explore").then((res) => {
        setTags(res.data);
      });
    }, []);
    console.log(tags);
  
    return (
      <div className="container my-[60px]">
        <div className="row">
          <Modal
            title={"Explore collaborative articles"}
            article={'We’re unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI.'}
            subtitle={"SUGGESTED SEARCHES"}
            tags={tags}
          />
        </div>
      </div>
    );
}

export default Index