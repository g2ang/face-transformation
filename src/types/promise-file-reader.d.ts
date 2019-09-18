declare module 'promise-file-reader' {
  export function readAsArrayBuffer(input: Blob): Promise<ArrayBuffer>;
  export function readAsDataURL(input: Blob): Promise<string>;
  export function readAsText(input: Blob): Promise<string>;
}
