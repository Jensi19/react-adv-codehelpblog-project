import { createContext, useState } from "react";
import { Baseurl } from "../Baseurl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
 const [loading, setLoading] = useState(false);
 const [posts, setPosts] = useState([]);
 const [page, setPage] = useState(1);
 const [totalPages, setTotalPages] = useState(null);

 async function fetchPosts(page = 1) {
   setLoading(true);
   let url = `${Baseurl}/posts?page=${page}`;

   try {
     const response = await fetch(url);
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     const data = await response.json();

     setPage(data.page);
     setPosts(data.posts);
     setTotalPages(data.totalPages);
   } catch (error) {
     console.error("Error fetching posts:", error.message);
     setPage(1);
     setPosts([]);
     setTotalPages(null);
   } finally {
     setLoading(false);
   }
 }

 function handlePageChange(page) {
   fetchPosts(page); // No need to setPage here since fetchPosts will set it
 }

 const value = {
   posts,
   setPosts,
   loading,
   setLoading,
   page,
   setPage,
   totalPages,
   setTotalPages,
   handlePageChange,
   fetchPosts
 };

 return (
   <AppContext.Provider value={value}>
     {children}
   </AppContext.Provider>
 );
}