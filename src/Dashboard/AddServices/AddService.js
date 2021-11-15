import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/addServices", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(result.insertedId){
                    alert('added successfully');
                    reset();
                }
              
            }

            );
        console.log(data);
    };
    return (
        <div className="add-service ">
            <h2 style={{ color: "#1BA370" }} className="text-center mt-2">Add a Brand New Bike</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} Placeholder="Title" />
                <textarea {...register("description")} Placeholder="Description" />
                <br />
                <input type="number" {...register("price")} Placeholder="Price" />
                <input {...register("img")} Placeholder="ImageUrl" />
                <input style={{ backgroundColor: "#1BA370", color: "white" }} className="border-0 rounded" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddService;