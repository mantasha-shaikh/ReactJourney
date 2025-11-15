     
     import {useState} from 'react'
     import './LoginForm.css'
     
     export function LoginForm() {
        const [isShow, setIsShow] = useState(false);
        function performshow(){
          setIsShow(!isShow)
        }

        return (
          <div className='container-h'>
            <p className='naming'>Hello ,Welcome to my Websites</p>
            <input type="Email" placeholder='Email' className='email'/>
            <div className='hide'>
              <input  placeholder='password'  type={isShow?'text':'password'}    className='password' />
              <div className='hidediv'>
                 <button className='hidebtn' onClick={performshow}>{isShow?'show': 'hide'}</button>
                </div>
           
              </div>
            
         
            <div className='btn'>
                 <button className='click login'>Login</button>
            <button className='click Sign'>Sign Up</button>
              </div>
         
          </div>
        );
      }