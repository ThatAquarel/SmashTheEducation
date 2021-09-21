export abstract class Solution {
    current_document: Document;
    class_name: string;

    constructor(current_document:Document, class_name: string) {
        this.current_document = current_document;
        this.class_name = class_name;
    }

    abstract is_using_solution(): boolean;

    abstract solve(): void;
}
