import { Container } from "react-bootstrap";

const DivComponent=({active})=> {
    return ( 
        <Container>
            {active==="About ASWL" && <div><h2>Hi!</h2></div>}
            {active==="Factory Space" && <div><h2>This is working</h2></div>}
            {active==="Capacity" && <div><h2>Capacity</h2></div>}
            {active==="Buyer" && <div><h2>Buyer And Exporting Countries</h2></div>}
            {active==="Employees" && <div><h2>Employees</h2></div>}
            {active==="Quality Control" && <div><h2>Quality Control</h2></div>}
            {active===" Computer Aided Design" && <div><h2> Computer Aided Design</h2></div>}
        </Container>
     );
};

export default DivComponent;
