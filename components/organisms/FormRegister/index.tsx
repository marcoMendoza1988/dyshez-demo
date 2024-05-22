import Email from "@/assets/Email";
import Pass from "@/assets/Pass";
import Checkbox from "@/components/atoms/Checkbox";
import { useFormik } from 'formik';
import validationSchema from '@/utils/validationSchema';
import FormField from '@/components/molecules/FormField';
import Label from '@/components/atoms/Label';
import ErrorMessage from '@/components/atoms/ErrorMessage';
import User from "@/assets/User";
import CellPhone from "@/assets/CellPhone";
import Phone from "@/assets/Phone";
import WebPage from "@/assets/WebPage";
import { useState } from "react";
import {Eye, EyeSlash} from "@/assets/Eye";
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from "next/navigation";

const FormRegister = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const saveData = async(formData: any) => {
        const {
            firstName, 
            lastName, 
            phoneNumber, 
            secondPhoneNumber, 
            website, 
            email, 
            password
        } = formData;

        
        try {
            const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
                email: email,
                phone: phoneNumber,
                password: password,
            });
            console.log(signUpData, signUpError)
            if(!signUpError){
                const user = signUpData.user;
                const { data, error } = await supabase
                .from('users')
                .insert([
                {
                    id: user?.id,
                    email,
                    password,
                    name: firstName,
                    lastname: lastName,
                    phone: phoneNumber,
                    cellphone: secondPhoneNumber,
                    webpage: website
                },
                ]);
                console.log({data, error})
                if(!error){
                    router.push('/orders');
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          secondPhoneNumber: '',
          website: '',
          email: '',
          password: '',
          confirmPassword: '',
          terms: false,
        },
        validationSchema,
        onSubmit: values => {
          console.log(values);
          saveData(values)
        }
    });

    const handler = () => {
        setShowPassword(!showPassword);
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px'
            }}>
                <p style={{ fontSize: 16, textAlign: 'center' }}>Ingresa con tu correo electrónico o tu número de teléfono</p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    width: '100%'
                }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        icon={<User />}
                        id="firstName"
                        name="firstName"
                        type="text"
                        label="Nombre(s) *"
                        value={formik.values.firstName}
                        error={formik.errors.firstName}
                        touched={formik.touched.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormField
                        icon={<User />}
                        id="lastName"
                        name="lastName"
                        type="text"
                        label="Apellidos *"
                        value={formik.values.lastName}
                        error={formik.errors.lastName}
                        touched={formik.touched.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormField
                        icon={<CellPhone />}
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        label="123 456 7890 *"
                        value={formik.values.phoneNumber}
                        error={formik.errors.phoneNumber}
                        touched={formik.touched.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormField
                        icon={<Phone />}
                        id="secondPhoneNumber"
                        name="secondPhoneNumber"
                        type="text"
                        label="123 456 7890"
                        value={formik.values.secondPhoneNumber}
                        error={formik.errors.secondPhoneNumber}
                        touched={formik.touched.secondPhoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormField
                        icon={<WebPage />}
                        id="website"
                        name="website"
                        type="text"
                        label="Sitio web"
                        value={formik.values.website}
                        error={formik.errors.website}
                        touched={formik.touched.website}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormField
                        icon={<Email />}
                        id="email"
                        name="email"
                        type="text"
                        label="Email *"
                        value={formik.values.email}
                        error={formik.errors.email}
                        touched={formik.touched.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormField
                        icon={<Pass />}
                        iconEnd={!showPassword ? <Eye /> : <EyeSlash />}
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        label="Contraseña *"
                        value={formik.values.password}
                        error={formik.errors.password}
                        touched={formik.touched.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onIconEndHandler={handler}
                    />
                    <FormField
                        icon={<Pass />}
                        iconEnd={!showPassword ? <Eye /> : <EyeSlash />}
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        label="Verificar contraseña *"
                        value={formik.values.confirmPassword}
                        error={formik.errors.confirmPassword}
                        touched={formik.touched.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onIconEndHandler={handler}
                    />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-[0.5rem]">
                        <Checkbox
                            id="terms"
                            name="terms"
                            checked={formik.values.terms}
                            onChange={formik.handleChange}
                        />
                        <Label htmlFor="terms">Acepto los términos y condiciones</Label>
                    </div>
                    {formik.touched.terms && formik.errors.terms ? (
                        <ErrorMessage>{formik.errors.terms}</ErrorMessage>
                    ) : null}
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
                        padding: '13px 24px',
                        borderRadius: '100px',
                        color: '#FFF',
                        fontSize: '13px',
                        width: 'fit-content'
                    }} type="submit">{`Continuar ->`}</button>
                </div>
                <span style={{ fontSize: 13, textAlign: 'center', color: '#797979' }}>Si ya tienes un restaurante en Dyshez y quieres agregar una nueva sucursal, conoce cómo hacerlo</span>
            </div>
        </form>
    )
}

export default FormRegister;
