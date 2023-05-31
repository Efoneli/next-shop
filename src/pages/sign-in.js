import { useState } from "react";
import Button from "../../components/Button";
import Page from "../../components/Page";
import Field from "../../components/field";
import Input from "../../components/input";

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('should submit', {email, password})
    }

    return (
        <Page title='Sign In' >
            <form onSubmit={handleSubmit}>
                <Field label='Email'>
                    <Input type='email' required value={email}
                    onChange={(event) => setEmail(event.target.value)} 
                    />
                </Field>
                <Field label='Password'>
                    <Input type='password' required value={password} 
                    onChange={(event) => setPassword(event.target.value)} 
                    />
                </Field>
            </form>
            <Button type='submit'>
                Sign In
            </Button>

        </Page>
    );
}

export default SignInPage;