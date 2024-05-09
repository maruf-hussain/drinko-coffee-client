import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";




const CoffeeCard = ({ coffee }) => {
    const handleDeleteCoffee = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {

                // ..........Data from DB...Detete Oparation fetch....................
                fetch(` https://drinko-coffee-server-6vrck7a56-marufhussains-projects.vercel.app/coffee/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            }
                        );
                        }
                    })

            }
        });
    };


    const { _id, name, quantity, supplier, price, category, details, photo } = coffee;
    return (
        <div className="card card-side bg-slate-50 shadow-xl ">
            <figure><img src={photo} alt="coffee" /></figure>
            <div className="flex  items-center justify-around w-full">
                <div className="p-4">
                    <p className="font-bold text-xl">{name}</p>
                    <p>Avilable Quantity: {quantity}</p>
                    <p>{supplier}</p>
                    <p>{category}</p>
                    <p>Price: ${price}</p>


                </div>
                <div className="pr-4">
                    <div>
                        <button class="btn  text-white text-xl bg-blue-500"><FaEye />
                        </button>
                    </div>
                    <div>
                        <Link to={`updateCoffee/${_id}`}>
                        <button class="btn mt-2 text-white text-xl bg-green-500"><FaEdit />
                        </button>
                        </Link>
                        
                    </div>
                    <div>
                        <button onClick={() => handleDeleteCoffee(_id)} class="btn mt-2 text-white text-xl bg-red-500 "><MdDeleteForever />
                        </button>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;