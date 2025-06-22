// import React, { useState } from 'react';
// import { toast } from 'react-toastify';

// export default function RegisterForm({onSuccess}) {

//     const [credentials,setcredentials] = useState({name:"",email:"",password:"",role:""})


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('https://library-management-backend-sepia.vercel.app/users/createuser',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 name:credentials.name,
//                 email:credentials.email,
//                 password:credentials.password,
//                 role:credentials.role
//             })
//         })
//         const json = await response.json()
//         console.log(json.message);
//         if(json.message!=="success") {
//             toast.error("Registration failed with error: " + json.error);
            
//         } else {
//             toast.success("Registration successful");
//             // localStorage.setItem("userEmail", credentials.email);
//             // localStorage.setItem("authToken", json.authToken);
//             onSuccess()
//         }
//     }
//     const onchange = (event) =>{
//         setcredentials({...credentials,[event.target.id]:event.target.value})
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Name</label>
//                 <input type="text" className="form-control" id="name" value={credentials.name} onChange={onchange} required />
//             </div>  
//             <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email address</label>
//                 <input type="email" className="form-control" id="email" value={credentials.email} onChange={onchange} required />
//             </div>  
//             <div className="mb-3">
//                 <label htmlFor="password" className="form-label">Password</label>
//                 <input type="password" className="form-control" id="password" value={credentials.password} onChange={onchange} required />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="role" className="form-label">Role</label>
//                 <input type="text" className="form-control" id="role" value={credentials.role} onChange={onchange} required />
//             </div>
//             <div className="d-flex justify-content-center">
//                 <button type="submit" className="btn btn-outline-primary w-100">Register</button>
//             </div>
//         </form>
//     );
// }


import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function RegisterForm({ onSuccess }) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/users/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const json = await response.json();

      if (!response.ok || json.message !== "success") {
        toast.error("Registration failed: " + (json.error || "Unknown error"));
      } else {
        toast.success("Registration successful!");
        onSuccess(); // close modal or redirect
      }

    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Server error. Please try again later.");
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={credentials.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role</label>
        <select
          className="form-select"
          id="role"
          value={credentials.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="librarian">Librarian</option>
        </select>
      </div>

      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-outline-primary w-100">
          Register
        </button>
      </div>
    </form>
  );
}
