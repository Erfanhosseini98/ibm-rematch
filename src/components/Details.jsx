import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const Details = () =>{
    const id = useParams()
    const dispatch = useDispatch();
    const detail = useSelector((store) => store.PostModel.detail);
    console.log(id)
    useEffect(() => {
        dispatch.PostModel.handleGetPostDetail(id);
      }, []);
}

export default Details;
