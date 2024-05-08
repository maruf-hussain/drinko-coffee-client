import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";




const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, price, category, details, photo } = coffee;
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
                <button class="btn  text-white bg-yellow-900"><FaEye />
</button>
                </div>
                <div>
                <button class="btn mt-2 text-white bg-yellow-900"><FaEdit />
</button>
                </div>
                <div>
                <button class="btn mt-2 text-white bg-yellow-900 "><MdDeleteForever />
</button>
                </div>
                    
                    
                    
                </div>
          </div>
        </div>
    );
};

export default CoffeeCard;