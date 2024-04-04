import React from 'react'

const Post = () => {
  return (
    <div className="post border rounded shadow-lg">

              <div className="startpost m-auto w-[90%] flex gap-[10px] item-center ">
                
                  <div>
                  <img
                    className="w-[70px] h-[70px]  object-cover border-2 rounded-[50%]"
                    src="/images/dp.png"
                    alt=""
                  />
                  </div>
                
                
                  <div className="w-full " ><button className="w-full rounded-lg h-[50px] mt-[10px] border">Start a post</button></div>
                
              </div>

              <div className="media">
                <ul className="flex w-[90%] justify-between items-end">
                  <li className="hover:bg-slate-100">
                    <a className="flex gap-2 justify-center items-center" href="">
                      <img className="w-[20px] h-auto" src="/images/imgpreview.webp" alt="" />
                      <p className="text-[12px] opacity-60 font-medium mt-[10px]">Media</p>
                    </a>
                  </li>

                  <li className="hover:bg-slate-100">
                    <a className="flex gap-2 justify-center items-center" href="">
                      <img className="w-[20px] h-auto" src="/images/Paul-27-512.webp" alt="" />
                      <p className="text-[12px] opacity-60 font-medium mt-[10px]">Event</p>
                    </a>
                  </li>
                  <li className="hover:bg-slate-100">
                    <a className="flex gap-2 justify-center items-center" href="">
                      <img className="w-[20px] h-auto" src="/images/article.svg" alt="" />
                      <p className="text-[12px] opacity-60 font-medium mt-[10px]">Write artice</p>
                    </a>
                  </li>
                  
                </ul>
              </div>

            </div>
  )
}

export default Post