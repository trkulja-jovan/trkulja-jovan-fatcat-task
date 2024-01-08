import { BaseFormModel } from '../components/CreateForm';

interface FormDataModel extends BaseFormModel {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default FormDataModel;
