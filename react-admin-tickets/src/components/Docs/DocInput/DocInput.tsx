import { Create, SimpleForm, TextInput, useNotify } from 'react-admin';
import { Button } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { required } from 'react-admin';

const CustomForm = () => {
    const { trigger, getValues } = useFormContext();
    const notify = useNotify();

    const handleValidate = async () => {
        const isValid = await trigger('field1');

        if (isValid) {
            notify('Validation passed!', { type: 'success' });
            console.log('Field value:', getValues('field1'));
        } else {
            notify('Validation failed. Please check the input.', { type: 'warning' });
        }
    };

    return (
        <>
            <TextInput
                source="field1"
                label="Field 1"
                validate={[required()]}
                fullWidth
                helperText="Please enter Field 1"
            />
            <Button variant="contained" color="primary" onClick={handleValidate}>
                Validate Field
            </Button>
        </>
    );
};

const CustomCreate = () => (
    <Create resource="posts">
        <SimpleForm>
            <CustomForm />
        </SimpleForm>
    </Create>
);

export default CustomCreate;
