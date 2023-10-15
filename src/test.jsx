import React, { useState, useRef } from "react";

const Test = () => {
  const [list, setList] = useState([]);
  const [selectedColor, setSelectedColor] = useState("blue-900"); // Default color

  const ref = useRef(null);
  const add = () => {
    setList([...list, { text: ref.current.value, color: selectedColor }]);
    ref.current.value = "";
  };

  const handleDelete = (listItem) => {
    setList(list.filter((e) => e.text !== listItem.text));
  };

  const setColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div >
        <div className="flex justify-between container mx-auto py-4 items-center">
          <div className="text-3xl pb-1 font-medium text-black">
            TODO LIST <i class="fa-solid fa-bolt"></i>
          </div>
          <div className="flex flex-row items-center justify-evenly w-1/5">
            <button
              className="w-8 rounded-full bg-blue-900 h-8"
              onClick={() => setColor("blue-900")}
            ></button>
            <button
              className="w-8 rounded-full bg-red-900 h-8"
              onClick={() => setColor("red-900")}
            ></button>
            <button
              className="w-8 rounded-full bg-green-900 h-8"
              onClick={() => setColor("green-900")}
            ></button>
            <button
              className="w-8 rounded-full bg-yellow-900 h-8"
              onClick={() => setColor("yellow-900")}
            ></button>
          </div>
          <div className="bg-white py-1 px-3 rounded-sm hover:scale-105 duration-700">
            <input type="text" ref={ref} style={{ border: "2px solid black" }} />

            <button onClick={add} >
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div >

      {
        list.map((listItem) => {
          return (
            <div key={listItem.text} >
              <div className="w-full flex flex-row items-center justify-evenly" >
                <div
                  className={`w-80 flex flex-col items-center p-2 bg-${listItem.color} m-8 rounded-lg help`}
                >
                  <div className="pb-64 bt-4 w-full text-center">

                    {listItem.text}
                  </div>
                  <button
                    className="bg-red-400 w-full p-4 rounded-md"
                    onClick={() => {
                      handleDelete(listItem);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })
      }
    </>
  );
};

export default Test;
