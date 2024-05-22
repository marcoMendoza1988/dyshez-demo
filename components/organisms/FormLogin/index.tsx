'use client'
import Image from "next/image";
import apple from "@/assets/Apple_Button_Logo.svg";
import google from "@/assets/Google__G__Logo 1.svg";
import facebook from "@/assets/Facebook_Button_Logo.svg";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from '@/components/molecules/FormField';
import Email from "@/assets/Email";
import Pass from "@/assets/Pass";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

const validationSchema = Yup.object({
    emailOrPhone: Yup.string()
      .required('Required')
      .test('emailOrPhone', 'Invalid email or phone number', function (value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }),
    password: Yup.string()
      .required('Required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[\W_]/, 'Password must contain at least one special character'),
  });

function FormLogin() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
          emailOrPhone: '',
          password: ''
        },
        validationSchema,
        onSubmit: values => {
          login(values)
        },
    });

    const  signInWithProvider  =  async (provider: any) => {
        const { data, error } =  await  supabase.auth.signInWithOAuth({
            provider,
            options: {
                // redirectTo: `${location.host}/auth/callback`
                skipBrowserRedirect: true
            },
        });

        const session = await supabase.auth.session;
        console.log(session, data)
        if(error){
            console.log(error)
        }else {
            router.push('/orders');
        }

        // alert(JSON.stringify({error, data}));
    };

    useEffect(() => {
        const run = async() => {
            // const {data: {session}, error} = await supabase.auth.getSession();
            // console.log({session, error})
            // if(!session){
            //     console.log(error)
            // }else {
            //     router.push('/orders');
            // }
        }
        run()
    },[]);

    const login = async({emailOrPhone, password}: any) => {
        console.log({emailOrPhone, password})
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: emailOrPhone,
                password
            });
    
            if (error) {
                console.error('Error logging in:', error.message);
            } else if(data.session) {
                console.log('Logged in successfully:', data);
                localStorage.setItem('sb-access-token', data.session.access_token);
                localStorage.setItem('sb-refresh-token', data.session.refresh_token);
                document.cookie = `access_token=${data.session?.access_token}; Max-Age=${data.session?.expires_in}; Path=/`;
                document.cookie = `sb-refresh-token=${data.session?.refresh_token}; Max-Age=${data.session?.expires_in}; Path=/`;
                router.push('/orders');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={formik.handleSubmit}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '5rem'
        }}>
            <p style={{ fontSize: 16, textAlign: 'center' }}>Ingresa con tu correo electrónico o tu número de teléfono</p>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                width: '100%'
            }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <FormField
                            id="emailOrPhone"
                            name="emailOrPhone"
                            type="text"
                            label="Correo o teléfono"
                            value={formik.values.emailOrPhone}
                            error={formik.errors.emailOrPhone}
                            touched={formik.touched.emailOrPhone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            icon={<Email />}
                        />
                        <FormField
                            id="password"
                            name="password"
                            type="password"
                            label="Contraseña"
                            value={formik.values.password}
                            error={formik.errors.password}
                            touched={formik.touched.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            icon={<Pass />}
                        />
                    </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <button style={{
                        backgroundColor: '#E3026F',
                        padding: '14px 24px',
                        borderRadius: '100px',
                        color: '#FFF',
                        fontSize: '14px',
                        width: 'fit-content'
                    }} type="submit">{`Continuar ->`}</button>
                    <label style={{ color:'#797979', fontSize: '13px' }}>¿Cambiaste tu teléfono?</label>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                gap: '1rem'
            }}>
                <button type="button" style={{
                    padding: '28px 48px',
                    borderRadius: '100px',
                    backgroundColor: '#F4F4F4',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image className="absolute" width={20} src={apple} alt="apple login" /> 
                </button>
                <button 
                    onClick={() => signInWithProvider("google")}
                    type="button" 
                    style={{
                        padding: '28px 48px',
                        borderRadius: '100px',
                        backgroundColor: '#F4F4F4',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Image className="absolute" src={google} alt="google login" /> 
                </button>
                <button type="button" style={{
                    padding: '28px 48px',
                    borderRadius: '100px',
                    backgroundColor: '#F4F4F4',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image className="absolute" src={facebook} alt="facebook login" /> 
                </button>
            </div>
        </div>
        </form>
    )
}

export default FormLogin;