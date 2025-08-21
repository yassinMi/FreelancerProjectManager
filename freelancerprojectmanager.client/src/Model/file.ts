export interface File {
    id: string;
    name: string;
    size: number;
    type: string;
    url?: string;
    createdAt: Date;
    updatedAt: Date;
    projectId: string;
    uploadedBy: string;
}