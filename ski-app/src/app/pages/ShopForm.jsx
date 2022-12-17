import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postService from "../../setup/services/post.servise";

const ShopForm = () => {
    const { id } = useParams();
    const [ credantials, setCredantials ] = useState({})
    const [ editMode ] = useState(id ? true : false)
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
        if(editMode) fetPost()
    }, [id])

    const fetPost = async (e) => {
        try{
            const invoice = await postService.findOneById(id);
            setCredantials(invoice);
        }
        catch(error){
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editMode ? "update" : "create";

        try{
            await  postService[method](credantials)
            navigate("/")
        } catch(error){
            console.log(error);
        }
}

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredantials({
            ...credantials,
            [name]: value,
        })
    }
    return ( 
        <div className="container">
            <h1>{editMode ? "Edit" : "Create"} Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Titre</label>
                    <input type="text" name="title" id="title" className="form-control" value={credantials.title || ""} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" className="form-control" value={credantials.description || ""} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" className="form-control" value={credantials.price || ""} onChange={handleChange} />
                </div>
                <select name="status" id="status" className="form-control" value={credantials.style || ""} onChange={handleChange}>
                    <option value="Freeride">Freeride</option>
                    <option value="Freestyle">Freestyle</option>
                    <option value="Piste">Piste</option>
                    <option value="Polyvalant">Polyvalant</option>
                </select>
                <select name="status" id="status" className="form-control" value={credantials.weight || ""} onChange={handleChange}>
                    <option value="Moins de 45kg">Moins de 45kg</option>
                    <option value="Entre 45 et 65kg">Entre 45 et 65kg</option>
                    <option value="Plus de 65kg">Plus de 65kg</option>
                </select>
            </form>
            <button className="btn btn-primary" >{ editMode ? "Modifier" : "Envoyer" }</button>


    </div>

     );
}
 
export default ShopForm;