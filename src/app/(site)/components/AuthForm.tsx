'use client';

import axios from "axios";
import Image from "next/image";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState, useEffect } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


// This is used for the functionality of switching between login and sign up forms..
type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    // session hook to get the session status..
    const session = useSession();
    // The default state of the auth form is login stage..

    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('LOGIN');

    // this is for disabling buttons and inputs after submiting the form..
    const [isLoading, setIsLoading] = useState(false);

    // used to check if the current session status is authenticated..
    useEffect(() => {
        if (session?.status === 'authenticated') {
            // if the user is authenticated, then we need to route him to another page..
            router.push('/home');
        }
    }, [session?.status, router]);
    
    // function that is used to toggle between login and sign up forms..
    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN'){
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    // A react hook form submit form function and other functions..
    const{
        register,
        handleSubmit,
        formState: {
          errors
        }
    } = useForm<FieldValues>({
        // values that will be used by both the login and sign up forms..
        defaultValues:{
            name: '',
            email:'',
            password:''
        }
    });

    // on submit function..
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        // if we submit, then the page loads
        setIsLoading(true);
        
        if (variant === 'REGISTER') {
            //Axios register
            axios.post('/api/register', data)
            .then(() => signIn('credentials', data))
            .catch(() => toast.error('Something went wrong!'))
            .finally(() => setIsLoading(false)) // to make the input to be available again..
        }

        if (variant === 'LOGIN') {
            //nextAuth signin function..
            signIn('credentials', {
                ...data,
                redirect: false
            }).then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid credentials');
                }

                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in!');
                    router.push('/home');
                }
            }).finally(() => setIsLoading(false));
        }

    }
    
    const socialAction = (action:string) => {
        setIsLoading(true);
        //NextAuth social login
        signIn(action, { redirect: false })
        .then ((callback) => {
            if (callback?.error) {
                toast.error('Invalid Credentials');
            }

            if (callback?.ok && !callback?.error) {
                toast.success('Logged in!')
            }
        })
        .finally(() => setIsLoading(false));
    }

    return (
        <div style={{}} className="sm:mx-auto sm:w-full sm:max-w-md border-0 shadow-md border-indigo-100 rounded-md">
            <div style={{width:"100%"}} className="bg-white py-8 sm:rounded-lg sm:px-8">
                {/* in this form tag, the function after onSubmit is used to trigger the submit function and also pass the data values which are inside the form.. */}
                

                <form className="" onSubmit={handleSubmit(onSubmit)}>

                    {/* this condition is used to check if the page is for signing up, then the input of id name will appear */}
                    {variant === 'REGISTER' && (
                        <Input id="name" label="Name" register={register} disabled={isLoading} errors={errors} />
                    )}

                    {/* This is the otherwise condition..which is for login page.. */}
                    <Input id="email" label="Email Address" type="email" disabled={isLoading} register={register} errors={errors} />
                    <Input id="password" label="Password" type="password" disabled={isLoading} register={register} errors={errors} />

                    <div style={{marginTop:"1rem"}}>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                        >
                            {variant == 'LOGIN' ? 'Login': 'Create Account'}
                        </Button>
                    </div>
                    
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>

                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                    </div>
                </div>
                
                <div className="
                    flex
                    gap-2
                    justify-center
                    text-sm
                    mt-6
                    px-2
                    text-gray-500
                ">
                    <div>
                        {variant === 'LOGIN' ? 'New to taskee?' : 'Already have and Account ?'}
                    </div>
                    <div style={{color:"#7AA5D2"}} onClick={toggleVariant} className="cursor-pointer">
                        {variant === 'LOGIN' ? 'Create an account' : 'Log in'}
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default AuthForm;