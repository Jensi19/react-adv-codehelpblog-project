import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Blog() {
 const { posts, loading } = useContext(AppContext);

 return (
   <div className="max-w-6xl mx-auto px-4 py-8">
     {loading ? (
       <div className="text-center">
         <h1 className="text-2xl font-bold">Loading blogs...</h1>
       </div>
     ) : posts.length === 0 ? (
       <div className="text-center">
         <h1 className="text-2xl font-bold">No blogs found</h1>
       </div>
     ) : (
       <div className="space-y-8">
         {posts.map((post) => (
           <article key={post.id} className="border-b pb-8">
             <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
             <div className="text-gray-600 mb-4">
               By <span className="font-medium">{post.author}</span> in{' '}
               <span className="font-medium">{post.category}</span>
             </div>
             <div className="text-gray-500 mb-4">
               Posted on <span>{post.date}</span>
             </div>
             <p className="mb-4">{post.content}</p>
             <div className="flex gap-2 flex-wrap">
               {post.tags.map((tag, index) => (
                 <span 
                   key={index}
                   className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                 >
                   #{tag}
                 </span>
               ))}
             </div>
           </article>
         ))}
       </div>
     )}
   </div>
 );
}

export default Blog;