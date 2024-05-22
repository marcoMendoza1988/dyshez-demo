import AuthenticationSection from "@/components/templates/AuthenticationSection";
import Tabs from "@/components/organisms/Tabs";
import FormLogin from "@/components/organisms/FormLogin";
import Input from "@/components/atoms/Input";

const Email = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M16.5 3.35449V10.8545C16.5 11.3518 16.3025 11.8287 15.9508 12.1803C15.5992 12.5319 15.1223 12.7295 14.625 12.7295H3.375C2.87772 12.7295 2.40081 12.5319 2.04917 12.1803C1.69754 11.8287 1.5 11.3518 1.5 10.8545V3.35449" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5 3.35449C16.5 2.85721 16.3025 2.3803 15.9508 2.02867C15.5992 1.67704 15.1223 1.47949 14.625 1.47949H3.375C2.87772 1.47949 2.40081 1.67704 2.04917 2.02867C1.69754 2.3803 1.5 2.85721 1.5 3.35449L8.00625 7.41699C8.30425 7.60324 8.64859 7.702 9 7.702C9.35141 7.702 9.69575 7.60324 9.99375 7.41699L16.5 3.35449Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

const forgotPassword = () => {
    return (<>
        <AuthenticationSection>
            <div className="px-2" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                marginTop: '3rem',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                }}>
                    <label className="text[18px] font-bold">Forgot Password</label>
                    <p className="text-[14px]">Enter the email associated with your account and we will send you an email with instructions for forgetting your password</p>
                </div>
                <Input icon={<Email />} name="email" placeholder="Correo o Teléfono" />
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
                    }} type="button">{`Continuar ->`}</button>
                    <label style={{ color:'#797979', fontSize: '13px' }}>¿Olvidaste tu contraseña? <span style={{ color: '#E3026F' }}>Login</span></label>
                </div>
            </div>
        </AuthenticationSection>
    </>);
}

export default forgotPassword;
