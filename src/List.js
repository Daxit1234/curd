import React, { useEffect, useState } from 'react';
import EditUser from './EditUser';

const List = () => {
    const [data, setData] = useState([]);
    const [edit,setEdit]=useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/user/getUser");
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handledelete = async(id) => {
        const response = await fetch( `http://localhost:3001/user/deleteUser/${id}`,{
            method: 'DELETE',
        });
        const newData = await response.json();
        setData(prevData => prevData.filter(item => item._id !== id));
        console.log(newData);
    }
    let handleedit = (id) => {
        setEdit(id)
    }

    return (
        <div>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
        Add user
      </button>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.phone}</td>
                            <td><button data-toggle="modal" data-target="#exampleModalCenter2" onClick={(e) => handleedit(item._id)}>Edit</button></td>
                            <td><button onClick={(e) => handledelete(item._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EditUser id={edit}/>
        </div>
    );
};

export default List;
