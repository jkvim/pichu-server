export class CreateCatInput {
    name?: string;
    age?: number;
}

export class Author {
    username?: string;
}

export class Cat {
    id?: number;
    name?: string;
    age?: number;
}

export abstract class IMutation {
    abstract create(createCatInput?: CreateCatInput): Cat | Promise<Cat>;
}

export abstract class IQuery {
    abstract getCats(): Cat[] | Promise<Cat[]>;

    abstract cat(id: string): Cat | Promise<Cat>;

    abstract topics(): Topics[] | Promise<Topics[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class Topics {
    id?: string;
    category?: string;
    title?: string;
    commentCount?: number;
    visitCount?: number;
    lastActivity?: string;
    author?: Author;
}
