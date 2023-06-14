export interface UploadInputProp {
  label?: string;
  name?: string;
  value?: any;
  onFileSelect?: (file: File | null) => void;
  selectedFiles?: File | null;
  onChange?: (e: any) => void;
  selectedFile?: any;
}
