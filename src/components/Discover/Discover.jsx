import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal';

const Discover = () => {
    const [tags, setTags] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:5050/discover").then((res) => {
        setTags(res.data);
      });
    }, []);
    console.log(tags);
  
    return (
      <div className="container my-[60px]">
        <div className="row">
          <Modal
            title={"Find the right job or internship for you"}
            subtitle={"SUGGESTED TOOLS"}
            tags={tags}
          />
        </div>
      </div>
    );
}

export default Discover