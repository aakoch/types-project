import { Node, Data, Parent, Position } from "unist";
export type FooDogNodeType = 'rootType' | 'tag' | 'nonTagType' | 'text' | "html_comment" | "unbuf_code" | "comment" | "attrs_end" | 'doctype' | 'mixin' | 'mixin_call';
export interface Attribute {
    name: string;
    val: string;
}
export interface TypeHandler {
    visit(node: FooDogNode, xpath: string, contentCallback?: Function): Promise<string>;
    handle(node: FooDogNode, xpath: string, contentCallback?: Function): Function;
}
export interface FooDogNode extends Node, Parent {
    name?: string;
    assignment?: boolean;
    type: FooDogNodeType;
    val?: string | Attribute[];
    children: FooDogNode[];
    depth?: number;
    attrs?: Attribute[];
    getHandler(): TypeHandler;
    addChild(fooDogNode: FooDogNode): void;
    data?: Data;
    position?: Position;
    params?: any[];
    attrs_start?: Attribute[];
    attrs_end?: Attribute[];
}
export interface Mixin {
    call(...args: any[]): string;
    name?: string;
}
