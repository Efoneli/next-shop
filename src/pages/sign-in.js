import Page from "../../components/Page";
import Field from "../../components/field";
import Input from "../../components/input";

function SignInPage() {
    return (
        <Page title='Sign In' >
            <form>
                <Field label='Email'>
                    <Input type='email' />
                </Field>
                <Field label='Password'>
                    <Input type='password' />
                </Field>
            </form>
        </Page>
    );
}

export default SignInPage;