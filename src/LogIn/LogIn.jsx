import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const LogIn = () => {






    return (
        <div>


<div style={{
            maxWidth: '400px', 
            margin: '60px auto', 
            padding: '40px', 
            borderRadius: '10px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            backgroundColor: '#fff'
          }}>
            <h2 style={{ 
              textAlign: 'center', 
              marginBottom: '30px', 
              color: '#333', 
              fontFamily: 'Arial, sans-serif',
              fontSize: '25px',
              fontWeight: 'bold',
            }}>Log In</h2>
            
            <form>
              <div style={{ marginBottom: '20px' }}>
                <label 
                  style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    color: '#555', 
                    fontSize: '14px', 
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold'
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="name"
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '14px',
                    color: '#333',
                    boxSizing: 'border-box',
                    fontFamily: 'Arial, sans-serif',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label 
                  style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    color: '#555', 
                    fontSize: '14px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold'
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '14px',
                    color: '#333',
                    boxSizing: 'border-box',
                    fontFamily: 'Arial, sans-serif',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontFamily: 'Arial, sans-serif',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
                onMouseOut={e => e.target.style.backgroundColor = '#007bff'}
              >
                Login
              </button>
              
              {/* <div style={{ marginTop: '15px', textAlign: 'center' }}>
                <a href="#" style={{ color: '#007bff', fontSize: '14px', textDecoration: 'none' }}>
                  Forgot password?
                </a>
               </div> */}

               

               <h1 className="text-center font-bold text-xl mt-5"> -OR-</h1> <hr />


               {/* button */}

               <div className="my-5 ml-5 gap-5">

               <button type="button" class="text-white  bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
<path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
</svg>
 Facebook
</button>




<button type="button" class="text-white ml-5 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">

<FcGoogle />  <div className="ml-2"> Google  </div> 
   
</button>



<Link to='/signup'><p className='font-bold mt-4'>New Here? Please Register First .</p></Link>



               </div>

     

            </form>



          </div>


        </div>
    );
};

export default LogIn;