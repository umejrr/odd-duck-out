import Logo from "../logo";
import Rules from "../rules";
import SignUpForm from "./signupform";


export default function Signup(){

    

    return(
        <main className="h-screen flex flex-col items-center justify-center gap-2">
            <h1 className="text-2xl leading-none">Sign up</h1>
            <div>
                <SignUpForm></SignUpForm>
            </div>
            <Logo></Logo>
            <Rules></Rules>
        </main>
    );
}