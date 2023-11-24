import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className='flex w-[90%] h-[90%] items-center justify-center' >
        <div className='w-[300px] min-h-[400px] flex  flex-col rounded-md shadow-md  mx-8 border bg-white'>
          <div className='w-full h-[30px] flex items-center justify-center px-2  bg-red-700 text-[20px] font-bold text-white '>FreeMo</div>
          <div className='flex flex-col w-full mt-[25px]'>
            <div className=' flex flex-col w-full ml-5 '>
              <div className='flex w-full h-[25px] text-[14px] font-bold'>Manage your company's projects</div>
              <hr className='h-1 w-40 flex bg-red-700 mt-3 rounded-[30px]'/>
            </div>
            <div className='w-full flex text-[14px] font-[500] ml-5 mt-5'>Benefits:-</div>
            <div className='flex w-full items-center text-[12px] py-2  ml-5'>
              <div className='flex w-15 text-red-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>Limited collaboration for plan members </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-red-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>Collection recovery for 30days </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-red-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>One custom domain </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-red-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>Only three(3) company members </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-red-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>10 Collaboration </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-red-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>10,000 calls to Postman API </div>
            </div>
            <div className='w-full flex h-[20px] items-center justify-center mt-1'>
              <hr className='flex w-[40%] h-[2px] bg-red-700 ' />
              <div className='w-[20px] flex items-center justify-center mx-1 mb-1 font-[500] text-[30px]'>@</div>
              <hr className='flex w-[40%] h-[2px] bg-red-700'/>
            </div>
            <div className='flex w-full items-center justify-center mt-2'>
              <div className='mb-3 text-[15px]'>₦</div>
              <div className='flex text-[35px]'>0.00</div>
            </div>
            <div className='flex w-full h-[20px] text-[14px] items-center justify-center font-bold'>Enjoy free trial for three months</div>
           <div className='flex items-center justify-center w-full'>
           <Link to= "/register-freemo" className='flex w-[80%] h-[30px] justify-center mb-2 rounded-md items-center bg-red-700 text-white font[400]' onClick={()=> {}} >Get Started</Link>
           </div>
          </div>
        </div>
        <div className='w-[300px] min-h-[400px] flex  flex-col rounded-md shadow-md mx-8 border bg-white'>
          <div className='w-full h-[30px] flex items-center justify-center px-2 bg-green-700 text-[20px] font-bold text-white '>BroMo</div>
          <div className='flex flex-col w-full mt-[25px]'>
            <div className=' flex flex-col  mx-5'>
              <div className='flex w-full h-[15px] text-[14px] font-bold '>Collaboration with team to build and use API faster</div>
              <hr className='h-1 w-40 flex bg-green-700 rounded-[30px] mt-7'/>
            </div>
            <div className='w-full flex text-[14px] font-[500] ml-5 mt-4'>Benefits:-</div>
            <div className='flex w-full items-center text-[12px] py-2  ml-5'>
              <div className='flex w-15 text-green-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>Limited collaboration for plan members </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-green-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>Collection recovery for 30days </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-green-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>30 custom domain </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-green-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>Only three(20) company members </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-green-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>50 Collaboration </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-green-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>50,000 calls to Postman API </div>
            </div>
            <div className='w-full flex h-[20px] items-center justify-center mt-1'>
              <hr className='flex w-[40%] h-[2px] bg-green-700 ' />
              <div className='w-[20px] flex items-center justify-center mx-1 mb-1 font-[500] text-[30px]'>@</div>
              <hr className='flex w-[40%] h-[2px] bg-green-700'/>
            </div>
            <div className='flex w-full items-center justify-center mt-2'>
              <div className='mb-3 text-[15px]'>₦</div>
              <div className='flex text-[35px]'>5,999.00</div>
            </div>
            <div className='flex w-full h-[20px] text-[14px] items-center justify-center font-bold'>BroMo monthly plan</div>
           <div className='flex items-center justify-center w-full'>
           <Link to="/register-bromo" className='flex w-[80%] h-[30px] justify-center mb-2 rounded-md items-center bg-green-700 text-white font[400]' onClick={()=>{}} >Select</Link>
           </div>
          </div>
        </div>
        <div className='w-[300px] min-h-[400px] flex  flex-col rounded-md shadow-md mx-8 border bg-white'>
          <div className='w-full h-[30px] flex items-center justify-center bg-yellow-600 text-[20px] py-4 font-bold text-white '>PreMo</div>
          <div className='flex flex-col w-full mt-[25px]'>
            <div className=' flex flex-col mx-5 '>
              <div className='flex w-full h-[15px] text-[14px] font-bold'>Team up with your colleaques around your API</div>
              <hr className='h-1 w-40 flex bg-yellow-600 mt-7 rounded-[30px]'/>
            </div>
            <div className='w-full flex text-[14px] font-[500] ml-5 mt-4'>Benefits:-</div>
            <div className='flex w-full items-center text-[12px] py-2  ml-5'>
              <div className='flex w-15 text-yellow-600 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>Unlimited collaboration for plan members </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-yellow-600 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>Collection recovery for 30days </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-yellow-700 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>Unlimited custom domain </div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-yellow-600 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>Unlimited company members</div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-yellow-600 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>Unlimited Collaborations</div>
            </div>
            <div className='flex w-full items-center text-[12px] py-2 ml-5'>
              <div className='flex w-15 text-yellow-600 text-[15px] font-bold '>
              <IoCheckmarkCircleOutline />            
              </div>
              <div className='flex text-[12px] font-[400]'>Unlimited calls to Postman API </div>
            </div>
            <div className='w-full flex h-[20px] items-center justify-center mt-1'>
              <hr className='flex w-[40%] h-[2px] bg-yellow-600 ' />
              <div className='w-[20px] flex items-center justify-center mx-1 mb-1 font-[500] text-[30px]'>@</div>
              <hr className='flex w-[40%] h-[2px] bg-yellow-600'/>
            </div>
            <div className='flex w-full items-center justify-center mt-2'>
              <div className='mb-3 text-[15px]'>₦</div>
              <div className='flex text-[35px]'>10,000.00</div>
            </div>
            <div className='flex w-full h-[20px] text-[14px] items-center justify-center font-bold'>Enjoy PreMo monthly plan</div>
           <div className='flex items-center justify-center w-full'>
           <Link to="/register-Premo" className='flex w-[85%] h-[30px] justify-center mb-2 rounded-md items-center bg-yellow-600 font-[500] text-white font[400]' onClick={()=> {}}>select</Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login