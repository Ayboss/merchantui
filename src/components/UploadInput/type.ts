export interface UploadInputProp {
  label?: string;
  name?: string;
  value?: any[];
  onFileSelect: (file: File | null) => void;
}
