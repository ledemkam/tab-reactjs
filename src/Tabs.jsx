import { useState } from "react"

const tabsData = [
    {
        txt: "Lodio harum! Molestias cumque aut vero, cupiditate fuga tempore minima distinctio, at facilis consequatur accusamus sunt et quasi assumenda? Facilis, porr"
    },
    {
        txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, odio harum! Molestias cumque aut vero, cupiditate fuga tempore minima distinctio, at facilis consequatur accusamus sunt et quasi assumenda? Facilis, porro "

    },
    {
        txt: " fuga tempore minima distinctio, at facilis consequatur accusamus sunt et quasi assumenda? Facilis, porro "

    },
]

const Tabs = () => {
        //en React quand on parle de slider ou de tab faut toujours penser a index

    const[selectedTab,setSelective] = useState(1)

  return (
    <div className="max-w-xl min-h-[250px] mx-auto rounded border border-slate-400">
        Tabs
        <div className="flex divide-x divide-slate-700">
            {tabsData.map((tab,index) =>(
                <button key={index}
                onClick={()=>setSelective(index)} className="w-full p-4 bg-slate-200 hover:bg-slate-300">Tab{index+1}</button>
            ))}
        </div>
        <div className=" text-slate-100 p-4">
            <p>{tabsData[selectedTab].txt}</p>
        </div>
    </div>
  )
}
export default Tabs