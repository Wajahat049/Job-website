import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import JobCard from '../Components/JobCard';
import Footer from "../Components/Footer"
import {Button, Row , Col , Pagination} from "react-bootstrap"
import {useEffect,useState} from "react"
import useWindowDimensions from "../Components/WindowDImension";


function JobList() {
    const [paginationSize,setpaginationSize] = useState("lg")
    const { height, width } = useWindowDimensions();
    useEffect(()=>{
        if(width<500){
          setpaginationSize("sm")
        }
        console.log("xbxsxnsx;nsnxsnx;sx",width)
      },[width])
  return (
    <div className="Home">
      <Header/>
      <h1 className='home-heading'>
        ALL JOBS
      </h1>
    
         
      <JobCard/>
      <JobCard/>
      <JobCard/>
      <JobCard/>
      <JobCard/>
      <JobCard/>
     
      {/* <div> */}
      <Row style={{marginTop:"5%",marginBottom:"5%"}}>
            <Pagination size={paginationSize} >
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item active>{1}</Pagination.Item>
 

  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item >{3}</Pagination.Item>


  <Pagination.Ellipsis />
  <Pagination.Item>{18}</Pagination.Item>
  <Pagination.Item>{19}</Pagination.Item>
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
</Row>
      {/* </div> */}
    </div>


  );
}

export default JobList;
