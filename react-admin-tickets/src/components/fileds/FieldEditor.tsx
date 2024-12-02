import { useState, useEffect } from "react";
import { useInput } from "react-admin";
import { Editor } from "@tinymce/tinymce-react";

export const FieldEditor = ({ source, validate = [], record = {}, ...props }: any) => {
  const { field, fieldState, isRequired, id, isTouched, isSubmitted }: any =
    useInput({
      source,
      validate,
      ...props,
    });

  const [editorValue, setEditorValue] = useState<any>(field.value || "");
  const [errors, setErrors] = useState<string[]>([]);

  const handleEditorChange = (content: any) => {
    setEditorValue(content);
    field.onChange(content);
  };

  const handleValidation = (value: any) => {
    const errorMessages = validate
      .map((rule: any) => rule(value))
      .filter((error: any) => error);

    setErrors(errorMessages);
  };

  useEffect(() => {
    if (fieldState.invalid && fieldState.error) {
      handleValidation(editorValue);
    }
  }, [fieldState.invalid, fieldState.error]);

  return (
    <div className={`w-full`}>
      <div
        className={`${fieldState.invalid && fieldState.error ? "border-2 border-error rounded-[10px]" : ""}`}
      >
        <Editor
          apiKey="vp26o5ws24wgz48jkhvejqrc7iyrotrzc9mdp1519dbm9t8c"
          value={editorValue}
          init={{
            height: 400,
            menubar: false,
            plugins: [
              "fontsize",
              "fontfamily",
              "textcolor",
              "advlist",
              "autolink",
              "lists",
              "link",
              "charmap",
              "preview",
              "anchor",
              "table",
            ],
            toolbar:
              "fontsize | fontfamily | forecolor backcolor | undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | table",
          }}
          onEditorChange={handleEditorChange}
        />
      </div>
    </div>
  );
};
