"use client"
import { useRouter } from "next/navigation";
import Form from "next/form";


export default function SignUpForm(){
    const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();

        try{
            const formData = new FormData(event.currentTarget);

            const username = formData.get('username');
            const email = formData.get('email');
            const password = formData.get('password');

            const response = await fetch('/api/register', {
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify({username, email, password})
            })

           response.status === 201 && router.push('/login')

        }catch(e){
            console.error(e.message)
        }
    }
    return (
        <Form onSubmit={handleSubmit} action='/' className="flex flex-col items-center justify-center gap-2">
                    <input className="min-h-7 bg-white rounded-xl
  border-black border-5 border-solid text-base leading-none uppercase placeholder-gray-300 text-center focus-visible:outline-0" placeholder="username" name="username"/>
  <input className="min-h-7 bg-white rounded-xl
  border-black border-5 border-solid text-base leading-none uppercase placeholder-gray-300 text-center focus-visible:outline-0" placeholder="email" name="email"/>
  <input className="min-h-7 bg-white rounded-xl
  border-black border-5 border-solid text-base leading-none uppercase placeholder-gray-300 text-center focus-visible:outline-0" placeholder="password" type="password" name="password"/>
                    <button className="px-7 py-1 bg-orange-400 rounded-xl
  border-black border-5 border-solid text-base leading-none uppercase cursor-pointer mt-2" type="submit">SIGN UP</button>
                </Form>
    )
}