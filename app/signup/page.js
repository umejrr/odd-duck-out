import Logo from "../logo";
import Form from 'next/form'
import Rules from "../rules";


export default function Signup(){
    return(
        <main className="h-screen flex flex-col items-center justify-center gap-2">
            <h1 className="text-2xl leading-none">Sign up</h1>
            <div>
                <Form action='/' className="flex flex-col items-center justify-center gap-2">
                    <input className="min-h-7 bg-white rounded-xl
  border-black border-5 border-solid text-base leading-none uppercase placeholder-gray-300 text-center focus-visible:outline-0" placeholder="username" name="username"/>
  <input className="min-h-7 bg-white rounded-xl
  border-black border-5 border-solid text-base leading-none uppercase placeholder-gray-300 text-center focus-visible:outline-0" placeholder="email" name="email"/>
  <input className="min-h-7 bg-white rounded-xl
  border-black border-5 border-solid text-base leading-none uppercase placeholder-gray-300 text-center focus-visible:outline-0" placeholder="password" type="password" name="password"/>
                    <button className="px-7 py-1 bg-orange-400 rounded-xl
  border-black border-5 border-solid text-base leading-none uppercase cursor-pointer mt-2" type="submit">SIGN UP</button>
                </Form>
            </div>
            <Logo></Logo>
            <Rules></Rules>
        </main>
    );
}