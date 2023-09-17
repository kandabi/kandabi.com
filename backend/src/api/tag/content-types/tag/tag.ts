// Interface automatically generated by schemas-to-ts

export interface Tag {
    id: number;
    attributes: {
        createdAt: Date;
        updatedAt: Date;
        publishedAt?: Date;
        title: string;
        color?: string;
        order?: number;
    };
}
export interface Tag_Plain {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    title: string;
    color?: string;
    order?: number;
}

export interface Tag_NoRelations {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    title: string;
    color?: string;
    order?: number;
}

export interface Tag_AdminPanelLifeCycle {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    title: string;
    color?: string;
    order?: number;
}
