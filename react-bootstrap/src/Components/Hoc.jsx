import { Spinner } from "react-bootstrap";

const Hoc = (Component) => {
    return ({isLoading}) => {
        if(isLoading){
            return  <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        }else{
            return <Component />
        }
    }
};

export default Hoc;