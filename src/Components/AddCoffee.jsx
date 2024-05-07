import logo from '../assets/image/logo.png'
const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantty = form.quantty.value;
        const supplier = form.supplier.value;
        const tasty = form.tasty.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,quantty,supplier,tasty,category,details,photo};
        console.log(newCoffee);
    }
    return (
        <div className="bg-yellow-100 p-24">
            <div  className="text-4xl font-extrabold text-red-950  rounded-lg  mb-24  bg-orange-50 p-4 flex justify-center ">
                <img className='w-[80px] h-[70px] mr-10 flex self-center' src={logo} alt="" />
            <h1 className=' flex self-center font-extrabold font-serif '>Drinko Coffee Shop</h1>
            </div>
            
            <form onSubmit={handleAddCoffee} className="p-8 rounded-lg bg-orange-50 font-extrabold">
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffee Name" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Coffee Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffee Quantity" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Supplier" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Tasty</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Tasty" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Details" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Category" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Photo Url" className="input input-bordered w-full " />
                        </label>
                    </div>


<input type="submit" value="Add Coffee" className="btn btn-block mt-4 text-white bg-yellow-700" />
            </form>
        </div>
    );
};

export default AddCoffee;