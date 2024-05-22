import AuthenticationSection from "@/components/templates/AuthenticationSection";
import Tabs from "@/components/organisms/Tabs";
import FormLogin from "@/components/organisms/FormLogin";
import Input from "@/components/atoms/Input";

const Pass = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                <path d="M10.75 6.85449H3.25C2.21447 6.85449 1.375 7.69396 1.375 8.72949V14.3545C1.375 15.39 2.21447 16.2295 3.25 16.2295H10.75C11.7855 16.2295 12.625 15.39 12.625 14.3545V8.72949C12.625 7.69396 11.7855 6.85449 10.75 6.85449Z" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 1.22949C6.00544 1.22949 5.05161 1.62458 4.34835 2.32784C3.64509 3.0311 3.25 3.98493 3.25 4.97949V6.85449H10.75V4.97949C10.75 3.98493 10.3549 3.0311 9.65165 2.32784C8.94839 1.62458 7.99456 1.22949 7 1.22949V1.22949Z" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </>
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
                    <label className="text[18px] font-bold">Reset Password</label>
                    <p className="text-[14px]">Enter new password</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <Input icon={<Pass />} name="password" placeholder="Password*" />
                    <Input icon={<Pass />} name="verify-password" placeholder="Verify Password*" />
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
                    }} type="button">{`Continuar ->`}</button>
                    <label style={{ color:'#797979', fontSize: '13px' }}>Remember Password? <span style={{ color: '#E3026F' }}>Login</span></label>
                </div>
            </div>
        </AuthenticationSection>
    </>);
}

export default forgotPassword;
