import NavBar from "./Components/NavBar"
import './App.css'
import Header from "./Components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import All from './Components/All'
import Fsd from "./Components/Fsd"
import DataSnce from "./Components/DataSnce"
import Cyber from "./Components/Cyber"
import BlkChain from "./Components/BlkChain"
import fsd from "./assets/fsd-1.jpg"
import data3 from "./assets/data3.jpg"
import data4 from "./assets/data4.jpg"
import cyber1 from "./assets/cyber1.jpg"
import cyber2 from "./assets/cyber2.jpg"
import cyber3 from "./assets/cyber3.jpg"
import blk1 from "./assets/blk1.jpeg"

const App = () => {

  let data = [ {
    image: fsd,
    head: "Full Stack Developement",
    content: "Best Full-Stack Development Project Ideas in 2024",
    date: "27 Aug"
  },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp",
      head: "Full Stack Developement",
      content: "7 Unique Web Development Project Ideas for Beginners",
      date: "27 Aug"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/project_ideas_for_robotic_applications-1.webp",
      head: "Full Stack Developement",
      content: "10 Best HTML and CSS Project Ideas for Beginners",
      date: "27 Aug"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      head: "Full Stack Developement",
      content: "How Long Would It Take to Be a Full Stack Developer?",
      date: "27 Aug"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      head: "Data Science",
      content: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      date: "23 Aug"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
      head: "Data Science",
      content: "12 Real-World Data Science Examples: Power Of Data Science",
      date: "25 Mar"
    },
    {
      image: data3,
      head: "Data Science",
      content: "Can A Commerce Student Do Data Science?",
      date: "16 Apr"
    },
    {
      image: data4,
      head: "Data Science",
      content: "Roles and Responsibilities of a Data Scientist",
      date: "16 Apr"
    },
    {
      image: cyber1,
      head: "Cyber Security",
      content: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      date: "16 Apr"
    },
    {
      image: cyber2,
      head: "Cyber Security",
      content: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      date: "25 Mar"
    },
    {
      image: cyber3,
      head: "Cyber Security",
      content: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      date: "16 Mar"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      head: "Cyber Security",
      content: "The Ultimate Cybersecurity Roadmap for Beginners",
      date: "25 Mar"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Blockchain.webp",
      head: "BlockChain",
      content: "Non-Coding Jobs in Blockchain: Exploring Opportunities Beyond Tech",
      date: "25 Aug"
    },
    {
      image: blk1,
      head: "BlockChain",
      content: "A Guide To Learning Blockchain Technology From Scratch",
      date: "25 Oct"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-Books-to-Learn-Blockchain.webp",
      head: "BlockChain",
      content: "Best Books to Learn Blockchain",
      date: "25 Mar"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-2048x1072.webp",
      head: "BlockChain",
      content: "Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional",
      date: "25 Mar"
    }
  ]

  return (
    
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route path='/' element={<All data={data} />} />
        <Route path='/fsd' element={<Fsd data={data} />} />
        <Route path='/datascience' element={<DataSnce data={data}  />}/>
        <Route path='/cyber' element={<Cyber data={data} />} />
        <Route path='/blockchain' element={<BlkChain data={data} />} />
              
      </Routes>
      </BrowserRouter>
  
  )
}

export default App
