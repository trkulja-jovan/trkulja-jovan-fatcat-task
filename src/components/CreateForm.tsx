import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ZodSchema, z } from 'zod';

interface CreateFormProps<T> {
    formElements: HtmlFormElement[];
    validationSchema: ZodSchema;
    submitApiFn: (data?: T | undefined) => Promise<Response> | undefined;
    defaultValues?: T;
    title: string;
    successMessage?: string;
}

export interface HtmlFormElement {
    type: string;
    name: string;
    labelText: string;
    labelClassName?: string;
    fieldClassName?: string;
}

export interface BaseFormModel {}

const CreateForm = <T extends BaseFormModel>({
    formElements,
    validationSchema,
    submitApiFn,
    defaultValues,
    title,
    successMessage,
}: CreateFormProps<T>) => {
    type ValSchemaType = z.infer<typeof validationSchema>;
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ValSchemaType>({
        resolver: zodResolver(validationSchema),
        defaultValues: defaultValues,
    });

    const generateFormElement = (formElement: HtmlFormElement) => {
        let htmlElement = <></>;
        switch (formElement.type) {
            case 'input':
                htmlElement = (
                    <input
                        type="text"
                        id={formElement.name}
                        {...register(formElement.name)}
                        className={formElement.fieldClassName}
                    />
                );
                break;
            case 'textarea':
                htmlElement = (
                    <textarea
                        id={formElement.name}
                        {...register(formElement.name)}
                        className={formElement.fieldClassName}
                    />
                );
                break;
        }

        return htmlElement;
    };
    const onSubmit: SubmitHandler<T> = async (data) => {
        try {
            await submitApiFn(data);
            setIsError(false);
            setIsSuccess(true);
        } catch (error) {
            setIsError(true);
            setIsSuccess(false);
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '25px' }}>{title}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {formElements.map((el, index) => (
                    <div key={index}>
                        <label className={el.labelClassName} htmlFor={el.name}>
                            {el.labelText}
                        </label>
                        {errors[el.name] && (
                            <p className="has-text-danger mb-3 mt-3 ml-2">
                                {errors[el.name]?.message as React.ReactNode}
                            </p>
                        )}
                        {generateFormElement(el)}
                    </div>
                ))}
                <button type="submit">Submit form</button>
            </form>
            {!isError && isSuccess && (
                <p className="has-text-success mt-3 mr-3 is-size-4">
                    {successMessage}
                </p>
            )}
            {isError && (
                <p className="has-text-danger mt-3 mr-3 is-size-4">
                    AN ERROR HAS OCCURED. PLEASE TRY AGAIN
                </p>
            )}
        </div>
    );
};

export default CreateForm;
