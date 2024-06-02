
import { Alert, Table } from "flowbite-react";
import { deleteBooks, getAllBooks } from '../service/AllApi';



import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Base_Url } from "../service/BaseUrl";
import { toast } from "react-toastify";

function Manage() {
  const [allBooks, setAllBooks] = useState([]);



  const fetchBooks = async () => {
    try {
      const response = await getAllBooks();
      if (Array.isArray(response.books)) { 
        setAllBooks(response.books.slice(4,9)); 
      } else {
        console.error('Data is not an array:', response);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  console.log(allBooks);

  console.log('array length', allBooks.length);

  // remove book

  const removeBooks = async (id) => {
   
    const confirmed = window.confirm('Are you sure you want to delete this book?');
  
   
    if (confirmed) {
      console.log(id);
      try {
        const res = await deleteBooks(id);
        if (res.status === 200) {
          fetchBooks();
          toast.success("Book deleted successfully");
        } else {
          toast.error("Failed to delete book. Please try again later.");
        }
      } catch (error) {
        console.error('Error deleting book:', error);
        toast.error("An error occurred while deleting the book.");
      }
    } else {
      console.log('Deletion cancelled by user');
    }
  };
  





  return (
    <div>
      <div className="container  lg:px-8 items-center min-h-screen py-1" 
        style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg')",
         backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className='px-4 my-10'>
        <h2 style={{fontFamily:"initial",marginTop:"-22px"}} className='mb-4 text-3xl font-bold'>Manage Or Edit your books from here</h2>
      </div>

      <div>
        <Table className='lg:w-[1180px] mb-8'>
          <Table.Head>
            
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit Or Manage</span>
            </Table.HeadCell>
          </Table.Head>

          <Table.Body>
            {allBooks.length > 0 ? (
              allBooks.map((book, index) => (
                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-wrap font-medium text-gray-900 dark:text-white">
                    {book.title}
                  </Table.Cell>
                  <Table.Cell>{book.author}</Table.Cell>
                  <Table.Cell>  <img style={{ height: "40px", width: "30px", marginLeft: "10px" }}
                   src={`${Base_Url}/Uploads/${book.image}`}
    
                   alt="no image" /></Table.Cell>

                  <Table.Cell>{book.category}</Table.Cell>
                  <Table.Cell>{book.price}</Table.Cell>
                  <Table.Cell>
                  <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" 
                  to={`/admin/dashboard/edit-books/${book._id}`}>
            
                  Edit
                 
                  </Link>
                  <button 
                  onClick={()=>removeBooks(book._id)}
                  className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">
                   
                    Delete</button>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
    </div>
  );
}

export default Manage;